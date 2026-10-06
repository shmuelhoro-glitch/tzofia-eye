import { useEffect, useState } from "react";
import type { MapAlert, AlertsMapProps } from "./components/AlertsMap";
import { getAllAlert, locationForMap, type Alert } from "./services/alerts.service";
import "./App.css";
import { Outlet, Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminPage from "./pages/AdminPage";

function App() {
  // const [allLocation, setAllLocation] = useState<MapAlert[]>([]);
  // const [userData, setUserData] = useState()

  // useEffect(() => {
  //   async function importLocations() {
  //     const locations: any = await locationForMap();
  //     setAllLocation(locations);
  //   }
  //   importLocations();
  // }, []);

    const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    const importList = async () => {
      const data = await getAllAlert();
      setAlerts(data);
    };
    importList();
  }, []);

  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/admin" element={<AdminPage />}/>
        </Routes>
        <Footer />
    </>
  );
}

export default App;
