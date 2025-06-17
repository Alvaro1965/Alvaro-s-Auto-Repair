import { AppBar, Toolbar, Button, Box, Grid } from '@mui/material';
import LanguageToggle from '../LanguageToggle';
import { useTranslation } from 'react-i18next';
import mechanicImg from '../../assets/images/mechanic-logo5.png';

export default function Nav() {
  const { t } = useTranslation();

  return (
    <AppBar position="sticky" color="default">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Grid container alignItems="center">
            <Grid item>
              <img src={mechanicImg} alt="MechanicImg" style={{ height: 60 }} />
            </Grid>
          </Grid>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Button href="#home">{t('nav.home')}</Button>
            </Grid>
            <Grid item>
              <Button href="#about">{t('nav.about')}</Button>
            </Grid>
            <Grid item>
              <Button href="#services">{t('nav.services')}</Button>
            </Grid>
            <Grid item>
              <Button href="#contact">{t('nav.contact')}</Button>
            </Grid>
            <Grid item>
              <LanguageToggle />
            </Grid>
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
