import "./App.css";
import { Box, Typography, Button } from "@mui/material";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
          backgroundImage: 'url("https://aiworldschool.com/wp-content/uploads/2020/11/AI-Climate-1200x600-Article2-2.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          textAlign: "center",
          padding: "2rem",
          boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontFamily: "Georgia, serif",
            marginBottom: "1rem",
            textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
          }}
        >
          Building Bridges, Creating Solutions for People and Planet
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.2rem",
            maxWidth: "70%",
            margin: "0 auto",
            textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
            color:"greenyellow",
            textShadow: "2px 2px 4px #5644bb",
            fontWeight:"bold"
          }}
        >
         ERI takes an innovative approach to join education, advocacy, and research in building ecologically, economically, and culturally sustainable communities in some of the world's poorest communities. ERI advocates a model of development that supports the re-localization of development expertise. We believe that in order to empower communities to manage and direct their own development, strategies and expert knowledge must be conceived locally.
        </Typography>
        <Button
          variant="contained"
          sx={{
            marginTop: "2rem",
            fontWeight:"bold",
            backgroundColor: "navy",
            color: "white",
            padding: "0.5rem 2rem",
            "&:hover": {
              backgroundColor: "#00695c",
            },
          }}
        >
          Join Us
        </Button>
      </Box>


      
    </>
  );
}

export default Home;
