import SliderHm from "./SliderHm/index"
import CategoriesHm from "./CategoriesHm/index"
import ProductCardsHm from "./ProductCardsHm/index"
import Suggestions from "./Suggestions/index"
import React from 'react'
import { Stack } from "@mui/material"

export default function Home() {
  return (
    <Stack sx={{py:5}}>
      <Stack sx={{display:"flex", flexDirection:"row" , flexWrap:"wrap" , justifyContent:"center" , alignItems:"center" , mx:12.5 }}>
      <Suggestions/>
      <SliderHm/>
      <Suggestions/>
      </Stack>
      <CategoriesHm/>
      <ProductCardsHm/>
    </Stack>
  )
}
