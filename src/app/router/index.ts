import express from 'express'
import { UserRoutes } from '../modules/user/user.route'
import { AcademicSemesterRoutes } from '../modules/academinSemester/academicSemester.route'
import { FacultyRoutes } from '../modules/academicFaculty/academicFaculty.route'
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route'
const router = express.Router()

router.use('/users', UserRoutes)
router.use('/acdemic-semesters', AcademicSemesterRoutes)
router.use('/faculties', FacultyRoutes)
router.use('/academic-departments', AcademicDepartmentRoutes)

export default router
