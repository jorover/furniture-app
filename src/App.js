import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TopBar from './TopBar'
import Home from './Home'
import Newsletter from './Newsletter'
import Support from './Support'
import Blog from './Blog'
import BuyNow from './Buynow'
import Footer from './Footer'


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
            </Routes>
            <Footer />
        </div>
  )
}

export default App