import React, { useState } from "react";
import "../styles/JobPopup.css";

const JobPopup = ({ onClose, onSubmit }) => {
  const [jobDetails, setJobDetails] = useState({
    companyLogo: "",
    title: "",
    experience: "",
    location: "",
    salary: "",
    description: [],
  });

  const handleChange = (e) => {
    setJobDetails({ ...jobDetails, [e.target.name]: e.target.value });
  };

  const handlePublish = () => {
    if (jobDetails.title && jobDetails.experience && jobDetails.location && jobDetails.salary) {
      const newJob = { 
        ...jobDetails, 
        description: jobDetails.description.split("\n"),
        timestamp: new Date().toISOString() // Store current timestamp
      };
      onSubmit(newJob);
      onClose();
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Create Job</h2>
        <input type="text" name="title" placeholder="Job Title" onChange={handleChange} />
        <input type="text" name="experience" placeholder="Experience" onChange={handleChange} />
        <input type="text" name="location" placeholder="Location" onChange={handleChange} />
        <input type="text" name="salary" placeholder="Salary" onChange={handleChange} />
        
        <textarea
          name="description"
          placeholder="Job Description"
          onChange={handleChange}
        ></textarea>

        <button className="publish-btn" onClick={handlePublish}>Publish</button>
        <button className="close-btn" onClick={onClose}>Save draft</button>
      </div>
    </div>
  );
};

export default JobPopup;
