import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TopBar from './TopBar'
import Home from './Home'
import Newsletter from './Newsletter'
import Support from './Support'
import Blog from './Blog'
import BuyNow from './Buynow'
import Footer from './Footer'
import ProductDetails from './ProductDetails'
import Terms from './Terms'
import Privacy from './Privacy'


const App = () => {
  return (
        <div>
            <TopBar />
            <Routes>
                <Route path="/" element={<Home />}> </Route>
                <Route path="/newsletter" element={<Newsletter />}> </Route>
                <Route path="/support" element={<Support />}> </Route>
                <Route path="/blog" element={<Blog />}> </Route>
                <Route path="/buynow" element={<BuyNow />}> </Route>
                <Route path="/product/:id" element={<ProductDetails />}></Route>
                <Route path="/privacy" element={<Privacy />}> </Route>
                <Route path="/terms" element={<Terms />}></Route>
            </Routes>
            <Footer />
        </div>
  )
}

export default App