import React from "react";
import { Box, Typography } from "@mui/material";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Button from '@mui/material/Button';

import "./App.css"

import graphic from "./media/graphic.png";
import panel from "./media/panel.png";
import consulting from "./media/consulting.png"
import design from "./media/design.png"
import livinglab from "./media/livinglab.png"
import m1 from "./media/m1.jpg"
import ea from "./media/ea.jpg"
import scifi from "./media/scifi.jpeg"
const images = [m1,ea,scifi];

const MuiCarousel = () => {
  const settings = {

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

return (
<Box sx={{ width: "80%", maxWidth: "650px", height: {xs:"auto",xl:"350px"},mb:1.5, mt:2, overflow: "hidden",}}>
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


function Home() {
  return (
    <>
  <div class="first">
    <div className="subfirst">
  <Box 
        sx={{
          borderRadius: "10px",
          padding: "30px",
          maxWidth: "1000px",
          margin: "5% auto",
          textAlign: "center",
          opacity:"0.9",
          boxShadow: "0 8px 15px rgba(2, 2, 8, 0.5)",
          color: "#2d5ad2",
          zindex:-1,
        marginTop:{xs:"12%"},
        width:{xs:"200px", sm:"400px",md:"600px",submd:"700px",lg:"800px"},
        height:{submd:"200px",lg:"180px"},
        zIndex:-1
        
       
       
        }}
      >
        <Typography
          variant="h1"
          fontWeight={900}
          sx={{ color: "navy", textShadow: "0 0 5px white, 0 0 10px #0ff",fontSize:{xs:"1.2rem",sm:"1.3rem",md:"1.4rem",submd:"1.6rem"} }}
        >
          Building Bridges – Creating Solutions for People and Planet
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: "15px",
            fontWeight: "900",
            color: "black",
            letterSpacing: "0.5px",
            textShadow: "2px 6px 9px #15eaa5",
            backgroundColor: "white",
            opacity: 0.9,
            borderRadius: "10px",
            border: "0.2px solid black",
            padding: "20px",
            fontSize:{xs:"small",submd:"medium",lg:"large"}
          }}
        >
         
          Since 2001, we have united individuals, communities, and organizations to foster collaboration and empower communities. We champion justice, equity, and ecological harmony, transforming challenges into opportunities for a thriving, sustainable future.
        </Typography>
      </Box>
    
      </div>
  </div>
  <div className="second">
  <Box sx={{ borderRadius: "10px", padding: "20px", justifyItems:"center", alignItems: "center", justifyContent: "center",textAlign:"center",fontFamily:"Gill Sans"}}>
       
       <Typography variant="h4" gutterBottom sx={{ fontSize:{xs:"1.3rem",sm:"1.5rem",lg:"2em"},fontWeight: "bold",  marginBottom: "16px", color: "#0c0b4d",margin:"3%", textShadow: "10px 6px 9px white" }}>
  Recent Initiatives
 </Typography>
 <Box>
   <Box display="flex" flexDirection={{xs:"col",lg:"row"}} sx={{width:{xs:"100%",submd:"50%"}, justifyContent: "center", // Centers horizontally in flex container
       alignItems: "center",}}>
   <Box component="img" src={panel} alt="panel" sx={{ height:{xs:"6.7em",sm:"11em",submd:"18em",lg:"20em"} ,marginLeft:{submd:"850px"},justifyContent: "center", // Ensures centering in non-flex containers
         }}/>

   </Box>
   <Box sx={{ display:"flex",flexWrap:"wrap",textAlign:"center",justifyContent:"center"}}>
   <Typography sx={{ fontWeight:"bold",fontSize:"small", wordWrap: "wrap",
     maxWidth: "90%",   boxSizing: "border-box"}}> Engaged in a panel discussion exploring innovative technologies and financing solutions for biodiversity protection in Sub-Saharan Africa</Typography>

   </Box>

   <Box sx={{justifyContent:"center",alignItems:"center",marginBottom:"7%"}}>
     <Button  sx={{width:{sm:"8%",md:"15%"},fontSize:{xs:"small",submd:"medium"},borderRadius:"10px",marginTop:"1%" ,backgroundColor:"orange", fontWeight:"bold", color:"black"}}>Learn More</Button>

   </Box>
 </Box>

      

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
   
   <Box sx={{ textAlign:"left",border:"0.3px solid grey",background: 'linear-gradient(135deg, #f28c0d 0%, #e1e272 100%)',margin:"10px",padding:"10px", width:{xs:"23.5%",sm:"33%",submd:"43%",xl:"33%"}, height:{xs:"602px",sm:"550px",submd:"450px",xl:"550px"}}}>
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
<Button size="small" href="/consulting" color="white" sx={{fontWeight:"bold",backgroundColor:"orange",border:"0.1px solid grey" ,margin:"10px"}}> View </Button>
   </Box>
 
  
   <Box sx={{textAlign:"left", border:"0.3px solid grey",background: 'linear-gradient(135deg, #edce0b 0%, #fdf5c8 100%)',margin:"10px",padding:"10px", width:{xs:"24%",sm:"33%",submd:"43%",xl:"33%"},height:{xs:"600px",submd:"510px",sm:"550px",xl:"550px"}}}>
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
<Button size="small" href="/design" color="white" sx={{fontWeight:"bold",backgroundColor:"orange",border:"0.1px solid grey",margin:"10px",marginTop:{xs:"75px",sm:"85px",xl:"50px"}}}> View </Button>
   </Box>

   <Box sx={{textAlign:"left", border:"0.3px solid grey",background: 'linear-gradient(135deg, #f7ef7c 0%,#bde01f 100%)',margin:"10px",padding:"10px", width:{xs:"24%",sm:"33%",submd:"43%",xl:"33%"}, height:{xs:"600px",submd:"480px",sm:"550px",lg:"550px"}}}>
   
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
<Button size="small" color="white" href="/livinglab" sx={{fontWeight:"bold",backgroundColor:"orange",border:"0.1px solid grey",margin:"10px",marginTop:"30px"}}> View </Button>
   </Box>

  
   
 

 </Box>

 </Box>


</Box>
      


     <Box
       className="home"
       sx={{
         display: "flex",
         justifyContent: "space-around",
        
         background: 'linear-gradient(to left, #3c9519, #0b0c7b)', 
         flexDirection:{xs:"column",xl:"row"}
      
        
       }}
     >
     <Box sx={{width:{xl:"50%"}, margin:"5%",marginTop:{xs:"6%",xl:"6%"},marginBottom:{submd:"1%"}, color:"white"}}>
       <Typography variant="body1" sx={{fontWeight:{xs:600,sm:900},lineHeight:{xs:1.1,sm:1.5}, letterSpacing:{xs:1,sm:1.3}}}>
       ERI specializes in consulting with governments, corporations, communities, and other organizations engaged in climate action. We provide the missing link for implementation by building trusting relationships between grassroots movements and institutional stakeholders, ensuring solutions are inclusive, effective, and grounded in local realities. Our holistic approach provides the infrastructure to expand successful initiatives to neighboring communities, amplifying impact and fostering regional resilience.
       </Typography>

     </Box>
     <Box sx={{width:{xl:"50%"}, margin:"5%", marginBottom:{xs:"0.1%"}, marginTop:{submd:"5%",xl:"4%"}}}>
       
     <MuiCarousel />

     </Box>
     </Box>
     </div>
   

      
    </>
  );
}

export default Home;
