import { Badge, Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import "../../index.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from '@mui/icons-material/Search';
export default function Navbar() {
  const { token } = useSelector((state) => state.auth);
  const cartLength = useSelector((state) => state.cart.items).length;
  const dispatch = useDispatch();
  return (
    <Stack
      sx={{
        position: "relative",
        background:
          "linear-gradient(to right, var(--forth-color), var(--six-color)) ",
        width: "90%",
        height: "10vh",
        transform: "translateX(5%)",
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",
        boxShadow: "1px 1px 5px 5px gray",
      }}
    >
      <Stack sx={{display:"flex" , flexDirection:"row" , alignItems:"center" , gap:0.5 , position:"absolute" , left:10 , top:"10%"}}>
        <Link to={"/cart"}>
          <IconButton aria-label="cart">
            <Badge badgeContent={cartLength} color="primary" >
              <CardGiftcardIcon
                sx={{
                  fontSize:"35px",
                  color: "white",
                  background:"linear-gradient(to right, var(--seven-color), var(--fifth-color))",
                  borderRadius:"100%",
                  padding:1.25,
                  height:"60px",
                  width:"60px"
                }}
              />
            </Badge>
          </IconButton>
        </Link>
        <Link to={""}>
        <IconButton aria-label="like">
          <FavoriteBorderIcon sx={{ color: "white", fontSize: "35px"}} />
        </IconButton>
        </Link>
        <Link>
        <IconButton aria-label="search">
          <SearchIcon sx={{ color: "white", fontSize: "35px" }} />
        </IconButton>
        </Link>
        </Stack>
      <Link to={"/"}>
        <DarkModeIcon
          sx={{
            color: "white",
            fontSize: "50px",
            position: "absolute",
            top: "22.5%",
            left: "49.5%",
          }}
        />
      </Link>
      <Stack sx={{position:"absolute" , right:10 , top:"25%" , direction:"rtl" , display:"flex" , alignItems:"center"}}>
        <Link to={"/about-us"} style={{textDecoration:"none" , color:"var(--first-color)"}}>
        <Typography sx={{fontSize:"20px" , fontWeight:"bolder"}}>
          درباره ما
        </Typography>
        </Link>
      </Stack>
    </Stack>
  );
}
