import { Box, Typography, Link } from "@mui/material";
import samplelogo from "./media/samplelogo.png";
import { pink } from "@mui/material/colors";

function Navabar() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center", // Aligns items vertically
          padding: "10px 20px", // Adds padding for better spacing
          fontFamily: "Arial",
          color:"#17e889",
         
        
      

          
       
          
        }}
        className="head"
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
              width: "85px", // Adjust width as needed
              height: "85px", // Adjust height as needed
              objectFit: "contain",
              marginRight: "6px", // Adds space between logo and text
            }}
          />
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bolder",
             fontSize:"900",
             fontFamily: "Lucida Console",
             color:"#5db04f",
             textShadow: "2px 2px 4px rgb(175, 225, 175)",
             
         
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
            flex: "2",
            gap: "4px", // Adds space between links
            fontFamily: "Lucida Console",
            fontWeight:"bolder",
            color:"#5db04f",
            textShadow: "2px 2px 4px rgb(175, 225, 175)",
            
          }}
        >
          <Link href="#about" color="inherit" underline="hover" sx={{fontSize:"larger"}}>
            About
          </Link>
          <Link href="#contact" color="inherit" underline="hover" sx={{fontSize:"larger"}}>
            Projects
          </Link>
          <Link href="#projects" color="inherit" underline="hover" sx={{fontSize:"larger"}}>
            News
          </Link>
          <Link href="#current-work" color="inherit" underline="hover" sx={{fontSize:"larger"}}>
           Support Us
          </Link>
          <Link href="#current-work" color="inherit" underline="hover" sx={{fontSize:"larger"}}>
           Contact
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default Navabar;