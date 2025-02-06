import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import "./index.css";
import { Typography } from "@mui/material";
export default function Categories() {
  const [imgCategory , setImgCategory]=useState()
  const [titleCategory , setTitleCategory]=useState()
  return (
    <Grid container spacing={2} sx={{ my: 4 , justifyContent:"center" , gap:10 , height:"200px" }}>
      <Grid item xs={6} md={3} height={150} sx={{ border: 1, borderRadius: 2 , height:"100%"}}>
        <Link to={"/products/:categoryId/:category"}>
          <img src={imgCategory} />
          <Typography level:h4 >{titleCategory}</Typography>
        </Link>
      </Grid>
      <Grid item xs={6} md={3} sx={{ border: 1, borderRadius: 2 , height:"100%" }}>
        <Link to={"/products/:categoryId/:category"}>
          <img src={imgCategory} />
          <Typography level:h4 >{titleCategory}</Typography>
        </Link>
      </Grid>
    </Grid>
  );
}
