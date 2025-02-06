import React, { useState } from 'react'
import "./index.css"
import { Stack, Typography } from '@mui/material'
export default function Cards() {
  const[imgProduct,setImgProduct]=useState()
  const[titleProduct,setTitleProduct]=useState()
  const[priceProductCart,setPriceProductCart]=useState()
  return (
    <Stack sx={{border:"1px solid black" , height:"300px", width:"225px" , mx:10 , my:5 , borderRadius:2.5}}>
      <img src={imgProduct} />
      <Typography level:h4 >{titleProduct}</Typography>
      <Typography>{priceProductCart}</Typography>
    </Stack>
  )
}
