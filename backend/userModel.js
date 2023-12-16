const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
    unique: true,
  },
  q1: {
    type: Object,
    required: true,
  },
  q2: {
    type: Object,
    required: true,
  },
  q3: {
    type: Object,
    required: true,
  },
});

// Create a model based on the schema
const User = mongoose.model("User", userSchema);
//----------------------------------------------
const answerSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
    unique: true,
  },
  q1: {
    type: Array,
    required: true,
  },
  q2: {
    type: Array,
    required: true,
  },
  q3: {
    type: Array,
    required: true,
  },
});
const Answer = mongoose.model("Answer", answerSchema);
module.exports = User;
module.exports = Answer;
