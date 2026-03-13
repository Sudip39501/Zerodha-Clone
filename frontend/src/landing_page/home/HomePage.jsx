import React from "react";
import Hero from "./Hero";
import Award from "./Award";
import States from "./States";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccout from "../OpenAccout";


const HomePage = () => {
  return (
    <div>
      <Hero />
      <Award />
      <States />
      <Pricing />
      <Education />
      <OpenAccout />
    </div>
  );
};

export default HomePage;
