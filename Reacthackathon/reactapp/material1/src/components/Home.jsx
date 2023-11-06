import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import product from "../components/img.jpg"
import {
  AppBar,
  Typography,
  Container,
  Grid,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

function Home() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <AppBar position="static">{/* ... */}</AppBar>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center content horizontally
          justifyContent: "center", // Center content vertically
          flexGrow: 1, // Allow the container to take up remaining vertical space
          marginTop: "10px", // Push the content to the bottom of the 
          marginBottom: "100px"
          
        }}
      >
        <Typography variant="h4">Welcome to Homepage</Typography>
        <img src={product} alt="" height="600px" width="800px" />
      </Container>
      <footer style={{ padding: "20px 0", background: "#f0f0f0" }}>
        <Container>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item>
              <IconButton color="primary" aria-label="Facebook">
                <Facebook />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton color="primary" aria-label="Twitter">
                <Twitter />

              </IconButton>
            </Grid>
            <Grid item>
              <IconButton color="primary" aria-label="Instagram">
                <Instagram />
              </IconButton>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item>
              <Typography variant="body2" color="textSecondary">
                © 2023 My App
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item>
              <div>
                <Link to="/about">About us</Link>
              </div>
              <div>
                <Link to="/contact">Contact</Link>
              </div>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </div>
  );
}

export default Home;



