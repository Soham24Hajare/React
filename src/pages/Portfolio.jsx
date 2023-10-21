import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from '../components/Footer';

const Portfolio = () => {
  return (
    <div>
      <Navbar />
    
    <div style={styles.page}>
      <h1>Design Portfolio</h1>
      <p>
        Welcome to my portfolio. Here, you can explore some of the
        projects I've worked on, showcasing my design skills and creativity.
      </p>
      <div style={styles.project}>
        <h2>Project 1</h2>
        <p>
          This is a brief description of my first design project. You can view
          more details and images by clicking the link below.
        </p>
        <a href="#">View Project</a>
      </div>
      <div style={styles.project}>
        <h2>Project 2</h2>
        <p>
          This is a brief description of my second design project. You can view
          more details and images by clicking the link below.
        </p>
        <a href="#">View Project</a>
      </div>
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
  project: {
    backgroundColor: "#fff",
    width: "80%",
    margin: "20px auto",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
  },
};

export default Portfolio;
