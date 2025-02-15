import React from "react";
import { Card, Grid, Typography, Box, useTheme } from "@mui/material";
import { Link } from "react-router-dom";  // استفاده از Link
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ProductList = () => {
  const theme = useTheme();
  const products = [
    {
      id: 1,
      img: "/D.jpg",
      title: "تلویزیون ال ای دی 50 اینچ سامسونگ",
      model: "MACHINES XIII HERD",
      price: "۱,۷۰۰,۰۰۰ تومان",
    },
    {
      id: 2,
      img: "/D.jpg",
      title: "ماشین لباسشویی ال جی مدل F4V5VYP2T",
      model: "معدلي كيميك كوهرستر",
      price: "۲,۵۰۰,۰۰۰ تومان",
    },
    {
      id: 3,
      img: "/D.jpg",
      title: "یخچال فریزر ساید بای ساید سامسونگ مدل RS50",
      model: "GAINING Radoon BX 2800",
      price: "۳,۲۰۰,۰۰۰ تومان",
    },
    {
      id: 4,
      img: "/D.jpg",
      title: "اجاق گاز رومیزی بوش مدل PBP6C5B80",
      model: "كوضى ايل مدل",
      price: "۴,۰۰۰,۰۰۰ تومان",
    },
    {
      id: 5,
      img: "/D.jpg",
      title: "مایکروویو ال جی مدل MH8265CIS",
      model: "كوضى ايل مدل",
      price: "۴,۰۰۰,۰۰۰ تومان",
    },
    {
      id: 6,
      img: "/D.jpg",
      title: "پلوپز تفال مدل RK100",
      model: "كوضى ايل مدل",
      price: "۴,۰۰۰,۰۰۰ تومان",
    },
    {
      id: 7,
      img: "/D.jpg",
      title: "جاروبرقی بوش مدل BGL8ZOO8",
      model: "كوضى ايل مدل",
      price: "۴,۰۰۰,۰۰۰ تومان",
    },
    {
      id: 8,
      img: "/D.jpg",
      title: "آبگرمکن برقی کلمبیا مدل ECO",
      model: "كوضى ايل مدل",
      price: "۴,۰۰۰,۰۰۰ تومان",
    },
    {
      id: 9,
      img: "/D.jpg",
      title: "چای ساز فلر مدل TS125",
      model: "كوضى ايل مدل",
      price: "۴,۰۰۰,۰۰۰ تومان",
    },
    {
      id: 10,
      img: "/D.jpg",
      title: "دستگاه قهوه ساز نسپرسو مدل Lattissima",
      model: "كوضى ايل مدل",
      price: "۴,۰۰۰,۰۰۰ تومان",
    },
    {
      id: 11,
      img: "/D.jpg",
      title: "آسیاب قهوه برقی بوش مدل TSM6A013B",
      model: "كوضى ايل مدل",
      price: "۴,۰۰۰,۰۰۰ تومان",
    },
    {
      id: 12,
      img: "/D.jpg",
      title: "اتو بخار فیلیپس مدل GC2990",
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
          "var(--first-color)",
        boxShadow: "2px 4px 10px 2px rgba(0,0,0,0.2)",
        borderRadius: 4,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 5,
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: theme.spacing(3),
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: 2,
          backdropFilter: "blur(5px)",
          mb: 2,
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            color: "var(--six-color)",
            fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3rem" },
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          پیشنهادات ویژه
        </Typography>
      </Box>
      <Swiper
        modules={[Pagination]}
        slidesPerView={4.5}
        spaceBetween={"2%"}
        pagination={{ clickable: true }}
        breakpoints={{
          200: { slidesPerView: 1 },
          600: { slidesPerView: 1.5 },
          1020: { slidesPerView: 2.5 },
          1350: { slidesPerView: 3.5 },
          1600: { slidesPerView: 4.5 },
        }}
        style={{ width: "85%", padding: "1% 0" }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} style={{ background: "none" }}>
            <Grid
              item
              sx={{
                flex: "0 0 auto",
                display: "flex",
                justifyContent: "center",
                background: "transparent",
              }}
            >
              <Link to={`/product-detail/${product.id}`} style={{ textDecoration: "none", display: "block", background: "transparent" }}>
                <Card
                  sx={{
                    width: 250,
                    minHeight: 350,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: 2,
                    borderRadius: 4,
                    transition: "all 0.3s",
                    background: "var(--six-color)",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                      background: "var(--white-color)",
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
                        objectFit: "contain",
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
                        color: "var(--first-color)",
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
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ProductList;
