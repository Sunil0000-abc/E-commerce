import React from 'react'
import Hero from '../components/hero/Hero'
import Popular from '../components/popular/popular'
import Offers from '../components/offers/offers'
import Newcollection from '../components/newcollection/newcollection'
import Newletter from '../components/newletter/newletter'
import Footer from '../components/footer/footer'

const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <Newcollection/>
        <Newletter/>
    </div>
  )
}

export default Shop