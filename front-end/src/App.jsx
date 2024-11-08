import { useState } from 'react'
import './index.css'
import Login from './components/Login'
import Landing from './components/Landing'
import Cards1 from './components/Cards1'
import Dashboard from './components/Dashboard'
import { Routes, Route } from 'react-router-dom'
import AadharCard from './components/AadharCard'
// import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen'>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      {/* <h1>hii</h1> */}
      {/* <AadharCard/> */}
    </div>
  )
}

export default App