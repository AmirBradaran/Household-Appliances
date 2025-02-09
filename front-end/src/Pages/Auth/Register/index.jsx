import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

export default function Register({ handlePageType }) {
  return (
    <Box
      component="form"
      onSubmit={""}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        padding: 4,
        maxWidth: 400,
        margin: "auto",
        marginTop: 8,
        background: "linear-gradient(135deg, var(--forth-color), var(--third-color))",
        borderRadius: 2,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#fff",
          marginBottom: 2,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        ثبت نام
      </Typography>
      <TextField
        variant="outlined"
        onChange={""}
        label="نام کاربری"
        name="username"
        fullWidth
        InputLabelProps={{
          sx: { color: "#fff" },
        }}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          input: { color: "#fff" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#fff",
            },
            "&:hover fieldset": {
              borderColor: "#a8dadc",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#f1faee",
            },
          },
        }}
      />
        <TextField
        variant="outlined"
        onChange={""}
        label="ایمیل"
        name="email"
        type="email"
        fullWidth
        InputLabelProps={{
          sx: { color: "#fff" },
        }}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          input: { color: "#fff" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#fff",
            },
            "&:hover fieldset": {
              borderColor: "#a8dadc",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#f1faee",
            },
          },
        }}
      />
      <TextField
        variant="outlined"
        onChange={""}
        label="رمز عبور"
        name="password"
        type="password"
        fullWidth
        InputLabelProps={{
          sx: { color: "#fff" },
        }}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          input: { color: "#fff" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#fff",
            },
            "&:hover fieldset": {
              borderColor: "#a8dadc",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#f1faee",
            },
          },
        }}
      />
      <Button
        type="submit"
        sx={{
          background: "var(--second-color)",
          color: "whitesmoke",
          boxShadow:"2px 2px 5px 1px whitesmoke",
          fontWeight: "bold",
          width: "100%",
          "&:hover": {
            background: "var(--six-color)",
            color:"var(--first-color)"
          },
        }}
      >
        ثبت نام
      </Button>
      <Button
        variant="text"
        onClick={handlePageType}
        sx={{
          color: "#f1faee",
          textTransform: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        اکانت دارید ؟ وارد شوید
      </Button>
    </Box>
  )
}
