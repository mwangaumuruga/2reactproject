import React from 'react'
//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import devsignLogo from "./assets/devsign.png";
import Navbar from "./Components/Navbar";
import MainContent from "./Components/MainContents";
import Section from "./Components/Section";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



//for pages
import About from './Components/Pages/About';
//import TechJourney from './pages/TechJourney'
//import FutureAI from './pages/FutureAI'
//import NotFound from './pages/NotFound'


function App() {
  // const [count, setCount] = useState(0);

  return (
   <>
   <div className='App'>
      <Navbar />
      <MainContent />
      <Section />
      <About/>
    </div>

<Router>
<Routes>

  <Route path="/" element={<About />} />
</Routes>
</Router>
  </>);
}



export default App