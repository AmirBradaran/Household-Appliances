import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Translate,
  DarkMode,
} from "@mui/icons-material";
import DarkModeIcon from "@mui/icons-material/Bedtime";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Footer = () => {
  return (
    <Box
      sx={{
        background: "var(--first-color)",
        color: "white",
        padding: 6,
        marginTop: "auto",
        direction: "rtl",
        borderTopRightRadius: "20%",
        borderTopLeftRadius: "20%",
        zIndex: 1005,
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", color: "var(--white-color)" }}
          >
            خانه آرا{" "}
          </Typography>
          <Typography sx={{ color: "var(--white-color)", fontSize: "1.25rem" }}>
            چیدمان خانه تان ، آرامش شمارا تغییر میدهد{" "}
          </Typography>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: "bold", color: "var(--white-color)" }}
          >
            دسترسی سریع
          </Typography>
          <List dense>
            {[
              { text: "درباره ما", to: "/about-us" },
              { text: "مجله ها", to: "/magazines" },
              { text: "ورود", to: "/auth" },
              { text: "خانه", to: "/" },
            ].map((link) => (
              <ListItem key={link.to} disableGutters>
                <Link
                  component={RouterLink}
                  to={link.to}
                  sx={{
                    color: "var(--white-color)",
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "none",
                      color: "var(--forth-color)",
                    },
                    fontWeight: "bold",
                  }}
                >
                  {link.text}
                </Link>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: "bold", color: "var(--white-color)" }}
          >
            برنامه هایی که درون آن هستیم
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <a
              href="https://www.instagram.com/codemashad/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton aria-label="Instagram">
                <InstagramIcon sx={{ color: "white", fontSize: "30px" }} />
              </IconButton>
            </a>

            <a
              href="https://t.me/Codemashad_021"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton aria-label="Telegram">
                <TelegramIcon sx={{ color: "white", fontSize: "30px" }} />
              </IconButton>
            </a>

            <a
              href="https://wa.me/your-whatsapp-number"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton aria-label="WhatsApp">
                <WhatsAppIcon sx={{ color: "white", fontSize: "30px" }} />
              </IconButton>
            </a>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4, backgroundColor: "var(--white-color)" }} />
      <Link to={"/"} style={{ display: "flex", justifyContent: "center" }}>
        <DarkMode sx={{ fontSize: "4.5rem", color: "var(--white-color)" }} />{" "}
      </Link>
    </Box>
  );
};

export default Footer;
