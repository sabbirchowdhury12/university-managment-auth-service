import { Model } from 'mongoose'

export type IAcademicSemesterMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December'

export type IAcademicSemesterTitle = 'Autumn' | 'Summer' | 'Fall'
export type IAcademicSemesterCode = '01' | '02' | '03'

export type IAcademinSemester = {
  title: IAcademicSemesterTitle
  year: number
  code: IAcademicSemesterCode
  startMonth: IAcademicSemesterMonth
  endMonth: IAcademicSemesterMonth
}

export type AcademicSemesterModel = Model<IAcademinSemester>

export type IAcademicSemesterFilters = {
  searchTerm?: string
}
