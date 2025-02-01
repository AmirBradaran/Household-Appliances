import React from 'react'
import "./index.css"
import Slider from './Slider'
import Categories from './Categories'
import ProductCards from './ProductCards'
export default function Home() {
  return (
    <body className='homeBody'>
    <Slider/>
    <Categories/>
    <ProductCards/>
    </body>
  )
}
