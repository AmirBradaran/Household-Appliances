import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';

const NumberedCategories = () => {
  const categories = [
    { title: 'هدفون', hoverColor: '#FF7F5F' },
    { title: 'هدست', hoverColor: '#0067A5' },  // Blue
    { title: 'هندزفری', hoverColor: '#28a745' }, // Green
    { title: 'لوازم جانبی', hoverColor: '#7714B0' },
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
                backgroundColor: "#fff",
                "&:hover": {
                  backgroundColor: category.hoverColor,
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
