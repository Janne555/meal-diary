import supertest from 'supertest'
import { app } from '../src/express'
import mongoose from 'mongoose'
import { env } from '../src/constants'
import { FoodDataSource } from '../src/datasources'
import { token, testSecret, testUser } from '../setupTests'
import jwt from 'jsonwebtoken'

beforeAll(async () => {
  mongoose.set('useNewUrlParser', true)
  mongoose.set('useFindAndModify', false)
  mongoose.set('useCreateIndex', true)
  mongoose.set('useUnifiedTopology', true)
  await mongoose.connect(`${env.MONGO_URI.replace("<dbname>", env.APP_NAME)}`, { connectTimeoutMS: 500 }, err => err && console.error(err))
})

afterAll(async () => {
  await Promise.all(mongoose.connections.map(conn => conn.close()))
})

describe('smoke test', () => {
  beforeEach(async () => {
    const ds = new FoodDataSource({ sub: "Fineli" })
    await ds.addFood({
      name: { fi: "munkki", en: "donut" }
    })
  })

  afterEach(async () => {
    const { collections } = mongoose.connection
    await Promise.all(
      Object.values(collections).map(async collection => {
        try {
          await collection.drop()
        } catch (error) {
          // console.error(error)
        }
      })
    )
  })

  it('should get foods', async () => {
    const res = await supertest(app)
      .post("/graphql")
      .set('Authorization', `Bearer ${token}`)
      .send({
        query: `
          query {
            foods {
              name {
                fi
              }
            }
          }
    `})

    expect(res.body).toEqual({
      data: {
        foods: [
          {
            name: {
              fi: "munkki"
            }
          }
        ]
      }
    })

    expect(res.status).toEqual(200)
  });

  describe('without permissions', () => {
    it('should fail to get config', async () => {
      const res = await supertest(app)
        .post("/graphql")
        .set('Authorization', `Bearer ${token}`)
        .send({
          query: `
          query {
            config {
              lastFineliUpdate
            }
          }
      `})

      expect(res.body.data).toBeNull()
      expect(res.body.errors[0].message).toEqual("Not authorized. Action requires permissions read:config")
      expect(res.status).toEqual(200)
    });
  });

  describe('with permissions', () => {
    const tokenWithPermissions = jwt.sign({ ...testUser, permissions: ["read:config"] }, testSecret)

    it('should get config', async () => {
      const res = await supertest(app)
        .post("/graphql")
        .set('Authorization', `Bearer ${tokenWithPermissions}`)
        .send({
          query: `
          query {
            config {
              lastFineliUpdate
            }
          }
      `})

      expect(res.body).toEqual({
        data: {
          config: {
            lastFineliUpdate: null
          }
        }
      })
      expect(res.status).toEqual(200)
    });
  });

});