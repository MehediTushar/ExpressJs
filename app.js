const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to my Express js Project");
  });

const apiRoutes = require("./src/routes/api");
app.use("/api", apiRoutes);

module.exports = app;
