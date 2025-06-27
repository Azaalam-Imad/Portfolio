import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Projects from './pages/Projects'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Skills from './pages/Skils'

function App() {

  return (
    <>
   
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    
     
    </>
  )
}

export default App
