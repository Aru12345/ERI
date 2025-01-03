import React from "react";
import { Box, Typography } from "@mui/material";

function Main() {
  return (
    <Box sx={{ padding: "15px", marginRight:"80px" }}>
     <Typography
  variant="h2"
  sx={{
    marginBottom: "20px",
    color: "navy", // Text color
    fontWeight: "bold", // Bold text
    textShadow: "4px 3px 14px white", // White shadow
    fontFamily:"Gill Sans"
    

  }}
>
  Earth Rights Institute
</Typography>

      <Typography variant="h5" backgroundColor="white" width={590} ml={4} paddingLeft={3} borderRadius={10} sx={{fontFamily:"Gill Sans"}} >
      Building Bridges, Creating Solutions for People and Planet
      </Typography>
      <Box
  backgroundColor="#c7fedd"
  opacity={0.9}
  width={600}
  margin={4}
  padding={2}
  borderRadius={10}
  sx={{
    backdropFilter: "blur(40px)", // Apply a blur effect
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)" // Optional: add a shadow for better contrast
  }}
>
  <Typography
    sx={{
      fontWeight: "bold", // Make the text bold
      color: "#000" ,// Optional: ensure the text is clearly visible
      fontFamily:"Gill Sans"
    }}
  >
    ERI takes an innovative approach to join education, advocacy, and
    research in building ecologically, economically, and culturally
    sustainable communities in some of the world's poorest
    communities. ERI advocates a model of development that supports the
    re-localization of development expertise. We believe that in order
    to empower communities to manage and direct their own development,
    strategies and expert knowledge must be conceived locally.
  </Typography>
</Box>

     
    </Box>
  );
}

export default Main;
