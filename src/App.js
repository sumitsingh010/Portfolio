import React, { useState, useEffect, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

/* Pages */
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import Services from "./pages/Service/ServicesPage";
import Project from "./pages/Project/ProjectPage";

import RouterScrollTop from "./components/ScrollToTop/RouterScrollTop";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const YourParticlesComponent = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      options={{
        background: { color: "#000" },
        particles: {
          number: { value: 50 },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
          links: { enable: true, color: "#fff" },
        },
      }}
      init={particlesInit}
    />
  );
};

function App() {
  const [loading, setLoading] = useState(true); // Start as true

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div>
      <RouterScrollTop />
      <YourParticlesComponent />
      {loading ? (
        <div className="loading-page">
          <div className="loader">
            <span>=(Sumit Singh Sengar)=&gt; </span>
            <span>=(Sumit Singh Sengar)=&gt; </span>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      )}
    </div>
  );
}

export default App;