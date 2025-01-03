import React from "react";
import { Box, Typography, Link } from "@mui/material";
import samplelogo from "./media/samplelogo.png";

function Navbar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "250px",
        height: "100vh",
        backgroundColor: "#1a237e",
        color: "white",
        padding: "20px",
        boxShadow: "2px 0 10px rgba(0, 0, 0, 0.1)",
      
      }}
    >
                <img
            src={samplelogo}
            alt="samplelogo"
            style={{
              width: "80px", // Adjust width as needed
              height: "80px", // Adjust height as needed
              objectFit: "contain",
              marginRight: "10px", // Adds space between logo and text
            }}
          />
      {/* Logo Section */}
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", marginBottom: "30px", textAlign: "center" }}
      >
        ERI
      </Typography>

      {/* Navigation Links */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "35px", width: "100%", fontWeight:"bold" }}>
        {["Home", "About", "Projects", "Contact"].map((text) => (
          <Link
            key={text}
            href={`#${text.toLowerCase()}`}
            color="inherit"
            underline="hover"
            sx={{
              padding: "10px",
              textAlign: "center",
              fontFamily:"Gill Sans",
              borderRadius: "5px",
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: "#3949ab",
              },
            }}
          >
            {text}
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export default Navbar;
