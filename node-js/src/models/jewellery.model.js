const mongoose = require("mongoose");

const jewellerySchema = new mongoose.Schema(
  {
    jewellery_name: {
      type: String,
      trim: true,
    },
    jewellery_price: {
      type: Number,
      trim: true,
    },
    jewellery_dis: {
      type: String,
      trim: true,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    jewellery_available: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const jewellery = mongoose.model("jewellery", jewellerySchema);

module.exports = jewellery;
