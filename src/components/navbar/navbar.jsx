import React,{useContext, useState} from 'react'
import logo from '../assets/logo.png'
import cart from '../assets/cart_icon.png'
import './nav.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/shopcontext'


const Navbar = () => {
    const {cartItems} =useContext(ShopContext);
    const [menu, setmenu] = useState("shop");
  return (
    <div className=' nav-container flex item-center align-middle justify-around p-[16px] '>
       <div className='flex justify-between '>
         <img src={logo} alt="" className='w-[30px] h-[30px]'/>
         <p className='text-lg font-semibold'>SHOPPER</p>
       </div>
       <div >
        <ul className='flex item-center justify-between gap-[50px] text-[14px] font-semibold cursor-pointer'>
            <li  onClick={()=>setmenu("shop")}><Link to='/'>Shop</Link> {menu==="shop"? <hr />:<></>}</li>
            <li onClick={()=>setmenu("mens")}><Link to='/mens'>Men</Link> {menu==="mens"? <hr />:<></>}</li>
            <li onClick={()=>setmenu("womens")}><Link to='/womens'>Women</Link> {menu==="womens"? <hr />:<></>}</li>
            <li onClick={()=>setmenu("kids")}><Link to='/kids'>Kids</Link> {menu==="kids"? <hr />:<></>}</li>
        </ul>
       </div>
       <div className='gap-[45px] flex items-center justify-center'>
        <Link to='/loginsignup'><button className='w-[75px] h-[30px] border-[1px] rounded-2xl text-[13px] border-gray-400  font-[15px] text-gray-600'>Login</button></Link>
        <Link to='/Cart'> <img src={cart} alt="" className='h-[25px] w-[25px] font-semibold'/></Link>
        <div className='w-[14px] h-[14px] flex align-middle justify-center bg-red-700 text-[8px] rounded-xl text-white mt-[-25px] ml-[-50px]'>
            {cartItems()}
        </div>
       </div>
    </div>
  )
}

export default Navbar