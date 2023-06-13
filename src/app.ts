import express, { Application } from 'express'
const app: Application = express()
import cors from 'cors'

import { UserRoutes } from './app/modules/user/user.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users', UserRoutes)

app.use(globalErrorHandler)

export default app
