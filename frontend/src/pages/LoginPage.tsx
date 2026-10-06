import React, { useEffect, useState } from "react";
import { login } from "../services/users.service";
import { Link, Navigate } from "react-router";
import HomePage from "./HomePage";


const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [result, setResult] = useState("")
  const [access, setAccess] = useState<boolean>(false)


  const handleLogin = async () => {
    const res = await login(email, password)
    if (res.success){
      setResult("מעולה. אתה בדרך פנימה")
      setAccess(true)
      return <Navigate to="/home" />
    }
    setResult("משהו פה לא ממש עובד")

    
  };

  return (
    <>
      <div>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
      <button onClick={() => handleLogin}>כניסה</button>
      </div>
      <div>
        {result && result}
      </div>
    </>
  );
};

export default LoginPage;
