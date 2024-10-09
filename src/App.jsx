import React from 'react'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Navar from'./componets/navar'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Product from './pages/product'
import Cart from './pages/cart'
import Login from './pages/login'
import Signup from './pages/signup'
import ErrorPage from './pages/error'

function App() {
  return (
    <BrowserRouter>
      <Navar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="*" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App