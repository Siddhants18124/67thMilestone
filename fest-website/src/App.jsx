import { useState } from 'react'
import './App.css'

import Navbar from './components/navbar'
import Eventfest from './components/eventsfest'
import Footer from './components/footer'
import Homepage from './components/Homepage/homepage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Homepage/>
     <Eventfest/>
     <Footer/>
    </>
  )
}

export default App