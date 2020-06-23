import { downloadRawFineliData, formatFineliData } from "../services";
import { DataSource } from "../types";

class FineliDownloadTask {
  private foodDataSource: DataSource.IFoodDataSource
  private configDataSource: DataSource.IConfigDataSource

  constructor(foodDataSource: DataSource.IFoodDataSource, configDataSource: DataSource.IConfigDataSource) {
    this.foodDataSource = foodDataSource;
    this.configDataSource = configDataSource;
  }

  async execute(): Promise<void> {
    if (await this.configDataSource.isFineliDataDownloaded()) {
      console.log("skipping fineli download")
      //TODO add logging here
      return
    }

    const rawFineliData = await downloadRawFineliData()
    const formattedFineliData = formatFineliData(rawFineliData)
    const operations = formattedFineliData.map(async food => {
      try {
        await this.foodDataSource.findOneAndUpdate({ foodid: food.foodid }, food, {
          upsert: true
        })
      } catch (error) {
        console.error(food, error)
        throw error
      }
    })

    await Promise.all(operations)

    await this.configDataSource.setFineliDataDownloaded(true)
  }
}

export default FineliDownloadTask