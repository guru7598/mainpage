import React from "react";
import "./FormSection.css";

const FormSection = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-section">
      <h3>Portfolio Builder</h3>

      <label>Role:</label>
      <select name="role" value={formData.role} onChange={handleChange}>
        <option value="">-- Select --</option>
        <option value="student">Student</option>
        <option value="professional">Professional</option>
      </select>

      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />

      <label>About:</label>
      <textarea name="about" value={formData.about} onChange={handleChange}></textarea>

      <label>Education:</label>
      <input type="text" name="education" value={formData.education} onChange={handleChange} />

      {formData.role === "student" && (
        <>
          <label>Projects:</label>
          <textarea
            name="projects"
            value={formData.projects}
            onChange={handleChange}
          ></textarea>

          <label>Internships:</label>
          <textarea
            name="internships"
            value={formData.internships}
            onChange={handleChange}
          ></textarea>
        </>
      )}

      {formData.role === "professional" && (
        <>
          <label>Experience:</label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          ></textarea>

          <label>Publications:</label>
          <textarea
            name="publications"
            value={formData.publications}
            onChange={handleChange}
          ></textarea>

          <label>Certifications:</label>
          <textarea
            name="certifications"
            value={formData.certifications}
            onChange={handleChange}
          ></textarea>
        </>
      )}

      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />

      <label>Phone:</label>
      <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
    </div>
  );
};

export default FormSection;
