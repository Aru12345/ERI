import "./App.css";
import { Box, Typography } from "@mui/material";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "70vh",
        width: "100%",
        margin: "0 auto",
      }}
    >
      {/* First div with a background color */}
      <Box
  sx={{
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    backgroundImage: "url('https://img.freepik.com/premium-photo/drought-trees-environment-nature-climate-change-concept-showing-effects-dry-land-earth_817921-39550.jpg')",
    backgroundSize: "cover",       // Makes the image cover the entire box
    backgroundPosition: "center",  // Centers the image within the box
    backgroundRepeat: "no-repeat", // Prevents the image from repeating
    width: "100%",                 // Ensures the box takes full width
    height: "65vh",               // Sets the box height to full viewport height
  }}
>
</Box>


      {/* Second div with a different background color */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#e2e7e8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          fontWeight:"bolder",
          flexDirection:"column"
        }}
      >
        <Typography variant="h6" color="black"  sx={{fontWeight:"bold",fontSize:"medium"}}>
          ERI  takes an innovative approach to join education, advocacy, and research in building ecologically, economically, and culturally sustainable communities in some of the world's poorest communities. ERI advocates a model of development that supports the re-localization of development expertise. We believe that in order to empower communities to manage and direct their own development, strategies and expert knowledge must be conceived locally.
        </Typography>
        <Box sx={{display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px",
          fontWeight:"bolder",
          flexDirection:"row"}}>
            <Typography variant="h6" color="black" sx={{backgroundColor:"#ebed91",padding:"5px",border:"0.5px solid black", borderRadius:"3px",margin:"2px",fontWeight:'bold',fontSize:"medium"}}>
          Innovations
        </Typography>
        <Typography variant="h6" color="black" sx={{backgroundColor:"#bce7c1",padding:"5px",border:"0.5px solid black", borderRadius:"3px",margin:"2px",fontWeight:'bold',fontSize:"medium"}}>
          Collaborations
        </Typography>
        <Typography variant="h6" color="black" sx={{backgroundColor:"#b2e2f8", padding:"5px",border:"0.5px solid black", borderRadius:"3px",margin:"2px",fontWeight:'bold',fontSize:"medium"}}>
          Grassroot Solutions
        </Typography>

      </Box>

      </Box>
    
    </Box>
  );
}

export default Home;
