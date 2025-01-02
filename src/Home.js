import "./App.css";
import { Box, Typography } from "@mui/material";

function Home() {
  return (
    <>
      {/* Main Section */}
      <Box className="home" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight:"bold",
            backgroundColor: "#258eda",
            opacity:"0.7",
            color: "white",
            padding: 0.1,
            textAlign: "center",
            width: "95%", // Optional, to take the full width
            marginBottom: 2, // Space between the boxes
            fontFamily: "Arial",
            marginLeft:2
          }}
        >
          Bridging Grassroots Action and Global Innovation for a Thriving Planet
        </Typography>


      </Box>
      <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: 2,
            fontFamily: "Arial",
            color: "#333",
            margin:3,
            display:"flex",
            textAlign:"center",
            marginLeft:80,
            marginTop:5
          }}
        >
          Our Work
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1rem",
            lineHeight: 1.6,
            color: "#555",
            fontFamily: "Arial",
            margin:5
          }}
        >
          Earth Rights Institute (ERI) takes an innovative approach to join
          education, advocacy, and research in building ecologically,
          economically, and culturally sustainable communities in some of the
          world's poorest communities. ERI advocates a model of development
          that supports the re-localization of development expertise. We believe
          that in order to empower communities to manage and direct their own
          development, strategies and expert knowledge must be conceived
          locally.
        </Typography>

      {/* Section for "Our Work" and Three Boxes */}
     
  
    </>
  );
}

export default Home;
