import React from 'react'
import data_product from '../assets/data'
import Item from '../items/item'

const Popular = () => {
  return (
   <div className='flex align-middle justify-center flex-col items-center'>
    <h1 className='text-[30px] font-semibold'>POPULAR IN WOMEN</h1>
    <hr className=''/>
    <div className='flex p-[50px]'>
        {data_product.map((item,i)=>{
            return <Item key={i} image={item.image} id={item.id} name={item.name} old_price={item.old_price} new_price={item.new_price}/>
             
        })}
    </div>
   </div>
  )
}

export default Popular