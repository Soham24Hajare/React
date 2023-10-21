import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from '../components/Footer';



const About = () => {
  return (
    <div>
      <Navbar />
    
    <div style={styles.page}>
      <h1>About Page</h1>
      <p>
        Hello, engineering enthusiast! This page is dedicated to all the curious
        minds in the world of engineering. Whether you're passionate about coding,
        designing, or building amazing things, this is the place for you.
      </p>
      <p>
        Our mission is to inspire and provide valuable insights to engineering
        students like you. We believe that knowledge and creativity are the keys
        to success in the engineering world.
      </p>
      <p>
        Explore the endless possibilities, learn, and innovate. The future is
        yours to create.
      </p>
    </div>
    <Footer name={"Soham Hajare"} number={7387667888} />
    </div>
  );
};

const styles = {
  page: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "#f0f0f0",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
};

export default About;
