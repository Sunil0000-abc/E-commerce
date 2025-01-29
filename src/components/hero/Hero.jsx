import React from 'react'
import './hero.css'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero h-[90vh] flex align-middle items-center justify-center'>
        <div className='hero-left flex-1 flex flex-col justify-center  pl-[180px]'>
           <h2 className='text-[#090909] text-[14px] font-semibold '>NEW ARRIVALS ONLY</h2>
           <div className='gap-0'> 
             <div className='flex align-middle gap-2 items-center'>
               <p className='text-[#090909] text-[50px] font-semibold'>new</p>
               <img src={hand_icon} alt="" className='w-[60px] h-[60px]'/>
             </div>
             <p className='text-[#090909] text-[50px] font-semibold'>collection</p>
             <p className='text-[#090909] text-[50px] font-semibold'>for everyone</p>
           </div>
           <div className='flex bg-red-600 align-middle justify-center items-center gap-2 p-2 w-[150px] rounded-[17px] hover:bg-red-500 cursor-pointer'>
             <div className='text-white text-[12px] '>Latest Collection</div>
             <img src={arrow_icon} alt="" className='h-[8px] w-[15px] font-[10px]'/>
           </div>
        </div>
        <div>
           <img src={hero_image} alt="" className='h-[600px]'/>
        </div>
    </div>
  )
}

export default Hero