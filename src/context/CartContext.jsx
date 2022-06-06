import React, { createContext,useState,useEffect } from "react";
import axios from "axios";
import { Product } from "../components/Products/Product";
export const CartContext = createContext();


export const CartProvider = ({ children }) => {
 const [data, setData] = useState([])
 const [count, setCount] = useState(0)


 

 useEffect(() => {
  fet()

 
   
 },[])
 const fet=()=>{
  axios.get(`http://localhost:8080/products`).then(d=>{
    // console.log(d.data)
    setData(d.data)
  })

 }
 const Add=(id)=>{
  data.map(e=>{
    if(e.name==id){
     setCount(count+1)
    }
   
    
  })

  
  
}

 
     
      

 
 const Remove=(id)=>{
  data.map(e=>{
    if(e.name==id){
     setCount(0)
    }
   
    
  })

  
  

 }
 





  return <CartContext.Provider value={{Add,Remove,data,count}}>{children}</CartContext.Provider>;
};
