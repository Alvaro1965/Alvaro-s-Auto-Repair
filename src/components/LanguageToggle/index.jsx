import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || 'en');

  const handleChange = (event, newLang) => {
    if (newLang !== null) {
      setLang(newLang);
      i18n.changeLanguage(newLang);
    }
  };

  return (
    <ToggleButtonGroup
      value={lang}
      exclusive
      onChange={handleChange}
      aria-label="Language toggle"
      size="small"
      sx={{
        backgroundColor: 'white',
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: 1,
        ml: 2,
      }}
    >
      <ToggleButton
        value="en"
        aria-label="English"
        sx={{
          fontWeight: 'bold',
          textTransform: 'uppercase',
          px: 2,
          '&.Mui-selected': {
            backgroundColor: 'primary.main',
            color: 'white',
          },
        }}
      >
        EN
      </ToggleButton>
      <ToggleButton
        value="es"
        aria-label="Spanish"
        sx={{
          fontWeight: 'bold',
          textTransform: 'uppercase',
          px: 2,
          '&.Mui-selected': {
            backgroundColor: 'primary.main',
            color: 'white',
          },
        }}
      >
        ES
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
