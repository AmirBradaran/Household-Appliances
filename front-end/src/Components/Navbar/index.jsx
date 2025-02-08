import React, { useState } from "react";
import { Badge, Box, Button, IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import "../../index.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";

export default function Navbar() {
  const { token } = useSelector((state) => state.auth);
  const cartLength = useSelector((state) => state.cart.items).length;
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 0.5,
          position: "absolute",
          left: 10,
          top: "10%",
        }}
      >
        <Link to={"/cart"}>
          <IconButton aria-label="cart">
            <Badge badgeContent={cartLength} color="primary">
              <CardGiftcardIcon
                sx={{
                  fontSize: "35px",
                  color: "white",
                  background:
                    "linear-gradient(to right, var(--seven-color), var(--fifth-color))",
                  borderRadius: "100%",
                  padding: 1.25,
                  height: "60px",
                  width: "60px",
                }}
              />
            </Badge>
          </IconButton>
        </Link>
        <Link to={""}>
          <IconButton aria-label="like">
            <FavoriteBorderIcon sx={{ color: "white", fontSize: "35px" }} />
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

      <Stack
        sx={{
          position: "absolute",
          right: 10,
          top: "25%",
          direction: "rtl",
          display: "flex",
          flexDirection: "row",
          gap: 2.5,
          alignItems: "center",
        }}
      >
        <Button onClick={handleMenuClick} style={{ textDecoration: "none", color: "var(--first-color)" , fontSize:"20px" , fontWeight:"bolder"}}>
          دسته بندی ها
        </Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={handleClose} style={{background:"black" , color:"white"}}>لوازم جانبی</MenuItem>
          <MenuItem onClick={handleClose}>هدفون</MenuItem>
          <MenuItem onClick={handleClose}>هدست</MenuItem>
          <MenuItem onClick={handleClose}>هندزفری</MenuItem>
        </Menu>

        <Link to={"/"} style={{ textDecoration: "none", color: "var(--first-color)" }}>
          <Typography sx={{ fontSize: "20px", fontWeight: "bolder" }}>
            مجله ها
          </Typography>
        </Link>
        <Link to={"/about-us"} style={{ textDecoration: "none", color: "var(--first-color)" }}>
          <Typography sx={{ fontSize: "20px", fontWeight: "bolder" }}>
            درباره ما
          </Typography>
        </Link>
      </Stack>
    </Stack>
  );
}
