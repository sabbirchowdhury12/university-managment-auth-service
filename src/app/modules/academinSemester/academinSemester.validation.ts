import { z } from 'zod'
import { code, month, title } from './academicSemester.constant'

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum(title, {
      required_error: 'title is required',
    }),
    year: z.number({
      required_error: 'year is required',
    }),
    code: z.enum(code, {
      required_error: 'code is required',
    }),
    startMonth: z.enum(month, {
      required_error: 'start month is required',
    }),
    endMonth: z.enum(month, {
      required_error: 'title is required',
    }),
  }),
})

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
}
