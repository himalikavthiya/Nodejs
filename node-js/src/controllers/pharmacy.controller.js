const { pharmacyService } = require("../services");

/**Create pharmacy detail */
const createPharmacy = async (req, res) => {
  try {
    const reqBody = req.body;
    const pharmacy = await pharmacyService.createPharmacy(reqBody);
    res.status(201).json({
      success: true,
      message: "create Pharmacy detail successfully!",
      data: { pharmacy },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**Get pharmacy List */
const getPharmacyList = async (req, res) => {
  try {
    const getPharmacyList = await pharmacyService.getPharmacy(req, res);
    res.status(200).json({
      success: true,
      message: "Get pharmacy detail list successfully!",
      data: getPharmacyList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**Delete pharmacy detail id */
const deletePharmacy = async (req, res) => {
  try {
    const pharmacyId = req.params.pharmacyId;
    const pharmacyExists = await pharmacyService.getPharmacyId(pharmacyId);
    if (!pharmacyExists) {
      throw new Error("Pharmacy not found!");
    }
    await pharmacyService.deletePharmacyId(pharmacyId);
    res.status(200).json({
      success: true,
      message: "pharmacy data delete successfully !",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createPharmacy,
  getPharmacyList,
  deletePharmacy
};
