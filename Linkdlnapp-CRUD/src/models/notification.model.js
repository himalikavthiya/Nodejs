const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    content: {
      type: Array,
    },
    notificationtype: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model("notification", notificationSchema);
