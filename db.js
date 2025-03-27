const sqlite3 = require("sqlite3").verbose();

// Connect to SQLite database
const db = new sqlite3.Database("./jobs.db", sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
  if (err) {
    console.error("Error connecting to SQLite database:", err.message);
  } else {
    console.log("Connected to SQLite database.");
  }
});

// Create jobs table if not exists
db.run(`
  CREATE TABLE IF NOT EXISTS jobs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    company TEXT,
    location TEXT,
    jobType TEXT,
    salary TEXT,
    deadline TEXT,
    description TEXT
  )
`);

module.exports = db;
