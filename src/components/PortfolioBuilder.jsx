import React, { useState } from "react";
import DynamicForm from "./DynamicForm";
import Preview from "./Preview";
import "./PortfolioBuilder.css";

const PortfolioBuilder = () => {
  const [data, setData] = useState({
    profilePicture: "", // New field for profile picture URL
    name: "",
    specification: "",
    about: "",
    contact: {
      phone: "",
      email: "",
      extra: [], // GitHub, LinkedIn etc dynamic
    },
    education: {
      schooling: "",
      ug: "",
      extra: [], // PG, Research etc dynamic
    },
    skills: [],
    certifications: [],
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