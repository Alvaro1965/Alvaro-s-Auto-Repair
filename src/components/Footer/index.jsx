import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 2, textAlign: 'center', }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} Alvaro's Auto Repair. All rights reserved.
      </Typography>

      <Typography variant="caption">
        Made by{' '}
        <Link href="https://antbyte.netlify.app/" target="_blank" rel="noopener" underline="hover">
          AntByte
        </Link>
      </Typography>
    </Box>
  );
}