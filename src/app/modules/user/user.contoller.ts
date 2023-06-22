import { Request, Response } from 'express'
import { UserService } from './user.service'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendRespone'
import httpStatus from 'http-status'

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { user } = req.body
  const result = await UserService.createdUser(user)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user created',
    data: result,
  })
})

// res.status(400).json({
// error: err,
// success: false,
// message: 'failed to create user',
// })

export const UserController = {
  createUser,
}
