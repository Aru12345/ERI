import React from 'react';
import Navabar from './Navbar';
import Home from './Home';
import { Button } from '@mui/material';
import "./App.css";
import Subhome from './Subhome';

function App() {
  return (
    <>
     <div className="first">
      <div class="subfirst">
      <Navabar />

      </div>
      <Home />
    </div>
    <div className='second'>
      <Subhome />
    </div>
   
    </>
   
  );
}

export default App;