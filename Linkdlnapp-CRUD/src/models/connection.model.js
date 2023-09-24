const mongoose = require("mongoose");

const connectionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  connectionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  status: {
    type:String,
  }
});

module.exports = mongoose.model("connection", connectionSchema);
