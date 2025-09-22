import React from "react";

const DynamicForm = ({ data, setData }) => {
  const handleChange = (section, field, value) => {
    setData({
      ...data,
      [section]: {
        ...data[section],
        [field]: value,
      },
    });
  };

  const handleArrayChange = (section, index, value) => {
    const updated = [...data[section]];
    updated[index] = value;
    setData({ ...data, [section]: updated });
  };

  const addItem = (section) => {
    setData({ ...data, [section]: [...data[section], ""] });
  };

  const removeItem = (section, index) => {
    const updated = data[section].filter((_, i) => i !== index);
    setData({ ...data, [section]: updated });
  };

  /* Custom Sections */
  const addCustomSection = () => {
    setData({
      ...data,
      customSections: [...data.customSections, { title: "", items: [] }],
    });
  };

  const updateCustomTitle = (index, value) => {
    const updated = [...data.customSections];
    updated[index].title = value;
    setData({ ...data, customSections: updated });
  };

  const addCustomItem = (index) => {
    const updated = [...data.customSections];
    updated[index].items.push("");
    setData({ ...data, customSections: updated });
  };

  const updateCustomItem = (sectionIndex, itemIndex, value) => {
    const updated = [...data.customSections];
    updated[sectionIndex].items[itemIndex] = value;
    setData({ ...data, customSections: updated });
  };

  const removeCustomItem = (sectionIndex, itemIndex) => {
    const updated = [...data.customSections];
    updated[sectionIndex].items = updated[sectionIndex].items.filter(
      (_, i) => i !== itemIndex
    );
    setData({ ...data, customSections: updated });
  };

  return (
    <div className="form-section">
      <h2>Portfolio Builder</h2>

      {/* Profile Picture */}
      <label>Profile Picture URL</label>
      <input
        type="url"
        placeholder="https://example.com/your-photo.jpg"
        value={data.profilePicture}
        onChange={(e) => setData({ ...data, profilePicture: e.target.value })}
      />

      {/* Name */}
      <label>Name</label>
      <input
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      {/* Specification */}
      <label>Specification / Role</label>
      <input
        value={data.specification}
        onChange={(e) => setData({ ...data, specification: e.target.value })}
      />

      {/* About */}
      <label>About</label>
      <textarea
        value={data.about}
        onChange={(e) => setData({ ...data, about: e.target.value })}
      />

      {/* Contact */}
      <h3>Contact</h3>
      <input
        placeholder="Phone"
        value={data.contact.phone}
        onChange={(e) => handleChange("contact", "phone", e.target.value)}
      />
      <input
        placeholder="Email"
        value={data.contact.email}
        onChange={(e) => handleChange("contact", "email", e.target.value)}
      />

      {data.contact.extra.map((c, i) => (
        <div key={i} className="dynamic-row">
          <input
            value={c}
            placeholder="e.g. LinkedIn, GitHub"
            onChange={(e) => {
              const updated = [...data.contact.extra];
              updated[i] = e.target.value;
              setData({ ...data, contact: { ...data.contact, extra: updated } });
            }}
          />
          <button
            type="button"
            onClick={() => {
              const updated = data.contact.extra.filter((_, idx) => idx !== i);
              setData({ ...data, contact: { ...data.contact, extra: updated } });
            }}
          >
            ❌
          </button>
        </div>
      ))}
      <button
        type="button"
        className="add-btn"
        onClick={() =>
          setData({
            ...data,
            contact: { ...data.contact, extra: [...data.contact.extra, ""] },
          })
        }
      >
        + Add More Contact
      </button>

      {/* Education */}
      <h3>Education</h3>
      <input
        placeholder="Schooling"
        value={data.education.schooling}
        onChange={(e) =>
          handleChange("education", "schooling", e.target.value)
        }
      />
      <input
        placeholder="UG"
        value={data.education.ug}
        onChange={(e) => handleChange("education", "ug", e.target.value)}
      />

      {data.education.extra.map((ed, i) => (
        <div key={i} className="dynamic-row">
          <input
            value={ed}
            placeholder="PG / Other"
            onChange={(e) => {
              const updated = [...data.education.extra];
              updated[i] = e.target.value;
              setData({
                ...data,
                education: { ...data.education, extra: updated },
              });
            }}
          />
          <button
            type="button"
            onClick={() => {
              const updated = data.education.extra.filter((_, idx) => idx !== i);
              setData({
                ...data,
                education: { ...data.education, extra: updated },
              });
            }}
          >
            ❌
          </button>
        </div>
      ))}
      <button
        type="button"
        className="add-btn"
        onClick={() =>
          setData({
            ...data,
            education: { ...data.education, extra: [...data.education.extra, ""] },
          })
        }
      >
        + Add More Education
      </button>

      {/* Skills */}
      <h3>Skills</h3>
      {data.skills.map((s, i) => (
        <div key={i} className="dynamic-row">
          <input
            value={s}
            onChange={(e) => handleArrayChange("skills", i, e.target.value)}
          />
          <button type="button" onClick={() => removeItem("skills", i)}>
            ❌
          </button>
        </div>
      ))}
      <button type="button" className="add-btn" onClick={() => addItem("skills")}>
        + Add Skill
      </button>

      {/* Certifications */}
      <h3>Certifications</h3>
      {data.certifications.map((c, i) => (
        <div key={i} className="dynamic-row">
          <input
            value={c}
            onChange={(e) => handleArrayChange("certifications", i, e.target.value)}
          />
          <button type="button" onClick={() => removeItem("certifications", i)}>
            ❌
          </button>
        </div>
      ))}
      <button
        type="button"
        className="add-btn"
        onClick={() => addItem("certifications")}
      >
        + Add Certification
      </button>

      {/* Languages */}
      <h3>Languages</h3>
      {data.languages.map((l, i) => (
        <div key={i} className="dynamic-row">
          <input
            value={l}
            onChange={(e) => handleArrayChange("languages", i, e.target.value)}
          />
          <button type="button" onClick={() => removeItem("languages", i)}>
            ❌
          </button>
        </div>
      ))}
      <button
        type="button"
        className="add-btn"
        onClick={() => addItem("languages")}
      >
        + Add Language
      </button>

      {/* Custom Sections */}
      <h3>Custom Sections</h3>
      {data.customSections.map((sec, secIndex) => (
        <div key={secIndex} className="custom-section">
          <input
            placeholder="Section Title (e.g. Experience, Awards)"
            value={sec.title}
            onChange={(e) => updateCustomTitle(secIndex, e.target.value)}
          />
          {sec.items.map((item, itemIndex) => (
            <div key={itemIndex} className="dynamic-row">
              <input
                value={item}
                placeholder="Item"
                onChange={(e) =>
                  updateCustomItem(secIndex, itemIndex, e.target.value)
                }
              />
              <button
                type="button"
                onClick={() => removeCustomItem(secIndex, itemIndex)}
              >
                ❌
              </button>
            </div>
          ))}
          <button type="button" onClick={() => addCustomItem(secIndex)}>
            + Add Item
          </button>
        </div>
      ))}
      <button type="button" className="add-btn" onClick={addCustomSection}>
        + Add Section
      </button>
    </div>
  );
};

export default DynamicForm;