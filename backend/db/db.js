import "dotenv/config"
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI)


export async function getColl(collName) {
    await client.connect()
    const db = client.db(process.env.DB_NAME)
    const coll = db.collection(collName)
    return coll
}


export async function disconnect() {
    await client.close()
    return
}