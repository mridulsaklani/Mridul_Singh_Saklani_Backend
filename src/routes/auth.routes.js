import express from "express"
import {userRegistration} from "../controllers/auth.controller.js"

import {upload} from '../middlewares/multer.middleware.js'
import validate from "../middlewares/validator.middleware.js"
import {userRegisterSchema} from "../requestSchemas/auth.schema.js"

const router = express.Router()




router.route('/register').post(validate(userRegisterSchema),   upload.single('avatar'), userRegistration)

export default router