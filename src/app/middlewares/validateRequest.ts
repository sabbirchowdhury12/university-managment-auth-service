import { NextFunction, Request, Response } from 'express'
import { AnyZodObject, ZodEffects } from 'zod'

const validateRequest =
  (schema: AnyZodObject | ZodEffects<AnyZodObject>) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        cookies: req.body,
        params: req.params,
      })
      return next()
    } catch (err) {
      next(err)
    }
  }

export default validateRequest
