import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import CustomCarousel from "../CustomCarousel";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import mechanicCarImg1 from "../../assets/images/photo1.png";
import mechanicCarImg2 from "../../assets/images/photo3.png";
import mechanicCarImg4 from "../../assets/images/photo6.jpg";

const MotionGridItem = motion(Grid);
const MotionTypography = motion(Typography);
const MotionBox = motion(Box);

export default function AboutSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  const aboutImages = [
    { src: mechanicCarImg1, alt: "Mechanic at work" },
    { src: mechanicCarImg2, alt: "Mechanic with engine" },
    { src: mechanicCarImg4, alt: "Mustang" },
  ];

  return (
    <Box component="section" id="about">
      <Grid
        container
        sx={{ margin: 0 }}
        spacing={0}
        alignItems="center"
        direction={{ xs: "column-reverse", sm: "row" }}
      >
        <MotionGridItem
          item
          sm={12}
          md={6}
          component="aside"
          sx={{ px: 2, mt: 3 }}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
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
            <Box sx={{ width: { sm: '50%', md: '100%'}, pb:2, display:'flex', justifyContent:'center'}}>
              <CustomCarousel images={aboutImages} isMobile={isMobile} />
            </Box>
          </MotionBox>
        </MotionGridItem>

        <MotionGridItem
          item
          sm={12}
          md={6}
          sx={{ px: 2, mt: 3 }}
          component="article"
          textAlign="center"
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <MotionTypography
            variant="h4"
            gutterBottom
            align="center"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
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
            textAlign="left"
            viewport={{ once: true }}
          >
            {t("About.description")}
          </MotionTypography>
        </MotionGridItem>
      </Grid>
    </Box>
  );
}