import "./App.css";
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=612x612&w=0&k=20&c=UHeb1pGOw6ozr6utsenXHhV19vW6oiPIxDqhKCS2Llk=",
  "https://static.stacker.com/s3fs-public/styles/sar_screen_maximum_large/s3/2024-02/turtle-diving-ocean_0.jpg",
  "https://media.springernature.com/lw630/nature-cms/uploads/collections/A74883_NCOM-Earth-COLLECTION-PRVW_Top50-Hero_500045879-da75ffdfaa95b0ade770adca0d57d223-6927919e6797a40655ebcca2c2087a58.jpg",
];

const MuiCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <Box
      sx={{
        width: "60%", // Adjust the width
        maxWidth: "500px", // Limit the max width
        height: "300px", // Constrain the height
        margin: "auto",
        mt:3,
    
        overflow: "hidden", // Prevent horizontal/vertical overflow
        borderRadius: "10px", // Optional styling
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Optional shadow effect
      }}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} sx={{ textAlign: "center" }}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // Maintain aspect ratio and cover the box
                borderRadius: "10px",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
function Home() {
    const boxesContent = [
      {
        title: "Innovations",
        color: "#4CAF50",
        description: "Cutting-edge solutions for ecosystem restoration and technological integration.",
      },
      {
        title: "Collaborations",
        color: "#FF9800",
        description: "Partnering with communities, organizations, and nature itself for sustainable impact.",
      },
      {
        title: "Grassroots Solutions",
        color: "#2196F3",
        description: "Empowering local communities with culturally aligned, scalable approaches.",
      },
    ];
  
    return (
      <Box
        className="home"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "20px",
          minHeight: "90vh",
          backgroundColor: "#f4f4f4", // Optional background
         
        }}
      >
        {/* Left Side - Description */}
        <Box
          className="text-box"
          sx={{
            flex: 0.3,
            display: "flex",
            alignItems: "center",
         
            padding: "20px",
            marginLeft: "90px",
            
       
            color: "white",
            borderRadius: "8px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "medium",
              fontFamily: "Andale Mono",
              marginBottom: "20px",
              lineHeight: "1.8",
      
            }}
          >
            <span className="ok" style={{ backgroundColor: "navy", color: "white", padding: "2px 5px" }}>  Earth Rights Institute (ERI)
            </span>{" "}  takes an innovative approach to join education, advocacy, and research in building ecologically, economically, and culturally sustainable communities in some of the world's poorest communities. ERI advocates a model of development that supports the re-localization of development expertise. We believe that in order to empower communities to manage and direct their own development, strategies and expert knowledge must be conceived locally.
          </Typography>
        </Box>
  
        {/* Right Side */}
        <Box
          sx={{
            flex: 0.5,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "20px",
          }}
        >
          {/* Top Section - Carousel */}
          <MuiCarousel />
  
          {/* Bottom Section - Boxes */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "40px",
              justifyContent: "space-between",
            }}
          >
            {boxesContent.map((box, index) => (
              <Box
                key={index}
                sx={{
                  flex: 1,
                  backgroundColor: box.color,
                  padding: "40px 20px",
                  borderRadius: "8px",
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  border: "0.1px solid black",
                  transition: "transform 0.3s ease",
                  ":hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Typography variant="h5">{box.title}</Typography>
                <Typography variant="body1" sx={{ marginTop: "10px", fontSize: "14px" }}>
                  {box.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    );
  }
  

export default Home;

