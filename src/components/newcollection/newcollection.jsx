import React from 'react'
import new_collections from '../assets/new_collections'
import Item from '../items/item'

const Newcollection = () => {
  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-[30px] font-semibold items-center'>NEW COLLECTIONS</h1>
        <div className='grid grid-cols-4 m-[20px]  p-[50px]'>
            {new_collections.map((item,i)=>{
            return <Item key={i} image={item.image} id={item.id} name={item.name} old_price={item.old_price} new_price={item.new_price}/>
        })}
        </div>
    </div>
  )
}

export default Newcollection