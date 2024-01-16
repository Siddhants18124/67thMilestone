import { useState } from 'react'
// import './App.css'

import Navbar from './components/navbar'
import Eventfest from './components/eventsfest'
import Footer from './components/footer'
import Homepage from './components/Homepage/homepage'
import Event from './components/event'
import Homesection2 from './components/homesection2/homesection2'
import Homesection3 from './components/homesection3/homesection3'
import Homesection4 from './components/homesection4/homesection4'
import Aboutpage from './components/aboutpage/aboutpage'
import About2 from './components/about2/about2'
import About3 from './components/about3'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Navbar/> */}
     <Aboutpage/>
     <About2/> 
     <About3/> 
     {/* <Event/> */}
     {/* <Homepage/> */}
     {/* <Homesection2/> */}
     {/* <Homesection3/> */}
     {/* <Homesection4/> */}
     {/* <Eventfest/> */}
     {/* <Footer/> */}
    </>
  )
}

export default App
