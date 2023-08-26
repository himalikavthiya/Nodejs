const { pharmacy } = require("../models");

/**create pharmacy detail */
const createPharmacy = async (reqBody) => {
  return pharmacy.create(reqBody);
};

/**Get pharmacy detail list */
const getPharmacy = async (req, res) => {
  // return pharmacy.find();
  return pharmacy.find({$or:[{medicine_dosge:3}]});
};

/**Get pharmacy detail id */
const getPharmacyId = async (pharmacyId) => {
  return pharmacy.findById(pharmacyId);
};

/**Delete pharmacy detail id */
const deletePharmacyId = async (pharmacyId) => {
  return pharmacy.findByIdAndDelete(pharmacyId);
};

module.exports = {
  createPharmacy,
  getPharmacy,
  getPharmacyId,
  deletePharmacyId
};
