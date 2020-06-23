import { DataSource } from '../types'
import { CONFIG } from '../constants';
import { ConfigModel } from '../mongodb';
import { Config } from '../types/generated';

class ConfigDataSource implements DataSource.IConfigDataSource {
  async getConfig(): Promise<Config> {
    const configDoc = await ConfigModel.findOne({ name: CONFIG.name }).exec()
    if (configDoc) {
      return {
        ...CONFIG,
        ...configDoc.toClient()
      }
    } else {
      return CONFIG
    }
  }

  async isFineliDataDownloaded(): Promise<boolean> {
    const config = await this.getConfig()
    return config.lastFineliUpdate != null
  }

  async setFineliDataDownloaded(value: boolean): Promise<Config> {
    return this.updateConfig({ lastFineliUpdate: value ? new Date() : null })
  }

  async updateConfig(params: Partial<Config>): Promise<Config> {
    await ConfigModel.findOneAndUpdate({ name: CONFIG.name }, params, {
      upsert: true
    })

    return this.getConfig()
  }

}

export default ConfigDataSource