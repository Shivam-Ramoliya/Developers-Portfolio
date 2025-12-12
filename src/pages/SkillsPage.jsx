import React from "react";
import Skills from "../component/Skills";
import { portfolioData } from "../portfolioData";

const SkillsPage = () => {
  return (
    <div className="pt-20">
      <Skills skillCategories={portfolioData.skillCategories} />
    </div>
  );
};

export default SkillsPage;
