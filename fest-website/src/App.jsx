import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/navbar'
import Eventfest from './components/eventsfest'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
      <Eventfest/>
    </>
  )
}

export default App
