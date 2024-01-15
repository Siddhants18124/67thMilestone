import { useState } from 'react'
import './App.css'

import Navbar from './components/navbar'
import Eventfest from './components/eventsfest'
import Footer from './components/footer'
import Homepage from './components/Homepage/homepage'
import Event from './components/event'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Event/>
     {/* <Homepage/> */}
     {/* <Eventfest/> */}
     {/* <Footer/> */}
    </>
  )
}

export default App
