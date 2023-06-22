import httpStatus from 'http-status'
import ApiError from '../../../errors/ApiError'
import {
  academicSemesterSearchableFields,
  academicSemesterTitleCodeMapper,
} from './academicSemester.constant'
import {
  IAcademicSemesterFilters,
  IAcademinSemester,
} from './academinSemester.interface'
import { AcademicSemester } from './academinSemester.model'
import { IPaginationOptions } from '../../../interfaces/pagination'
import { paginationHelpers } from '../../../helpers/paginationHelper'
import { SortOrder } from 'mongoose'
import { IGenericResponse } from '../../../interfaces/common'

const createSemester = async (
  payload: IAcademinSemester
): Promise<IAcademinSemester> => {
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid code')
  }
  const result = await AcademicSemester.create(payload)
  return result
}

const getAllSemesters = async (
  filters: IAcademicSemesterFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IAcademinSemester[]>> => {
  const { searchTerm, ...filtersData } = filters

  const andConditions = []

  if (searchTerm) {
    andConditions.push({
      $or: academicSemesterSearchableFields.map(element => ({
        [element]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    })
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    })
  }

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions)

  const sortConditions: { [key: string]: SortOrder } = {}

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder
  }

  const total = await AcademicSemester.countDocuments()

  const whereConditon = andConditions.length > 0 ? { $and: andConditions } : {}
  const result = await AcademicSemester.find(whereConditon)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit)

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  }
}

const updateSemester = async (
  id: string,
  payload: Partial<IAcademinSemester>
): Promise<IAcademinSemester | null> => {
  if (
    payload.title &&
    payload.code &&
    academicSemesterTitleCodeMapper[payload.title] !== payload.code
  ) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid code')
  }
  const result = await AcademicSemester.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}
const getSingleSemester = async (
  id: string
): Promise<IAcademinSemester | null> => {
  const result = await AcademicSemester.findById(id)
  return result
}
const deleteSemester = async (
  id: string
): Promise<IAcademinSemester | null> => {
  const result = await AcademicSemester.findByIdAndDelete(id)
  return result
}

export const AcademicSemesterService = {
  createSemester,
  getAllSemesters,
  getSingleSemester,
  updateSemester,
  deleteSemester,
}
