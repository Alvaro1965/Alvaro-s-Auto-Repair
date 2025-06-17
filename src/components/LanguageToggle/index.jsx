import { ToggleButton, ToggleButtonGroup, useTheme } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || "en");
  const theme = useTheme();

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
        backgroundColor: "white",
        borderRadius: 1,
        overflow: "hidden",
      }}
    >
      {["en", "es"].map((lng) => (
        <ToggleButton
          key={lng}
          value={lng}
          aria-label={lng === "en" ? "English" : "Spanish"}
          sx={{
            fontWeight: "bold",
            fontSize: "12px",
            textTransform: "uppercase",
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.primary,
            px: 1.5,
            "&.Mui-selected": {
              backgroundColor: theme.palette.third.main,
              color: theme.palette.primary.main,
            },
            "&:hover": {
              backgroundColor: theme.customColors.hoverAccent,
              color: theme.palette.primary.main,
            },
            '&.Mui-selected:hover': {
              backgroundColor: theme.palette.third.main,
            },
          }}
        >
          {lng.toUpperCase()}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
