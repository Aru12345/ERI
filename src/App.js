import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <div
    style={{
      display: "flex",
      height: "100vh", // Ensures the app takes up the full viewport height
      backgroundImage: `url("https://www.techiexpert.com/wp-content/uploads/2024/03/Report-Exposes-AIs-Potential-Negative-Effects-on-Climate-Action.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      
 
    }}
  >
      <Navbar />
      <div style={{ marginLeft: "250px", padding: "20px", width: "100%" }}>
        <Home />
      </div>
    </div>
  );
}

export default App;
