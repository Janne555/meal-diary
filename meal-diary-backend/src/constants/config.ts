import { Config } from "../types/generated";
import env from "./env";

const CONFIG: Config & { name: string } = {
  name: `${env.APP_NAME}-config`,
  lastFineliUpdate: null
}

export default CONFIG