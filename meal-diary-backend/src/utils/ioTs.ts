import * as t from 'io-ts'

const FineliFoodItem = t.type({
  id: t.number,
  name: t.type({
    fi: t.string,
    en: t.string
  }),
  ediblePortion: t.number,
  energy: t.number,
  energyKcal: t.number,
  fat: t.number,
  protein: t.number,
  carbohydrate: t.number,
  sugar: t.number,
  fiber: t.number,
  salt: t.number
})

export {
  FineliFoodItem
}