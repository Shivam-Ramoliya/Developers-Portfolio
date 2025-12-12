import React from "react";
import About from "../component/About";
import { portfolioData } from "../portfolioData";

const AboutPage = () => {
  return (
    <div className="pt-20">
      <About
        bio={portfolioData.personal.bio}
        image={portfolioData.personal.aboutImage}
        stats={portfolioData.stats}
      />
    </div>
  );
};

export default AboutPage;
