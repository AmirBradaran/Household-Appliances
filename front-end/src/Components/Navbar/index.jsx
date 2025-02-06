import { Badge, IconButton, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import "./index.css";
export default function Navbar() {
  return (
    <Stack
      component={"nav"}
      flexDirection={"row"}
      width={"70%"}
      sx={{
        height: "70px",
        py: 5,
        position: "relative",
        boxShadow: "2px 2px 10px 5px rgba(0, 0, 0, 0.577);",
        background: "#DF9146",
        left:"15%",
        borderBottomRightRadius:"10px",
        borderBottomLeftRadius:"10px"
      }}
    >
      <Link to={"/"}>
        <Typography
          sx={{
            color: "white",
            fontSize:"30px",
            fontWeight: "bolder",
            position: "absolute",
            left: "5%",
            top: "25%",
            textDecoration: "none",
          }}
        >
          خانه آرا
        </Typography>
      </Link>
      <Link to={"/product-cards"}>
        <IconButton
          aria-label="cart"
          component={"carts"}
          sx={{ position: "absolute", right: "16%", top: "30%" }}
        >
          <SearchIcon sx={{ color: "white" }} />
        </IconButton>
      </Link>
      <Link to={"/Cart"}>
        <IconButton
          aria-label="cart"
          component={"carts"}
          sx={{ position: "absolute", right: "4%", top: "30%" }}
        >
          <Badge badgeContent={""} color="primary">
            <ShoppingBasketIcon sx={{ color: "white" }} />
          </Badge>
        </IconButton>
        <IconButton
          aria-label="cart"
          component={"carts"}
          sx={{ position: "absolute", right: "8%", top: "30%" }}
        >
          <Badge badgeContent={""} color="primary">
            <AccountCircleIcon sx={{ color: "white" }} />
          </Badge>
        </IconButton>
        <IconButton
          aria-label="cart"
          component={"carts"}
          sx={{ position: "absolute", right: "12%", top: "30%" }}
        >
          <Badge badgeContent={""} color="primary">
            <FavoriteBorderIcon sx={{ color: "white" }} />
          </Badge>
        </IconButton>
      </Link>
    </Stack>
  );
}
