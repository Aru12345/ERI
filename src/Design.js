import React from 'react';
import { Typography, Box } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useMediaQuery } from 'react-responsive';

function TabPanel({ children, value, index, ...other }) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


function Design() {
    const [value, setValue] = React.useState(0);
    const isNotXL = useMediaQuery({ maxWidth: 1100 });

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ margin: "110px", marginTop: "150px", marginLeft: "20px", height: "80vh", width: { xs: "80%", md: "85%", xl: "95%" } }}>
                <Typography
                    variant="h5"
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                        color: "#072894",
                        letterSpacing: "2px",
                        textShadow: "1px 1px 3px #40bf69",
                        fontWeight: "bold"
                    }}
                >
                    Design
                </Typography>
                {isNotXL ? <p class="note">Scroll horizontally</p> : <p></p>}

                <Box sx={{ maxWidth: { xs: 400, sm: 480,lg:1400 }, bgcolor: '#07f8c7',fontWeight:"bold" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons={false}
                        aria-label="scrollable prevent tabs example"
                        sx={{fontWeight:"bold"}}
                    >
                        <Tab label=" Leadership in Sustainability" sx={{fontWeight:"bold",color:"black"}} />
                        <Tab label="Health/Wellbeing Nigeria"sx={{fontWeight:"bold",color:"black"}} />
                        <Tab label=" In Service Programs"sx={{fontWeight:"bold",color:"black"}} />
                        <Tab label="SpaceClime"sx={{fontWeight:"bold",color:"black"}} />
                        <Tab label="Green Career Pathway"sx={{fontWeight:"bold",color:"black"}} />
                        <Tab label=" GAPP"sx={{fontWeight:"bold",color:"black"}} />
                        <Tab label=" I Go Green Campaign" sx={{fontWeight:"bold",color:"black"}} />
                    </Tabs>
                </Box>

                {/* Tab Content */}
                <TabPanel value={value} index={0}>
                    Content for Item One
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Content for Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Content for Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Content for Item Four
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Content for Item Five
                </TabPanel>
                <TabPanel value={value} index={5}>
                    Content for Item Six
                </TabPanel>
                <TabPanel value={value} index={6}>
                    Content for Item Seven
                </TabPanel>
            </Box>
        </>
    );
}

export default Design;
