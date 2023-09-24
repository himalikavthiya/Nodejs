const { Education } = require("../models");

/** Create education*/
const createEducation = async (reqBody) => {
  return Education.create(reqBody);
};

/**Get education List */
const getEducationList = async (req,res) => {
  return Education.find().populate({
    path:"userId",
    select:["firstName"]
  });
};

/**get education by Id */
const getEducationId = async (educationId) => {
  return Education.findById(educationId);
};

/**upadate education data */
const upadateEducation = async (educationId, updateBody) => {
  return Education.findByIdAndUpdate(educationId,updateBody);
};

/**delete education data */
const deleteEducation = async (educationId) => {
  return Education.findByIdAndDelete(educationId);
};

module.exports = {
  createEducation,
  getEducationList,
  getEducationId,
  upadateEducation,
  deleteEducation
};
