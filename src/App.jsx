import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/footer'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer brandName="Kixys" />
      </div>
    </BrowserRouter>
  )
}

export default App
