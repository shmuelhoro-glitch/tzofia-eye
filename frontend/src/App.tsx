import { useEffect, useState } from 'react'
import AlertsMap from './components/AlertsMap'
import type { MapAlert, AlertsMapProps } from './components/AlertsMap'
import {getAllAlerts} from "../services/api.service"
import './App.css'



function App() {

  const [alerts, setAlerts] = useState<MapAlert[]>([])

  useEffect(() => {
    const loadAlerts = async () => {
      const data = await getAllAlerts()
      setAlerts(data)
    }
    loadAlerts()
  },[])


  return (
    <>
     <AlertsMap alerts={alerts.map((alert) => ({...alert, lon: alert.lon, lat: alert.lat}))}/>
    </>
  )
}

export default App
