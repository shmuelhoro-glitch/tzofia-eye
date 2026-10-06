import React, { useEffect, useState } from "react";
import AlertsMap from "../components/AlertsMap";
import type { MapAlert, AlertsMapProps } from "../components/AlertsMap";
import { getAllAlert, type Alert } from "../services/alerts.service";
import AlertsList from "../components/AlertsList";
import "./style/homePage.css"

const HomePage = () => {

  const [points, setPoints] = useState([]);

  useEffect(() => {
    const importList = async () => {
      const data:any = await getAllAlert();
      setPoints(data);
    };
    importList();
  }, []);

  return (
    <div className="map-and-list">
      <div className="alerts-list">
      <AlertsList />
      </div>
      <div className="map">
      <AlertsMap alerts={points} />
      </div>
    </div>
  );
};

export default HomePage;
