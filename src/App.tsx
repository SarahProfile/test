import { useState } from 'react'
import{Routes, Route} from "react-router-dom"
import { Container } from 'react-bootstrap'
import{Home} from "./pages/Home"
import{Shop} from "./pages/Shop"
import {Navbar} from "./components/Navbar"


import 'swiper/css';
import './app.css'
import { Gallery } from './pages/Gallery'
import { Cart } from './pages/Cart'
import { ProductDetails } from './pages/ProductDetail'
import { ShopFilter } from './pages/ShopFilter'
import Footer from './components/Footer'


function App() {
  
  
  return (
    <>
  <Navbar/>
  <Container className='mb-4'>
    <Routes>
    <Route path="/" element={< Home />} /> 
    <Route path="/shop" element={< Shop />} /> 
    <Route path="/gallery" element={< Gallery />} /> 
    <Route path="/cart" element={< Cart />} /> 
    <Route path="/productdetails" element={< ProductDetails />} /> 
    <Route path="/shopfilter" element={< ShopFilter />} /> 
    </Routes>
   
  </Container>
  <Container>
  <Footer/>
  </Container>
  
 
  </>
  )
}

export default App
