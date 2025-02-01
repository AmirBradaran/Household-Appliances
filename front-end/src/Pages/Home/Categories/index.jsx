import React from 'react'
import Card from './Card'
import "./index.css"
export default function Categories() {
  return (
    <section className='ctCardHome'>
      <h3>
        دسته بندی
      </h3>
      
      <div className='cardsHome'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
    </section>
  )
}
