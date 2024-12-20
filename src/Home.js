import "./App.css";
import { Box, Typography } from "@mui/material";



function Home() {

    return (
      <>
      <div className="home">
      <Box className="blurred" sx={{ maxWidth: "1000px", textAlign: "center",marginTop:"14%",marginRight:"15%" }}>
            <Typography sx={{fontWeight:"bold",padding:"5%",fontSize:"large"}}>
            Earth Rights Institute (ERI)  takes an innovative approach to join education, advocacy, and research in building ecologically, economically, and culturally sustainable communities in some of the world's poorest communities. ERI advocates a model of development that supports the re-localization of development expertise. We believe that in order to empower communities to manage and direct their own development, strategies and expert knowledge must be conceived locally.
            </Typography>
    </Box>

      </div>
      </>
    );
  }
  

export default Home;

