import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { useLocation } from "react-router";
import Footer from '../components/Footer';
const Greeting = () => {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <h1>
        Hello {location.state.fname} {location.state.lname}
      </h1>
      <Footer name={"Soham Hajare"} number={7387667888} />
    </div>
  );
};

export default Greeting;
