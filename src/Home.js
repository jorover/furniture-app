import React from 'react'
import Hero from './Hero'
import FeaturedItems from './FeaturedCategories'
import Interior from './Interior'
import Design from './Design'
import IconText from './IconText'

const Home = () => {
  return (
    <div>
        <Hero />
        <FeaturedItems />
        <Interior />
        <Design />
        <IconText />
    </div>
  )
}

export default Home