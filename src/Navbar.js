// Navbar.jsx

import { Box, Typography, Link, Menu ,MenuItem, MenuList,} from "@mui/material";
import navlogo from "./media/navlogo.png";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState,MouseEvent } from "react";
import { Drawer, IconButton, List, ListItem, ListItemText ,useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


function Navbar() {
  const[openNav,setOpenNav]=useState(null);
  const openMenu = (event) => {
    setOpenNav(event.currentTarget);
  };
  
  const closeMenu =()=>{
    setOpenNav(null);
  };

  
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 300,
        sm: 500,
        md: 700,
        submd:800,
        lg: 900,
        xl: 1100,
      },
    },
  });
  const isXs = useMediaQuery((theme) => theme.breakpoints.down("xs")); // Matches xs screens

  return (
    <ThemeProvider theme={theme}>
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
            marginRight:{xs:"20px"},
          
        
          }}
        >
          Earth Rights Institute
        </Typography>
      
      </Box>

      {/* Right Section */}
      <Box sx={{  gap: "20px",display:{xs:"none",submd:"flex"} }}>
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
              marginRight:"33px"
            }}
          >
            Contact
          </Link>
       
      </Box>
      
      <Box sx={{display:{xs:"flex",submd:"none"}}}>
        <IconButton size="larger" edge="start" color="inherit" aria-label="logo" sx={{marginRight:"31px"}}  onClick={openMenu} >
          <MenuIcon />
        </IconButton>
        <Menu open={Boolean(openNav)} anchorEl={openNav} // Use the state variable here
    
    onClose={closeMenu} >
          <MenuList sx={{backgroundColor:"#0a0747" ,color:"white",fontWeight:"medium"}}>
            <MenuItem><Link
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
          </Link></MenuItem>
            <MenuItem><Link
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
          </Link></MenuItem>
            <MenuItem>    <Link
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
          </Link></MenuItem>
            <MenuItem> <Link
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
          </Link></MenuItem>
            <MenuItem><Link
            href="/contact"
            color="inherit"
            underline="hover"
            sx={{
              fontSize: "1.1rem",
              fontWeight: "bold",
              letterSpacing: "1px", // Adjust the spacing between letters
              wordSpacing: "3px",
              marginRight:"33px"
            }}
          >
            Contact
          </Link></MenuItem>

          </MenuList>

        </Menu>
      </Box>

    </Box>
    </ThemeProvider>
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