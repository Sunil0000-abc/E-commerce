import React, { useContext } from 'react'
import star_icon from '../assets/star_icon.png'
import star_dall from '../assets/star_dull_icon.png'
import { ShopContext } from '../../context/shopcontext';

const ProductDisplay = (props) => {

    const { product} = props;
    const {addToCart} = useContext(ShopContext);
    return (
        <div className='mx-[100px] my-[20px] flex gap-3'>
            <div className='flex gap-2 items-center'>
                <div className='flex flex-col gap-y-2'>
                    <img src={product.image} alt="" className=' ' />
                    <img src={product.image} alt="" className=' ' />
                    <img src={product.image} alt="" className=' ' />
                    <img src={product.image} alt="" className='' />
                </div>
                <img src={product.image} alt="" className='h-[500px]' />
            </div>
            <div className='flex flex-col gap-5'>
                <div>
                    <h1 className='font-semibold text-[19px]'>{product.name}</h1>
                </div>
                <div className='flex h-[10px] w-[10px] items-center'>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dall} alt="" />
                    <p className='text-[12px]'>(102)</p>
                </div>
                <div className='flex gap-3'>
                    <div className='text-[13px] line-through'>${product.old_price}</div>
                    <div className='text-[13px] text-orange-700 font-semibold'>${product.new_price}</div>
                </div>
                <div className='text-[12px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ab minima. Ratione, sint repellendus? Culpa, iste deserunt. Voluptatem ea iste minima nulla accusantium, eos est mollitia voluptate itaque repudiandae iusto.
                </div>
                <div className='gap-2'>
                    <h1 className='text-[13px] font-semibold'>Select Size</h1>
                    <div className='flex gap-2'>
                        <div className='bg-gray-100 rounded-[2px] h-[30px] w-[30px] text-[11px] items-center flex justify-center m-1 '>S</div>
                        <div className='bg-gray-100 rounded-[2px] h-[30px] w-[30px] text-[11px] items-center flex justify-center m-1 '>M</div>
                        <div className='bg-gray-100 rounded-[2px] h-[30px] w-[30px] text-[11px] items-center flex justify-center m-1 '>L</div>
                        <div className='bg-gray-100 rounded-[2px] h-[30px] w-[30px] text-[11px] items-center flex justify-center m-1 '>XL</div>
                        <div className='bg-gray-100 rounded-[2px] h-[30px] w-[30px] text-[11px] items-center flex justify-center m-1 '>XXL</div>
                    </div>
                </div>
                <button onClick={()=>addToCart(product.id)}className='bg-[#ff0b0b] text-white flex justify-center text-[13px] font-semibold w-[150px] p-2 rounded-[3px]'>ADD TO CART</button>
            </div>
        </div>
    )
}

export default ProductDisplay