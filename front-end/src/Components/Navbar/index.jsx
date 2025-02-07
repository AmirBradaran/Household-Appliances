import { Badge, IconButton, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
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
        boxShadow: "1px 1px 5px 5px rgba(0, 0, 0, 0.577);",
        background: "#071739",
        left: "15%",
        borderBottomRightRadius: "10px",
        borderBottomLeftRadius: "10px",
      }}
    >
      <Link to={"/"}>
        <Typography
          sx={{
            color: "white",
            fontSize: "30px",
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
      <Stack sx={{ display: "flex" , flexDirection:"row" , alignItems:"center" , position:"absolute" , right:50 , top:25 , gap:0}}>
        <Link to={"/product-cards"}>
          <IconButton aria-label="cart" component={"carts"}>
            <SearchIcon
              sx={{ color: "white", fontWeight: "bolder", fontSize: "30px" }}
            />
          </IconButton>
        </Link>
        <Link to={"/Cart"}>
        <Stack sx={{ display: "flex" , flexDirection:"row" , alignItems:"center" , gap:0  }}>
          <IconButton aria-label="cart" component={"carts"}>
            <Badge badgeContent={"1"} color="primary">
              <ShoppingBasketIcon
                sx={{ color: "white", fontWeight: "bolder", fontSize: "30px"}}
              />
            </Badge>
          </IconButton>
          <IconButton aria-label="cart" component={"carts"}>
              <AccountCircleIcon
                sx={{ color: "white", fontWeight: "bolder", fontSize: "30px" }}
              />
          </IconButton>
          <IconButton aria-label="cart" component={"carts"}>
            <Badge badgeContent={""} color="primary">
              <FavoriteBorderIcon
                sx={{ color: "white", fontWeight: "bolder", fontSize: "30px" }}
              />
            </Badge>
          </IconButton>
        </Stack>
        </Link>
      </Stack>
    </Stack>
  );
}
