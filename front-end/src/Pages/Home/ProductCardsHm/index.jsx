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
          borderBottom: "4px dashed #4C453D",
          width: "12.5%",
          color:"#18191E"
        }}
      >
        محبوب ترین ها
      </Typography>
      <Cards />
    </Stack>
  );
}
