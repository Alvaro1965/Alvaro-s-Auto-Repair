import { Box, Typography, Stack, Link, Grid, } from "@mui/material";

export default function ContactSection() {

  return (
    <Box component="section" id="contact">
      <Typography variant="h4" gutterBottom>
        Contact
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Stack spacing={3}>
            <Box>
              <Typography variant="h6">Address:</Typography>
              <Typography variant="body1">
                1406 Church Street
                <br />
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
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 10:00 AM - 4:00 PM
                <br />
                Sunday: Closed
              </Typography>
            </Box>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: 300,
              border: "1px solid #ccc",
              borderRadius: 2,
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            }}>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.850473558205!2d-121.30206222454504!3d38.744193355730175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809b205b0676a03d%3A0xad84d3bb2ac11c01!2s1406%20Church%20St%2C%20Roseville%2C%20CA%2095678!5e0!3m2!1sen!2sus!4v1749942726830!5m2!1sen!2sus"
              width="100%"
              height="300px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}