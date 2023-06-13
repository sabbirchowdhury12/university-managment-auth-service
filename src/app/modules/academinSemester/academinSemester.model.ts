import { Schema, model } from 'mongoose'
import {
  IAcademinSemester,
  AcademicSemesterModel,
} from './academinSemester.interface'
import {
  academicSemesterCode,
  academicSemesterMonth,
  academicSemesterTitle,
} from './academicSemester.constant'
import ApiError from '../../../errors/ApiError'
import status from 'http-status'

const academicSemesterSchema = new Schema<IAcademinSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: academicSemesterTitle,
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemesterCode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonth,
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonth,
    },
  },
  {
    timestamps: true,
  }
)

academicSemesterSchema.pre('save', async function (next) {
  const isExit = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  })

  if (isExit) {
    throw new ApiError(status.CONFLICT, 'academic semester already exit !')
  }
  next()
})

export const AcademicSemester = model<IAcademinSemester, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema
)
