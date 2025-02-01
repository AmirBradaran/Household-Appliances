import {
  Badge,
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./index.css";
export default function Navbar() {
  return (
    <Stack
      component={"nav"}
      flexDirection={"row-reverse"}
      gap={"20px"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ backgroundColor: "whitesmoke", height: "70px", py: 5 }}
    >
      <Typography
        sx={{ color: "black", fontSize: "22px", fontWeight: "bolder" }}
        component={"h3"}
      >
        دیجیتال شاپ
      </Typography>
      <Link to={"/"}>
        <TextField
          fullWidth
          label="....جستجو"
          id="fullWidth"
          sx={{
            width: 500,
            boxShadow: "5px 5px 10px black",
            borderRadius: 10,
            border: "none",
          }}
        />
      </Link>
      <Link to={"/Cart"}>
        <IconButton aria-label="cart">
          <Badge badgeContent={""} color="primary">
            <ShoppingBasketIcon sx={{ color: "black" }} />
          </Badge>
        </IconButton>
        <IconButton aria-label="cart">
          <Badge badgeContent={""} color="primary">
            <AccountCircleIcon sx={{ color: "black" }} />
          </Badge>
        </IconButton>
        <IconButton aria-label="cart">
          <Badge badgeContent={""} color="primary">
            <FavoriteBorderIcon sx={{ color: "black" }} />
          </Badge>
        </IconButton>
      </Link>
    </Stack>
  );
}
