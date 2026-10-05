import { Router } from "express";
import { createNewAlert, deleteAlertById, getAll, getById, updateAlertById } from "../controller/alerts.controller.js";

const router = Router()

router.get('/alerts', getAll)

router.get('/alerts/:id', getById)

router.post('/alerts', createNewAlert)

router.delete('/alerts/:id', deleteAlertById)

router.put('/alerts/:id', updateAlertById)



export default router