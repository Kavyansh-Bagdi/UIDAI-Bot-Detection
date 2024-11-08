import React,{useState} from 'react'
import AadharCard from './AadharCard'
const Dashboard = () => {
  const [showCard, setShowCard] = useState(false);
  return (
    <div className='w-full min-h-screen'>
      <header className='flex gap-2 md:gap-4 items-center justify-between w-full px-4 md:w-4/5 lg:w-3/5 mx-auto py-4'>
        <img src="src\assets\Emblem_of_India.svg.png" alt="" className='w-6 md:w-8 lg:w-10'/>
        <h1 className='text-lg md:text-xl lg:text-2xl font-bold text-[#2072A0] text-center'>Unique Identification Authority of India</h1>
        <img src="src\assets\Page-1.svg" alt="" className='w-16 md:w-20 lg:w-24'/>
      </header>

      <div className="w-full mx-auto relative flex justify-end items-center h-12" style={{background: 'linear-gradient(119.54deg, #000046, #1cb5e0)'}}>
        <button 
          className='text-white px-3 md:px-6 py-1 md:py-2 rounded-md text-sm md:text-lg mr-4 md:mr-6 border-2 border-white hover:bg-white hover:text-[#000046] transition-all duration-300 font-semibold tracking-wide'
          onMouseEnter={() => setShowCard(true)}
          onMouseLeave={() => setShowCard(false)}
        >
          View Aadhar
        </button>
        {showCard && (
          <div className="absolute top-full right-4 z-50 transform scale-90 md:scale-105 origin-top-right">
            <AadharCard />
          </div>
        )}
      </div>

      <div className='flex flex-col gap-4 w-full px-4 md:w-4/5 lg:w-3/5 mx-auto mt-6 ml-40'>
        <h1 className='text-xl md:text-2xl font-bold text-[#2072A0]'>Services</h1>
        <p className='text-black'>Following bouquet of online Aadhaar services are available for access. Click on the tab to navigate to the service-specific page.</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 w-full px-4 md:w-11/12 lg:w-4/5 mx-auto mt-6'>
        <div className="w-full p-4 bg-white rounded-lg shadow-lg border-2">
          <div className="flex items-center mb-4">
            <img src="src\assets\Card1.svg" alt="" className='w-12 md:w-16'/>
          </div>
          <h2 className="text-lg md:text-xl font-bold text-gray-800">Document Update</h2>
          <p className="text-sm md:text-base text-gray-600">
            Click Here to upload your Proof of Identity (PoI) and Proof of Address (PoA) Documents.
          </p>
          <p className="mt-3 text-sm md:text-base text-red-600 font-semibold">
            This service is free of cost till 14/12/2024.
          </p>
        </div>
        <div className="w-full p-4 bg-white rounded-lg shadow-lg border-2">
          <div className="flex items-center mb-4">
            <img src="src\assets\Card1.svg" alt="" className='w-12 md:w-16'/>
          </div>
          <h2 className="text-lg md:text-xl font-bold text-gray-800">Document Update</h2>
          <p className="text-sm md:text-base text-gray-600">
            Click Here to upload your Proof of Identity (PoI) and Proof of Address (PoA) Documents.
          </p>
          <p className="mt-3 text-sm md:text-base text-red-600 font-semibold">
            This service is free of cost till 14/12/2024.
          </p>
        </div>
        <div className="w-full p-4 bg-white rounded-lg shadow-lg border-2">
          <div className="flex items-center mb-4">
            <img src="src\assets\Card1.svg" alt="" className='w-12 md:w-16'/>
          </div>
          <h2 className="text-lg md:text-xl font-bold text-gray-800">Document Update</h2>
          <p className="text-sm md:text-base text-gray-600">
            Click Here to upload your Proof of Identity (PoI) and Proof of Address (PoA) Documents.
          </p>
          <p className="mt-3 text-sm md:text-base text-red-600 font-semibold">
            This service is free of cost till 14/12/2024.
          </p>
        </div>
        <div className="w-full p-4 bg-white rounded-lg shadow-lg border-2">
          <div className="flex items-center mb-4">
            <img src="src\assets\Card1.svg" alt="" className='w-12 md:w-16'/>
          </div>
          <h2 className="text-lg md:text-xl font-bold text-gray-800">Document Update</h2>
          <p className="text-sm md:text-base text-gray-600">
            Click Here to upload your Proof of Identity (PoI) and Proof of Address (PoA) Documents.
          </p>
          <p className="mt-3 text-sm md:text-base text-red-600 font-semibold">
            This service is free of cost till 14/12/2024.
          </p>
        </div>
        <div className="w-full p-4 bg-white rounded-lg shadow-lg border-2">
          <div className="flex items-center mb-4">
            <img src="src\assets\Card1.svg" alt="" className='w-12 md:w-16'/>
          </div>
          <h2 className="text-lg md:text-xl font-bold text-gray-800">Document Update</h2>
          <p className="text-sm md:text-base text-gray-600">
            Click Here to upload your Proof of Identity (PoI) and Proof of Address (PoA) Documents.
          </p>
          <p className="mt-3 text-sm md:text-base text-red-600 font-semibold">
            This service is free of cost till 14/12/2024.
          </p>
        </div>
        <div className="w-full p-4 bg-white rounded-lg shadow-lg border-2">
          <div className="flex items-center mb-4">
            <img src="src\assets\Card1.svg" alt="" className='w-12 md:w-16'/>
          </div>
          <h2 className="text-lg md:text-xl font-bold text-gray-800">Document Update</h2>
          <p className="text-sm md:text-base text-gray-600">
            Click Here to upload your Proof of Identity (PoI) and Proof of Address (PoA) Documents.
          </p>
          <p className="mt-3 text-sm md:text-base text-red-600 font-semibold">
            This service is free of cost till 14/12/2024.
          </p>
        </div>
        <div className="w-full p-4 bg-white rounded-lg shadow-lg border-2">
          <div className="flex items-center mb-4">
            <img src="src\assets\Card1.svg" alt="" className='w-12 md:w-16'/>
          </div>
          <h2 className="text-lg md:text-xl font-bold text-gray-800">Document Update</h2>
          <p className="text-sm md:text-base text-gray-600">
            Click Here to upload your Proof of Identity (PoI) and Proof of Address (PoA) Documents.
          </p>
          <p className="mt-3 text-sm md:text-base text-red-600 font-semibold">
            This service is free of cost till 14/12/2024.
          </p>
        </div>
        <div className="w-full p-4 bg-white rounded-lg shadow-lg border-2">
          <div className="flex items-center mb-4">
            <img src="src\assets\Card1.svg" alt="" className='w-12 md:w-16'/>
          </div>
          <h2 className="text-lg md:text-xl font-bold text-gray-800">Document Update</h2>
          <p className="text-sm md:text-base text-gray-600">
            Click Here to upload your Proof of Identity (PoI) and Proof of Address (PoA) Documents.
          </p>
          <p className="mt-3 text-sm md:text-base text-red-600 font-semibold">
            This service is free of cost till 14/12/2024.
          </p>
        </div>
        <div className="w-full p-4 bg-white rounded-lg shadow-lg border-2">
          <div className="flex items-center mb-4">
            <img src="src\assets\Card1.svg" alt="" className='w-12 md:w-16'/>
          </div>
          <h2 className="text-lg md:text-xl font-bold text-gray-800">Document Update</h2>
          <p className="text-sm md:text-base text-gray-600">
            Click Here to upload your Proof of Identity (PoI) and Proof of Address (PoA) Documents.
          </p>
          <p className="mt-3 text-sm md:text-base text-red-600 font-semibold">
            This service is free of cost till 14/12/2024.
          </p>
        </div>
        <div className="w-full p-4 bg-white rounded-lg shadow-lg border-2">
          <div className="flex items-center mb-4">
            <img src="src\assets\Card1.svg" alt="" className='w-12 md:w-16'/>
          </div>
          <h2 className="text-lg md:text-xl font-bold text-gray-800">Document Update</h2>
          <p className="text-sm md:text-base text-gray-600">
            Click Here to upload your Proof of Identity (PoI) and Proof of Address (PoA) Documents.
          </p>
          <p className="mt-3 text-sm md:text-base text-red-600 font-semibold">
            This service is free of cost till 14/12/2024.
          </p>
        </div>
        <div className="w-full p-4 bg-white rounded-lg shadow-lg border-2">
          <div className="flex items-center mb-4">
            <img src="src\assets\Card1.svg" alt="" className='w-12 md:w-16'/>
          </div>
          <h2 className="text-lg md:text-xl font-bold text-gray-800">Document Update</h2>
          <p className="text-sm md:text-base text-gray-600">
            Click Here to upload your Proof of Identity (PoI) and Proof of Address (PoA) Documents.
          </p>
          <p className="mt-3 text-sm md:text-base text-red-600 font-semibold">
            This service is free of cost till 14/12/2024.
          </p>
        </div>
        <div className="w-full p-4 bg-white rounded-lg shadow-lg border-2">
          <div className="flex items-center mb-4">
            <img src="src\assets\Card1.svg" alt="" className='w-12 md:w-16'/>
          </div>
          <h2 className="text-lg md:text-xl font-bold text-gray-800">Document Update</h2>
          <p className="text-sm md:text-base text-gray-600">
            Click Here to upload your Proof of Identity (PoI) and Proof of Address (PoA) Documents.
          </p>
          <p className="mt-3 text-sm md:text-base text-red-600 font-semibold">
            This service is free of cost till 14/12/2024.
          </p>
        </div>
      </div>

      {/* <div className='flex flex-col gap-4 w-full px-4 md:w-4/5 lg:w-3/5 mx-auto mt-6 mb-8'>
        <h1 className='text-xl md:text-2xl font-bold text-[#2072A0]'>Request for Aadhaar</h1>
        <p className='text-sm md:text-base text-black'>Status of various requests originated by you in the recent past. You can check the detailed status of the request by clicking on the "downward" arrow icon.</p>
      </div> */}
    </div>
  )
}

export default Dashboard