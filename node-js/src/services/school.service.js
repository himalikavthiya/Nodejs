const { school } = require("../models");

/**cereat school detail */
const createSchool = async (reqBody) => {
  return school.create(reqBody);
};

/**get School detail list */
const getSchoolList = async (req, res) => {
  // return school.find()
  return school.find({ $or: [{ number_of_class: 15 }] });
};

/**delete School detail by Id */
const getSchoolId = async (schoolId) => {
  return school.findById(schoolId);
};

/**Delete School detail */
const deleteSchool = async (schoolId) => {
  return school.findByIdAndDelete(schoolId);
};

/**update school detail  */
const updateSchool = async (schoolId, updateBody) => {
  return school.findByIdAndUpdate(schoolId, { $set: updateBody });
};

module.exports = {
  createSchool,
  getSchoolList,
  getSchoolId,
  deleteSchool,
  updateSchool,
};
