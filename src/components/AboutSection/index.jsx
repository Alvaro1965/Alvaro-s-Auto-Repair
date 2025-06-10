import { Box, Typography, Grid } from "@mui/material";
import mechanicImg from "../../assets/images/mechanic-logo5.png";

export default function AboutSection() {
  return (
    <Grid container sx={{ width: '100%' }}>
      {/* Image */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 2,
          }}
        >
          <Box
            component="img"
            src={mechanicImg}
            alt="Auto Repair"
            sx={{
              maxWidth: '50%',
              height: 'auto',
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
        </Box>
      </Grid>

      {/* About section */}
      <Grid item xs={12} md={6}>
        <Box component="section" id="about" sx={{ maxWidth: 730, mx: 'auto', p: 2 }}>
          <Typography variant="h3" gutterBottom align="center">
            About
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dicta esse nihil voluptates impedit blanditiis reprehenderit
            suscipit iusto iure praesentium provident itaque,
            laudantium possimus explicabo omnis quisquam beatae voluptate
            earum atque. Non officiis obcaecati quas dignissimos reiciendis
            placeat incidunt animi quis illum...
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
