import { Box, Grid, Typography, Button } from "@mui/material";
import mechanicImg from "../../assets/images/mechanic-logo5.png";
import { useTranslation } from 'react-i18next';

export default function HomeSection() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { t } = useTranslation();

  return (
    <Box component="section" id="home" sx={{ minHeight: "100vh", py: 8 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} sm={6} component="article" textAlign="center">
          <Typography variant="h3" gutterBottom>
            {t('home.title')}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {t('home.description')}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleScrollToContact}
          >
            {t('home.cta')}
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} component="aside">
          <img
            src={mechanicImg}
            alt="Auto Repair"
            style={{ width: "100%", borderRadius: 8 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}