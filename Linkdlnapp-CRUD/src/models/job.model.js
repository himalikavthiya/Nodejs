const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trime: true,
      required: true,
    },
    company: {
      type: String,
      trime: true,
      required: true,
    },
    location: {
      type: String,
      trime: true,
      required: true,
    },
    description: {
      type: String,
      trime: true,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("job", jobSchema);
