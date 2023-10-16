import React from "react";
import "./Section.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-heading">Welcome to Soham's Profile</h1>
        <p className="hero-subheading">Discover more about me and my work.</p>
        <a href="#" className="cta-button">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
