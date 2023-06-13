import { IAcademinSemester } from './academinSemester.interface'
import { AcademicSemester } from './academinSemester.model'

const createSemester = async (
  payload: IAcademinSemester
): Promise<IAcademinSemester> => {
  const result = await AcademicSemester.create(payload)
  return result
}

export const AcademicSemesterService = {
  createSemester,
}
