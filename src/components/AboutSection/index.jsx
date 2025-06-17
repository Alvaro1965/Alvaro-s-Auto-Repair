import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import mechanicImg from "../../assets/images/mechanic-logo5.png";
import CustomCarousel from "../CustomCarousel";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const MotionGridItem = motion(Grid);
const MotionTypography = motion(Typography);
const MotionBox = motion(Box);

export default function AboutSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  const aboutImages = [
    { src: mechanicImg, alt: "Mechanic at work 1" },
    { src: mechanicImg, alt: "Mechanic at work 2" },
    { src: mechanicImg, alt: "Mechanic at work 3" },
  ];

  return (
    <Box component="section" id="about">
      <Grid
        container
        sx={{ margin: 0 }}
        spacing={0} //before it was 4
        alignItems="center"
        direction={{ xs: "column-reverse", sm: "row" }}
      >
        <MotionGridItem
          item
          xs={12}
          sm={6}
          component="aside"
          sx={{ p: 1 }} //delete if you change spacing 0 to 4
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          // viewport={{ once: true }}
        >
          <MotionBox
            sx={
              {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }
            }
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Box sx={{ width:'100%'}}>
              <CustomCarousel images={aboutImages} isMobile={isMobile} />
            </Box>
          </MotionBox>
        </MotionGridItem>

        <MotionGridItem
          item
          xs={12}
          sm={6}
          sx={{ p: 1 }} //delete if you change spacing 0 to 4
          component="article"
          textAlign="center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          // viewport={{ once: true }}
        >
          <MotionTypography
            variant="h4"
            gutterBottom
            align="center"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            // viewport={{ once: true }}
            sx={{
              borderBottom: (theme) => `4px solid ${theme.palette.third.main}`,
              display: "inline-block",
            }}
          >
            {t("About.title")}
          </MotionTypography>
          <MotionTypography
            variant="body1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            // viewport={{ once: true }}
            textAlign="left"
          >
            {t("About.description")}
          </MotionTypography>
        </MotionGridItem>
      </Grid>
    </Box>
  );
}