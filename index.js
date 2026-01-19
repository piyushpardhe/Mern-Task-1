const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend is working");
});

app.get("/api/data", (req, res) => {
  res.json([
    { name: "Piyush", role: "Intern" },
    { name: "Aman", role: "Developer" }
  ]);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});