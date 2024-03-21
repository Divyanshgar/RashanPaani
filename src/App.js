import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
} from  './pages'
function App() {
  return (
    <Router>
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='about'  element={<About />} />
        <Route path='cart'  element={<Cart />} />
        <Route path='products'  element={<Products />} />
        <Route path='products/:id'  element={<Products />} />
        <Route path='checkout'  element={
               <PrivateRoute>
                <Checkout />
               </PrivateRoute>} />
        <Route path='*'  element={<Error />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
