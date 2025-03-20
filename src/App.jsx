import { useState } from 'react'

import './App.css'
import Home from './components/Home'
import { Route, Routes,  useLocation } from 'react-router-dom'
import Course from './components/Course'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Signup from './components/Signup'
import Contact from './components/Contact'
import AboutPage from './components/About'
import BuyPage from './components/Buy'

function App() {
 
const  location=useLocation()
const hidden=location.pathname==='/signin'

  return (
    <>
   {!hidden &&  <Navbar/>}
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/course' element={<Course/>} />
      <Route path='/signin' element={<Signup/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/buy/:id' element={<BuyPage/>} />
     </Routes>
    {!hidden &&<Footer/>}

    </>
  )
}

export default App
