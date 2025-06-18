import {
  Box,
  Grid,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import mechanicLogo from "../../assets/images/mechanic-logo5.png";
import carImg from "../../assets/images/photo7.jpg";
import { useTranslation, Trans } from "react-i18next";
import CustomCarousel from "../CustomCarousel";

export default function HomeSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const carouselImages = [
    { src: mechanicLogo, alt: "Mechanic Logo" },
    { src: carImg, alt: "classic dodge charger" },
  ];

  return (
    <Box component="section" id="home" sx={{ pt:4,pb:8 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} sm={6} component="article" textAlign="center"
          sx={{ color: theme.palette.text.primary }}
        >
          <Typography variant="h3" gutterBottom>
            <Trans
              i18nKey="home.title"
              components={{
                name: <span style={{ fontWeight: "bold", color: theme.palette.third.main }} />,
              }}
            />
          </Typography>
          <Typography variant="body1" gutterBottom>
            {t("home.description")}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleScrollToContact}
            sx={{
              backgroundColor: theme.palette.third.main,
              color: theme.palette.primary.main,
              "&:hover": {
                backgroundColor: theme.customColors.hoverAccent,
              },
            }}
          >
            {t("home.cta")}
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} component="aside">
          <Box sx={{display:'flex', justifyContent:'center'}}>
            <CustomCarousel images={carouselImages} isMobile={isMobile} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}