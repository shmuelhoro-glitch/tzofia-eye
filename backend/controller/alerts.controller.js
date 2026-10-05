import { getAlertsById, getAllAlerts, insertNewAlert } from "../DAL/alerts.dal.js"
import { errorStructure } from "../tools/errorStructure.js"
import AlertSchema from "../schema/alerts.schema.js"


export async function getAll(req, res) {
    const result = await getAllAlerts()
    if (!result) {
        const err = errorStructure(404, "Empty list")
        throw err
    }
    res.send(result)
}


export async function getById(req, res) {
    const alertsId = req.params.id
    const result = await getAlertsById(alertsId)
    if (!result) {
        const err = errorStructure(404, "not found")
        throw err 
    }
    res.send(result)
}


export async function createNewAlert(req, res) {
    const body = AlertSchema.safeParse(req.body)
    if (!body.success) {
        return res.status(400).send(body.error.message)
    }
    const create = await insertNewAlert(body.data)
    res.status(201).send(create.toJSON())

}