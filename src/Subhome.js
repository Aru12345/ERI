import { Box,Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

import graphic from "./media/graphic.png";
import consulting from "./media/consulting.png"
import design from "./media/design.png"
import livinglab from "./media/livinglab.png"
import m1 from "./media/m1.jpg"
import ea from "./media/ea.jpg"
import scifi from "./media/scifi.jpeg"
const images = [
    m1,
   ea,
   scifi,
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
          height: "320px", // Constrain the height
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

return(
    <>
        <Box sx={{borderRadius: "10px", padding: "20px",  margin: "50px auto", textAlign: "center"}}>
            <Box sx={{maxWidth: "800px",  padding: "20px",  margin: "50px auto",}}>
                <Typography   variant="h4" sx={{ fontWeight: "bold", marginBottom: "20px", color: "#0c0b4d" }}>
                    Who We Serve and Empower
                </Typography>
                <Typography   variant="h6" sx={{ fontWeight: "bold", marginBottom: "20px", color: "#576372", }}>
                    We work with a diverse range of individuals and groups who are key to driving positive change in their communities. From government leaders to children and youth, our programs are tailored to empower these stakeholders in building a sustainable future.
                </Typography>
            <Box sx={{ width: '100%', height: '90%', margin: 'auto'}}>
                <img src={graphic} alt="graphic" style={{ width: '100%', height: '900' }} />
            </Box>
            </Box>
        <Box>
            <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "px", color: "#333",margin:"3%", textShadow: "10px 6px 9px white" }}>
                Our Work
            </Typography>
            <Box   sx={{
    display: "flex",

    width: "100%", // Ensures it takes the full width of the parent
    margin: "auto", // Centers the box horizontally
    padding: "20px", // Optional, adds space inside the box
    borderRadius: "10px", // Optional styling for rounded corners
  }}>
                <Card sx={{ maxWidth: 350 , color:"navy", fontWeight:"bolder", border:"0.1px solid #d3d6e5",   background: 'linear-gradient(135deg, #f28c0d 0%, #e1e272 100%)',marginRight:"5%", marginLeft:"6%"}}>
                    <CardActionArea>
                    <CardMedia component="img"   sx={{ width: '100%', height: 'auto', maxHeight: 150, objectFit: 'contain' }} image={consulting} alt="consulting" />
                    <CardContent  sx={{textAlign:"left"}}>
                        <Typography gutterBottom variant="h6" component="div"  sx={{ fontWeight: 900 }}> Consulting </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary',fontWeight:"bold" }}> We specialize in bridging the gap between grassroots movements and institutional stakeholders by offering expert guidance in:
                        <ul>
                            <li>Climate action strategies tailored to local contexts.</li>
                            <li>Policy development that ensures inclusivity and equity.</li>
                            <li>Building partnerships that foster trust and long-term collaboration.</li>
                        </ul>
                        Our consulting services provide the framework for effective implementation, ensuring solutions are not only impactful but also aligned with the needs and aspirations of communities.
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button size="small" color="white" sx={{fontWeight:"bold"}}> View </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 355 , color:"navy", fontWeight:"bolder", border:"0.1px solid #d3d6e5", marginRight:"5%",  background: 'linear-gradient(135deg, #edce0b 0%, #fdf5c8 100%)'}}>
                    <CardActionArea>
                    <CardMedia component="img"   sx={{ width: '100%', height: 'auto', maxHeight: 150, objectFit: 'contain' }} image={design} alt="consulting" />
                    <CardContent  sx={{textAlign:"left"}}>
                        <Typography gutterBottom variant="h6" component="div"  sx={{ fontWeight: 900 }}> Design </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary',fontWeight:"bold" }}>Our innovative design approach emphasizes the creation of sustainable systems and models that are adaptable and scalable. This includes:
                        <ul>
                            <li>Designing infrastructure and programs that promote ecological harmony and social equity.</li>
                            <li>Developing tools and resources for education, entrepreneurship, and community empowerment.</li>
                            <li>Crafting solutions that integrate cutting-edge technology with traditional knowledge.</li>
                        </ul>
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button size="small" color="white" sx={{fontWeight:900,marginTop:"5%"}}> View </Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 350 , color:"navy", fontWeight:"bolder", border:"0.1px solid #d3d6e5",   background: 'linear-gradient(135deg, #f7ef7c 0%,#bde01f 100%)'}}>
                    <CardActionArea>
                    <CardMedia component="img"   sx={{ width: '100%', height: 'auto', maxHeight: 150, objectFit: 'contain' }} image={livinglab} alt="consulting" />
                    <CardContent  sx={{textAlign:"left"}}>
                        <Typography gutterBottom variant="h6" component="div"  sx={{ fontWeight: 900 }}>Living Labs </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary',fontWeight:"bold" }}>Living Labs are dynamic spaces where ideas come to life, tested and refined in real-world conditions. These labs:
                        <ul>
                            <li>Serve as hubs for experimentation and co-creation with local communities.</li>
                            <li>Pilot new initiatives, gathering data to optimize outcomes.</li>
                            <li>Act as models for scaling successful projects to neighboring regions.</li>
                        </ul>
                        Through our Living Labs, we ensure that innovation is both practical and rooted in the realities of the people it serves.
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button size="small" color="white" sx={{fontWeight:900,marginTop:"10%"}}> View </Button>
                    </CardActions>
                </Card>

    
         

         
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
          background: 'linear-gradient(to left, #3c9519, #0b0c7b)', 
       
         
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