const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required:true
    },
    name: {
      type: String,
      required:true
    },
    endorsements: {
        type: String,
        trim: true,
      },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("skill", skillSchema);
