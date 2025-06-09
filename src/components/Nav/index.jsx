import { AppBar, Toolbar, Button, Box } from '@mui/material';
import LanguageToggle from '../LanguageToggle';
import { useTranslation } from 'react-i18next';

export default function Nav() {
  const { t } = useTranslation();

  return (
    <AppBar position="sticky" color="default">
      <Toolbar sx={{ gap: 2 }}>
        <Button href="#home">{t('nav.home')}</Button>
        <Button href="#about">{t('nav.about')}</Button>
        <Button href="#services">{t('nav.services')}</Button>
        <Button href="#contact">{t('nav.contact')}</Button>

        <Box sx={{ marginLeft: 'auto' }}>
          <LanguageToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
}