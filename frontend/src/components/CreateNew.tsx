import React, { useRef, useState } from "react";
import "./style/createNew.css";
import { type Priority, type Arena, type Status, createNewAlert } from "../services/api.service";

const CreateNew = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [priority, setPriority] = useState<Priority>();
  const [arena, setArena] = useState<Arena>();
  const [status, setStatus] = useState<Status>();
  const [lon, setLon] = useState<number>();
  const [lat, setLat] = useState<number>();

  const arenaRef = useRef("Center");

  const handleSubmit = async () => {
    const data = { displayName: name, description, priority, arena, status, lon, lat };
    const send = await createNewAlert(data);
    return;
  };

  return (
    <div className="create-new">
      <label htmlFor="displayName">שם או תיאור קצר של ההתראה</label>
      <input
        type="text"
        name="displayName"
        id="displayName"
        placeholder="שם ההתראה"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="description">תיאור מפורט של ההתראה </label>
      <input
        type="text"
        name="description"
        id="description"
        placeholder="תיאור"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="priority">בחר רמת דחיפות</label>
      <select name="priority" id="priority" onSelectCapture={(e) => setPriority(e.currentTarget.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="Critical">Critical</option>
      </select>

      <label htmlFor="arena">באיזה אזור?</label>
      <select name="arena" id="arena" onSelect={(e) => setArena(e.currentTarget.id)}>
        <option value="North" id="North">
          North
        </option>
        <option value="South" id="South">
          South
        </option>
        <option value="Center" id="Center">
          Center
        </option>
      </select>

      <label htmlFor="status">בחר סטטוס</label>
      <select name="status" id="status">
        <option value="Active">Active</option>
        <option value="Handled">Handled</option>
      </select>

      <label htmlFor="lon">קו אורך</label>
      <input
        type="number"
        name="lon"
        id="lon"
        placeholder="קו אורך (lon)"
        value={lon ? lon : ""}
        onChange={(e) => setLon(e.target.valueAsNumber)}
      />
      <label htmlFor="lat">קו רוחב</label>
      <input
        type="number"
        name="lat"
        id="lat"
        placeholder="קו רוחב (lat)"
        value={lat ? lat : ""}
        onChange={(e) => setLat(e.target.valueAsNumber)}
      />

      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        הוסף התראה
      </button>
    </div>
  );
};

export default CreateNew;
