import { z } from 'zod'

//zod validaion
const createUserZodSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: 'role is required',
    }),
  }),
})

// await createUserZodSchema.parseAsync(req)

export const UserValidation = {
  createUserZodSchema,
}
