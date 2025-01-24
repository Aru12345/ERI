import { Typography ,Box, backdropClasses} from "@mui/material";
import * as React from 'react';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { accordionSummaryClasses } from '@mui/material/AccordionSummary';




const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
      {
        transform: 'rotate(90deg)',
      },
    [`& .${accordionSummaryClasses.content}`]: {
      marginLeft: theme.spacing(1),
    },
  }));
  

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

function Consulting(){
  const [expanded, setExpanded] = React.useState('panel1');


    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
      };
  
    return(
        <>
        <Box sx={{margin:"110px",marginTop:"150px",marginLeft:"20px", height:"80vh",width:{xs:"80%",md:"85%",xl:"95%"}}}>
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: "#072894", letterSpacing:"2px",
            textShadow: "1px 1px 3px #40bf69", fontWeight:"bold"}}>Consulting</Typography>
            <Box>
            <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}    sx={{
    background: 'linear-gradient(to left, #2bd469, #0ef1c2, #2bd469)',
  }}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography component="span" sx={{fontWeight:"bold"}}>Critical Minerals Consulting</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{background: 'linear-gradient(to left, #2abfd5, #00c4ff,#2abfd5)'}}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography  fontWeight="bold" component="span">Climate Action for Africa</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{  background: 'linear-gradient(to left, #2bd469, #0ef1c2, #2bd469)'}}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography component="span" sx={{fontWeight:"bold"}}>UCLA Conferance</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}  sx={{background: 'linear-gradient(to left, #2abfd5, #00c4ff,#2abfd5)'}}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography component="span" sx={{fontWeight:"bold"}}>Partnership Ecovillages REDES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={{  background: 'linear-gradient(to left, #2bd469, #0ef1c2, #2bd469)'}}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography component="span" sx={{fontWeight:"bold"}}>MARS initiative</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
            </Box>

        </Box>
      

        </>
    )
}
export default Consulting;