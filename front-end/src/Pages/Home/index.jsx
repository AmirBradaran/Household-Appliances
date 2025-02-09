import SliderHm from "./SliderHm/index";
import CategoriesHm from "./CategoriesHm/index";
import BestSells from "./BestSells/index";
import NewstSells from "./NewstSells/index";
import SuggestionSlider from "./SuggestionSlider/index";
import React from "react";
import { Stack } from "@mui/material";
import SuggestionCarts from "./SuggestionCarts";

export default function Home() {
  return (
    <Stack sx={{ py: 5 }}>
      <Stack
        sx={{
          height:"50vh",
          display: "flex",
          flexDirection: "row",
          flexWrap:"wrap",
          px:12,
          py:5,
          background:"linear-gradient(to bottom, var(--forth-color), var(--white-color))"
        }}
      >
        <SuggestionSlider />
        <SliderHm />
        <SuggestionSlider />
      </Stack>
      <CategoriesHm />
      <SuggestionCarts/>/
      <NewstSells/>
      <BestSells />
    </Stack>
  );
}
