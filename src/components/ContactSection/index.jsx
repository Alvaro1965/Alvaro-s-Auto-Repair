import { Box, Typography, Stack, Link, Grid, Paper } from "@mui/material";

export default function ContactSection(){

  return(
    <Box component='section' id="contact">
      <Typography variant="h4" gutterBottom>
        Contact
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Stack spacing={3}>
            <Box>
              <Typography variant="h6">Address:</Typography>
              <Typography variant="body1">
                1406 Church Street<br />
                Roseville, CA 95678
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6">Phone Number:</Typography>
              <Link href="tel:+19165296016" underline="hover">
                (916) 529-6016
              </Link>
            </Box>

            <Box>
              <Typography variant="h6">Work Hours:</Typography>
              <Typography variant="body1">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </Typography>
            </Box>
          </Stack>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              minHeight: 300,
              backgroundColor: "#e0e0e0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              typography: "h6",
              color: "text.secondary",
            }}
          >
            Google Maps Placeholder
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}