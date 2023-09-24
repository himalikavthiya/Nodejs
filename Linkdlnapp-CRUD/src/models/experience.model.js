const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required:true
  },
  title: {
    type: String,
    trim:true,
    required:true
  },
  company: {
    type:String,
    required:true
  },
  startDate: Date,
  endDate: Date,
});

module.exports = mongoose.model("experience", experienceSchema);
