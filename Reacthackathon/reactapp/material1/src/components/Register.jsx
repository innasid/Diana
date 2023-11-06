
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import {
  Button,
  TextField,
  Typography,
  Container,
  CssBaseline,
  InputAdornment,
  AppBar,
} from "@mui/material";
import { AccountCircle, Email, Phone, VpnKey, Lock, LocationOn } from "@mui/icons-material";

function Register({ showLinks }) {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobileNumber: "",
    accountNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [registrationStatus, setRegistrationStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8089/userreg",
        formData
      );
      console.log("Registration successful:", response.data);
      setRegistrationStatus("Registration successful");
    } catch (error) {
      console.error("Registration failed:", error);
      setRegistrationStatus("Registration failed");
    }
  };
  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };
  const isPasswordValid = (password) => {
    return password.length >= 8;
  };
  const isMobileNumberValid = (mobileNumber) => {
    return mobileNumber.length === 10;
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <AppBar position="static"></AppBar>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Typography component="h1" variant="h5">
          Register
        </Typography>
        {registrationStatus && (
          <Typography
            variant="body1"
            color={
              registrationStatus === "Registration successful"
                ? "primary"
                : "error"
            }
          >
            {registrationStatus}
          </Typography>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            onChange={handleChange}
            error={!isEmailValid(formData.email)}
            helperText={
              !isEmailValid(formData.email) ? "Enter a valid email address" : ""
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="mobileNumber"
            label="Mobile Number"
            name="mobileNumber"
            onChange={handleChange}
            error={!isMobileNumberValid(formData.mobileNumber)}
            helperText={
              !isMobileNumberValid(formData.mobileNumber)
                ? "Enter a valid mobile number"
                : ""
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Phone />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="accountNumber"
            label="Account Number"
            name="accountNumber"
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="address"
            label="Address"
            name="address"
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOn/>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handleChange}
            error={!isPasswordValid(formData.password)}
            helperText={
              !isPasswordValid(formData.password)
                ? "Password must be at least 8 characters long"
                : ""
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKey />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            onChange={handleChange}
            error={formData.confirmPassword !== formData.password}
            helperText={
              formData.confirmPassword !== formData.password
                ? "Passwords do not match"
                : ""
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            }}
          />

          <Button type="submit" fullWidth variant="contained" color="primary">
            Register
          </Button>
        </form>

        {showLinks && (
          <div>
            Already have an account? <Link to="/login">Login</Link>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Register;
