import React from "react";

const Preview = ({ formData }) => {
  return (
    <div className="preview-section">
      <h1>{formData.name || "Your Name"}</h1>

      <h3>About Me</h3>
      <p>{formData.about || "Write something about yourself..."}</p>

      <h3>Education</h3>
      <p>{formData.education || "Your Education"}</p>

      {formData.sections.map((section, index) => (
        <div key={index}>
          <h3>{section.title || "Untitled Section"}</h3>
          <p>{section.content || "No details added yet..."}</p>
        </div>
      ))}

      <h3>Contact</h3>
      <p>Email: {formData.email || "yourmail@example.com"}</p>
      <p>Phone: {formData.phone || "000-000-0000"}</p>
      <p>LinkedIn: {formData.linkedin}</p>
      <p>GitHub: {formData.github}</p>
    </div>
  );
};

export default Preview;
