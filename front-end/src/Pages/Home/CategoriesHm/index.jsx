import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import HeadsetIcon from '@mui/icons-material/Headset';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import BuildIcon from '@mui/icons-material/Build';
import { BedroomParent, Kitchen, LivingTwoTone } from '@mui/icons-material';

const NumberedCategories = () => {
  const categories = [
    { title: 'لوازم آشپزخانه', icon: <Kitchen style={{ fontSize: 50 }} /> },
    { title: 'لوازم اتاق', icon: <BedroomParent style={{ fontSize: 50 }} /> },
    { title: 'لوازم نشیمنگاه', icon: <LivingTwoTone style={{ fontSize: 50 }} /> },
    { title: 'لوازم جانبی', icon: <BuildIcon style={{ fontSize: 50 }} /> },
  ];

  return (
    <Box sx={{ padding: 0 }}>
      <Grid container spacing={3} justifyContent="center">
        {categories.map((category, index) => (
          <Grid item xs={6} sm={5} md={2} lg={1} key={index}>
            <Paper
              elevation={3}
              sx={{
                my: 3,
                padding: 3,
                height: '125px',
                width: '125px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                cursor: "pointer",
                background: "linear-gradient(to top , var(--first-color) 5% , var(--white-color) 20%)",
                borderRadius: 100,
                transition: "all 5s ",
                "&:hover": {
                  background: "var(--white-color)",
                  color: "var(--second-color)",
                  transform: "scale(1.05)",
                  boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
                },
                boxShadow:"0px 10px 8px 2px var(--first-color)"
              }}
            >
              <Box>
                {category.icon}
                <Typography variant="h7" fontWeight="bold" sx={{ marginTop: 1 }}>
                  {category.title}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NumberedCategories;
