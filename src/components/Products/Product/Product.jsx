import axios from "axios";
import React, { useContext,useState } from "react";
import { CartContext } from "../../../context/CartContext";

const Product = ({product}) => {
  // Note: this id should come from api

  // const fet=()=>{
  //   axios.get(`http://localhost:8080/products`).then(d=>{
  //     // console.log(d.data)
  //     setData(d.data)
  //   })

  //  }
  const handleRemove=()=>{
    
    Remove(product.name)
   
  }
  
 const [con, setCon] = useState(1)
  const {count,Add,Remove}=useContext(CartContext)
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{product.name}</h3>
      <h6 data-cy="product-description">{product.description}</h6>
{
  count==0?    <button data-cy="product-add-item-to-cart-button" onClick={()=>Add(product.name)}>Add to cart</button>:""
}
  
   
        {
         count>0?<div>
          <button data-cy="product-increment-cart-item-count-button" onClick={()=>setCon(con+1)}>+</button>
          <span data-cy="product-count">
            {con}
          </span>
          <button data-cy="product-decrement-cart-item-count-button" onClick={()=>{if(con>1)setCon(con-1)}}>-</button>
          
          </div>:""
    
        }
        {
          count>0?<button data-cy="product-remove-cart-item-button"onClick={handleRemove}>Remove</button>:""
        }
        
       
       
       
  
    </div>
  );
};

export default Product;
