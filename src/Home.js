import './App.css';
import { Box, Typography } from "@mui/material";

function Home() {
    return (
        <Box className="home">
            <Box className="text-box">
                <Typography
                    variant="h6"
                    sx={{
                     
                        color: "navy",
                        textAlign: "center",
                        fontSize:"medium"
                    }}
                >
                    Earth Rights Institute (ERI) takes an innovative approach to join education, advocacy, and research in building ecologically, economically, and culturally sustainable communities in some of the world's poorest communities. ERI advocates a model of development that supports the re-localization of development expertise. We believe that in order to empower communities to manage and direct their own development, strategies and expert knowledge must be conceived locally.
                </Typography>
            </Box>
        </Box>
    );
}

export default Home;
