const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    student_name: {
      type: String,
      trim: true,
    },
    student_id: {
      type: Number,
    },
    student_address: {
      type: String,
    },
    student_stu: {
      type: String,
    },
    school: {
      type: mongoose.Types.ObjectId,
      ref: "school",
    },
  },
  {
    timestamps: true,
  }
);

const student = mongoose.model("student", studentSchema);

module.exports = student;
