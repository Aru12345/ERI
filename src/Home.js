import "./App.css";
import { Box, Typography } from "@mui/material";

function Home() {
  return (
    <>
      {/* Main Section */}
      <Box
        className="home"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1rem",
         
          color: "white",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            opacity: 0.9,
            textAlign: "center",
            fontFamily: "Arial",
            padding: "1rem",
            maxWidth: "90%",
            opacity:0.7,
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            fontFamily: "Lucida Console",
            marginTop:5
          }}
        >
           🍃 Building Bridges, Creating Solutions for People and Planet 🍃
        </Typography>
      </Box>

      {/* Our Work Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "2rem",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: "1.5rem",
            fontFamily: "Lucida Console",
            color: "#1a1a1a",
          }}
        >
          Our Work
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.1rem",
            lineHeight: 1.8,
            color: "#333",
            fontFamily: "Lucida Console",
            maxWidth: "70%",
          }}
        >
          Earth Rights Institute (ERI) takes an innovative approach to combine
          education, advocacy, and research in building ecologically,
          economically, and culturally sustainable communities in some of the
          world's poorest regions. ERI advocates for a development model that
          re-localizes expertise. We believe empowering communities to direct
          their own development starts with locally conceived strategies and
          knowledge.
        </Typography>
      </Box>
    </>
  );
}

export default Home;
