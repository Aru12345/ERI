import "./App.css";
import { Box, Typography } from "@mui/material";

function Home() {
  return (
    <>
      {/* Main Section */}
      <Box className="home" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            backgroundColor: "green",
            color: "white",
            padding: 2,
            textAlign: "center",
            width: "70%", // Optional, to take the full width
            marginBottom: 2, // Space between the boxes
            fontFamily: 'American Typewriter',
          }}
        >
          Innovations | Collaborations | Grassroot Solutions
        </Typography>

        <Typography
          sx={{
            fontWeight: "bold",
            backgroundColor: "green",
            color: "white",
            padding: 2,
            textAlign: "center",
            width: "100%", // Optional, to take the full width
            fontFamily: 'American Typewriter',
          }}
        >
          Earth Rights Institute (ERI) takes an innovative approach to join education, advocacy, and research in building ecologically, economically, and culturally sustainable communities in some of the world's poorest communities. ERI advocates a model of development that supports the re-localization of development expertise. We believe that in order to empower communities to manage and direct their own development, strategies and expert knowledge must be conceived locally.
        </Typography>
      </Box>

      {/* Section for "Our Work" and Three Boxes */}
      <Box sx={{ padding: 4, textAlign: "center" }}>
        <Typography variant="h5" sx={{ marginBottom: 3 }}>
          Our Work
        </Typography>

        {/* Three Boxes for Innovations, Collaborations, Grassroot Solutions */}
        <Box display="flex" justifyContent="space-between" gap={2}>
          {/* Innovations Box */}
          <Box
            flex={1}
            height={200} // Increased height for better image fit
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between" // Space between image and text
            bgcolor="primary.main"
            color="white"
            sx={{ borderRadius: 2, padding: 2 }}
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/013/376/012/non_2x/bulb-lamp-and-leaves-logo-design-nature-idea-innovation-symbol-free-vector.jpg"
              alt="Innovations"
              style={{
                width: "50%", // Adjust width to fit within box
                height: "50%",
                borderRadius: "8px",
                marginBottom: "1rem", // Space between image and text
              }}
            />
            <Typography sx={{ fontWeight: "bold", fontSize: "1rem" }}>Innovations</Typography>
            <Typography sx={{ padding: 1 }}>
              Earth Rights Institute's innovative solutions foster sustainability and empower local communities.
            </Typography>
          </Box>

          {/* Collaborations Box */}
          <Box
            flex={1}
            height={200} // Increased height for better image fit
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between" // Space between image and text
            bgcolor="secondary.main"
            color="white"
            sx={{ borderRadius: 2, padding: 2 }}
          >
            <img
              src="https://png.pngtree.com/png-clipart/20220909/original/pngtree-businessman-hand-shaking-for-the-collaboration-png-image_8501524.png"
              alt="Collaborations"
              style={{
                width: "60%", // Adjust width to fit within box
                height: "auto",
                borderRadius: "8px",
                marginBottom: "1rem", // Space between image and text
              }}
            />
            <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>Collaborations</Typography>
            <Typography sx={{ padding: 1 }}>
              We collaborate with global and local partners to bring change through joint action and shared knowledge.
            </Typography>
          </Box>

          {/* Grassroot Solutions Box */}
          <Box
            flex={1}
            height={200} // Increased height for better image fit
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between" // Space between image and text
            bgcolor="success.main"
            color="white"
            sx={{ borderRadius: 2, padding: 2 }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWpQOP3KgN8I0r-xNIFlgp4JpKRSCFKNxTA&s"
              alt="Grassroot Solutions"
              style={{
                width: "60%", // Adjust width to fit within box
                height: "auto",
                borderRadius: "8px",
                marginBottom: "1rem", // Space between image and text
              }}
            />
            <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>Grassroot Solutions</Typography>
            <Typography sx={{ padding: 1 }}>
              Our approach is rooted in empowering communities to lead their own sustainable development.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Home;
