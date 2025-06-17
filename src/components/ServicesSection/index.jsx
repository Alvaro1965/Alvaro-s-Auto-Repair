import { Box, Grid, Typography, useTheme } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOilCan } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function ServicesSection() {
  const { t } = useTranslation();
  const theme = useTheme();

  const services = [
    { icon: <FontAwesomeIcon icon={faOilCan} size="2x" />, label: t('services.oil') },
    { icon: <BuildIcon fontSize="large" />, label: t('services.brakes') },              
    { icon: <MiscellaneousServicesIcon fontSize="large" />, label: t('services.tuneups') },  
    { icon: <BatteryChargingFullIcon fontSize="large" />, label: t('services.battery') },
    { icon: <PlumbingIcon fontSize="large" />, label:  t('services.suspension') },
    { icon: <RotateRightIcon fontSize="large" />, label: t('services.waterPump') },  
    { icon: <AcUnitIcon fontSize="large" />, label: t('services.ac') },
    { icon: <DirectionsCarIcon fontSize="large" />, label: t('services.diagnostics')},
  ];

  return (
    <Box component="section" id="services" sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant="h4" align="center" gutterBottom 
        sx={{
          borderBottom: `4px solid ${theme.palette.third.main}`,
          display: 'inline-block',
          mb:4,
        }}
      >
        {t('services.title')}
      </Typography>

      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {service.icon}
              <Typography variant="subtitle1" sx={{ mt: 1 }}>
                {service.label}
              </Typography>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Typography variant="body1" sx={{ mt: 4 }}>
        {t('services.footer')}
      </Typography>
    </Box>
  );
}