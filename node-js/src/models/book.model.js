const mongoose = require("mongoose");
const bookDetailSchema = new mongoose.Schema(
  {
    book_name: {
      type: String,
      trim: true,
    },
    book_authar_name: {
      type: String,
      trim: true,
    },
    book_disc: {
      type: String,
      trim: true,
    },
    book_price: {
      type: Number,
    },
    library:{
        type: mongoose.Types.ObjectId,
        ref: "library"
    },
    stationary:{
        type: mongoose.Types.ObjectId,
        ref: "stationary"
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
const book = mongoose.model("bookstore", bookDetailSchema);

module.exports = book;
