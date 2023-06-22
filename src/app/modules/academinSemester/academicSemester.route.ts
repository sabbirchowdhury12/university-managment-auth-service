import express from 'express'
import { AcademicSemesterValidation } from './academinSemester.validation'
import validateRequest from '../../middlewares/validateRequest'
import { AcademicSemesterController } from './academicSemester.controller'
const router = express.Router()

router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicSemesterController.createSemester
)

router.get('/', AcademicSemesterController.getAllSemesters)
router.get('/:id', AcademicSemesterController.getSingleSemester)
router.delete('/:id', AcademicSemesterController.deleteSemester)
router.patch(
  '/:id',
  validateRequest(AcademicSemesterValidation.updateAcademicSemesterZodSchema),
  AcademicSemesterController.updateSemester
)

export const AcademicSemesterRoutes = router
