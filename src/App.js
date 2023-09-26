import React from "react";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import "./index.css";
import Body from "./components/Body";



export default function App(){

  
    return (
      <div className="main">
        <Navbar />
        <Title />
        <Body />
      </div>
    );
}