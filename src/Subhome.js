import { Box,Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as React from 'react';
import Button from '@mui/material/Button';
import Grid2 from "@mui/material";
import {ListItem} from "@mui/material";

import graphic from "./media/graphic.png";
import consulting from "./media/consulting.png"
import design from "./media/design.png"
import livinglab from "./media/livinglab.png"
import m1 from "./media/m1.jpg"
import ea from "./media/ea.jpg"
import scifi from "./media/scifi.jpeg"
const images = [m1,ea,scifi];

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
  <Box sx={{ width: "60%", maxWidth: "500px", height: "320px", margin: "auto", mt:3, overflow: "hidden",borderRadius: "1px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",}}>
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
      <Box sx={{ borderRadius: "10px", padding: "20px", justifyItems:"center", alignItems: "center", justifyContent: "center",fontFamily:"Gill Sans"}}>
        <Typography   variant="h1" gutterBottom sx={{ fontWeight: "bold", color: "#0c0b4d",fontSize:{xs:"1.3rem",sm:"1.5rem",lg:"2em"},marginTop:"3%" }}>
          Who We Serve & Empower
        </Typography>
        <Box sx={{  maxWidth: "800px", margin: "0 auto",}}>
          <Typography   variant="h6" sx={{ fontWeight: "bold", marginBottom: "35px", color: "#576372",fontSize:{xs:"0.9rem",lg:"1.2rem"} ,textAlign:"center"}}>
            We work with a diverse range of individuals and groups who are key to driving positive change in their communities. From government leaders to children and youth, our programs are tailored to empower these stakeholders in building a sustainable future.
          </Typography>
        </Box>
        <Box sx={{ width: '100%',height: '90%',margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Box component="img" src={graphic} alt="graphic" sx={{ height:{xs:"10em",sm:"15em",submd:"18em",lg:"20em"} ,justifyContent: "center"}}/>
        </Box>
 
        
<Box sx={{justifyItems:"center", alignItems: "center",justifyContent: "center",width:"1200px"}}>
  <Typography variant="h4" gutterBottom sx={{ fontSize:{xs:"1.3rem",sm:"1.5rem",lg:"2em"},fontWeight: "bold", marginBottom: "px", color: "#0c0b4d",margin:"3%", textShadow: "10px 6px 9px white" }}>
    Our Work
  </Typography>
  <Box sx={{ display:"flex", flexDirection:{xs:"column",xl:"row"} ,justifyContent:"center",alignItems:"center", width:"100%"}}>
    
    <Box sx={{ border:"0.3px solid grey",background: 'linear-gradient(135deg, #f28c0d 0%, #e1e272 100%)',margin:"10px",padding:"10px", width:{xs:"23.5%",sm:"33%",submd:"43%",xl:"33%"}, height:{xs:"602px",sm:"550px",submd:"450px",xl:"550px"}}}>
    <Box
component="img"
sx={{ width: '100%', height: 'auto', maxHeight: 150, objectFit: 'contain',marginBottom:"2%" }} src={consulting} alt="consulting"

/>
<Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 900 ,textAlign:{xs:"center"},paddingLeft:{lg:"12px"}}}> Consulting </Typography>
<Typography variant="body2" sx={{ color: 'text.secondary',fontWeight:"bold",paddingLeft:"12px" }}> We specialize in bridging the gap between grassroots movements and institutional stakeholders by offering expert guidance in:
<ul >
<li>Climate action strategies tailored to local contexts.</li>
<li>Policy development that ensures inclusivity and equity.</li>
<li>Building partnerships that foster trust and long-term collaboration.</li>
</ul>
Our consulting services provide the framework for effective implementation, ensuring solutions are not only impactful but also aligned with the needs and aspirations of communities.
</Typography>
<Button size="small" color="white" sx={{fontWeight:"bold",backgroundColor:"orange",border:"0.1px solid grey" ,margin:"10px"}}> View </Button>
    </Box>
  
   
    <Box sx={{ border:"0.3px solid grey",background: 'linear-gradient(135deg, #edce0b 0%, #fdf5c8 100%)',margin:"10px",padding:"10px", width:{xs:"24%",sm:"33%",submd:"43%",xl:"33%"},height:{xs:"600px",submd:"510px",sm:"550px",xl:"550px"}}}>
    <Box
component="img"
sx={{ width: '100%', height: 'auto', maxHeight: 150, objectFit: 'contain',marginBottom:"2%" }} src={design} alt="design"/>
<Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 900 ,textAlign:{xs:"center"}}}> Design </Typography>
<Typography variant="body2" sx={{ color: 'text.secondary',fontWeight:"bold",paddingLeft:"12px" }}>Our innovative design approach emphasizes the creation of sustainable systems and models that are adaptable and scalable. This includes:
<ul>
<li>Designing infrastructure and programs that promote ecological harmony and social equity.</li>
<li>Developing tools and resources for education, entrepreneurship, & community empowerment.</li>
<li>Crafting solutions integrating cutting-edge technology with traditional knowledge.</li>
</ul>

</Typography>
<Button size="small" color="white" sx={{fontWeight:"bold",backgroundColor:"orange",border:"0.1px solid grey",margin:"10px",marginTop:{xs:"75px",sm:"85px",xl:"50px"}}}> View </Button>
    </Box>
 
    <Box sx={{ border:"0.3px solid grey",background: 'linear-gradient(135deg, #f7ef7c 0%,#bde01f 100%)',margin:"10px",padding:"10px", width:{xs:"24%",sm:"33%",submd:"43%",xl:"33%"}, height:{xs:"600px",submd:"480px",sm:"550px",lg:"550px"}}}>
    
<Box
component="img"
sx={{ width: '100%', height: 'auto', maxHeight: 150, objectFit: 'contain' }} src={livinglab} alt="livinglab"

/>

<Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 900 ,textAlign:{xs:"center"}}} > Living Lab </Typography>
<Typography variant="body2" sx={{ color: 'text.secondary',fontWeight:"bold",paddingLeft:"12px" }}>Living Labs are dynamic spaces where ideas come to life, tested and refined in real-world conditions. These labs:
<ul>
<li>Serve as hubs for experimentation and co-creation with local communities.</li>
<li>Pilot new initiatives, gathering data to optimize outcomes.</li>
<li>Act as models for scaling successful projects to neighboring regions.</li>
</ul>
Through our Living Labs, we ensure that innovation is both practical and rooted in the realities of the people it serves.
</Typography>
<Button size="small" color="white" sx={{fontWeight:"bold",backgroundColor:"orange",border:"0.1px solid grey",margin:"10px",marginTop:"30px"}}> View </Button>
    </Box>

   
    
  

  </Box>
 
  </Box>


</Box>
       


      <Box
        className="home"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          minHeight: "40vh",
          background: 'linear-gradient(to left, #3c9519, #0b0c7b)', 
          flexDirection:{xs:"column",submd:"row"}
       
         
        }}
      >
        {/* Left Side - Description */}
        <Box
          className="text-box"
          sx={{
            flex: 0.1,
            display: "flex",
            alignItems: "center",
         
            padding: "20px",
            marginLeft: {xs:"10px",lg:"90px"},
            
       
            color: "white",
            borderRadius: "8px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              width:{xs:"850px"},
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
            flex: 0.2,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
        
            width:{xs:"350px"},
            height:{xs:"1px"}
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