import React from "react";
import { Box, Typography } from "@mui/material";
import Subhome from "./Subhome";

function Home() {
  return (
    <>

      <Box
        sx={{
          borderRadius: "10px",
          padding: "30px",
          maxWidth: "1000px",
          margin: "5% auto",
          textAlign: "center",
          opacity:"0.9",
          boxShadow: "0 8px 15px rgba(2, 2, 8, 0.5)",
          color: "#2d5ad2",
          zindex:-1,
        marginTop:{xs:"12%"},
        width:{xs:"200px", sm:"400px",md:"600px",submd:"700px",lg:"800px"},
        height:{submd:"200px",lg:"180px"}
       
       
        }}
      >
        <Typography
          variant="h1"
          fontWeight={900}
          sx={{ color: "navy", textShadow: "0 0 5px white, 0 0 10px #0ff",fontSize:{xs:"1.2rem",sm:"1.3rem",md:"1.4rem",submd:"1.6rem"} }}
        >
          Building Bridges – Creating Solutions for People and Planet
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: "15px",
            fontWeight: "900",
            color: "black",
            letterSpacing: "0.5px",
            textShadow: "2px 6px 9px #15eaa5",
            backgroundColor: "white",
            opacity: 0.9,
            borderRadius: "10px",
            border: "0.2px solid black",
            padding: "20px",
            fontSize:{xs:"small",submd:"medium",lg:"large"}
          }}
        >
         
          Since 2001, we have united individuals, communities, and organizations to foster collaboration and empower communities. We champion justice, equity, and ecological harmony, transforming challenges into opportunities for a thriving, sustainable future.
        </Typography>
      </Box>
    

      
    </>
  );
}

export default Home;
