import React from "react";

const DynamicForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSectionChange = (index, field, value) => {
    const updatedSections = [...formData.sections];
    updatedSections[index][field] = value;
    setFormData({ ...formData, sections: updatedSections });
  };

  const addSection = () => {
    setFormData({
      ...formData,
      sections: [...formData.sections, { title: "", content: "" }]
    });
  };

  const removeSection = (index) => {
    const updatedSections = formData.sections.filter((_, i) => i !== index);
    setFormData({ ...formData, sections: updatedSections });
  };

  return (
    <div className="form-section">
      <h2>Portfolio Builder</h2>

      <label>Name:</label>
      <input type="text" name="name" onChange={handleChange} />

      <label>About:</label>
      <textarea name="about" onChange={handleChange} />

      <label>Education:</label>
      <input type="text" name="education" onChange={handleChange} />

      <label>Email:</label>
      <input type="email" name="email" onChange={handleChange} />

      <label>Phone:</label>
      <input type="text" name="phone" onChange={handleChange} />

      <label>LinkedIn:</label>
      <input type="text" name="linkedin" onChange={handleChange} />

      <label>GitHub:</label>
      <input type="text" name="github" onChange={handleChange} />

      <h3>Custom Sections</h3>
      {formData.sections.map((section, index) => (
        <div key={index} className="custom-section">
          <input
            type="text"
            placeholder="Section Title (e.g., Projects, Awards)"
            value={section.title}
            onChange={(e) => handleSectionChange(index, "title", e.target.value)}
          />
          <textarea
            placeholder="Section Content"
            value={section.content}
            onChange={(e) => handleSectionChange(index, "content", e.target.value)}
          />
          <button onClick={() => removeSection(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addSection}>+ Add Section</button>
    </div>
  );
};

export default DynamicForm;
