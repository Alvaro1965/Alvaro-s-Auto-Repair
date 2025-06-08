import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState } from 'react';

export default function LanguageToggle() {
  const [lang, setLang] = useState('en');

  const handleChange = (event, newLang) => {
    if (newLang !== null) {
      setLang(newLang);
      // later: add logic here to switch language content
    }
  };

  return (
    <ToggleButtonGroup
      value={lang}
      exclusive
      onChange={handleChange}
      size="small"
      aria-label="language toggle"
    >
      <ToggleButton value="en" aria-label="English">
        EN
      </ToggleButton>
      <ToggleButton value="es" aria-label="Spanish">
        ES
      </ToggleButton>
    </ToggleButtonGroup>
  );
}