import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import mechanicImg from "../../assets/images/mechanic-logo5.png";
import CustomCarousel from "../CustomCarousel";
import { motion } from "framer-motion";

const MotionGridItem = motion(Grid);
const MotionTypography = motion(Typography);
const MotionBox = motion(Box);

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
      <Grid container spacing={4} alignItems="center" direction={{ xs: 'column-reverse', sm: 'row' }}>
        <MotionGridItem
          item
          xs={12}
          sm={6}
          component="aside"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <MotionBox
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <CustomCarousel images={aboutImages} isMobile={isMobile} />
          </MotionBox>
        </MotionGridItem>

        <MotionGridItem
          item
          xs={12}
          sm={6}
          component="article"
          textAlign="center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <MotionTypography
            variant="h3"
            gutterBottom
            align="center"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            sx={{
              borderBottom: (theme) => `4px solid ${theme.palette.third.main}`,
              display: "inline-block",
              mb: 4,
            }}
          >
            About
          </MotionTypography>
          <MotionTypography
            variant="body1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
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
          </MotionTypography>
        </MotionGridItem>
      </Grid>
    </Box>
  );
}