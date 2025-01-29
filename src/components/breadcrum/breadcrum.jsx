import React from 'react'
import arrow_icon from '../assets/arrow.png'

const Breadcrum = (props) => {
    const {product} =props;
  return (
    <div className='flex text-[13px] mx-[100px] mt-[20px]'>
        HOME &gt; SHOP &gt; {product.category} &gt;{product.name}
    </div>
  )
}

export default Breadcrum