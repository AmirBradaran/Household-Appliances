import React, { useState, useMemo } from "react";
import "../../index.css"
import {
  Badge,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
  SwipeableDrawer,
  List,
  ListItem,
  Divider,
  styled
} from "@mui/material";
import {
  DarkMode,
  CardGiftcard,
  FavoriteBorder,
  Search,
  Menu as MenuIcon,
  Close,
  Translate
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.common.white,
  transition: "all 0.3s ease",
  "&:hover": {
    color: theme.palette.secondary.main,
    transform: "translateY(-2px)"
  }
}));

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const cartLength = useSelector((state) => state.cart?.items?.length) || 0;
  const { token } = useSelector((state) => state.auth) || {};

  const navItems = useMemo(() => [
    { label: "دسته بندی ها", type: "menu" },
    { label: "ورود", path: "/auth" },
    { label: "مجله ها", path: "/magazines" },
    { label: "درباره ما", path: "/about-us" }
  ], []);

  const categories = useMemo(() => [
    "لوازم جانبی",
    "هدفون",
    "هدست",
    "هندزفری"
  ], []);

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const renderDesktopNav = () => (
    <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
      {navItems.map((item) => (
        item.type === "menu" ? (
          <Button
            key={item.label}
            onClick={handleMenuOpen}
            sx={{
              color: "common.white",
              fontSize: "1.1rem",
              fontWeight: 700,
              "&:hover": { color: "secondary.main" }
            }}
          >
            {item.label}
          </Button>
        ) : (
          <StyledLink key={item.label} to={item.path}>
            <Typography variant="subtitle1">{item.label}</Typography>
          </StyledLink>
        )
      ))}
    </Box>
  );

  const renderMobileNav = () => (
    <>
      <IconButton
        onClick={toggleDrawer(true)}
        aria-label="open navigation menu"
        sx={{ color: "common.white" , position:"absolute" , right:"45px" }}
      >
        <MenuIcon fontSize="large" />
      </IconButton>

      <SwipeableDrawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 280,
            background:"linear-gradient(135deg, var(--forth-color), var(--third-color))",
            color: "common.white"
          }
        }}
      >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
            <IconButton aria-label="close menu" sx={{ color: "common.white" }}>
              <Close />
            </IconButton>
          </Box>

          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} sx={{ py: 1.5 }}>
                <StyledLink to={item.path} sx={{ width: "100%" }}>
                  <Typography variant="h6">{item.label}</Typography>
                </StyledLink>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />

          <List>
            <Typography variant="h6" sx={{ px: 2, py: 1.5 }}>
              دسته بندی ها
            </Typography>
            {categories.map((category) => (
              <ListItem key={category} sx={{ py: 1 }}>
                <Typography variant="body1">{category}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  );

  return (
    <Box
      component="nav"
      sx={{
        position: "relative",
        top: 0,
        translate:"12.5% 0",
        width: "80%",
        zIndex: 1200,
        background:"linear-gradient(135deg, var(--forth-color), var(--third-color))",
        boxShadow: 3,
        py: 2,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
      }}
    >
      <Box
        sx={{
          maxWidth: 1280,
          margin: "0 auto",
          px: { xs: 2, md: 4 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position:"relative"
        }}
      >
        <Box sx={{ display: "flex", gap: 0, alignItems: "center" , position:"absolute" , left:"20px" }}>
          <StyledLink to="/cart" aria-label="shopping cart">
            <IconButton sx={{ p: 1 }}>
              <Badge badgeContent={cartLength} color="secondary">
                <CardGiftcard sx={{ fontSize: 32, color: "common.white" }} />
              </Badge>
            </IconButton>
          </StyledLink>

          <StyledLink to="/wishlist" aria-label="wishlist">
            <IconButton sx={{ p: 1 }}>
              <FavoriteBorder sx={{ fontSize: 32, color: "common.white" }} />
            </IconButton>
          </StyledLink>
        </Box>

        <StyledLink to="/" sx={{ mx: 2 }}>
          <DarkMode sx={{ fontSize: 48, color: "common.white" }} />
        </StyledLink>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 , position:"absolute" , right:"5%" }}>
          {isMobile ? renderMobileNav() : renderDesktopNav()}

          <IconButton aria-label="search" sx={{ color: "common.white" , position:"absolute" , right:"-15%" }}>
            <Search sx={{ fontSize: 32 }} />
          </IconButton>
        </Box>
      </Box>

      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={handleMenuClose}
        MenuListProps={{
          sx: {
            background:"linear-gradient(135deg, var(--forth-color), var(--third-color))",
            color: "common.white",
            minWidth: 180
          }
        }}
      >
        {categories.map((category) => (
          <MenuItem
            key={category}
            onClick={handleMenuClose}
            sx={{
              background:"",
              "&:hover": { bgcolor: "white" , color:"black" },
              py: 1.5
            }}
          >
            <Typography variant="body1">{category}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default React.memo(Navbar);