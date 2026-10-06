import { Router } from "express";
import { aboutMe, login, register } from "../controller/auth.controller.js";
import { authentication } from "../middleware/authentication.middle.js";

const router = Router()

router.post('/login', login)

router.get('/me', authentication, aboutMe)

router.post('/register',authentication, register)

// router.get('/users')

// router.delete('/users/:id')

export default router