import React from 'react'
import { BrowserRouter, Router, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Router>
            <Routes path='/' element={<Home />} />
          </Router>
      </BrowserRouter>
    </div>
  )
}

export default App
