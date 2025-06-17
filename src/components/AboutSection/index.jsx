import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import mechanicImg from "../../assets/images/mechanic-logo5.png";
import CustomCarousel from "../CustomCarousel";

export default function AboutSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const aboutImages = [
    { src: mechanicImg, alt: "Mechanic at work 1" },
    { src: mechanicImg, alt: "Mechanic at work 2" },
    { src: mechanicImg, alt: "Mechanic at work 3" },
  ];

  return (
    <Box component="section" id="about" sx={{ py: 4 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} sm={6} component="aside">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
            }}
          >
            <CustomCarousel images={aboutImages} isMobile={isMobile} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} component="article" textAlign="center">
          <Typography variant="h3" gutterBottom align="center">
            About
          </Typography>
          <Typography variant="body1">
            With over 40 years of hands-on experience and more than 14 years serving 
            the community at this shop, we take pride in delivering honest, reliable, 
            and expert automotive care. What began as a passion for working on cars has 
            grown into a trusted neighborhood repair shop known for quality workmanship 
            and personalized service. Our lead mechanic has decades of experience with 
            a wide range of makes and models, from domestic classics to modern imports. 
            Whether it's routine maintenance or complex diagnostics, we treat every vehicle 
            with the care and attention it deserves. Our goal is to get the job done right 
            the first time. We believe in transparency, fair pricing, and building lasting 
            relationships. Thanks to word-of-mouth and loyal customers, we've become the 
            go-to shop for generations of families. We don't just fix cars. We help keep 
            our community safely on the road.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
