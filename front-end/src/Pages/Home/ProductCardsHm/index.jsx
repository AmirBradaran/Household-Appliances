import React, { useState } from "react";
import Cards from "./Cards";
import { Stack, Typography } from "@mui/material";

export default function ProductCards() {
  const [titleType, setTitleType] = useState();
  return (
    <Stack>
      <Typography
        sx={{
          mr: 12.5,
          fontSize: "30px",
          fontWeight: "bolder",
          width: "100%",
          color: "#18191E",
        }}
      >
        محبوب ترین ها
      </Typography>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          mx: 12,
          my: 2.5,
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </Stack>
    </Stack>
  );
}
