import { useEffect, useState } from "react";
import AlertsMap from "./components/AlertsMap";
import type { MapAlert, AlertsMapProps } from "./components/AlertsMap";
import { locationForMap } from "../services/api.service";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AlertsList from "./components/AlertsList";
import CreateNew from "./components/CreateNew";

function App() {
  const [allLocation, setAllLocation] = useState<MapAlert[]>([]);

  useEffect(() => {
    async function importLocations() {
      const locations: any = await locationForMap();
      setAllLocation(locations);
    }
    importLocations();
  }, []);

  return (
    <div className="app">
      <header>
        <Header />
      </header>
      <main>
        <AlertsMap alerts={allLocation.map((a) => ({ ...a, lon: a.lon, lat: a.lat }))} />
        <AlertsList />
        <CreateNew />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

