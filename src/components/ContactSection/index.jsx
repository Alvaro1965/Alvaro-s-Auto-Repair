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
            123 Main Street<br />
            Hometown, CA 90000
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6">Phone Number:</Typography>
          <Link href='tel: +1234567890' underline='hover'>
            (123) 456-7890
          </Link>
        </Box>

        <Box>
          <Typography variant="h6">Work Hours:</Typography>
          <Typography variant="body1">
            Monday – Friday: 9:00 AM – 6:00 PM<br />
            Saturday: 10:00 AM – 4:00 PM<br />
            Sunday: Closed
          </Typography>
        </Box>
      </Stack>
    </Box>
  )
}