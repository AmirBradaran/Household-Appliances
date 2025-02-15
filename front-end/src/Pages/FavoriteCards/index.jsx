import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Box,
  Button,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Favorite, FavoriteBorder, AddShoppingCart } from "@mui/icons-material";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});
const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#ff4081",
    },
    secondary: {
      main: "#3f51b5",
    },
  },
});

const FavoriteCardsPage = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "جاروبرقی مدل X200",
      price: 299.99,
      description: "جاروبرقی با قدرت مکش بالا و طراحی سبک برای راحتی استفاده",
      image: "/C.jpg",
      isFavorite: true,
    },
    {
      id: 2,
      title: "یخچال فریزر مدل Y100",
      price: 799.99,
      description: "یخچال فریزر با طراحی مدرن و کم مصرف، مناسب برای خانواده‌های بزرگ",
      image: "/C.jpg",
      isFavorite: true,
    },
    {
      id: 3,
      title: "ماشین لباسشویی مدل Z500",
      price: 499.99,
      description: "ماشین لباسشویی با قابلیت شستشوی سریع و صرفه‌جویی در مصرف انرژی",
      image: "/C.jpg",
      isFavorite: true,
    },
    {
      id: 4,
      title: "چای ساز مدل S300",
      price: 99.99,
      description: "چای ساز با سرعت بالا و قابلیت گرم نگه‌داشتن چای برای مدت طولانی",
      image: "/C.jpg",
      isFavorite: true,
    },
    {
      id: 5,
      title: "میکسر مدل M400",
      price: 119.99,
      description: "میکسر قدرتمند با تنظیمات مختلف برای انواع نوشیدنی‌ها و غذاها",
      image: "/C.jpg",
      isFavorite: true,
    },
    {
      id: 6,
      title: "آبگرمکن برقی مدل W200",
      price: 199.99,
      description: "آبگرمکن برقی با مصرف انرژی بهینه و قابلیت تنظیم دما",
      image: "/C.jpg",
      isFavorite: true,
    },
    {
      id: 7,
      title: "اتو بخار مدل S700",
      price: 79.99,
      description: "اتو بخار با دمای قابل تنظیم و سیستم ضد چکه برای لباس‌هایی صاف و بدون چروک",
      image: "/C.jpg",
      isFavorite: true,
    },
    {
      id: 8,
      title: "کولر گازی مدل C500",
      price: 399.99,
      description: "کولر گازی با قابلیت تنظیم دما و مصرف انرژی پایین، مناسب برای فضاهای مختلف",
      image: "/C.jpg",
      isFavorite: true,
    },
    {
      id: 9,
      title: "ماکروویو مدل M200",
      price: 159.99,
      description: "مایکروویو با قابلیت گریل و پخت سریع برای استفاده راحت در آشپزخانه",
      image: "/C.jpg",
      isFavorite: true,
    },
    {
      id: 10,
      title: "چرخ گوشت مدل G600",
      price: 139.99,
      description: "چرخ گوشت با موتور قدرتمند و طراحی ارگونومیک برای راحتی در استفاده",
      image: "/D.jpg",
      isFavorite: true,
    },
    {
      id: 11,
      title: "آسیاب قهوه مدل C900",
      price: 89.99,
      description: "آسیاب قهوه با تنظیمات مختلف برای دستیابی به قهوه‌ای با طعم دلخواه",
      image: "/D.jpg",
      isFavorite: true,
    },
    {
      id: 12,
      title: "دستگاه تصفیه هوا مدل A300",
      price: 219.99,
      description: "دستگاه تصفیه هوا با فیلتر HEPA برای پاکسازی هوای خانه از آلاینده‌ها",
      image: "/D.jpg",
      isFavorite: true,
    },
    {
      id: 13,
      title: "تلویزیون LED مدل L700",
      price: 799.99,
      description: "تلویزیون ۴K LED با کیفیت تصویر بالا و سیستم صوتی قدرتمند",
      image: "/D.jpg",
      isFavorite: true,
    },
    {
      id: 14,
      title: "یخچال ساید بای ساید مدل S700",
      price: 999.99,
      description: "یخچال ساید بای ساید با سیستم ضد برفک و فضای داخلی جادار",
      image: "/D.jpg",
      isFavorite: true,
    },
    {
      id: 15,
      title: "سشوار مدل H500",
      price: 49.99,
      description: "سشوار با تنظیمات دما و سرعت مختلف برای خشک کردن سریع موها",
      image: "/D.jpg",
      isFavorite: true,
    },
    {
      id: 16,
      title: "غذاساز مدل F100",
      price: 179.99,
      description: "غذاساز چندکاره با انواع امکانات برای تهیه غذاهای متنوع",
      image: "/D.jpg",
      isFavorite: true,
    },
    {
      id: 17,
      title: "آب سرد کن مدل WC300",
      price: 249.99,
      description: "آب سرد کن با سیستم فیلتر آب و ظرفیت بالا برای استفاده روزمره",
      image: "/D.jpg",
      isFavorite: true,
    },
    {
      id: 18,
      title: "سرویس چای خوری مدل T500",
      price: 39.99,
      description: "سرویس چای خوری با طراحی زیبا و کیفیت عالی برای سرو چای در مهمانی‌ها",
      image: "/D.jpg",
      isFavorite: true,
    },
    {
      id: 19,
      title: "کتری برقی مدل K300",
      price: 59.99,
      description: "کتری برقی با ظرفیت بالا و طراحی زیبا برای جوشاندن سریع آب",
      image: "/D.jpg",
      isFavorite: true,
    },
    {
      id: 20,
      title: "همزن مدل H600",
      price: 99.99,
      description: "همزن با سرعت‌های مختلف و توان بالا برای هم زدن مواد مختلف",
      image: "/D.jpg",
      isFavorite: true,
    },
    {
      id: 21,
      title: "پلوپز مدل P100",
      price: 129.99,
      description: "پلوپز با قابلیت پخت برنج به صورت خودکار و با کیفیت بالا",
      image: "/G.jpg",
      isFavorite: true,
    },
    {
      id: 22,
      title: "آبمیوه گیری مدل J500",
      price: 159.99,
      description: "آبمیوه گیری با موتور قدرتمند و قابلیت استخراج بهترین آبمیوه‌ها",
      image: "/G.jpg",
      isFavorite: true,
    },
    {
      id: 23,
      title: "پخش کننده موسیقی مدل M300",
      price: 79.99,
      description: "پخش کننده موسیقی با کیفیت صدای عالی و قابلیت اتصال به بلوتوث",
      image: "/G.jpg",
      isFavorite: true,
    },
    {
      id: 24,
      title: "دوربین مداربسته مدل C400",
      price: 229.99,
      description: "دوربین مداربسته با کیفیت تصویر بالا و قابلیت ضبط شبانه‌روزی",
      image: "/G.jpg",
      isFavorite: true,
    },
    {
      id: 25,
      title: "قهوه ساز مدل C800",
      price: 119.99,
      description: "قهوه ساز با تکنولوژی جدید و قابلیت تنظیم میزان غلظت قهوه",
      image: "/G.jpg",
      isFavorite: true,
    },
  ]);
  
  
  

  const handleRemoveFavorite = (cardId) => {
    setCards(cards.filter((card) => card.id !== cardId));
  };

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Container
          maxWidth="lg"
          sx={{
            py: 4,
            background:
              "linear-gradient(135deg, var(--first-color) 50% , var(--six-color) 60%)",
            borderRadius: 4,
            boxShadow: 4,
            padding: 3,
            my: 2.5,
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
              mb: 4,
              letterSpacing: 2,
            }}
          >
            کارت های مورد علاقه من
          </Typography>

          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 4,
                    boxShadow: 6,
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "scale(1.03)",
                      boxShadow: 10,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={card.image}
                    alt={card.title}
                    sx={{
                      height: 240,
                      objectFit: "cover",
                      borderTopLeftRadius: 4,
                      borderTopRightRadius: 4,
                    }}
                  />

                  <CardContent
                    sx={{
                      flexGrow: 1,
                      textAlign: "right",
                      background: "#fff",
                      borderRadius: "0 0 4px 4px",
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      color="secondary"
                      sx={{ fontSize: "1.5rem", fontWeight: "bolder" }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2, fontSize: "1.15rem", fontWeight: "bold" }}
                    >
                      {card.description}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="h6"
                        color="primary"
                        sx={{ fontSize: "1.25rem", fontWeight: "bolder" }}
                      >
                        {card.price.toLocaleString("fa-IR")} تومان
                      </Typography>
                    </Box>
                  </CardContent>

                  <CardActions
                    sx={{ justifyContent: "space-between", px: 2, pb: 2 }}
                  >
                    <IconButton
                      aria-label="حذف از علاقه‌مندیها"
                      onClick={() => handleRemoveFavorite(card.id)}
                      color="error"
                    >
                      <Favorite />
                    </IconButton>
                    <Button
                      variant="contained"
                      size="medium"
                      startIcon={<AddShoppingCart />}
                      sx={{
                        borderRadius: 20,
                        backgroundColor: "#ff4081",
                        "&:hover": { backgroundColor: "#e91e63" },
                      }}
                    >
                      افزودن به سبد خرید
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default FavoriteCardsPage;
