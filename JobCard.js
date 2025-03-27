import React from "react";
import "../styles/JobCard.css"; // Import the updated CSS

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
        
      {/* Job Header with Logo */}
      <div className="job-header">
        <img src={job.companyLogo} alt="Company Logo" className="company-logo" />
      </div>

      {/* Job Title */}
      <h2>{job.title}</h2>

      {/* Experience & Location */}
      <div className="job-details">
        <span>👤 {job.experience}</span>
        <span>📍 {job.location}</span>
      </div>

      {/* Salary */}
      <p>{job.salary}</p>

      {/* Job Description */}
      <p className="job-description">
        {job.description.map((line, index) => (
          <span key={index}>{line}<br /></span>
        ))}
      </p>

      {/* Apply Button */}
      <button className="apply-btn">Apply Now</button>
    </div>
  );
};

export default JobCard;
