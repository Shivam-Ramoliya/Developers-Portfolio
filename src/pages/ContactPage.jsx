import React from "react";
import Contact from "../component/Contact";
import { portfolioData } from "../portfolioData";

const ContactPage = () => {
  return (
    <div className="pt-20">
      <Contact
        email={portfolioData.contact.email}
        phone={portfolioData.contact.phone}
        location={portfolioData.contact.location}
        socialLinks={portfolioData.contact.socialLinks}
      />
    </div>
  );
};

export default ContactPage;
