import { Router } from "express";
import { createNewAlert, getAll, getById } from "../controller/alerts.controller.js";

const router = Router()

router.get('/alerts', getAll)

router.get('/alerts/:id', getById)

router.post('/alerts', createNewAlert)



export default router