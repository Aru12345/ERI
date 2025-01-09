import { Box,Typography } from "@mui/material";
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
          borderRadius: "1px", // Optional styling
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
                  borderRadius: "2px",
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    );
  };

function Subhome(){
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
    return(
        <>
        <Box
        sx={{
          borderRadius: "10px",
          padding: "20px",
          maxWidth: "800px",
          margin: "50px auto",
          textAlign: "center",
           marginLeft:"23%"
       
  
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", marginBottom: "20px", color: "#333" }}
        >
          Our Work
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "30px",
           
          }}
        >
          <Box
            sx={{
              flex: 2,
              padding: "25px",
              borderRadius: "4px",
              backgroundColor: "#ffffff",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            border:"0.1px solid navy"
            }}
          >
            <Typography variant="body1" fontWeight="bold" color="#2d5ad2">
              Innovations
            </Typography>
            <Typography variant="body1" color="#555">
             Driving forward creative solutions to address climate and community challenges.
            </Typography>
          </Box>

          <Box
            sx={{
              flex: 2,
              padding: "20px",
              borderRadius: "4px",
              backgroundColor: "#ffffff",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                border:"0.1px solid navy"
            }}
          >
            <Typography variant="body1" fontWeight="bold" color="#2d5ad2">
              Collaborations
            </Typography>
            <Typography variant="body1" color="#555">
              Building paternships to amplify impact and achieve shared goals.
            </Typography>
          </Box>

          <Box
            sx={{
              flex: 2,
              padding: "20px",
              borderRadius: "4px",
              backgroundColor: "#ffffff",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              border:"0.1px solid navy"
            }}
          >
            <Typography variant="body1" fontWeight="bold" color="#2d5ad2">
             Grassroot Solutions
            </Typography>
            <Typography variant="body1" color="#555">
              Empowering local communities to lead sustainable development efforts.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        className="home"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "20px",
          minHeight: "40vh",
       
         
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
              
              fontSize: "medium",
              
              marginBottom: "20px",
              lineHeight: "1.8",
      
            }}
          >
            ERI specializes in consulting with governments, corporations, communities, and other organizations engaged in climate action. We provide the missing link for implementation by building trusting relationships between grassroots movements and institutional stakeholders, ensuring solutions are inclusive, effective, and grounded in local realities. Our holistic approach provides the infrastructure to expand successful initiatives to neighboring communities, amplifying impact and fostering regional resilience.
          </Typography>
        </Box>
  
        {/* Right Side */}
        <Box
          sx={{
            flex: 0.7,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "20px",
          }}
        >
          {/* Top Section - Carousel */}
          <MuiCarousel />
  
        </Box>
      </Box>
        </>
    )
}
export default Subhome;