import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage } from './pages/homepage'
import { ContactPage } from './pages/contact-page'
import { AboutPage } from './pages/about-page'

import './App.css'; 

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} /> 
        <Route path='contact' element={<ContactPage />} /> 
        <Route path='about' element={<AboutPage />} /> 

       
      </Routes>

    
    </BrowserRouter>
  )
}
export default App;
