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
            maxWidth: "1000px", // Limit width for better readability
            textAlign: "center", // Center align text
            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
            // Add subtle shadow
            margin:"4%",
            fontFamily: 'Impact',
            opacity:'0.9',
            color:"#2d5ad2",
            marginLeft:"10%",
            marginTop:"12%"
          }}
        >
          <Typography variant="h6" fontWeight="bold" color="navy" textShadow="0 0 10px #00f, 0 0 20px #00f, 0 0 30px #00f, 0 0 40px #0ff, 0 0 70px #0ff, 0 0 80px #0ff" >
          Building Bridges, Creating Solutions for People and Planet 
          </Typography>
          <Typography variant="h6" fontSize="medium" fontWeight="bold"  color="black"    letterSpacing= "1px" >
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