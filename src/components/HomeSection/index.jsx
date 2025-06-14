import { Box, Grid, Typography, Button, useMediaQuery, useTheme } from "@mui/material";
import mechanicImg from "../../assets/images/mechanic-logo5.png";
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-responsive-carousel';

const arrowStyles = {
  position: 'absolute',
  top: 'calc(50% - 15px)',
  zIndex: 2,
  width: 30,
  height: 30,
  cursor: 'pointer',
  border: 'none',
  background: 'rgba(0, 0, 0, 0.5)',
  color: '#fff',
  fontSize: '35px',
  borderRadius: '50%',
};

export default function HomeSection() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { t } = useTranslation();

  return (
    <Box component="section" id="home" sx={{ minHeight: "100vh", py: 8 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} sm={6} component="article" textAlign="center">
          <Typography variant="h3" gutterBottom>
            {t('home.title')}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {t('home.description')}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleScrollToContact}
          >
            {t('home.cta')}
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} component="aside">
          <Carousel
            autoPlay
            infiniteLoop
            interval={4000}
            showThumbs={false}
            showStatus={false}
            showArrows={true}
            swipeable={isMobile}
            emulateTouch={true}
            stopOnHover={true}
            renderArrowPrev={(onClickHandler, hasPrev) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  
                  style={{ ...arrowStyles, left: 15 }}
                >
                  <span style={{ display: "block", transform: "translateY(-8px)"}}> ‹ </span>
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  style={{ ...arrowStyles, right: 15 }}
                >
                  <span style={{ display: "block", transform: "translateY(-8px)" }}>›</span>
                </button>
              )
            }
          >
            {[mechanicImg, mechanicImg, mechanicImg].map((img) => (
              <img src={img} alt={`Mechanic`} />
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </Box>
  );
}