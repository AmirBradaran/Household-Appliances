import React from 'react'
import "./index.css"
import Slider from './SliderHm'
import Categories from './CategoriesHm'
import ProductCards from './ProductCardsHm'
export default function Home() {
  return (
    <body className='homeBody' >
    <Slider/>
    <Categories/>
    <ProductCards/>
    </body>
  )
}
