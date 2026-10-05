import axios from "axios"
import type { MapAlert } from "../src/components/AlertsMap"

export type Priority = "Low" | "Medium" | "High" | "Critical"
export type Arena = "North" | "South" | "Center"
export type Status = "Active" | "Handled"

interface Alert {
    _id?: string
    displayName: string
    description: string
    priority: Priority
    arena: Arena
    status: Status
    lon: number
    lat: number
}

export async function getAllAlert(){
    const response = await axios.get<Alert[]>("http://localhost:3001/api/alerts")
    return response.data
}



export async function locationForMap(){
    try {
    const locList = []
    const response = await getAllAlert()
    for (const l of response){
        const location =  {_id: l._id,  displayName: l.displayName, priority: l.priority, lon: l.lon, lat: l.lat}
        locList.push(location)
    }
    return locList
    } catch (err) {
        console.error(err)
        return
    }
}


export async function createNewAlert(data:Alert){
    const req = await axios.post("http://localhost:3001/api/alerts", {
    ...data
    })
    return req.status
}

