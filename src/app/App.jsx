import React from "react";
import "../styles/App.css";
import Navbar from "../components/common/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Skill from "../components/skills/Skills";
import Projects from "../components/projects/Projects";

import Footer from "../components/common/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "../components/contact/Contact";

function App() {
  return (
    <>
      <div className="bg-[rgba(55,71,108,0.8)]">
        <Navbar />
        <div id="hero">
          <Hero />
        </div>
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skill">
        <Skill />
      </div>

      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
