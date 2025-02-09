import { Box, Typography, useTheme, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";

const products = [
  { title: "هدفون", price: "1,700,000" },
  { title: "هدفون", price: "2,000,000" },
  { title: "هدفون", price: "1,000,000" },
  { title: "هدفون", price: "3,000,000" },
  { title: "هدفون", price: "2,000,000" },
  { title: "هدفون", price: "9,000,000" },
  { title: "هدفون", price: "9,000,000" },
  { title: "هدفون", price: "9,000,000" },
  { title: "هدفون", price: "9,000,000" },
  { title: "هدفون", price: "9,000,000" },
  { title: "هدفون", price: "9,000,000" },
  { title: "هدفون", price: "9,000,000" },
];

const BestSells = () => {
  const theme = useTheme();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Box sx={{ direction: "rtl", padding: 4, position: "relative" }}>
      <Typography
    variant="h4"
    fontWeight="bold"
    sx={{
      color: "var(--primary-color)",
      borderBottom: "3px solid var(--first-color)",
      paddingBottom: "5px",
      display: "inline-block",
    }}
  >
    تازه ترین ها
  </Typography>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={5}
        slidesPerView={7}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          200: { slidesPerView: 1 },
          350: { slidesPerView: 2 },
          600: { slidesPerView: 3 },
          900: { slidesPerView: 4 },
          1200: { slidesPerView: 7 },
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                border: `1px solid var(--six-color)`,
                borderRadius: 2,
                padding: 2,
                textAlign: "center",
                height: "30vh",
                width: "180px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: theme.palette.background.paper,
                boxShadow: theme.shadows[1],
              }}
            >
              <img src="" alt="" style={{ height: "120px", width: "100%" }} />
              <Typography variant="h6" gutterBottom>
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.price}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      <IconButton
        ref={prevRef}
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: "5px",
          zIndex: 10,
          color: theme.palette.primary.main,
          backgroundColor: "rgba(255, 255, 255, 0.48)",
          boxShadow: theme.shadows[2],
          "&:hover": { backgroundColor: "rgba(255,255,255,1)" },
        }}
      >
        <ChevronRight fontSize="large" />
      </IconButton>

      <IconButton
        ref={nextRef}
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: "5px",
          zIndex: 10,
          color: theme.palette.primary.main,
          backgroundColor: "rgba(255, 255, 255, 0.47)",
          boxShadow: theme.shadows[2],
          "&:hover": { backgroundColor: "rgba(255,255,255,1)" },
        }}
      >
        <ChevronLeft fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default BestSells;
