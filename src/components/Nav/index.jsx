import { AppBar, Toolbar, Button } from '@mui/material';

export default function Nav() {
  return (
    <AppBar position="sticky" color="default">
      <Toolbar sx={{ gap: 2 }}>
        <Button href="#home">Home</Button>
        <Button href="#about">About</Button>
        <Button href="#services">Services</Button>
        <Button href="#contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}