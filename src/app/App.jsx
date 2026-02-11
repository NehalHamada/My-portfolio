import React from "react";
import "../styles/App.css";
import Navbar from "../components/common/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Skill from "../components/skills/Skills";
import Projects from "../components/projects/Projects";

import Footer from "../components/common/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-[linear-gradient(to_bottom_right,#8F2C8F,#5B2B82,#2B1F6F,#0F0B5C)]">
        <Navbar />
        <div id="hero">
          <Hero />
        </div>
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skill">
        <Skill />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <Footer />
    </>
  );
}

export default App;
