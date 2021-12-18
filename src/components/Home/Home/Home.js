import React from "react";
import Footer from "../../Footer/Footer";
import Claint from "../Claint/Claint";
import HomeServices from "../HomeServices/HomeServices";
import HomeTopBenner from "../HomeTopBenner/HomeTopBenner";
import OurWorks from "../OurWorks/OurWorks";
import Reviews from "../Reviews/Reviews";
import Skillls from "../Skills/Skillls";
import Subscribe from "../Subscribe/Subscribe";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <HomeTopBenner></HomeTopBenner>
      <OurWorks></OurWorks>
      <Skillls></Skillls>
      <Subscribe></Subscribe>
      <HomeServices></HomeServices>
      <Reviews></Reviews>
      <Claint></Claint>
      <Footer></Footer>
    </div>
  );
};

export default Home;
