import { Schema, model } from 'mongoose'
import {
  IAcademinSemester,
  AcademicSemesterModel,
} from './academinSemester.interface'
import { code, month, title } from './academicSemester.constant'

const academicSemesterSchema = new Schema<IAcademinSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: title,
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: code,
    },
    startMonth: {
      type: String,
      required: true,
      enum: month,
    },
    endMonth: {
      type: String,
      required: true,
      enum: month,
    },
  },
  {
    timestamps: true,
  }
)

export const AcademicSemester = model<IAcademinSemester, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema
)
