const express = require("express");
const path = require("path");

const app = express();

// Serve static HTML files from the public folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Frontend is running.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Frontend running on port ${PORT}`);
});
