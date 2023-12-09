import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'

import Home from './pages/Home'
import Store from './pages/Store'
import Macbooks from './pages/Macbooks'

import { NavBar, Footer } from './comp/Skeleton'
// import Scroll from './comp/Scroll'

function App() {
  useEffect(() => {
    document.title = "Apple"
  }, [])

  return (
    <div id='parent'>
      {/* <Scroll/> */}
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