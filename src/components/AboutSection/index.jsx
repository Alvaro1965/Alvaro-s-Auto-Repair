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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta esse
            nihil voluptates impedit blanditiis reprehenderit suscipit iusto
            iure praesentium provident itaque, laudantium possimus explicabo
            omnis quisquam beatae voluptate earum atque. Non officiis obcaecati
            quas dignissimos reiciendis placeat incidunt animi quis illum...
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
