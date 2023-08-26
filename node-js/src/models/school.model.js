const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema(
  {
    school_name: {
      type: String,
      trim: true,
    },
    branch_code: {
      type: Number,
    },
    branch_location: {
      type: String,
    },
    student_detail: {
      type: String,
    },
    facalty_detail: {
      type: String,
    },
    number_of_class: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const school=mongoose.model("school",schoolSchema);

module.exports=school;
