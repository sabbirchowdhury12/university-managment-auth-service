import config from '../../../config'
import ApiError from '../../../errors/ApiError'
import { IUser } from './user.interface'
import User from './user.model'
import { generatedUserId } from './user.utiles'

const createdUser = async (user: IUser): Promise<IUser | null> => {
  //default password
  if (!user.password) {
    user.password = config.default_user_password as string
  }

  //generate id
  const id = await generatedUserId()
  user.id = id

  const createdUser = await User.create(user)

  if (!createdUser) {
    throw new ApiError(400, 'Failed to create user')
  }

  return createdUser
}

export const UserService = {
  createdUser,
}
