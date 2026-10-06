import { useEffect, useState } from "react";
import { getAllAlert, type Alert } from "../services/alerts.service";

const AlertsList = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    const importList = async () => {
      const data = await getAllAlert();
      setAlerts(data);
    };
    importList();
  }, []);

  return (
    <div>
      <ul className="cards-list">
        {alerts?.map((a) => (
          <li key={a._id} className="card-alerts" dir="rtl">
            <h2>רמת דחיפות: {a.priority}</h2>
            <h3>
              שם תצוגה: <span>{a.displayName}</span>
            </h3>
            <h4>
              תיאור האירוע: <span>{a.description}</span>
            </h4>
            <p>
              זירה: <span>{a.arena}</span>
            </p>
            <p>סטטוס: {a.status}</p>
            <p>קו אורך: {a.lon}</p>
            <p>קו רוחב: {a.lat}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlertsList;
