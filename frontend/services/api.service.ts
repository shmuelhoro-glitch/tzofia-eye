import axios from "axios"

type Priority = "Low" | "Medium" | "High" | "Critical"
type Arena = "North" | "South" | "Center"
type Status = "Active" | "Handled"

interface Alert {
    _id: string
    displayName: string
    description: string
    priority: Priority
    arena: Arena
    status: Status
    lon: number
    lat: number
}

export async function getAllAlerts(){
    try {
    const response = await axios.get<Alert[]>("http://localhost:3001/api/alerts")
    return response.data
    } catch (err) {
        console.error(err.message)
        return
    }
}
