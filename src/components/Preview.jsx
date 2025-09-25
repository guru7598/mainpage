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
          {data.contact?.phone && <p>Phone: {data.contact.phone}</p>}
          {data.contact?.email && <p>Email: {data.contact.email}</p>}
          {data.contact?.extra?.map(
            (c, i) => c && <p key={i}>{c}</p>
          )}
        </div>

        {/* Enhanced Education Section */}
        {(data.education?.schooling || data.education?.ug || data.education?.custom) && (
          <div>
            <h3>Education</h3>
            
            {/* Schooling Display */}
            {data.education?.schooling && (
              <div className="education-section">
                {data.education.schooling.tenth && (
                  <div className="education-item">
                    <h4>10th Grade</h4>
                    <p><strong>School:</strong> {data.education.schooling.tenth.schoolName}</p>
                    <p><strong>Percentage:</strong> {data.education.schooling.tenth.percentage}</p>
                    <p><strong>Year:</strong> {data.education.schooling.tenth.yearOfPassing}</p>
                  </div>
                )}
                
                {data.education.schooling.twelfth && (
                  <div className="education-item">
                    <h4>12th Grade</h4>
                    <p><strong>School:</strong> {data.education.schooling.twelfth.schoolName}</p>
                    <p><strong>Percentage:</strong> {data.education.schooling.twelfth.percentage}</p>
                    <p><strong>Year:</strong> {data.education.schooling.twelfth.yearOfPassing}</p>
                  </div>
                )}
              </div>
            )}

            {/* UG Display */}
            {data.education?.ug?.degree && (
              <div className="education-item">
                <h4>Undergraduate</h4>
                <p><strong>Degree:</strong> {data.education.ug.degree}</p>
                {data.education.ug.major && (
                  <p><strong>Major:</strong> {data.education.ug.major}</p>
                )}
                {data.education.ug.collegeName && (
                  <p><strong>College:</strong> {data.education.ug.collegeName}</p>
                )}
                {data.education.ug.percentage && (
                  <p><strong>Percentage:</strong> {data.education.ug.percentage}</p>
                )}
                {data.education.ug.yearOfPassing && (
                  <p><strong>Year:</strong> {data.education.ug.yearOfPassing}</p>
                )}
              </div>
            )}

            {/* Custom Education Display */}
            {data.education?.custom?.map((edu, index) => (
              edu.degree && (
                <div key={index} className="education-item">
                  <h4>Additional Education {index + 1}</h4>
                  <p><strong>Degree:</strong> {edu.degree}</p>
                  {edu.major && <p><strong>Major:</strong> {edu.major}</p>}
                  {edu.collegeName && <p><strong>Institution:</strong> {edu.collegeName}</p>}
                  {edu.percentage && <p><strong>Percentage:</strong> {edu.percentage}</p>}
                  {edu.yearOfPassing && <p><strong>Year:</strong> {edu.yearOfPassing}</p>}
                </div>
              )
            ))}
          </div>
        )}

        {/* Skills Section */}
        {(data.skills?.length > 0) && (
          <div>
            <h3>Skills</h3>
            {data.skills.map(
              (skill, i) => skill && <p key={i}>{skill}</p>
            )}
          </div>
        )}

        {/* Certifications Section */}
        {(data.certifications?.length > 0) && (
          <div>
            <h3>Certifications</h3>
            {data.certifications.map(
              (cert, i) => cert && <p key={i}>{cert}</p>
            )}
          </div>
        )}

        {/* Languages Section */}
        {(data.languages?.length > 0) && (
          <div>
            <h3>Languages</h3>
            {data.languages.map(
              (lang, i) => lang && <p key={i}>{lang}</p>
            )}
          </div>
        )}

        {/* Custom Sections */}
        {data.customSections?.map((section, idx) => (
          section.title && section.items?.length > 0 && (
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