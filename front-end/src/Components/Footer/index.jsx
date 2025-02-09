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
} from "@mui/icons-material";
import DarkModeIcon from "@mui/icons-material/Bedtime";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Footer = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(to top, var(--forth-color), var(--white-color))",
        color: "white",
        padding: 6,
        marginTop: "auto",
        direction: "rtl",
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", color: "var(--first-color)" }}
          >
            صدا پلاس
          </Typography>
          <Typography variant="title" sx={{ color: "var(--first-color)" }}>
            هدفون‌هایتان، دنیای شما را تغییر می‌دهند
          </Typography>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: "bold", color: "var(--first-color)" }}
          >
            دسترسی سریع
          </Typography>
          <List dense>
            {[
              { text: "درباره ما", to: "/about-us" },
              { text: "مجله ها", to: "/magazines" },
              { text: "ورود", to: "/auth" },
            ].map((link) => (
              <ListItem key={link.to} disableGutters>
                <Link
                  component={RouterLink}
                  to={link.to}
                  sx={{
                    color: "var(--first-color)",
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
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
            sx={{ fontWeight: "bold", color: "var(--first-color)" }}
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

      <Divider sx={{ my: 4, backgroundColor: "var(--first-color)" }} />
      <Link to={"/"} style={{ display: "flex", justifyContent: "center" }}>
        <DarkModeIcon
          sx={{
            color: "white",
            fontSize: "50px",
          }}
        />
      </Link>
    </Box>
  );
};

export default Footer;
