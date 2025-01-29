import React from 'react'
import logo from '../assets/logo_big.png'
import instgram from '../assets/instagram_icon.png'
import pint from '../assets/pintester_icon.png'
import whatsapp from '../assets/whatsapp_icon.png'
 
const Footer = () => {
  return (
    <div className='flex items-center justify-around flex-col p-2'>
        <div className='flex items-center m-4'>
            <img src={logo} alt="" className='w-[45px]'/>
            <p className='text-[20px] font-semibold'>SHOPPER</p>
        </div>
        <ul className='flex flex-row gap-8 text-[12px] font-[500] m-2'>
            <li>Compny</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='flex gap-8 m-4'>
            <div>
                <img src={instgram} alt="" className='w-[20px]'/>
            </div>
            <div>
                <img src={pint} alt="" className='w-[20px]'/>
            </div>
            <div>
                <img src={whatsapp} alt="" className='w-[20px]'/>
            </div>
        </div>
        <div className='h-[1px] bg-slate-400 relative w-[85%]'></div>
        <div>
          
            <p className='text-[12px]'>Copyrignt @ 2023  - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer