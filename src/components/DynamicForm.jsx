import React from "react";

const DynamicForm = ({ data, setData }) => {
  // UG Degrees and their respective majors
  const ugDegrees = {
    "Bachelor of Arts (B.A.)": [
      "English", "History", "Political Science", "Economics", "Psychology", 
      "Sociology", "Philosophy", "Geography", "Public Administration", "Journalism"
    ],
    "Bachelor of Science (B.Sc.)": [
      "Physics", "Chemistry", "Biology", "Mathematics", "Computer Science", 
      "Biotechnology", "Microbiology", "Environmental Science"
    ],
    "Bachelor of Commerce (B.Com.)": [
      "General", "Accounting", "Finance", "Marketing"
    ],
    "Bachelor of Business Administration (BBA)": [
      "General Management", "Marketing", "Finance", "Human Resource Management", 
      "Operations", "Entrepreneurship"
    ],
    "Bachelor of Computer Applications (BCA)": [
      "General", "Software Development", "Network Administration"
    ],
    "Bachelor of Engineering (B.E.)": [
      "Computer Science and Engineering (CSE)", "Electronics and Communication Engineering (ECE)", 
      "Electrical and Electronics Engineering (EEE)", "Mechanical Engineering", 
      "Civil Engineering", "Information Technology (IT)"
    ],
    "Bachelor of Technology (B.Tech.)": [
      "Computer Science and Engineering (CSE)", "Electronics and Communication Engineering (ECE)", 
      "Electrical and Electronics Engineering (EEE)", "Mechanical Engineering", 
      "Civil Engineering", "Information Technology (IT)"
    ],
    "Bachelor of Medicine, Bachelor of Surgery (MBBS)": [
      "General Medicine", "Surgery", "Pediatrics", "Obstetrics and Gynecology", "Orthopedics"
    ],
    "Bachelor of Dental Surgery (BDS)": [
      "General Dentistry", "Orthodontics", "Periodontics", "Prosthodontics"
    ],
    "Bachelor of Pharmacy (B.Pharm.)": [
      "General Pharmacy", "Pharmaceutical Chemistry", "Pharmacology"
    ],
    "Bachelor of Business Administration – Bachelor of Law (BBA-LLB)": [
      "General Law", "Corporate Law", "Criminal Law", "Constitutional Law"
    ],
    "Bachelor of Arts – Bachelor of Law (BA-LLB)": [
      "General Law", "International Law", "Human Rights Law"
    ],
    "Bachelor of Fine Arts (BFA)": [
      "Painting", "Sculpture", "Applied Arts", "Animation"
    ],
    "Bachelor of Design (B.Des.)": [
      "Fashion Design", "Industrial Design", "Graphic Design", "Interior Design"
    ],
    "Bachelor of Hotel Management (BHM)": [
      "General Hospitality", "Culinary Arts", "Hotel Operations"
    ],
    "Bachelor of Education (B.Ed.)": [
      "General Education", "Special Education"
    ],
    "Bachelor of Science in Agriculture (B.Sc. Agriculture)": [
      "Agronomy", "Horticulture", "Soil Science", "Plant Pathology", "Agricultural Economics"
    ],
    "Bachelor of Veterinary Science (B.V.Sc.)": [
      "Animal Husbandry", "Veterinary Surgery", "Veterinary Medicine"
    ],
    "Bachelor of Science in Nursing (B.Sc. Nursing)": [
      "General Nursing", "Pediatric Nursing", "Psychiatric Nursing"
    ]
  };

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

  // Education specific handlers
  const handleSchoolingToggle = (type) => {
    const currentSchooling = data.education.schooling || {};
    setData({
      ...data,
      education: {
        ...data.education,
        schooling: {
          ...currentSchooling,
          [type]: currentSchooling[type] ? null : {
            schoolName: "",
            percentage: "",
            yearOfPassing: ""
          }
        }
      }
    });
  };

  const handleSchoolingChange = (type, field, value) => {
    setData({
      ...data,
      education: {
        ...data.education,
        schooling: {
          ...data.education.schooling,
          [type]: {
            ...data.education.schooling[type],
            [field]: value
          }
        }
      }
    });
  };

  const handleUGDegreeChange = (degree) => {
    setData({
      ...data,
      education: {
        ...data.education,
        ug: {
          degree: degree,
          major: "",
          collegeName: "",
          percentage: "",
          yearOfPassing: ""
        }
      }
    });
  };

  const handleUGChange = (field, value) => {
    setData({
      ...data,
      education: {
        ...data.education,
        ug: {
          ...data.education.ug,
          [field]: value
        }
      }
    });
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

  // Add custom education section
  const addCustomEducation = () => {
    const newCustom = {
      degree: "",
      major: "",
      collegeName: "",
      percentage: "",
      yearOfPassing: ""
    };
    setData({
      ...data,
      education: {
        ...data.education,
        custom: [...(data.education.custom || []), newCustom]
      }
    });
  };

  const updateCustomEducation = (index, field, value) => {
    const updated = [...data.education.custom];
    updated[index][field] = value;
    setData({
      ...data,
      education: {
        ...data.education,
        custom: updated
      }
    });
  };

  const removeCustomEducation = (index) => {
    const updated = data.education.custom.filter((_, i) => i !== index);
    setData({
      ...data,
      education: {
        ...data.education,
        custom: updated
      }
    });
  };

  return (
    <div className="form-section">
      <h2>Portfolio Builder</h2>

      {/* Profile Picture */}
      <div className="file-upload-section">
        <label>Profile Picture</label>
        <div className="upload-options">
          <div className="url-option">
            <input
              type="url"
              placeholder="https://example.com/your-photo.jpg"
              value={data.profilePicture || ""}
              onChange={(e) => setData({ ...data, profilePicture: e.target.value })}
            />
          </div>
          <span className="or-divider">OR</span>
          <div className="file-option">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = (e) => {
                    setData({ ...data, profilePicture: e.target.result });
                  };
                  reader.readAsDataURL(file);
                }
              }}
              className="file-input"
              id="profile-upload"
            />
            <label htmlFor="profile-upload" className="file-upload-btn">
              📁 Upload Photo
            </label>
          </div>
        </div>
      </div>

      {/* Name */}
      <label>Name</label>
      <input
        value={data.name || ""}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      {/* Specification */}
      <label>Specification / Role</label>
      <input
        value={data.specification || ""}
        onChange={(e) => setData({ ...data, specification: e.target.value })}
      />

      {/* About */}
      <label>About</label>
      <textarea
        value={data.about || ""}
        onChange={(e) => setData({ ...data, about: e.target.value })}
      />

      {/* Contact */}
      <h3>Contact</h3>
      <input
        placeholder="Phone"
        value={data.contact?.phone || ""}
        onChange={(e) => handleChange("contact", "phone", e.target.value)}
      />
      <input
        placeholder="Email"
        value={data.contact?.email || ""}
        onChange={(e) => handleChange("contact", "email", e.target.value)}
      />

      {data.contact?.extra?.map((c, i) => (
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
      )) || []}
      <button
        type="button"
        className="add-btn"
        onClick={() =>
          setData({
            ...data,
            contact: { 
              ...data.contact, 
              extra: [...(data.contact?.extra || []), ""] 
            },
          })
        }
      >
        + Add More Contact
      </button>

      {/* Enhanced Education Section */}
      <h3>Education</h3>

      {/* Schooling Section */}
      <div className="education-subsection">
        <h4>Schooling</h4>
        <div className="schooling-buttons">
          <button
            type="button"
            className={`toggle-btn ${data.education?.schooling?.tenth ? 'active' : ''}`}
            onClick={() => handleSchoolingToggle('tenth')}
          >
            10th Grade
          </button>
          <button
            type="button"
            className={`toggle-btn ${data.education?.schooling?.twelfth ? 'active' : ''}`}
            onClick={() => handleSchoolingToggle('twelfth')}
          >
            12th Grade
          </button>
        </div>

        {/* 10th Grade Fields */}
        {data.education?.schooling?.tenth && (
          <div className="grade-fields">
            <h5>10th Grade Details</h5>
            <input
              placeholder="School Name"
              value={data.education.schooling.tenth.schoolName || ""}
              onChange={(e) => handleSchoolingChange('tenth', 'schoolName', e.target.value)}
            />
            <input
              placeholder="Percentage/CGPA"
              value={data.education.schooling.tenth.percentage || ""}
              onChange={(e) => handleSchoolingChange('tenth', 'percentage', e.target.value)}
            />
            <input
              placeholder="Year of Passing"
              value={data.education.schooling.tenth.yearOfPassing || ""}
              onChange={(e) => handleSchoolingChange('tenth', 'yearOfPassing', e.target.value)}
            />
          </div>
        )}

        {/* 12th Grade Fields */}
        {data.education?.schooling?.twelfth && (
          <div className="grade-fields">
            <h5>12th Grade Details</h5>
            <input
              placeholder="School Name"
              value={data.education.schooling.twelfth.schoolName || ""}
              onChange={(e) => handleSchoolingChange('twelfth', 'schoolName', e.target.value)}
            />
            <input
              placeholder="Percentage/CGPA"
              value={data.education.schooling.twelfth.percentage || ""}
              onChange={(e) => handleSchoolingChange('twelfth', 'percentage', e.target.value)}
            />
            <input
              placeholder="Year of Passing"
              value={data.education.schooling.twelfth.yearOfPassing || ""}
              onChange={(e) => handleSchoolingChange('twelfth', 'yearOfPassing', e.target.value)}
            />
          </div>
        )}
      </div>

      {/* UG Section */}
      <div className="education-subsection">
        <h4>Undergraduate (UG)</h4>
        <select
          value={data.education?.ug?.degree || ""}
          onChange={(e) => handleUGDegreeChange(e.target.value)}
        >
          <option value="">Select Degree</option>
          {Object.keys(ugDegrees).map(degree => (
            <option key={degree} value={degree}>{degree}</option>
          ))}
        </select>

        {data.education?.ug?.degree && (
          <div className="ug-fields">
            <select
              value={data.education.ug.major || ""}
              onChange={(e) => handleUGChange('major', e.target.value)}
            >
              <option value="">Select Major</option>
              {ugDegrees[data.education.ug.degree]?.map(major => (
                <option key={major} value={major}>{major}</option>
              ))}
            </select>
            <input
              placeholder="College Name"
              value={data.education.ug.collegeName || ""}
              onChange={(e) => handleUGChange('collegeName', e.target.value)}
            />
            <input
              placeholder="Percentage/CGPA"
              value={data.education.ug.percentage || ""}
              onChange={(e) => handleUGChange('percentage', e.target.value)}
            />
            <input
              placeholder="Year of Passing"
              value={data.education.ug.yearOfPassing || ""}
              onChange={(e) => handleUGChange('yearOfPassing', e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Custom Education Section */}
      <div className="education-subsection">
        <h4>Additional Education</h4>
        {data.education?.custom?.map((edu, index) => (
          <div key={index} className="custom-education">
            <input
              placeholder="Degree (e.g., M.Tech, MBA, PhD)"
              value={edu.degree}
              onChange={(e) => updateCustomEducation(index, 'degree', e.target.value)}
            />
            <input
              placeholder="Major/Specialization"
              value={edu.major}
              onChange={(e) => updateCustomEducation(index, 'major', e.target.value)}
            />
            <input
              placeholder="Institution Name"
              value={edu.collegeName}
              onChange={(e) => updateCustomEducation(index, 'collegeName', e.target.value)}
            />
            <input
              placeholder="Percentage/CGPA"
              value={edu.percentage}
              onChange={(e) => updateCustomEducation(index, 'percentage', e.target.value)}
            />
            <input
              placeholder="Year of Passing"
              value={edu.yearOfPassing}
              onChange={(e) => updateCustomEducation(index, 'yearOfPassing', e.target.value)}
            />
            <button
              type="button"
              className="remove-btn"
              onClick={() => removeCustomEducation(index)}
            >
              Remove
            </button>
          </div>
        )) || []}
        <button
          type="button"
          className="add-btn"
          onClick={addCustomEducation}
        >
          + Add More Education
        </button>
      </div>

      {/* Skills */}
      <h3>Skills</h3>
      {data.skills?.map((s, i) => (
        <div key={i} className="dynamic-row">
          <input
            value={s}
            onChange={(e) => handleArrayChange("skills", i, e.target.value)}
          />
          <button type="button" onClick={() => removeItem("skills", i)}>
            ❌
          </button>
        </div>
      )) || []}
      <button type="button" className="add-btn" onClick={() => addItem("skills")}>
        + Add Skill
      </button>

      {/* Certifications */}
      <h3>Certifications</h3>
      {data.certifications?.map((c, i) => (
        <div key={i} className="certification-row">
          <div className="cert-content">
            {c.type === 'text' ? (
              <input
                value={c.content || ""}
                placeholder="Enter certification name"
                onChange={(e) => {
                  const updated = [...data.certifications];
                  updated[i] = { ...updated[i], content: e.target.value };
                  setData({ ...data, certifications: updated });
                }}
              />
            ) : (
              <div className="file-display">
                <span className="file-name">📄 {c.fileName || 'Uploaded File'}</span>
              </div>
            )}
          </div>
          <button type="button" onClick={() => removeItem("certifications", i)}>
            ❌
          </button>
        </div>
      )) || []}
      
      <div className="add-certification-options">
        <button
          type="button"
          className="add-btn"
          onClick={() => {
            const newCert = { type: 'text', content: '' };
            setData({ 
              ...data, 
              certifications: [...(data.certifications || []), newCert] 
            });
          }}
        >
          ✏️ Add Text Certification
        </button>
        
        <div className="file-upload-wrapper">
          <input
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                  const newCert = {
                    type: 'file',
                    content: e.target.result,
                    fileName: file.name,
                    fileType: file.type
                  };
                  setData({
                    ...data,
                    certifications: [...(data.certifications || []), newCert]
                  });
                };
                reader.readAsDataURL(file);
              }
            }}
            className="file-input"
            id="cert-upload"
          />
          <label htmlFor="cert-upload" className="add-btn file-upload-btn">
            📁 Upload Certificate
          </label>
        </div>
      </div>

      {/* Languages */}
      <h3>Languages</h3>
      {data.languages?.map((l, i) => (
        <div key={i} className="dynamic-row">
          <input
            value={l}
            onChange={(e) => handleArrayChange("languages", i, e.target.value)}
          />
          <button type="button" onClick={() => removeItem("languages", i)}>
            ❌
          </button>
        </div>
      )) || []}
      <button
        type="button"
        className="add-btn"
        onClick={() => addItem("languages")}
      >
        + Add Language
      </button>

      {/* Custom Sections */}
      <h3>Custom Sections</h3>
      {data.customSections?.map((sec, secIndex) => (
        <div key={secIndex} className="custom-section">
          <input
            placeholder="Section Title (e.g. Experience, Awards)"
            value={sec.title}
            onChange={(e) => updateCustomTitle(secIndex, e.target.value)}
          />
          {sec.items?.map((item, itemIndex) => (
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
          )) || []}
          <button type="button" onClick={() => addCustomItem(secIndex)}>
            + Add Item
          </button>
        </div>
      )) || []}
      <button type="button" className="add-btn" onClick={addCustomSection}>
        + Add Section
      </button>
    </div>
  );
};

export default DynamicForm;