import React, { useState } from "react";
import DynamicForm from "./DynamicForm";
import Preview from "./Preview";
import "./PortfolioBuilder.css";

const PortfolioBuilder = () => {
  const [formData, setFormData] = useState({
    name: "",
    about: "",
    education: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    sections: [] // dynamic sections
  });

  return (
    <div className="portfolio-builder">
      {/* Left Side Form */}
      <DynamicForm formData={formData} setFormData={setFormData} />

      {/* Right Side Preview */}
      <Preview formData={formData} />
    </div>
  );
};

export default PortfolioBuilder;
