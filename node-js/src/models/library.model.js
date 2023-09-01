const mongoose = require("mongoose");
const librarySchema = new mongoose.Schema(
  {
    library_name: {
      type: String,
      trim: true,
    },
    library_location: {
      type: String,
      trim: true,
    },
    bookStock: {
      type: String,
      trim: true,
    },
    library_time: {
      type:Date,
      default:Date.now
    },
    is_active: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
const library = mongoose.model("library", librarySchema);

module.exports = library;
