import { AppBar, Toolbar, Button, Box, Grid, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageToggle from '../LanguageToggle';
import { useTranslation } from 'react-i18next';
import mechanicImg from '../../assets/images/mechanic-logo5.png';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

export default function Nav() {
  const { t } = useTranslation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.contact'), href: '#contact' }
  ];

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor:'#1e1e1e'}}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={mechanicImg} alt="Mechanic Logo" style={{ height: 60 }} />
          </Box>

          {isMobile ? (
            <Box>
              <IconButton edge="end" onClick={toggleDrawer(true)}>
                <MenuIcon sx={{ color: '#F5F1E6 '}}/>
              </IconButton>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {navItems.map((item) => (
                <Button key={item.href} href={item.href}>
                  {item.label}
                </Button>
              ))}
              <LanguageToggle />
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250, backgroundColor: '#1e1e1e', color: '#F5F1E6', height: '100%' }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navItems.map((item) => (
              <ListItem button key={item.href} component="a" href={item.href}>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
            <ListItem>
              <LanguageToggle />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
