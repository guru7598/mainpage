import React from "react";
import "./PortfolioBuilder.css";

const Preview = ({ data }) => {
  return (
    <div className="preview">
      <div className="preview-content">
        {/* Profile Picture Section */}
        <div className="profile-picture-container">
          {data.profilePicture ? (
            <div className="profile-picture">
              <img 
                src={data.profilePicture} 
                alt="Profile" 
                className="profile-picture-inner"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="profile-placeholder" style={{display: 'none'}}>
                📷
              </div>
            </div>
          ) : (
            <div className="profile-placeholder">
              📷
            </div>
          )}
        </div>

        <h2 className="name">{data.name || "Your Name"}</h2>
        <h4 className="spec">{data.specification || "Your Role"}</h4>

        {data.about && (
          <>
            <h3>About</h3>
            <p>{data.about}</p>
          </>
        )}

        <h3>Contact</h3>
        <div className="contact-list">
          {data.contact.phone && <p>Phone: {data.contact.phone}</p>}
          {data.contact.email && <p>Email: {data.contact.email}</p>}
          {data.contact.extra.map(
            (c, i) => c && <p key={i}>{c}</p>
          )}
        </div>

        {/* Education Section */}
        {(data.education.schooling || data.education.ug || data.education.extra.length > 0) && (
          <div>
            <h3>Education</h3>
            {data.education.schooling && <p>Schooling: {data.education.schooling}</p>}
            {data.education.ug && <p>UG: {data.education.ug}</p>}
            {data.education.extra.map(
              (edu, i) => edu && <p key={i}>{edu}</p>
            )}
          </div>
        )}

        {/* Skills Section */}
        {(data.skills.length > 0) && (
          <div>
            <h3>Skills</h3>
            {data.skills.map(
              (skill, i) => skill && <p key={i}>{skill}</p>
            )}
          </div>
        )}

        {/* Certifications Section */}
        {(data.certifications.length > 0) && (
          <div>
            <h3>Certifications</h3>
            {data.certifications.map(
              (cert, i) => cert && <p key={i}>{cert}</p>
            )}
          </div>
        )}

        {/* Languages Section */}
        {(data.languages.length > 0) && (
          <div>
            <h3>Languages</h3>
            {data.languages.map(
              (lang, i) => lang && <p key={i}>{lang}</p>
            )}
          </div>
        )}

        {/* Custom Sections */}
        {data.customSections.map((section, idx) => (
          section.title && section.items.length > 0 && (
            <div key={idx}>
              <h3>{section.title}</h3>
              {section.items.map(
                (item, i) => item && <p key={i}>{item}</p>
              )}
            </div>
          )
        ))}

      </div>
    </div>
  );
};

export default Preview;