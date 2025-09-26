import React, { useState } from "react";
import DynamicForm from "./DynamicForm";
import Preview from "./Preview";
import "./PortfolioBuilder.css";

const PortfolioBuilder = () => {
  const [data, setData] = useState({
    profilePicture: "",
    name: "",
    specification: "",
    about: "",
    contact: {
      phone: "",
      email: "",
      extra: [],
    },
    education: {
      schooling: {
        // tenth: { schoolName: "", percentage: "", yearOfPassing: "" }
        // twelfth: { schoolName: "", percentage: "", yearOfPassing: "" }
      },
      ug: {
        // degree: "", major: "", collegeName: "", percentage: "", yearOfPassing: ""
      },
      custom: [
        // { degree: "", major: "", collegeName: "", percentage: "", yearOfPassing: "" }
      ]
    },
    skills: [],
    certifications: [], // Now supports both text and file objects
    languages: [],
    customSections: [],
  });

  return (
    <div className="portfolio-builder">
      {/* Left side Form */}
      <DynamicForm data={data} setData={setData} />

      {/* Right side Preview */}
      <Preview data={data} />
    </div>
  );
};

export default PortfolioBuilder;