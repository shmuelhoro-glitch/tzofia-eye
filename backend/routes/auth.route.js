import { Router } from "express";
import { aboutMe, allUsers, deleteUser, login, register } from "../controller/auth.controller.js";
import { authentication } from "../middleware/authentication.middle.js";

const router = Router()

router.post('/login', login)

router.get('/me', authentication, aboutMe)

router.post('/register',authentication, register)

router.get('/users', authentication, allUsers)

router.delete('/users/:id', authentication, deleteUser)

export default router