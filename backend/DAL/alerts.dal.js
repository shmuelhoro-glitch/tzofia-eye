import { ObjectId } from "mongodb";
import { getColl } from "../db/db.js";
import { object } from "zod";

const COLL_NAME = "alerts"

export async function getAllAlerts() {
    const coll = await getColl(COLL_NAME)
    const all = await coll.find().toArray()
    return all
}


export async function getAlertsById(alertsId) {
    const coll = await getColl(COLL_NAME)
    const _id = new ObjectId(alertsId)
    const found = await coll.findOne({_id})
    return found
}


export async function insertNewAlert(alertData) {
    const coll = await getColl(COLL_NAME)
    const added = await coll.insertOne(alertData)
    return added.insertedId
}

export async function deleteAlert(alertsId) {
    const coll = await getColl(COLL_NAME)
    const _id = new ObjectId(alertsId)
    const deleted = await coll.findOneAndDelete({_id})
    return deleted
}

export async function updateAlert(alertsId,dataForUpdate) {
    const coll = await getColl(COLL_NAME)
    const _id = new ObjectId(alertsId)
    const updated = await coll.findOneAndUpdate({_id}, {$set:{...dataForUpdate}})
    return updated
}