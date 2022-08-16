import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/intro/Intro";
import './App.css';
import Services from "./components/services/Services";
import Experience from "./components/experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
const App = () =>{
  return(
    <>
      <div className="App">
        <Navbar/>
        <Intro/>
        <Services/>
        <Experience/>
        <Works/>
        <Portfolio/>
      </div>
    </>
  )
}

export default App;