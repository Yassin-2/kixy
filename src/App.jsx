import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Products from './pages/Products'
import AboutPage from './pages/Home/AboutPage'

const App = () => {
 return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
       <Route path='/products' element={<Products/>} />
       <Route path='/about' element={<AboutPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
