import { getAlertsById, getAllAlerts, insertNewAlert, deleteAlert, updateAlert } from "../DAL/alerts.dal.js"
import { errorStructure } from "../tools/errorStructure.js"
import AlertSchema, { UpdateAlert } from "../schema/alerts.schema.js"


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
    try {
    const body = AlertSchema.safeParse(req.body)
    if (!body.success) {
        return res.status(400).send(body.error.message)
    }
    const create = await insertNewAlert(body.data)
    res.status(201).send(create.toJSON())
} catch (err) {
    return res.status(400).send(err.message || "Invalid request")
}

}


export async function deleteAlertById(req, res) {
    const alertId = req.params.id
    const deleted = await deleteAlert(alertId)
    if (!deleted) {
        return res.status(404).send("The event did not exist in the system.")
    }
    res.send("The event was successfully deleted.")
}


export async function updateAlertById(req, res) {
    const alertId = req.params.id
    const body = UpdateAlert.parse(req.body)
    const update = await updateAlert(alertId, body)
    if (!update || !update._id){
        return res.status(500).send("Error updating data")
    }
    const forReturn = Object.assign({...update},{...body})
    res.send(forReturn)
    
}