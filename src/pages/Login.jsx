import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [user, setuser] = useState("")
  const [password,setPassword]=useState("")
  const {isAuth,login}=useContext(AuthContext)
  const handleLogin=()=>{
    login(user,password)
  }
  return (
    <div>
      <input data-cy="login-email" onChange={(e)=>setuser(e.target.value)} />
      <input data-cy="login-password" onChange={(e)=>setPassword(e.target.value)} />
      <button data-cy="login-submit" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
