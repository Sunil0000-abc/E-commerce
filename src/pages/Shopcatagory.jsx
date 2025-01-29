import React, { useContext } from 'react'
import { ShopContext } from '../context/shopcontext'
import dropdown_icon from '../components/assets/dropdown_icon.png'
import Item from '../components/items/item'

 
const Shopcatagory = (props) => {

  const {all_product} =useContext(ShopContext);
  
  return (
    <div className='mx-[100px]'>
      <img src={props.banner} alt="" className=' my-[30px]'/>
      <div className='flex justify-between '>
        <p className='text-[13px]'><span className='font-bold'>Showing 1-12</span> Out of 36 products</p>
        <div className='flex items-center justify-center text-[12px] bg-gray-200 px-8 py-1 rounded-2xl cursor-pointer'>
          sort by <img src={dropdown_icon} alt="" className='h-[8px] '/>
        </div>
      </div>
      <div className='grid grid-cols-4 my-[30px]'>
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} image={item.image} id={item.id} name={item.name} old_price={item.old_price} new_price={item.new_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className='flex items-center justify-center'>
      <button className='flex items-center justify-center text-[12px] bg-gray-200 px-8 py-1 rounded-2xl cursor-pointer'>Explore More</button>
      </div>
    </div>
  )
}

export default Shopcatagory