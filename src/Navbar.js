// Navbar.jsx
import React from "react";
import { Box, Typography, Link } from "@mui/material";
import navlogo from "./media/navlogo.png";
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Navbar() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 300,
        sm: 500,
        md: 700,
        lg: 900,
        xl: 1100,
      },
    },
  });


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
        width:"100%",
        position: "fixed",
        top: 0, 
        zindex:1
        
        
      }}
    >
      {/* Left Section */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "1px",   }}>
        <Link href="/">
        <img
          src={navlogo}
          alt="Logo"
          style={{
            width: "90px",
            height: "80px",
            objectFit: "contain",
          }}
        />
          </Link>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "white",
            textShadow: "1px 1px 3px #40bf69",
            letterSpacing: "2px", // Adjust the spacing between letters
            wordSpacing: "1px",
        
          }}
        >
          EARTH RIGHTS INSTITUTE
        </Typography>
      
      </Box>

      {/* Right Section */}
      <Box sx={{ display: "flex", gap: "20px" }}>
      <Link
            href="/"
            color="inherit"
            underline="hover"
            sx={{
              fontSize: "1.1rem",
              fontWeight: "bold",
              letterSpacing: "1px", // Adjust the spacing between letters
              wordSpacing: "3px",
              marginRight:"30px"
            }}
          >
            Home
          </Link>
          <Link
            href="/projects"
            color="inherit"
            underline="hover"
            sx={{
              fontSize: "1.1rem",
              fontWeight: "bold",
              letterSpacing: "1px", // Adjust the spacing between letters
              wordSpacing: "3px",
              marginRight:"30px"
            }}
          >
            Projects
          </Link>
          <Link
            href="/about"
            color="inherit"
            underline="hover"
            sx={{
              fontSize: "1.1rem",
              fontWeight: "bold",
              letterSpacing: "1px", // Adjust the spacing between letters
              wordSpacing: "3px",
              marginRight:"30px"
            }}
          >
            About
          </Link>
          <Link
            href="/support"
            color="inherit"
            underline="hover"
            sx={{
              fontSize: "1.1rem",
              fontWeight: "bold",
              letterSpacing: "1px", // Adjust the spacing between letters
              wordSpacing: "3px",
              marginRight:"30px"
            }}
          >
           Support
          </Link>
          <Link
            href="/contact"
            color="inherit"
            underline="hover"
            sx={{
              fontSize: "1.1rem",
              fontWeight: "bold",
              letterSpacing: "1px", // Adjust the spacing between letters
              wordSpacing: "3px",
              marginRight:"30px"
            }}
          >
            Contact
          </Link>
       
      </Box>

    </Box>
  );
}

export default Navbar;

/*
 <Link
            href="#"
            color="inherit"
            underline="hover"
            sx={{
              fontSize: "1.1rem",
              fontWeight: "bold",
              letterSpacing: "1px", // Adjust the spacing between letters
              wordSpacing: "3px",
              marginRight:"30px"
            }}
          >
            About
          </Link>
        {["Home", "Projects", "About", "Support", "Contact"].map((text) => (
          <Link
            key={text}
            href={`#${text.toLowerCase().replace(" ", "-")}`}
            color="inherit"
            underline="hover"
            sx={{
              fontSize: "1.1rem",
              fontWeight: "bold",
              letterSpacing: "1px", // Adjust the spacing between letters
              wordSpacing: "3px",
              marginRight:"30px"
            }}
          >
            {text}
          </Link>
        ))}
*/