import React from "react";
import Resume from "../component/Resume";
import { portfolioData } from "../portfolioData";

const ResumePage = () => {
  return (
    <div className="pt-20">
      <Resume
        resumePdfUrl={portfolioData.resume.pdfUrl}
        experience={portfolioData.resume.experience}
        education={portfolioData.resume.education}
      />
    </div>
  );
};

export default ResumePage;
