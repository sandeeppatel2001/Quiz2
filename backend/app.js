const express = require("express");
const app = express();
const cors = require("cors");
const User = require("./userModel");
const mongoose = require("./db");
const Answer = require("./userModel");
require("dotenv").config();
const corsOptions = {
  origin: "http://localhost:3000", // Replace with the actual origin of your React app
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Enable credentials (cookies, Authorization headers, etc.)
  optionsSuccessStatus: 204, // Respond with 204 No Content for preflight requests
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Received get req data");
  // Handle the received data as needed
  res.status(200).send("Data received successfully!");
});

// app.post("/", async (req, res) => {
//   const receivedData = req.body;
//   const newUser = new User({
//     user: "sandeep",
//     ...receivedData,
//   });
//   try {
//     const savedUser = await newUser.save();
//     console.log("User saved successfully:", savedUser);
//   } catch (error) {
//     console.error("Error saving user:", error);
//   }
//   console.log("Received data from React:", receivedData.q3);
//   // Handle the received data as needed
//   res.status(200).send("Data received successfully!");
// });
app.post("/", async (req, res) => {
  const receivedData = req.body;
  console.log("rrrrr", receivedData);
  const filter = { user: "sandeep" }; // Assuming "sandeep" is the unique user value

  try {
    const update = { ...receivedData };
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };

    const savedUser = await User.findOneAndUpdate(filter, update, options);
    console.log("Answer saved or updated successfully:", savedUser);
    res.status(200).json(savedUser);
  } catch (error) {
    console.error("Error saving or updating user:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.post("/answer", async (req, res) => {
  const receivedData = req.body;
  console.log("/answerrrr", receivedData);
  const filter = { user: "useranswer" }; // Assuming "sandeep" is the unique user value

  try {
    const update = { ...receivedData };
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };

    const savedUser = await Answer.findOneAndUpdate(filter, update, options);
    console.log("User saved or updated successfully:", savedUser);
    res.status(200).json(savedUser);
  } catch (error) {
    console.error("Error saving or updating user:", error);
    res.status(500).send("Internal Server Error");
  }
});
// Create a new user instance

// Save the user to the database

const port = 3001;
app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});
