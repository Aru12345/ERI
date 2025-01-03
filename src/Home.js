import React from "react";
import { Box, Typography } from "@mui/material";

function Home() {
  return (
    <Box
      sx={{
        
        borderRadius: "10px",
        padding: "30px",
        maxWidth: "800px",
        margin: "5% auto",
        textAlign: "center",
        boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
        color: "#2d5ad2",
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ color: "navy", textShadow: "0 0 5px white, 0 0 10px #0ff" }}
      >
        Building Bridges & Creating Solutions for People and Planet
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginTop: "15px",
          fontWeight: "900",
          color: "black",
          letterSpacing: "0.5px",
          textShadow: "2px 6px 9px #15eaa5",
          backgroundColor:"white",
          opacity:0.6,
          borderRadius: "10px",
          border:"0.2px solid black",
          padding:"20px"

        }}
      >
        ERI takes an innovative approach to join education, advocacy, and
        research in building ecologically, economically, and culturally
        sustainable communities in some of the world's poorest communities. ERI
        advocates a model of development that supports the re-localization of
        development expertise. We believe that in order to empower communities
        to manage and direct their own development, strategies and expert
        knowledge must be conceived locally.
      </Typography>
    </Box>
  );
}

export default Home;