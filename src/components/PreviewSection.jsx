import React from "react";
import "./PreviewSection.css";

const PreviewSection = ({ formData }) => {
  return (
    <div className="preview-section">
      <h1>{formData.name || "Your Name"}</h1>

      <h3>About Me</h3>
      <p>{formData.about || "Write something about yourself..."}</p>

      <h3>Education</h3>
      <p>{formData.education || "Your Education"}</p>

      {formData.role === "student" && (
        <>
          <h3>Projects</h3>
          <p>{formData.projects || "List your projects here..."}</p>

          <h3>Internships</h3>
          <p>{formData.internships || "Mention internships here..."}</p>
        </>
      )}

      {formData.role === "professional" && (
        <>
          <h3>Experience</h3>
          <p>{formData.experience || "Add your work experience here..."}</p>

          <h3>Publications</h3>
          <p>{formData.publications || "Mention your publications..."}</p>

          <h3>Certifications</h3>
          <p>{formData.certifications || "List certifications here..."}</p>
        </>
      )}

      <h3>Contact</h3>
      <p>Email: {formData.email || "yourmail@example.com"}</p>
      <p>Phone: {formData.phone || "000-000-0000"}</p>
    </div>
  );
};

export default PreviewSection;
