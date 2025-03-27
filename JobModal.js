import React, { useState } from "react";
import "../styles/Modal.css";

const JobModal = ({ isOpen, onClose, addJob }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!title || !location || !experience || !salary) {
      alert("Please fill all fields!");
      return;
    }

    addJob({ title, location, experience, salary });

    setTitle("");
    setLocation("");
    setExperience("");
    setSalary("");
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Create Job</h2>
        <input type="text" placeholder="Job Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
        <input type="text" placeholder="Experience (e.g. 1-3 yr Exp)" value={experience} onChange={(e) => setExperience(e.target.value)} />
        <input type="text" placeholder="Salary (e.g. 12LPA)" value={salary} onChange={(e) => setSalary(e.target.value)} />
        <button className="modal-btn" onClick={handleSubmit}>Submit</button>
        <button className="modal-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default JobModal;
