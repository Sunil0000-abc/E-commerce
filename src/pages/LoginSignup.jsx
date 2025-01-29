import React,{useState} from 'react'

const LoginSignup = () => {
  const [login, setlogin] = useState("Sign Up");
  return (
    <div className='w-[100%] h-[80vh] bg-[#fce3fe]  flex items-center justify-center'>
      <div className='bg-white p-5 w-[25vw]'>
        <h1 className='text-[17px] font-semibold'>{login}</h1>
        <div className='flex flex-col'>
          {login==="Sign Up"?<input type="text" placeholder='name'className='border-[1px] rounded-[3px] px-3 py-1 my-2 border-gray-200 outline-none'  />:<></>}
          <input type="text" placeholder='@email'className='border-[1px] rounded-[3px] px-3 py-1 my-2 border-gray-200 outline-none' />
          <input type="password" placeholder='password'className='border-[1px] rounded-[3px] px-3 py-1 my-2 border-gray-200 outline-none' />
        </div>
        <button className='bg-black text-white text-[13px] px-4 py-2 w-[100%] rounded-[3px] mt-[20px] items-center'>{login}</button>
        {login==="Log In"?<p className='text-[14px] my-2'>Do not have an account?<span onClick={()=>setlogin("Sign Up")} className='text-blue-300 cursor-pointer'>Sign Up</span></p>:
        <p className='text-[14px] my-2'>Already have an account?<span onClick={()=>setlogin("Log In")} className='text-blue-300 cursor-pointer'>Log In</span></p>

}
      </div>
    </div>
  )
}

export default LoginSignup