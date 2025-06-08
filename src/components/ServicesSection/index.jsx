import { Box, Grid, Typography } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const services = [
  { icon: <LocalGasStationIcon fontSize="large" />, label: 'Oil Change' },
  { icon: <BuildIcon fontSize="large" />, label: 'Brake Service' },              // ✅ Brakes
  { icon: <MiscellaneousServicesIcon fontSize="large" />, label: 'Tune-Ups' },  // ✅ Tune-ups
  { icon: <BatteryChargingFullIcon fontSize="large" />, label: 'Battery Replacement' },
  { icon: <PlumbingIcon fontSize="large" />, label: 'Suspension & Steering' },
  { icon: <RotateRightIcon fontSize="large" />, label: 'Water Pump Repair' },   // ✅ Water Pumps
  { icon: <AcUnitIcon fontSize="large" />, label: 'AC & Heating Repair' },
  { icon: <DirectionsCarIcon fontSize="large" />, label: 'Engine Diagnostics' },
  { icon: <MoreHorizIcon fontSize="large" />, label: 'And More...' },
];

export default function ServicesSection() {
  return (
    <Box component="section" id="services" sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Services
      </Typography>

      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} sx={{ textAlign: 'center' }}>
            {service.icon}
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              {service.label}
            </Typography>
          </Grid>
        ))}
      </Grid>

      <Typography align="center" variant="body1" sx={{ mt: 4 }}>
        Don’t see what you need? Just ask — Alvaro offers a wide range of general auto repair services.
      </Typography>
    </Box>
  );
}