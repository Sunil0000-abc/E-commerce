import React, { createContext } from "react";
import { useState } from "react";
import all_product from '../components/assets/all_product'


export const ShopContext =createContext(null);

const ShopContextProvider= (props) =>{

  const [cartItem, setcartItem] = useState({});

  const addToCart =(itemid)=>{
    if(!cartItem[itemid]){
     setcartItem((prev)=>({...prev,[itemid]:1}))
    }else{
     setcartItem((prev)=>({...prev,[itemid]:prev[itemid]+1}))
    }
 }

 const removeFromCart= (itemid)=>{
  setcartItem((prev)=>({...prev,[itemid]:prev[itemid]-1}))
}

 const cartItems =() =>{
  let totalitem=0;
   
  for(let item in cartItem){
    if(cartItem[item]>0){
      totalitem+=cartItem[item];
    }
  }
  return totalitem;
 }
  
  

    const ContextValue ={
         all_product,
         cartItem,
         addToCart,
         removeFromCart,
         cartItems
    }

    return(
       <ShopContext.Provider value={ContextValue}>
         {props.children}
       </ShopContext.Provider>
    )
}

export default ShopContextProvider