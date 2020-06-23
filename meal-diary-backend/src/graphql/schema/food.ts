import { gql } from "apollo-server";

const foodSchema = gql`
  type FoodName @entity(embedded: true) {
    en: String @column
    fi: String @column
  }

  type Food @entity {
    id: ID! @id
    name: FoodName! @embedded
    enerc: Float @column
    fat: Float @column
    choavl: Float @column
    prot: Float @column
    alc: Float @column
    oa: Float @column
    sugoh: Float @column
    sugar: Float @column
    frus: Float @column
    gals: Float @column
    glus: Float @column
    lacs: Float @column
    mals: Float @column
    sucs: Float @column
    starch: Float @column
    fibc: Float @column
    fibins: Float @column
    psacncs: Float @column
    fol: Float @column
    niaeq: Float @column
    nia: Float @column
    vitpyrid: Float @column
    ribf: Float @column
    thia: Float @column
    vita: Float @column
    carotens: Float @column
    vitb12: Float @column
    vitc: Float @column
    vitd: Float @column
    vite: Float @column
    vitk: Float @column
    ca: Float @column
    fe: Float @column
    #renamed from id
    iod: Float @column
    k: Float @column
    mg: Float @column
    na: Float @column
    nacl: Float @column
    p: Float @column
    se: Float @column
    zn: Float @column
    fafre: Float @column
    fapu: Float @column
    famcis: Float @column
    fasat: Float @column
    fatrn: Float @column
    fapun3: Float @column
    fapun6: Float @column
    f18d2cn6: Float @column
    f18d3n3: Float @column
    f20d5n3: Float @column
    f22d6n3: Float @column
    chole: Float @column
    stert: Float @column
    trp: Float @column
    foodid: String @column
  }

  input FoodInput {
    name: FoodNameInput!
    enerc: Float
    fat: Float
    choavl: Float
    prot: Float
    alc: Float
    oa: Float
    sugoh: Float
    sugar: Float
    frus: Float
    gals: Float
    glus: Float
    lacs: Float
    mals: Float
    sucs: Float
    starch: Float
    fibc: Float
    fibins: Float
    psacncs: Float
    fol: Float
    niaeq: Float
    nia: Float
    vitpyrid: Float
    ribf: Float
    thia: Float
    vita: Float
    carotens: Float
    vitb12: Float
    vitc: Float
    vitd: Float
    vite: Float
    vitk: Float
    ca: Float
    fe: Float
    iod: Float
    k: Float
    mg: Float
    na: Float
    nacl: Float
    p: Float
    se: Float
    zn: Float
    fafre: Float
    fapu: Float
    famcis: Float
    fasat: Float
    fatrn: Float
    fapun3: Float
    fapun6: Float
    f18d2cn6: Float
    f18d3n3: Float
    f20d5n3: Float
    f22d6n3: Float
    chole: Float
    stert: Float
    trp: Float
  }

  input FoodNameInput {
    en: String
    fi: String
  }

  input FoodSearchInput {
    name: FoodNameSearchInput
    enerc: [SearchFloatInput!]
    fat: [SearchFloatInput!]
    choavl: [SearchFloatInput!]
    prot: [SearchFloatInput!]
    alc: [SearchFloatInput!]
    oa: [SearchFloatInput!]
    sugoh: [SearchFloatInput!]
    sugar: [SearchFloatInput!]
    frus: [SearchFloatInput!]
    gals: [SearchFloatInput!]
    glus: [SearchFloatInput!]
    lacs: [SearchFloatInput!]
    mals: [SearchFloatInput!]
    sucs: [SearchFloatInput!]
    starch: [SearchFloatInput!]
    fibc: [SearchFloatInput!]
    fibins: [SearchFloatInput!]
    psacncs: [SearchFloatInput!]
    fol: [SearchFloatInput!]
    niaeq: [SearchFloatInput!]
    nia: [SearchFloatInput!]
    vitpyrid: [SearchFloatInput!]
    ribf: [SearchFloatInput!]
    thia: [SearchFloatInput!]
    vita: [SearchFloatInput!]
    carotens: [SearchFloatInput!]
    vitb12: [SearchFloatInput!]
    vitc: [SearchFloatInput!]
    vitd: [SearchFloatInput!]
    vite: [SearchFloatInput!]
    vitk: [SearchFloatInput!]
    ca: [SearchFloatInput!]
    fe: [SearchFloatInput!]
    iod: [SearchFloatInput!]
    k: [SearchFloatInput!]
    mg: [SearchFloatInput!]
    na: [SearchFloatInput!]
    nacl: [SearchFloatInput!]
    p: [SearchFloatInput!]
    se: [SearchFloatInput!]
    zn: [SearchFloatInput!]
    fafre: [SearchFloatInput!]
    fapu: [SearchFloatInput!]
    famcis: [SearchFloatInput!]
    fasat: [SearchFloatInput!]
    fatrn: [SearchFloatInput!]
    fapun3: [SearchFloatInput!]
    fapun6: [SearchFloatInput!]
    f18d2cn6: [SearchFloatInput!]
    f18d3n3: [SearchFloatInput!]
    f20d5n3: [SearchFloatInput!]
    f22d6n3: [SearchFloatInput!]
    chole: [SearchFloatInput!]
    stert: [SearchFloatInput!]
    trp: [SearchFloatInput!]
  }

  input FoodNameSearchInput {
    en: SearchStringInput
    fi: SearchStringInput
  }
`

export default foodSchema