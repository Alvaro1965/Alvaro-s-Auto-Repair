import { Box, Grid, Typography, Button } from "@mui/material";
import mechanicImg from "../../assets/images/mechanic-logo5.png";

export default function HomeSection() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box component="section" id="home" sx={{ minHeight: "100vh", py: 8 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} sm={6} component="article">
          <Typography variant="h3" gutterBottom>
            Welcome to Alvaro's Auto Repair
          </Typography>
          <Typography>
            Reliable, affordable, and fast auto care—done right the first time.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleScrollToContact}
          >
            Call Now!
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