import fs from 'fs'
import AdmZip from 'adm-zip'
import https from 'https'
import papa from 'papaparse'
import { Fineli } from '../types'
import { FINELI_DATA_ZIP_URL, FINELI_REQUIRED_FILES } from '../constants/fineli'
import { Food } from "../types/generated"
import iconv from 'iconv-lite'

type ReadResult = Promise<{ data: Buffer, entry: AdmZip.IZipEntry }>
type ParseResult = Promise<{ result: papa.ParseResult<Record<string, string>>, entry: AdmZip.IZipEntry }>
type DecodeResult = Promise<{
  data: string
  entry: AdmZip.IZipEntry
}>

const FILENAME = "fineli.zip"

function formatFineliData(rawFineliData: Fineli.ParsedFineliFoodItem[]): Partial<Food>[] {
  return rawFineliData.map(food => {
    function numberOrNull(key: keyof Omit<Fineli.ParsedFineliFoodItem, 'name'>): number | null {
      const value = food[key]
      return value != null ? Number(value.replace(/,/, ".")) : null
    }

    return {
      name: {
        en: food.name.en ?? null,
        fi: food.name.fi ?? null
      },
      owner: "Fineli",
      foodid: food.foodid,
      enerc: numberOrNull("enerc"),
      fat: numberOrNull("fat"),
      choavl: numberOrNull("choavl"),
      prot: numberOrNull("prot"),
      alc: numberOrNull("alc"),
      oa: numberOrNull("oa"),
      sugoh: numberOrNull("sugoh"),
      sugar: numberOrNull("sugar"),
      frus: numberOrNull("frus"),
      gals: numberOrNull("gals"),
      glus: numberOrNull("glus"),
      lacs: numberOrNull("lacs"),
      mals: numberOrNull("mals"),
      sucs: numberOrNull("sucs"),
      starch: numberOrNull("starch"),
      fibc: numberOrNull("fibc"),
      fibins: numberOrNull("fibins"),
      psacncs: numberOrNull("psacncs"),
      fol: numberOrNull("fol"),
      niaeq: numberOrNull("niaeq"),
      nia: numberOrNull("nia"),
      vitpyrid: numberOrNull("vitpyrid"),
      ribf: numberOrNull("ribf"),
      thia: numberOrNull("thia"),
      vita: numberOrNull("vita"),
      carotens: numberOrNull("carotens"),
      vitb12: numberOrNull("vitb12"),
      vitc: numberOrNull("vitc"),
      vitd: numberOrNull("vitd"),
      vite: numberOrNull("vite"),
      vitk: numberOrNull("vitk"),
      ca: numberOrNull("ca"),
      fe: numberOrNull("fe"),
      iod: numberOrNull("id"),
      k: numberOrNull("k"),
      mg: numberOrNull("mg"),
      na: numberOrNull("na"),
      nacl: numberOrNull("nacl"),
      p: numberOrNull("p"),
      se: numberOrNull("se"),
      zn: numberOrNull("zn"),
      fafre: numberOrNull("fafre"),
      fapu: numberOrNull("fapu"),
      famcis: numberOrNull("famcis"),
      fasat: numberOrNull("fasat"),
      fatrn: numberOrNull("fatrn"),
      fapun3: numberOrNull("fapun3"),
      fapun6: numberOrNull("fapun6"),
      f18d2cn6: numberOrNull("f18d2cn6"),
      f18d3n3: numberOrNull("f18d3n3"),
      f20d5n3: numberOrNull("f20d5n3"),
      f22d6n3: numberOrNull("f22d6n3"),
      chole: numberOrNull("chole"),
      stert: numberOrNull("stert"),
      trp: numberOrNull("trp"),
    }
  })
}

function downloadRawFineliData(useFileIfFound?: true): Promise<Fineli.ParsedFineliFoodItem[]> {
  return new Promise((resolve, reject) => {
    const handleFinish = async () => {
      const fineliData = await parseZipFile()
      resolve(fineliData)
    }

    const handleError = (error: Error) => {
      reject(error)
      fs.unlink(FILENAME, err => {
        if (err) {
          console.error(err)
        }
      })
    }

    if (useFileIfFound && fs.existsSync(FILENAME)) {
      parseZipFile().then(resolve)
    } else {
      const writeStream = fs.createWriteStream(FILENAME)
      writeStream.on('finish', handleFinish)

      https.get(FINELI_DATA_ZIP_URL, res => res.pipe(writeStream))
        .on('error', handleError)
    }
  })

  async function parseZipFile(): Promise<Fineli.ParsedFineliFoodItem[]> {
    const zip = new AdmZip(FILENAME)
    const jsonPromises = zip.getEntries()
      .filter(onlyRequiredFiles)
      .map(toBuffersAsync)
      .map(toUtf8StringsAsync)
      .map(toJSONAsync)

    const jsonArray = await Promise.all(jsonPromises)
    const { component_value, foodname_EN, foodname_FI } = Object.fromEntries(FINELI_REQUIRED_FILES.map(fileName => [fileName, jsonArray.find(({ entry: { entryName } }) => `${fileName}.csv` === entryName)]))
    const buckets: Record<string, Fineli.ParsedFineliFoodItem> = {}
    foodname_EN?.result.data.forEach(({ foodid, foodname }) => buckets[foodid] = { foodid, name: { en: foodname } })
    foodname_FI?.result.data.forEach(({ foodid, foodname }) => buckets[foodid].name.fi = foodname)
    component_value?.result.data.forEach(({ foodid, eufdname, bestloc }) => buckets[foodid][eufdname as keyof Fineli.ParsedFineliFoodItem] = bestloc)


    return Object.values(buckets).filter(food => food.foodid)

    async function toJSONAsync(decodeResult: DecodeResult): ParseResult {
      const { data, entry } = await decodeResult
      return new Promise((resolve, reject) => {
        papa.parse<Record<string, string>>(data, {
          header: true,
          complete: result => {
            resolve({ result, entry })
          },
          error: reject,
          transformHeader: header => header.toLowerCase(),
          transform: value => value.toLowerCase(),
        })
      })
    }

    async function toUtf8StringsAsync(fileReadResult: ReadResult): DecodeResult {
      const { data, entry } = await fileReadResult
      const string = iconv.decode(data, "ISO-8859-15")
      return {
        data: string,
        entry
      }
    }

    function toBuffersAsync(entry: AdmZip.IZipEntry): ReadResult {
      return new Promise((resolve, reject) => {
        zip.readFileAsync(entry, (data, err) => {
          if (!data) {
            reject(err)
          } else {
            resolve({ data, entry })
          }
        })
      })
    }

    function onlyRequiredFiles({ entryName }: AdmZip.IZipEntry): boolean {
      return FINELI_REQUIRED_FILES.some(fileName => `${fileName}.csv` === entryName)
    }
  }
}

export {
  formatFineliData,
  downloadRawFineliData
}