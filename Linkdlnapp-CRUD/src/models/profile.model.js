const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required:true
    },
    headline: {
      type: String,
      trim: true,
      required:true
    },
    summary: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("profile", profileSchema);
