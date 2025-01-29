import React, { useContext } from 'react'
import { ShopContext } from '../../context/shopcontext'

const ShowCartItm = () => {

    const { all_product,cartItem,addToCart,removeFromCart} =useContext(ShopContext);
  return (
    <>
    <div className='m-[100px] flex flex-col justify-between'>
       <div className='flex justify-between'>
        <p>Product</p>
        <p className='left-[50px] relative'>Title</p>
        <p className='left-[110px] relative'>Price</p>
        <p className='left-[80px] relative'>Quantity</p>
        <p className='left-[50px] relative'>Total</p>
        <p>Remove</p>
       </div>
       <div className='h-[1px] bg-gray-300 my-[10px]'></div>
       {all_product.map((e) =>{
        if(cartItem[e.id] >0){
            return <div>
            <div className='flex justify-between items-center'>
                <img src={e.image} alt="" className='h-[70px] '/>
                <p className='text-[12px] w-[150px]'>{e.name}</p>
                <p>${e.new_price}</p>
                <button onClick={()=>addToCart(e.id)} className='cursor-pointer text-[12px] bg-gray-100 w-[20px] h-[20px] flex items-center justify-center rounded-[3px]'>{cartItem[e.id]}</button>
                <p>${e.new_price*cartItem[e.id]}</p>
                <button onClick={() =>removeFromCart(e.id)} className='cursor-pointer text-[20px] bg-gray-100 w-[20px] h-[20px] flex items-center justify-center rounded-[3px]'>-</button>
            </div>
            <div className='h-[1px] bg-gray-300 my-[10px]'></div>
           </div>
        }
       })}
    </div>
    <div>
      
    </div>
  </>
  )
}

export default ShowCartItm