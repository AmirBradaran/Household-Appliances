import { Stack, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function SuggestionSlider() {
  return (
    <Link to="/suggestions" style={{ textDecoration: "none" }}>
      <Stack
        sx={{
          border: "none",
          height: "40vh",
          width: "300px",
          borderRadius: 2,
          boxShadow: 10,
          bgcolor: "#f5f5f5",
          transition: "0.15s",
          "&:hover": { bgcolor: "#e0e0e0", transform: "scale(1.02)" },

        }}
      >
        <img
          src="/Wl.jpg"
          style={{
            borderRadius: 10,
            width: "100%",
            height: "100%",
            padding: "0px",
            margin: "0px",
            border:"none"
          }}
        />
      </Stack>
    </Link>
  );
}
