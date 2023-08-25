const mongoose = require("mongoose");

const grocerySchema = new mongoose.Schema(
  {
    product_id: {
      type: Number,
    },
    product_name: {
      type: String,
    },
    product_price: {
      type: String,
    },
    availble_stock: {
      type: String,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const grocery = mongoose.model("grocery", grocerySchema);

module.exports = grocery;
