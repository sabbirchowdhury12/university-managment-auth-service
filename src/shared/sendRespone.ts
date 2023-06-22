import { Response } from 'express'

type IResponseType<T> = {
  statusCode: number
  success: boolean
  message?: string | null
  meta?: {
    page: number
    limit: number
    total: number
  } | null
  data?: T | null
}
const sendResponse = <T>(res: Response, data: IResponseType<T>): void => {
  const responseData: IResponseType<T> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message || null,
    meta: data.meta || null,
    data: data.data || null,
  }
  res.status(data.statusCode).json(responseData)
}

export default sendResponse
