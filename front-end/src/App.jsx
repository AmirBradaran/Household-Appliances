import React from "react";
import { Toaster } from "react-hot-toast";
import Footer from "./Components/Footer";
import { Box, CssBaseline, Stack } from "@mui/material";
import Navbar from "./Components/Navbar"; 
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import { useSelector } from "react-redux";
import Cart from "./Pages/CartBox";
import ProductsCards from "./Pages/ProductsCards";
import ProductDetail from "./Pages/ProductDetail";
import Profile from "./Pages/Profile";
import Auth from "./Pages/Auth";
import NotFound from "./Pages/NotFound";
import AboutUs from "./Pages/AboutUs";
import FavoriteCards from "./Pages/FavoriteCards";
import "./App.css";

export default function App() {
  const { token } = useSelector((state) => state.auth);

  return (
    <Stack sx={{ backgroundColor: "transparent" }}>
      <CssBaseline />
      {/* Navbar */}
      <Navbar />
      <Box sx={{ backgroundColor: "", minHeight: "70vh" }} component={"main"}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cart" element={ <Cart />} />
          <Route path="/products/:categoryId/:category" element={<ProductsCards />} />
          <Route path="/product-details/:id/:name" element={<ProductDetail />} />
          <Route path="/auth" element={token ? <Navigate to="/profile" /> : <Auth />} />
          <Route path="/profile" element={token ? <Profile /> : <Navigate to="/auth" />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/favorites" element={<FavoriteCards />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
      {/* Footer */}
      <Footer />
      {/* Toast Notifications */}
      <Toaster />
    </Stack>
  );
}
