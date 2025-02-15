import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  Grid,
  Divider,
  Badge,
  styled,
} from '@mui/material';
import { Add, Remove, Delete, ShoppingCartCheckout } from '@mui/icons-material';
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: '80%',
  margin: '20px auto',
  transition: 'transform 0.3s, box-shadow 0.3s',
  borderRadius: 16,
  boxShadow: theme.shadows[10],
  background: 'linear-gradient(135deg, #f0f8ff, #f5f5f5)',
  direction: 'rtl',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[20],
  },
  display:"flex",flexWrap:"wrap"
}));

const CartItemImage = styled('img')({
  width: '80%',
  height: '100%',
  borderRadius: 8,
  objectFit: 'contain',
});

const CartBox = () => {
  const [cartItems, setCartItems] = React.useState([
    {
      id: 1,
      name: 'تلویزیون ال جی',
      price: 129.99,
      quantity: 2,
      image: '/C.jpg',
    },
    {
      id: 2,
      name: 'جارو برقی',
      price: 199.99,
      quantity: 1,
      image: '/D.jpg',
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <StyledCard>
      <CardContent>
        <Box display="flex" alignItems="center" mb={3}>
          <Badge badgeContent={cartItems.length} color="primary">
            <ShoppingCartCheckout fontSize="large" />
          </Badge>
          <Typography variant="h5" ml={2} fontWeight="bold" color="primary">
            سبد خرید
          </Typography>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {cartItems.map((item) => (
          <Box key={item.id} my={3}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={4} sm={3}>
                <CartItemImage src={item.image} alt={item.name} />
              </Grid>
              <Grid item xs={8} sm={9}>
                <Box display="flex" flexDirection="column" height="100%">
                  <Typography variant="h6" fontWeight="bold" color="text.primary" gutterBottom>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={1}>
                    {item.price.toFixed(2)} تومان هر کالا
                  </Typography>

                  <Box mt="auto" display="flex" alignItems="center">
                    <IconButton size="small" onClick={() => handleQuantityChange(item.id, -1)}>
                      <Remove fontSize="small" />
                    </IconButton>
                    <Typography mx={1}>{item.quantity}</Typography>
                    <IconButton size="small" onClick={() => handleQuantityChange(item.id, 1)}>
                      <Add fontSize="small" />
                    </IconButton>

                    <IconButton
                      size="small"
                      onClick={() => handleRemoveItem(item.id)}
                      sx={{ ml: 'auto' }}
                    >
                      <Delete fontSize="small" color="error" />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        ))}

        <Divider sx={{ my: 2 }} />

        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography variant="h6">مجموع:</Typography>
          <Typography variant="h6" fontWeight="bold" color="primary">
            ${total.toFixed(2)}
          </Typography>
        </Box>

        <Button
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          sx={{
            py: 1.5,
            borderRadius: 12,
            '&:hover': { backgroundColor: '#3f51b5' },
            transition: 'background-color 0.3s',
          }}
        >
          پرداخت نهایی
        </Button>
      </CardContent>
    </StyledCard>
  );
};

export default CartBox;
