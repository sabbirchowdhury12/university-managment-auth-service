import { config } from 'dotenv'
import path from 'path'
config({ path: path.join(process.cwd(), '.env') })

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.MONGOOSE_URL,
  default_user_password: process.env.DEFAULT_USER_PASSWORD,
}
