const mongoose = require("mongoose");

const pharmacySchema = new mongoose.Schema(
  {
    medicine_name: {
      type: String,
      trim: true,
    },
    medicine_type: {
      type: String,
      trim: true,
    },
    medicine_dis: {
      type: String,
      trim: true,
    },
    medicine_dosge: {
      type: Number,
      trim: true,
    },
    madicine_price: {
      type: Number,
      trim: true,
    },
    madicine_available: {
      type: Boolean,
    },
    patient_name: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
const pharmacy=mongoose.model("pharmacy",pharmacySchema);

module.exports=pharmacy;
