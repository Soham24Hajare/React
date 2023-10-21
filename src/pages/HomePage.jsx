import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Section from "../components/Section/Section.jsx";
import ProfileInfo from "../components/ProfileInfo/ProfileInfo";
import Footer from '../components/Footer';
const Home = () => {
  return (
    <>
      <Navbar />
      <Section/>
      <div style={{ marginLeft: 200 }}>
        <ProfileInfo
          name={"GitHub"}
          username={"Soham Hajare"}
          email={"soham.hajare2003@gmail.com"}
          link={"https://github.com/Soham24Hajare"}
        />
        <ProfileInfo
          name={"Instagram"}
          username={"Soham Hajare"}
          email={"soham.hajare2003@gmail.com"}
          link={"https://www.instagram.com/sohamhajare_24/"}
        />
        <ProfileInfo
          name={"Facebook"}
          username={"Soham Hajare"}
          email={"soham.hajare2003@gmail.com"}
          link={"https://facebook.com/"}
        />
      </div>
      <Footer name={"Soham Hajare"} number={7387667888} />
    </>
  );
};
export default Home;
