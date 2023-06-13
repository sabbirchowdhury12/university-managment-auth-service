import { RequestHandler } from 'express'
import { UserService } from './user.service'

const createUser: RequestHandler = async (req, res, next) => {
  try {
    const { user } = req.body
    const result = await UserService.createdUser(user)
    res.status(200).json({
      success: true,
      message: 'user created',
      data: result,
    })
  } catch (err) {
    next(err)
    // res.status(400).json({
    // error: err,
    // success: false,
    // message: 'failed to create user',
    // })
  }
}

export const UserController = {
  createUser,
}
