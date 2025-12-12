import React from "react";
import Hero from "../component/Hero";
import { portfolioData } from "../portfolioData";

const HomePage = () => {
  return (
    <div className="pt-20">
      <Hero
        profileImage={portfolioData.personal.profileImage}
        name={portfolioData.personal.name}
        titles={portfolioData.personal.titles}
      />
    </div>
  );
};

export default HomePage;
