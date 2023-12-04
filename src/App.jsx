import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'

import Home from './pages/Home'
import Store from './pages/Store'
import Macbooks from './pages/Macbooks'

import { NavBar, Footer } from './comp/Skeleton'

function App() {
  return (
    <div id='parent'>
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/" element={ <Home /> }></Route>
          <Route path="/Store" element={ <Store /> }></Route>
          <Route path="/Macbooks" element={ <Macbooks /> }></Route>
        </Routes>

        <Footer />

      </BrowserRouter>
      
    </div>
  )
}

export default App