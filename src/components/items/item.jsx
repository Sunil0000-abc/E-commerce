import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'
const Item = (props) => {
   
    
  return (
    <div className=' flex p-[20px]'>
        <div className='women'>
            <div className=''>
               <Link to={`/product/${props.id}`}><img src={props.image} alt="" className='h-[350px] font-serif'/></Link>      
            </div>
            <div className='flex flex-col m-[20px]'>
            <p className='text-[13px]'>{props.name}</p>
            <div className='flex gap-3'>
              <p className='text-[13px] font-semibold'>${props.new_price}</p>
              <p className='text-[13px] line-through'>${props.old_price}</p>  
            </div>
            </div>
        </div>
    </div>
  )
}

export default Item