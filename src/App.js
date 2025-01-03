import React from 'react';
import Navabar from './Navbar';
import Home from './Home';
import { Button } from '@mui/material';
import "./App.css";


function App() {
  return (
    <div className="back">
      <Navabar />
      <Home />
    </div>
  );
}

export default App;