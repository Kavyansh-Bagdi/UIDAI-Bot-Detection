import React, { useState } from 'react';

const Login = () => {
  
  return (
    <div className=' border-b-2 w-full h-20 border-[#020b50]'>
      {/* Header Component */}
    <header className='flex gap-4 items-center justify-between w-[1170px] py-4 mx-auto '>
        <img src="src\assets\loginlogo.svg" alt="" width={275} height={50} className='bg-cover'/>
        <img src="src\assets\Page-1.svg" alt="" width={80} height={60} className='bg-cover'/>
    </header>
    {/* Form Button */}
    <div className='w-full flex justify-center items-center '>
      <form action="javascript:void(0);" method="post" className='w-full mt-5 bg-white p-4 rounded-md'>
        <h1 className=' font-bold text-[#020b50] text-center text-xl'>Login to Aadhaar via OTP</h1>
        <div className='gap-4 p-6 w-1/3 shadow-lg flex flex-col items-center justify-center h-56 mx-auto mt-5' style={{borderTop: '4px solid', borderImage: 'linear-gradient(to right, #020b50, #2C3A8F) 1'}}>
          <input id='aadharno' type="number" min={"0"} max={"999999999999999"} placeholder='Enter your Aadhaar Number' className='w-full p-3 rounded-md text-xl  outline-none border-b-2 border-black -mt-9 mb-7'/>
          <button className='bg-gray-400 hover:bg-blue-900 hover:scale-105 transition-all duration-300 text-white p-2 rounded-md w-full'>Login With OTP</button>
        </div>
      </form>
    </div>
    <footer className='relative bottom-0 w-full flex justify-center items-center'>Copyright © 2024 Unique Identification Authority of India All Rights Reserved</footer>
    </div>
  );
};

export default Login;