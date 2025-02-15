import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Chip,
  TextField,
  Slider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  useMediaQuery,
} from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: purple,
  },
  typography: {
    fontFamily: 'Vazir, Arial, sans-serif',
  },
});

import {
  Search as SearchIcon,
  FavoriteBorder,
  Favorite,
  ShoppingCart,
  FilterList,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      sx={{
        maxWidth: isMobile ? "100%" : 350,
        minHeight: 450,
        borderRadius: 4,
        boxShadow: "0px 8px 24px rgba(149, 157, 165, 0.2)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0px 12px 32px rgba(149, 157, 165, 0.3)",
        },
      }}
    >
      {/* لینک به مسیر جدید /product-details/:id/:title */}
      <Link
        to={`/product-details/${product.id}/${product.title.replace(/\s+/g, '-').toLowerCase()}`}
        style={{ textDecoration: "none" }}
      >
        <CardMedia
          component="img"
          height="50%"
          image={product.image || "/placeholder.jpg"}
          alt={product.title}
          sx={{
            objectFit: "cover",
            p: 2,
            borderBottom: `1px solid ${purple[100]}`,
          }}
        />
        <Chip
          label={product.available ? "موجود در انبار" : "ناموجود"}
          color={product.available ? "success" : "error"}
          size="small"
          sx={{
            boxShadow: 1,
            fontWeight: 700,
            fontFamily: 'inherit',
          }}
        />
      </Link>

      <CardContent sx={{ px: 2.5, pt: 2, pb: 0 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 1000,
            height: 64,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            color: "var(--second-color)",
            fontSize: isMobile ? "1rem" : "1.175rem",
            fontFamily: 'inherit',
          }}
        >
          {product.title}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <Typography
            variant="h5"
            sx={{
              color: "var(--second-color)",
              fontWeight: 900,
              flexGrow: 1,
              fontSize: isMobile ? "1.2rem" : "1.3rem",
              fontFamily: 'inherit',
            }}
          >
            {(product.price || 0).toLocaleString('fa-IR')} تومان
          </Typography>
          <IconButton
            onClick={() => setIsFavorite((prev) => !prev)}
            sx={{ color: "red" }}
          >
            {isFavorite ? (
              <Favorite sx={{ color: "red" }} />
            ) : (
              <FavoriteBorder />
            )}
          </IconButton>
        </Box>
      </CardContent>

      <CardActions sx={{ px: 2.5, pb: 2.5 }}>
        <Button
          fullWidth
          variant="contained"
          startIcon={<ShoppingCart />}
          sx={{
            bgcolor: purple[600],
            "&:hover": { bgcolor: purple[800] },
            borderRadius: 3,
            py: 1,
            fontWeight: 700,
            fontSize: "0.95rem",
            fontFamily: 'inherit',
          }}
        >
          افزودن به سبد خرید
        </Button>
      </CardActions>
    </Card>
  );
};

const ProductListWithFilters = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([5, 10000000]);
  const [availability, setAvailability] = useState("all");
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setTimeout(() => {
      setProducts([
        { id: 1, title: "تلویزیون ال ای دی 50 اینچ سامسونگ", price: 9500000, available: true, image: "/G.jpg"  },
        { id: 2, title: "ماشین لباسشویی ال جی مدل F4V5VYP2T", price: 12000000, available: false, image: "/GG.jpg" },
        { id: 3, title: "یخچال فریزر ساید بای ساید سامسونگ مدل RS50", price: 4500000, available: true, image: "/G.jpg" },
        { id: 4, title: "اجاق گاز رومیزی بوش مدل PBP6C5B80", price: 3200000, available: true, image: "/GG.jpg" },
        { id: 5, title: "مایکروویو ال جی مدل MH8265CIS", price: 8500000, available: true, image: "/G.jpg" },
        { id: 6, title: "پلوپز تفال مدل RK100", price: 1800000, available: false, image: "/GG.jpg" },
        { id: 7, title: "جاروبرقی بوش مدل BGL8ZOO8", price: 5500000, available: true, image: "/G.jpg" },
        { id: 8, title: "آبگرمکن برقی کلمبیا مدل ECO", price: 2900000, available: true, image: "/GG.jpg" },
        { id: 9, title: "چای ساز فلر مدل TS125", price: 4800000, available: false, image: "/G.jpg" },
        { id: 10, title: "دستگاه قهوه ساز نسپرسو مدل Lattissima", price: 1500000, available: true, image: "/GG.jpg" },
        { id: 11, title: "آسیاب قهوه برقی بوش مدل TSM6A013B", price: 2600000, available: true, image: "/G.jpg" },
        { id: 12, title: "اتو بخار فیلیپس مدل GC2990", price: 3800000, available: true, image: "/G.jpg" },
      ]);
    }, 500);
  }, []);

  const filteredProducts = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1] &&
      (availability === "all" ||
        (availability === "available" && product.available) ||
        (availability === "unavailable" && !product.available))
    );
  });

  return (
    <Box sx={{ display: "flex", flexDirection: isTablet ? "column" : "row", p: 3, gap: 3, direction: 'rtl' }}>
      {/* بخش فیلترها */}
      {!isMobile && (
        <Box sx={{ 
          width: 300, 
          display: isTablet ? "none" : "block",
          position: 'sticky',
          top: 80,
          alignSelf: 'flex-start'
        }}>
          <Card sx={{ borderRadius: 4, boxShadow: 3, p: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 800, color: purple[800], fontFamily: 'inherit' }}>
              <FilterList sx={{ ml: 1, verticalAlign: "middle" }} />
              فیلتر محصولات
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 700, fontFamily: 'inherit' }}>
                محدوده قیمت (تومان)
              </Typography>
              <Slider
                value={priceRange}
                onChange={(e, newValue) => setPriceRange(newValue)}
                valueLabelDisplay="auto"
                min={5}
                max={10000000}
                valueLabelFormat={(value) => value.toLocaleString('fa-IR')}
                sx={{
                  color: purple[500],
                  "& .MuiSlider-valueLabel": {
                    backgroundColor: purple[500],
                    borderRadius: 2,
                    fontFamily: 'inherit',
                  },
                }}
              />
            </Box>

            <Box>
              <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 700, fontFamily: 'inherit' }}>
                وضعیت موجودی
              </Typography>
              <RadioGroup
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                sx={{ gap: 1 }}
              >
                <FormControlLabel
                  value="all"
                  control={<Radio sx={{ color: purple[500] }} />}
                  label="همه محصولات"
                  sx={{ "& .MuiFormControlLabel-label": { fontWeight: 500, fontFamily: 'inherit' } }}
                />
                <FormControlLabel
                  value="available"
                  control={<Radio sx={{ color: purple[500] }} />}
                  label="فقط موجود‌ها"
                  sx={{ "& .MuiFormControlLabel-label": { fontWeight: 500, fontFamily: 'inherit' } }}
                />
                <FormControlLabel
                  value="unavailable"
                  control={<Radio sx={{ color: purple[500] }} />}
                  label="فقط ناموجود‌ها"
                  sx={{ "& .MuiFormControlLabel-label": { fontWeight: 500, fontFamily: 'inherit' } }}
                />
              </RadioGroup>
            </Box>
          </Card>
        </Box>
      )}

      {/* بخش اصلی محصولات */}
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="جستجو در محصولات..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: purple[500], ml: 1.5 }} />,
              sx: {
                borderRadius: 3,
                height: 56,
                bgcolor: "background.paper",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: purple[200],
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: purple[300],
                },
                fontFamily: 'inherit',
              },
            }}
            sx={{ maxWidth: 500 }}
          />
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: 4,
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductListWithFilters;
