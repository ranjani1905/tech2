const db = require("../config/db");

class Job {
  static getAllJobs(callback) {
    db.all("SELECT * FROM jobs", [], callback);
  }

  static createJob(jobData, callback) {
    const { title, company, location, jobType, salary, deadline, description } = jobData;
    db.run(
      "INSERT INTO jobs (title, company, location, jobType, salary, deadline, description) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [title, company, location, jobType, salary, deadline, description],
      function (err) {
        callback(err, { id: this.lastID, ...jobData });
      }
    );
  }
}

module.exports = Job;
