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
        backgroundColor: "#100954",
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
            width: "60px",
            height: "60px",
            objectFit: "contain",
          }}
        />
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "white",
            textShadow: "1px 1px 3px #40bf69",
          }}
        >
          Earth Rights Institute
        </Typography>
      </Box>

      {/* Right Section */}
      <Box sx={{ display: "flex", gap: "20px" }}>
        {["About", "Projects", "Support Us", "Contact"].map((text) => (
          <Link
            key={text}
            href={`#${text.toLowerCase().replace(" ", "-")}`}
            color="inherit"
            underline="hover"
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              letterSpacing: "0.5px",
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