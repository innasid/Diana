import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FormControlLabel, Checkbox } from "@mui/material";
import {
  Button,
  TextField,
  Typography,
  Container,
  CssBaseline,
  AppBar,
} from "@mui/material";
import { login } from "../store";

const api = axios.create({
  baseURL: "http://localhost:8089",
});
const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "white",
    color: "black",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginBottom: "1rem",
  },
  inputField: {
    "& .MuiOutlinedInput-input": {
      color: "black",
    },
    "& .MuiInputLabel-root": {
      color: "black",
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
    },
  },
  button: {
    marginTop: "1rem",
  },
  message: {
    marginTop: "2rem",
    color: "black",
  },
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.get(`/userreg?email=${email}`);
      let userData = response.data[0];

      if (userData && password === userData.password) {
        setMessage(`Welcome, ${userData.username}!`);
        dispatch(login.changelogin(true));
        dispatch(login.changeuser(true));

        navigate(`/dashboard/${userData.username}`);
      } else {
        setMessage("Invalid Login");
        dispatch(login.changeuser(false));
      }
    } catch (err) {
      console.error("Login Error:", err);
      setMessage("Invalid Login");
      dispatch(login.changeuser(false));
    }
  };

  return (
    <div style={styles.root}>
      <Navbar />
      <AppBar position="static"></AppBar>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Typography component="h1" variant="h5" sx={styles.input}>
            Login
          </Typography>
          <form onSubmit={handleSubmit} style={styles.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email ID"
              name="email"
              onChange={handleChange}
              sx={styles.inputField}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              id="password"
              type="password"
              onChange={handleChange}
              sx={styles.inputField}
              autoComplete="new-password"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                  color="primary"
                />
              }
              label="Remember Me"
              sx={{ color: "black" }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={styles.button}
            >
              Login
            </Button>
          </form>
          <Typography
            component={Link}
            to="/forgot-password"
            variant="body2"
            sx={{ color: "black" }}
          >
            Forgot Password?
          </Typography>

          {message && (
            <Typography variant="body2" sx={styles.message}>
              {message}
            </Typography>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Login;