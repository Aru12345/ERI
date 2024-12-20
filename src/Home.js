import "./App.css";
import { Box, Typography } from "@mui/material";

function Home() {
  return (
    <>
      {/* Container for the medium-sized boxes */}
      <Box display="flex" justifyContent="space-between" gap={1} marginBottom={2}>
        <Box
          flex={1}
          height={350}
          bgcolor="primary.main"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="white"
          padding={2}
        >
          <Typography variant="h3">
            Innovate, Collaborate, Regenerate: Powering Grassroots Climate Solutions!
          </Typography>
        </Box>
        <Box
          flex={1}
          height={380}
          display="flex"
          bgcolor="secondary.main"
          color="white"
          overflow="hidden"
        >
          {/* Left half for the image */}
          <Box
            flex={1}
            component="img"
            src="https://euneighbourseast.eu/wp-content/uploads/2024/10/shutterstock_2498864815-scaled-e1729514017230.jpg"
            alt="Sustainable Community"
            sx={{ objectFit: "cover", width: "50%" }}
          />

          {/* Right half for the paragraph */}
          <Box
            flex={1}
            padding={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
            backgroundColor="green"
          >
            <Typography variant="body1" color="white">
              Earth Rights Institute (ERI) takes an innovative approach to join education, advocacy, and research in building ecologically, economically, and culturally sustainable communities in some of the world's poorest communities. ERI advocates a model of development that supports the re-localization of development expertise. We believe that in order to empower communities to manage and direct their own development, strategies and expert knowledge must be conceived locally.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Container for the smaller-sized boxes */}
      <Box display="flex" justifyContent="space-between" gap={2}>
  <Box
    flex={1}
    height={100}
    bgcolor="#8bc34a"
    display="flex"
    alignItems="center"
    justifyContent="center"
    color="white"
    padding={2}
    textAlign="center"
  >
    <Typography variant="body1">
      <strong>Innovations:</strong> Driving forward creative solutions to address climate and community challenges.
    </Typography>
  </Box>

  <Box
    flex={1}
    height={100}
    bgcolor="#fdc010"
    display="flex"
    alignItems="center"
    justifyContent="center"
    color="white"
    padding={2}
    textAlign="center"
  >
    <Typography variant="body1">
      <strong>Collaborations:</strong> Building partnerships to amplify impact and achieve shared goals.
    </Typography>
  </Box>

  <Box
    flex={1}
    height={100}
    bgcolor="#09bcd3"
    display="flex"
    alignItems="center"
    justifyContent="center"
    color="white"
    padding={2}
    textAlign="center"
  >
    <Typography variant="body1">
      <strong>Grassroots Solutions:</strong> Empowering local communities to lead sustainable development efforts.
    </Typography>
  </Box>
</Box>

    </>
  );
}

export default Home;
