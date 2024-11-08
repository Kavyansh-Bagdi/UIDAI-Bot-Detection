import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Login from './components/Login'
import Landing from './components/Landing'
import Cards1 from './components/Cards1'
// import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen'>
      <Login />
      {/* <Landing/> */}
      {/* <Cards1/> */}
      
    </div>
  )
}

export default App
