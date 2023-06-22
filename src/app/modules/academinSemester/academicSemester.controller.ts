import { paginationFields } from './../../../constant/pagination'
import { Request, Response } from 'express'
import { AcademicSemesterService } from './academicSemester.service'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendRespone'
import httpStatus from 'http-status'
import pick from '../../../shared/pick'
import { academicSemesterFilterableFields } from './academicSemester.constant'

const createSemester = catchAsync(async (req: Request, res: Response) => {
  const { ...semesterData } = req.body
  const result = await AcademicSemesterService.createSemester(semesterData)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'academic semister created created',
    data: result,
  })
})

const getAllSemesters = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, academicSemesterFilterableFields)
  // console.log(filters)
  const paginationOptions = pick(req.query, paginationFields)

  const result = await AcademicSemesterService.getAllSemesters(
    filters,
    paginationOptions
  )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'academic all semister retrived',
    meta: result.meta,
    data: result.data,
  })
})

const getSingleSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await AcademicSemesterService.getSingleSemester(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'academic semister retriverd created',
    data: result,
  })
})

const updateSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updateData = req.body
  const result = await AcademicSemesterService.updateSemester(id, updateData)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'academic semister  updated',
    data: result,
  })
})
const deleteSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await AcademicSemesterService.deleteSemester(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'academic semister  deleted',
    data: result,
  })
})

export const AcademicSemesterController = {
  createSemester,
  getAllSemesters,
  getSingleSemester,
  updateSemester,
  deleteSemester,
}
