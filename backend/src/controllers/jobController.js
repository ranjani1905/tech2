const Job = require("../models/Job");

exports.getJobs = (req, res) => {
  Job.getAllJobs((err, jobs) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(jobs);
  });
};

exports.createJob = (req, res) => {
  Job.createJob(req.body, (err, newJob) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(newJob);
  });
};
