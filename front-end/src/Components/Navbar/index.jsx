import {
  Badge,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
export default function Navbar() {
  return (
    <Stack flexDirection={"row"} gap={"20px"} alignItems={"center"}>
      <Typography sx={{ color: "white", fontSize: "32px" }} component={"h1"}>
        House Shop
      </Typography>
    </Stack>
  );
}
