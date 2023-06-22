import express, { Application, NextFunction, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import router from './app/router'
import httpStatus from 'http-status'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', router)
// app.use('/api/v1/users', UserRoutes)
// app.use('/api/v1', AcademicSemesterRoutes)

app.use(globalErrorHandler)

//handle not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.path,
        message: 'api not found',
      },
    ],
  })
  next()
})

export default app
