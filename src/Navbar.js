import { Box, Typography, Link } from "@mui/material";
import samplelogo from "./media/samplelogo.png";

function Navbar() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 20px",
          backgroundColor: "#e8f5e9", // Light green for nature theme
        }}
      >
        {/* Left container - Logo and Heading */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={samplelogo}
            alt="samplelogo"
            style={{
              width: "60px",
              height: "60px",
              objectFit: "contain",
              marginRight: "10px",
            }}
          />
          <Typography
            variant="h5"
            sx={{
              color: "#388e3c", // Same color for links and heading
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
            }}
          >
            Earth Rights Institute
          </Typography>
        </Box>

        {/* Right container - Links */}
        <Box sx={{ display: "flex", gap: "20px" }}>
          {["About", "Projects", "News", "Support Us", "Contact"].map((text) => (
            <Link
              href={`#${text.toLowerCase().replace(" ", "-")}`}
              underline="none"
              sx={{
                color: "#388e3c", // Matching color with heading
                fontFamily: "Arial, sans-serif",
                fontWeight: "bold",
                fontSize: "1rem",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              key={text}
            >
              {text}
            </Link>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
