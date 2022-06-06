import React, { createContext,useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(false)
  const navigate=useNavigate()
  const login=(user,password)=>{
    if(user!=""&&password!=""){
   setAuth(true)
   navigate("/products")
   }
  else{
    alert("Please fill the details")
  }

  }
  const logout=()=>{
    setAuth(false)
    navigate("/login")
  }
  return <AuthContext.Provider value={{isAuth,login,logout}}>{children}</AuthContext.Provider>;
};
