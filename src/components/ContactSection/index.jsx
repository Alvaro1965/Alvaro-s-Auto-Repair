import { Box, Typography, Stack, Link } from "@mui/material";

export default function ContactSection(){

  return(
    <Box component='section' id="contact">
      <Typography variant="h4" gutterBottom>
        Contact
      </Typography>

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
          <Link href='tel: +19165296016' underline='hover'>
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
    </Box>
  )
}