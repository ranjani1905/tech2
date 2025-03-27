const express = require("express");
const { getJobs, createJob } = require("../controllers/jobController");

const router = express.Router();

router.get("/jobs", getJobs);
router.post("/jobs", createJob);

module.exports = router;
