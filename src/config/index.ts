import { config } from 'dotenv'
import path from 'path'
config({ path: path.join(process.cwd(), '.env') })

export default {
  port: process.env.PORT,
  database_url: process.env.MONGOOSE_URL,
}
