import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Product from "./Product/Product";
import "./Products.css"
const Products = () => {
  const {data}=useContext(CartContext)
 return (
   <div className="grid">
     {data.map(product=>{

     return (
       <>
      <div style={{border:"1px solid black"}}>
      <Product product={product}/>
      </div>
   

      </>
     )





     }
    
     
     
     
     
     
     )}
   </div>
 )
 
};

export default Products;
