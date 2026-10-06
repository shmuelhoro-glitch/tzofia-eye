import { getColl } from "../db/db.js";


const COLL_NAME = "users"

export async function insertUser(userData) {
    const coll = await getColl(COLL_NAME)
    const insert = await coll.insertOne(userData)
    return insert
}

export async function getAllUsers() {
    const coll = await getColl(COLL_NAME)
    const result = await coll.find().toArray()
    return result
}

export async function getUserByEmail(email) {
    const coll = await getColl(COLL_NAME)
    const result = await coll.findOne({email})
    return result
}

export async function deleteUserById(id) {
    const coll = await getColl(COLL_NAME)
    const result = await coll.findOneAndDelete({_id})
    return result
}