import api from "./axiosConfig";
import type { MapAlert } from "../components/AlertsMap";

export type Priority = "Low" | "Medium" | "High" | "Critical";
export type Arena = "North" | "South" | "Center";
export type Status = "Active" | "Handled";

export interface Alert {
  _id?: string;
  displayName: string;
  description: string;
  priority: Priority;
  arena: Arena;
  status: Status;
  lon: number;
  lat: number;
}

export async function getAllAlert() {
  const response = await api.get<Alert[]>("/alerts");
  return response.data;
}

export async function locationForMap() {
  try {
    const locList = [];
    const response = await getAllAlert();
    for (const l of response) {
      const location = { _id: l._id, displayName: l.displayName, priority: l.priority, lon: l.lon, lat: l.lat };
      locList.push(location);
    }
    return locList;
  } catch (err) {
    console.error(err);
    return;
  }
}

export async function createNewAlert(data: Alert) {
  const { displayName, description, priority = "Medium", arena, status = "Active", lon, lat } = data;
  const req = await api.post("/alerts", { displayName, description, priority, arena, status, lon, lat });
  return req.status;
}
