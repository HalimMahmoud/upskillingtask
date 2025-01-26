// const express = require("express");
// const bodyParser = require("body-parser");
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(cors());
// POST API endpoint
app.post("/submit", (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res
      .status(400)
      .send("Missing required fields: name, email, or phone.");
  }

  console.log(
    `Received data: Name - ${name}, Email - ${email}, Phone - ${phone}`
  );

  res.status(200).json("Data sent successfully");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
