import { Router } from "express";
import { createNewAlert, deleteAlertById, getAll, getById, updateAlertById } from "../controller/alerts.controller.js";
import { authentication } from "../middleware/authentication.middle.js";

const router = Router()

router.use(authentication)

router.get('/', getAll)

router.get('/:id', getById)

router.post('/', createNewAlert)

router.delete('/:id', deleteAlertById)

router.put('/:id', updateAlertById)



export default router