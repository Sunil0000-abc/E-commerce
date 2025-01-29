import React from 'react'
import exclusiv_image from '../assets/exclusive_image.png'
import './offers.css'

const Offers = () => {
  return (
    <div className='offers flex  h-[60vh] items-center justify-around my-[50px] mx-[100px]'>
        <div className='left'>
            <h1 className='text-[34px] font-semibold'>Exclusive</h1>
            <h1 className='text-[34px] font-semibold'>Offers For You</h1>
            <p className='text-[11px] font-semibold'>ONLY ON BEST SELLERS PRODUCT</p>
            <button className='bg-red-600 text-white px-[35px] py-2 mt-[10px] rounded-3xl text-[12px]'>Check Now</button>
        </div>
        <div className='right'>
            <img src={exclusiv_image} alt="" className='h-[400px]'/>
        </div>
    </div>
  )
}

export default Offers