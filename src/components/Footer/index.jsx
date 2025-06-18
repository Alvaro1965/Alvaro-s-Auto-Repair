import { Box, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt:2,
        width: "100%",
        py: 2,
        textAlign: "center",
        backgroundColor: (theme) => theme.palette.secondary.main,
        color: (theme) => theme.palette.primary.main,
      }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} Alvaro's Auto Repair. All rights reserved.
      </Typography>

      <Typography variant="caption">
        Made by{" "}
        <Link
          href="https://antbyte.netlify.app/"
          target="_blank"
          rel="noopener"
          underline="hover"
          sx={{ color: (theme) => theme.palette.third.main }}
        >
          AntByte
        </Link>
      </Typography>
    </Box>
  );
}