import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import "./index.css"
export default function Categories() {
  return (
    <Grid container spacing={2} sx={{my:2}}>
      <Grid item xs={6} md={3} sx={{border:1 , borderRadius:2 }}>
        <Link to={"/"}> <img src="image1.jpg" alt="Category 1" /> </Link>
      </Grid>
      <Grid item xs={6} md={3} sx={{border:1 , borderRadius:2 }}>
        <Link to={"/"}> <img src="image2.jpg" alt="Category 2" /> </Link>
      </Grid>
      <Grid item xs={6} md={6} sx={{border:1 , borderRadius:2 }}>
        <Link to={"/"}> <img src="image3.jpg" alt="Category 3" /> </Link>
      </Grid>
      <Grid item xs={6} md={6} sx={{border:1 , borderRadius:2 }} >
        <Link to={"/"}> <img src="image4.jpg" alt="Category 4" /> </Link>
      </Grid>
      <Grid item xs={6} md={3} sx={{border:1 , borderRadius:2 }}>
        <Link to={"/"}> <img src="image5.jpg" alt="Category 5" /> </Link>
      </Grid>
      <Grid item xs={6} md={3} sx={{border:1 , borderRadius:2 }}>
        <Link to={"/"}> <img src="image6.jpg" alt="Category 6" /> </Link>
      </Grid>
    </Grid>
  );
}
