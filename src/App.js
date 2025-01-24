import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Design from './Design';
import Livinglab from './Livinglab';
import { Button } from '@mui/material';
import "./App.css";

import Projects from "./Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Consulting from './Consulting';

function App() {
  return (
    <>
      {/* Fixed Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        {/* Combine Home and Subhome in one route */}
        <Route
          path="/"
          element={ <Home />}/>
        <Route path="/projects" element={<Projects />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/design" element={<Design />} />
        <Route path="/livinglab" element={<Livinglab />} />
        {/* Add other routes here */}
      </Routes>
    </>
  );
}

export default App;