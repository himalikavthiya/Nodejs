const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required:true
  },
  school: {
    type: String,
    trim:true,
    required:true
  },
  degree: {
    type:String,
    required:true
  },
  graduationYear:{
    type:Number,
    required:true
  },
  startDate: Date,
  endDate: Date,
});

module.exports = mongoose.model("education", educationSchema);
