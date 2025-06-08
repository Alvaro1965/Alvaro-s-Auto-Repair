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

// code for switch
// import { Box, FormControlLabel, Switch } from '@mui/material';
// import { useState } from 'react';

// export default function LanguageToggle() {
//   const [isSpanish, setIsSpanish] = useState(false);

//   const handleChange = (event) => {
//     setIsSpanish(event.target.checked);
//     // Add logic to switch languages here
//   };

//   return (
//     <Box>
//       <FormControlLabel
//         control={
//           <Switch
//             checked={isSpanish}
//             onChange={handleChange}
//             color="primary"
//           />
//         }
//         label={isSpanish ? 'Español' : 'English'}
//         labelPlacement="start" // Places the label to the left of the switch
//       />
//     </Box>
//   );
// }
