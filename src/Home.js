import "./App.css";
import { Box, colors, Typography } from "@mui/material";

function Home() {
  return (

    
<>
<Box
          sx={{
            background: "rgba(255, 255, 255, 0.7)", // Semi-transparent white background for text
            borderRadius: "10px",
            padding: "40px",
            maxWidth: "600px", // Limit width for better readability
            textAlign: "center", // Center align text
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Add subtle shadow
            margin:"4%",
            fontFamily: 'Impact',
       
            color:"#2d5ad2"
          }}
        >
          <Typography variant="h6" fontWeight="bold" fontFamily= 'Impact'>
          Innovate, Collaborate, Regenerate: Powering Grassroots Climate Solutions!
          </Typography>
          <Typography variant="h6" fontSize="small" fontFamily= 'Impact'   color="grey"    letterSpacing= "1px" >
          ERI takes an innovative approach to join education, advocacy, and
            research in building ecologically, economically, and culturally
            sustainable communities in some of the world's poorest
            communities. ERI advocates a model of development that supports the
            re-localization of development expertise. We believe that in order
            to empower communities to manage and direct their own development,
            strategies and expert knowledge must be conceived locally.

          </Typography>
        </Box>
</>
  );
}

export default Home;
