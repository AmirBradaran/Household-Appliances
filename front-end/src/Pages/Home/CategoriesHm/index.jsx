import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';

const NumberedCategories = () => {
  const categories = [
    { title: 'هدفون' },
    { title: 'هدست' },
    { title: 'هندزفری' },
    { title: 'لوازم جانبی' },
  ];

  return (
    <Box sx={{ padding: 0 }}>
      <Grid container spacing={1} style={{ justifyContent: "center" }}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={2} key={index}>
            <Paper
              elevation={3}
              sx={{
                padding: 3,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                transition: "0.3s",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#0067A5",
                  color: "#fff",
                  transform: "scale(1.05)",
                  boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
                },
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                {category.title}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NumberedCategories;
