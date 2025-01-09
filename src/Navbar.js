// Navbar.jsx
import React from "react";
import { Box, Typography, Link } from "@mui/material";
import samplelogo from "./media/samplelogo.png";

function Navbar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#0a0747",
        color: "white",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      }}
    >
      {/* Left Section */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <img
          src={samplelogo}
          alt="Logo"
          style={{
            width: "99px",
            height: "80px",
            objectFit: "contain",
          }}
        />
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "white",
            textShadow: "1px 1px 3px #40bf69",
            letterSpacing: "3px", // Adjust the spacing between letters
            wordSpacing: "4px",
          }}
        >
          Earth Rights Institute
        </Typography>
      </Box>

      {/* Right Section */}
      <Box sx={{ display: "flex", gap: "20px" }}>
        {["About", "Projects", "Contribute", "Contact"].map((text) => (
          <Link
            key={text}
            href={`#${text.toLowerCase().replace(" ", "-")}`}
            color="inherit"
            underline="hover"
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              letterSpacing: "3px", // Adjust the spacing between letters
              wordSpacing: "6px",
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