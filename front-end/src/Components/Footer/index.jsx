import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import "./index.css";

export default function Footer() {
  return (
    <Box
      sx={{
        gap:"15px",
        background: "#071739",
        display: "flex",
        flexDirection: "row",
        position:"relative",
        flexWrap: "wrap",
        direction: "rtl",
        py: 5,
        px: 12.5,
      }}
    >
      <Typography variant="h4" sx={{color:'white' , position:"absolute" , left:"0", px:15 }} >خانه آرا</Typography>
      <Stack
        sx={{
          width: "150px",
        }}
      >
        <Typography variant="h6" sx={{ color: "white", fontWeight: "bolder", pb: "15px" }}>
          راه های سریع
        </Typography>
        <Link to={"/about-us"}>
          <Typography
            sx={{
              color: "white",
              fontWeight: "bolder",
              fontsize: "30px",
              textDecorationLine: "none",
              lineHeight: "30px",
            }}
          >
            درباره ما
          </Typography>
        </Link>
        <Link to={"/auth"}>
          <Typography
            level="h3"
            sx={{
              color: "white",
              fontWeight: "bolder",
              fontsize: "30px",
              textDecorationLine: "none",
              lineHeight: "30px",
            }}
          >
            ورود
          </Typography>
        </Link>
        <Link to={"/products/:categoryId/:category"}>
          <Typography
            level="h3"
            sx={{
              color: "white",
              fontWeight: "bolder",
              fontsize: "30px",
              textDecorationLine: "none",
              lineHeight: "30px",
            }}
          >
            محصولات
          </Typography>
        </Link>
      </Stack>
      <Stack sx={{}}>
        <Typography variant="h6" sx={{ color: "white", fontWeight: "bolder" }}>
          راه های ارتباطی
        </Typography>
        <Link to={"/"}>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              color: "white",
            }}
          >
            <IconButton>
              <LocationOnIcon
                sx={{ color: "white", fontsize: "35px", fontWeight: "bolder" }}
              />
            </IconButton>
            <Typography>مشهد - دانش آموز 8 - پلاک 117</Typography>
          </Stack>
        </Link>
        <Link to={"https://www.instagram.com/codemashad/"}>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              color: "white",
            }}
          >
            <IconButton>
              <InstagramIcon
                sx={{ color: "white", fontsize: "35px", fontWeight: "bolder" }}
              />
            </IconButton>
            <Typography>CodeMashad</Typography>
          </Stack>
        </Link>
        <Link to={"/"}>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              color: "white",
            }}
          >
            <IconButton>
              <PhoneAndroidIcon
                sx={{ color: "white", fontsize: "35px", fontWeight: "bolder" }}
              />
            </IconButton>
            <Typography>09301905219</Typography>
          </Stack>
        </Link>
      </Stack>
    </Box>
  );
}
