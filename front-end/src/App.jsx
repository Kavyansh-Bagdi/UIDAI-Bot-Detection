import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Login from './components/Login'
import Landing from './components/Landing'
import Cards1 from './components/Cards1'
import Dashboard from './components/Dashboard'
// import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen'>
      <Login />
      {/* <Landing/> */}
      {/* <Cards1/> */}
      {/* <Dashboard/> */}
      
    </div>
  )
}

export default App
