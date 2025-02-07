import React, { useState } from "react";
import "./index.css";
import { Stack, Typography } from "@mui/material";
export default function Cards() {
  const [imgProduct, setImgProduct] = useState();
  const [titleProduct, setTitleProduct] = useState();
  const [priceProductCart, setPriceProductCart] = useState();
  return (
    <Stack
      sx={{
        border: "1px solid white",
        height: "300px",
        width: "225px",
        borderRadius: 2.5,
        background: "#dfe4e8",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "3px 3px 8px gray",
      }}
    >
      <img src={imgProduct} />
      <Typography level:h4>{titleProduct}</Typography>
      <Typography>{priceProductCart}</Typography>
    </Stack>
  );
}
