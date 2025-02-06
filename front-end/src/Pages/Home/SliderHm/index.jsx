import React, { useState } from "react";
import "./index.css";
import { Badge, IconButton } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
export default function Slider() {
  const [imgSlider , setImgSlider] = useState()

  const [currentIndex , setCurrentIndex]=useState(0)
  const handleClickNext = () => {
    setCurrentIndex(currentIndex == img.length - 1 ? 0 : currentIndex + 1);
  };
  const handleClickPrev = () => {
    setCurrentIndex(currentIndex == 0 ? img.length - 1 : currentIndex - 1);
  };
  return (
    <section className="slider"> 
      <img src={imgSlider}className="show" />
      <div className="arrowSlider"> 
      <IconButton aria-label="cart" onClick={handleClickPrev}>
        <ArrowCircleRightIcon sx={{ color: "black" , fontSize:40 }} />
      </IconButton>
      <IconButton aria-label="cart" onClick={handleClickNext}>
        <ArrowCircleLeftIcon sx={{ color: "black" , fontSize:40 }}/>
      </IconButton>
      </div>
    </section>
  );
}
