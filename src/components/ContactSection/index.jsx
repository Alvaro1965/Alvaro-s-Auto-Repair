import { Box, Typography, Stack, Link, Grid, } from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import TimeIcon from '@mui/icons-material/AccessTime';
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from '@mui/material/styles';

const MotionGridItem = motion(Grid);
const MotionTypography = motion(Typography);
const MotionBox = motion(Box);

export default function ContactSection() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box component="section" id="contact" sx= {{textAlign: { xs: 'center', md: 'left' } }}>
      <MotionTypography
        variant="h4"
        gutterBottom
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        sx={{
          borderBottom: (theme) => `4px solid ${theme.palette.third.main}`,
          display: "inline-block",
          mb: 4,
        }}
      >
        {t("Contact.title")}
      </MotionTypography>

      <Grid container spacing={4}>
        <MotionGridItem
          item
          xs={12}
          md={6}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Stack spacing={3}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography variant="h5">
                <PlaceIcon fontSize="small" /> {t("Contact.address")}
              </Typography>
              <Typography variant="body1">
                1406 Church Street
                <br />
                Roseville, CA 95678
              </Typography>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Typography variant="h5">
                <CallIcon fontSize="small" /> {t("Contact.phone")}
              </Typography>
              <Link href="tel:+19165296016" underline="hover" style={{ color: theme.palette.secondary.main, fontWeight: 'bold' }}>
                (916) 529-6016
              </Link>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Typography variant="h5">
                <TimeIcon fontSize="small" /> {t("Contact.hours")}
              </Typography>
              <Typography variant="body1">
                {t("Contact.week")}
                <br />
                {t("Contact.closed")}
              </Typography>
            </MotionBox>
          </Stack>
        </MotionGridItem>

        <MotionGridItem
          item
          xs={12}
          md={6}
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <MotionBox
            sx={{
              height: 300,
              border: "1px solid #ccc",
              borderRadius: 2,
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            }}
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.850473558205!2d-121.30206222454504!3d38.744193355730175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809b205b0676a03d%3A0xad84d3bb2ac11c01!2s1406%20Church%20St%2C%20Roseville%2C%20CA%2095678!5e0!3m2!1sen!2sus!4v1749942726830!5m2!1sen!2sus"
              width="100%"
              height="300px"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </MotionBox>
        </MotionGridItem>
      </Grid>
    </Box>
  );
}