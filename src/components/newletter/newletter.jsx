import React from 'react'
import './new.css'

const Newletter = () => {
  return (
    <div className='new  flex flex-col h-[30vh] items-center justify-center my-[50px] mx-[100px]'>
        <h1 className='text-[25px] font-semibold'>get Exclusive Offers On Your Email</h1>
        <p className='text-[13px] font-semibold pt-4'>Subscribe to our newletter and stay updated</p>
        <div className='pt-[20px] flex items-center'>
            <input type="email" placeholder='email' className='w-[400px] border px-3 py-2 text-[12px] rounded-3xl border-gray-500'/>
            <button className='bg-black text-white px-6 py-2 rounded-3xl text-[12px] left-[-100px] relative'>Subscribe</button>
        </div>
    </div>
  )
}

export default Newletter