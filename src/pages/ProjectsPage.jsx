import React from "react";
import Portfolio from "../component/Portfolio";
import { portfolioData } from "../portfolioData";

const ProjectsPage = () => {
  return (
    <div className="pt-20">
      <Portfolio projects={portfolioData.projects} />
    </div>
  );
};

export default ProjectsPage;
