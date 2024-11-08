import React from 'react'
import Cards1 from './Cards1'
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className='w-screen h-screen'>
        <header className='flex gap-4 items-center justify-between w-3/5 mx-auto py-4 '>
                <img src="src\assets\Emblem_of_India.svg.png" alt="" width={30} height={10}/>
                <h1 className='text-2xl font-bold text-[#2072A0]'>Unique Identification Authority of India</h1>
                <img src="src\assets\Page-1.svg" alt="" width={80} height={60}/>
        </header> 
        <div className='flex items-center justify-center w-full h-full relative -top-24 left-0'>
            <img src="src\assets\Blue_BackGround_3.025d7a6749ab722c3352.jpg" alt=""  className='w-full h-[520px] bg-contain   '/>
                <div className='absolute inset-0 flex flex-col items-center justify-center text-white text-lg font-bold w-1/3 gap-2 mx-40'>
                    <p className='text-7xl font-normal'>Welcome to</p>
                    <p className='text-7xl font-bold mb-6'>myAadhaar</p>
                    <p className=' ml-16 text-base text-align-left font-normal tracking-normal leading-6 '>Click on <span className='font-bold scale-105  '>Login</span> button to explore online demographics update service, Aadhaar PVC card ordering & tracking, and more value-added services offered by UIDAI. Your mobile number is required to be registered with the Aadhaar to login.</p>
                </div>
                <div className='absolute  flex flex-col items-center justify-center text-white text-lg font-bold w-1/3  bg-white w-[328px] h-[384px] rounded-lg right-60  '>
                    <img src="src\assets\fingerPrint.54859169124a05ba0132.jpg" className='-mt-10 bg-cover scale-y-75 scale-x-90 ' alt="" width={160} height={150}  />
                    <button 
                      className='bg-[#2072A0] text-white px-28 py-2 rounded-lg bg-custom-gradient mt-5'
                      onClick={() => navigate('/login')}
                    >
                      Login
                    </button>
                    <p className='text-black text-xs tracking-tighter font-normal '>Login with your Aadhaar And OTP</p>
                </div>

        </div>
        <Cards1/>

      
    </div>
  )
}

export default Landing