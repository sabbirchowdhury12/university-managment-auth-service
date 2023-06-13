import express, { Application } from 'express'
const app: Application = express()
import cors from 'cors'

import { UserRoutes } from './app/modules/user/user.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { AcademicSemesterRoutes } from './app/modules/academinSemester/academicSemester.route'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users', UserRoutes)
app.use('/api/v1', AcademicSemesterRoutes)

app.use(globalErrorHandler)

export default app
