import React from "react";
import { Card, Grid, Typography, Box, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const ProductList = () => {
  const theme = useTheme();
  const products = [
    {
      img: "/images/product1.jpg",
      title: "هدفون",
      model: "MACHINES XIII HERD",
      price: "۱,۷۰۰,۰۰۰ تومان",
    },
    {
      img: "/images/product2.jpg",
      title: "هدست",
      model: "معدلي كيميك كوهرستر",
      price: "۲,۵۰۰,۰۰۰ تومان",
    },
    {
      img: "/images/product3.jpg",
      title: "شارژر آیپد",
      model: "GAINING Radoon BX 2800",
      price: "۳,۲۰۰,۰۰۰ تومان",
    },
    {
      img: "/images/product4.jpg",
      title: "هندزفری",
      model: "كوضى ايل مدل",
      price: "۴,۰۰۰,۰۰۰ تومان",
    },
    {
      img: "/images/product5.jpg",
      title: "هندزفری",
      model: "كوضى ايل مدل",
      price: "۴,۰۰۰,۰۰۰ تومان",
    },
  ];

  return (
    <Box
      sx={{
        padding: theme.spacing(2),
        direction: "rtl",
        width: "90%",
        margin: theme.spacing(4, "auto"),
        background:
          "linear-gradient(to right, var(--forth-color), var(--six-color))",
        boxShadow: "2px 4px 10px 2px rgba(0,0,0,0.2)",
        borderRadius: 4,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        flexDirection: "row", // Title & Cards in Row
        justifyContent: "space-between",
      }}
    >
      {/* Title Section */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "250px", // Fix width for title
          padding: theme.spacing(3),
          background: "rgba(255,255,255,0.1)",
          borderRadius: 2,
          backdropFilter: "blur(5px)",
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            color: "var(--second-color)",
            fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3rem" },
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          پیشنهادات ویژه
        </Typography>
      </Box>

      {/* Product Cards Section */}
      <Grid
        container
        spacing={2}
        sx={{
          position: "relative",
          zIndex: 1,
          p: 0,
          m: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          flexWrap: "nowrap",
          overflowX: "auto",
          gap: theme.spacing(2),
          paddingBottom: theme.spacing(2),
          whiteSpace: "nowrap",
        }}
      >
        {products.map((product, index) => (
          <Grid
            item
            key={index}
            sx={{
              flex: "0 0 auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link
              to="#" // Add a real link here
              style={{ textDecoration: "none", display: "block" }}
            >
              <Card
                sx={{
                  width: 250,
                  minHeight: 350,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: theme.spacing(3),
                  borderRadius: 4,
                  transition: "all 0.3s ease",
                  background: "rgba(255,255,255,0.9)",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                    background: "rgba(255,255,255,1)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: 150,
                    borderRadius: 2,
                    mb: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={product.img}
                    alt={product.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain", // Prevents image cropping
                    }}
                  />
                </Box>

                <Box sx={{ textAlign: "center", flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{
                      color: "var(--primary-color)",
                      fontSize: { xs: "1.2rem", md: "1.4rem" },
                      mb: 2,
                    }}
                  >
                    {product.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.6,
                      minHeight: 60,
                      fontSize: { xs: "0.9rem", md: "1rem" },
                    }}
                  >
                    {product.model}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    textAlign: "center",
                    mt: 3,
                    pt: 2,
                    borderTop: `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "var(--third-color)",
                      fontWeight: "bold",
                      fontSize: { xs: "1.1rem", md: "1.3rem" },
                      letterSpacing: "0.5px",
                    }}
                  >
                    {product.price}
                  </Typography>
                </Box>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
