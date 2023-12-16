const mongoose = require("mongoose");
require("dotenv").config();
const dbURI = process.env.URL;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB database");
});

module.exports = mongoose;
