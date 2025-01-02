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
          height: "50vh",
          width: "90vh",
          backgroundImage: 'url("https://fightclimatechange.earth/wp-content/uploads/2022/12/Climate-Tec.jpg")',
          padding: "2rem",
          color: "white",
          textAlign: "center",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundrepeat: "no-repeat",
          marginLeft:40
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontFamily: "Georgia, serif",
            marginBottom: "0.2rem",
            color:"white",
            textShadow: "0 0 10px #00f, 0 0 20px #00f, 0 0 30px #00f, 0 0 40px #0ff, 0 0 70px #0ff, 0 0 80px #0ff",
            
          }}
        >
          Bridging Grassroots Action and Global Innovation for a Thriving Planet
        </Typography>

        <Button
          variant="contained"
          sx={{
            marginTop: "2rem",
            backgroundColor: "#0a23f5",
            fontWeight:"bold",
            color: "white",
            padding: "0.5rem 2rem",
            "&:hover": {
              backgroundColor: "#0a23f5",

            },
          }}
        >
          Learn More
        </Button>
      </Box>

      {/* Work Section */}
      <Box
        sx={{
          padding: "3rem 2rem",
          backgroundColor: "#d2f0fe",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "1.5rem",
            fontFamily: "Verdana, sans-serif",
            color: "#0a23f5",
          }}
        >
          Our Work
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: "80%",
            margin: "0 auto",
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "#424242",
          }}
        >
          ERI takes an innovative approach to join education, advocacy, and research in building ecologically, economically, and culturally sustainable communities in some of the world's poorest communities. ERI advocates a model of development that supports the re-localization of development expertise. We believe that in order to empower communities to manage and direct their own development, strategies and expert knowledge must be conceived locally.
        </Typography>
      </Box>
    </>
  );
}

export default Home;
