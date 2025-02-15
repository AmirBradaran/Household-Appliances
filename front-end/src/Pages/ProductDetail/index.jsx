import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Rating,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
  Fade,
  Grow,
  Zoom,
} from "@mui/material";
import { AddShoppingCart, FavoriteBorder, Share } from "@mui/icons-material";

const products = [
  {
    id: 1,
    name: "ال جی تلویزیون",
    price: "1.700.000",
    rating: 4.5,
    description: "کفش دویدن با عملکرد بالا و رویه مشبک تنفس‌پذیر و بالشتک پاسخگو.",
    features: [
      "رویه بافتنی قابل تنفس",
      "فناوری میانی پاسخگو",
      "زیره لاستیکی بادوام",
      "طراحی سبک وزن",
    ],
    images: ["/C.jpg", "/D.jpg", "/G.jpg", "/GG.jpg"],
    sizes: ["قرمز", "آبی", "زرد", "مشکی", "سفید"],
    sizeColors: {
      "قرمز": "#D32F2F",
      "آبی": "#1976D2",
      "زرد": "#FBC02D",
      "مشکی": "#000000",
      "سفید": "#FFFFFF",
    },
  },
];

const ProductDetail = () => {
  const theme = useTheme();
  const { id } = useParams();
  const location = useLocation();
  const product = location.state?.product || products.find((p) => p.id === parseInt(id, 10));
  const [selectedSize, setSelectedSize] = useState("");
  const [mainImage, setMainImage] = useState(0);

  if (!product) {
    return <Typography variant="h6">محصول یافت نشد</Typography>;
  }

  const handleSizeChange = (event, newSize) => {
    setSelectedSize(newSize);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4, direction: "rtl" }}>
      <Fade in timeout={500}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative" }}>
              <Grow in timeout={800}>
                <Box
                  component="img"
                  src={product.images[mainImage]}
                  alt={product.name}
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 2,
                    mb: 2,
                    boxShadow: 3,
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                  }}
                />
              </Grow>
              <Box sx={{ display: "flex", gap: 2, overflowX: "auto", py: 2 }}>
                {product.images.map((img, index) => (
                  <Zoom in timeout={(index + 1) * 300} key={index}>
                    <Box
                      onClick={() => setMainImage(index)}
                      sx={{
                        cursor: "pointer",
                        border:
                          mainImage === index
                            ? `2px solid ${theme.palette.primary.main}`
                            : "1px solid #e0e0e0",
                        borderRadius: 1,
                        overflow: "hidden",
                        flexShrink: 0,
                        transition: "border-color 0.3s ease-in-out",
                        "&:hover": {
                          borderColor: theme.palette.primary.main,
                        },
                      }}
                    >
                      <img
                        src={img}
                        alt={`تصویر ${index + 1}`}
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                  </Zoom>
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
              {product.name}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Rating value={product.rating} precision={0.5} readOnly />
              <Typography variant="body2" sx={{ ml: 1, color: "text.secondary" }}>
                (۱۲۸ نظر)
              </Typography>
            </Box>

            <Typography variant="h5" sx={{ mb: 3, color: "primary.main", fontWeight: 600 }}>
              {product.price} تومان
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="body1" paragraph sx={{ mb: 3, lineHeight: 1.8 }}>
              {product.description}
            </Typography>

            <Box component="ul" sx={{ pr: 3, mb: 4 }}>
              {product.features.map((feature, index) => (
                <li key={index}>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {feature}
                  </Typography>
                </li>
              ))}
            </Box>

            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              انتخاب رنگ
            </Typography>
            <ToggleButtonGroup
              value={selectedSize}
              exclusive
              onChange={handleSizeChange}
              sx={{ mb: 3 }}
            >
              {product.sizes.map((size) => (
                <ToggleButton
                  key={size}
                  value={size}
                  sx={{
                    width: 100,
                    backgroundColor: "white",
                    color: product.sizeColors[size] ? "#000" : "inherit",
                    "&:hover": {
                      backgroundColor: product.sizeColors[size] || "inherit",
                    },
                    "&.Mui-selected": {
                      backgroundColor: product.sizeColors[size] || theme.palette.primary.main,
                      color: theme.palette.primary.contrastText,
                    }
                  }}
                >
                  {size}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>

            <Box sx={{ display: "flex", gap: 2, mb: 4, flexDirection: { xs: "column", sm: "row" } }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<AddShoppingCart />}
                sx={{
                  flexGrow: 1,
                  py: 1.5,
                  fontWeight: 600,
                  boxShadow: 3,
                  mb: { xs: 2, sm: 0 },
                }}
              >
                افزودن به سبد خرید
              </Button>
              <Box sx={{ display: "flex", gap: 2, mt: { xs: 2, sm: 0 } }}>
                <IconButton color="primary" sx={{ border: "1px solid", boxShadow: 3 }}>
                  <FavoriteBorder />
                </IconButton>
                <IconButton color="primary" sx={{ border: "1px solid", boxShadow: 3 }}>
                  <Share />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Fade>
    </Container>
  );
};

export default ProductDetail;
