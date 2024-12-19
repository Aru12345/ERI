import { Box, Typography, Link } from "@mui/material";
import samplelogo from "./media/samplelogo.png";

function Navabar() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center", // Aligns items vertically
          padding: "10px 20px", // Adds padding for better spacing
          backgroundColor:"#45BA57"
       
          
        }}
      >
        {/* Left container - Logo and Text */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flex: "2",
           
          }}
        >
          <img
            src={samplelogo}
            alt="samplelogo"
            style={{
              width: "60px", // Adjust width as needed
              height: "60px", // Adjust height as needed
              objectFit: "contain",
              marginRight: "10px", // Adds space between logo and text
            }}
          />
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "navy",
            }}
          >
            Earth Rights Institute
          </Typography>
        </Box>

        {/* Right container - Links */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around", // Distributes links evenly
            alignItems: "center",
            flex: "3",
            gap: "20px", // Adds space between links
           color: "navy",
            fontWeight:"bold"
          }}
        >
          <Link href="#about" color="inherit" underline="hover">
            About
          </Link>
          <Link href="#contact" color="inherit" underline="hover">
            Projects
          </Link>
          <Link href="#projects" color="inherit" underline="hover">
            News
          </Link>
          <Link href="#current-work" color="inherit" underline="hover">
           Support Us
          </Link>
          <Link href="#current-work" color="inherit" underline="hover">
           Contact
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default Navabar;
