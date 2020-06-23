import supertest from 'supertest'
import { app } from '../src/express/server'
import mongoose from 'mongoose'
import { env } from '../src/constants'
import { FoodDataSource } from '../src/datasources'
import { token } from '../setupTests'

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

    console.log(await ds.getFoods())
  })

  afterEach(async () => {
    const { collections } = mongoose.connection
    await Promise.all(
      Object.values(collections).map(async collection => {
        try {
          await collection.drop()
        } catch (error) {
          console.error(error)
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
});
