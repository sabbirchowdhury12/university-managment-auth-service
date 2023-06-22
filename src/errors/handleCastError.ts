import httpStatus from 'http-status'
import { CastError } from 'mongoose'
import { IGenericErrorMessage } from '../interfaces/error'

const handleCastError = (error: CastError) => {
  const errors: IGenericErrorMessage[] = [
    {
      path: error.path,
      message: 'Invalid Id',
    },
  ]
  const statusCode = httpStatus.NOT_ACCEPTABLE
  return {
    statusCode,
    message: 'Cast Error',
    errorMessages: errors,
  }
}

export default handleCastError
