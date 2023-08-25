const { schoolService } = require("../services");

/**create School details */
const createSchool = async (req, res) => {
  try {
    const reqBody = req.body;
    const school = await schoolService.createSchool(reqBody);
    res.status(201).json({
      success: true,
      message: "school create successfully !",
      data: {
        school,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**Get school detail list */
const getSchoolList = async (req, res) => {
  try {
    const getSchoolList = await schoolService.getSchoolList(req, res);
    res.status(200).json({
      success: true,
      message: "Get school List successfully !",
      data: getSchoolList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**Delete School detail */
const deleteSchool = async (req, res) => {
  try {
    const schoolId = req.params.schoolId;
    const schoolExists = await schoolService.getSchoolId(schoolId);
    if (!schoolExists) {
      throw new Error("School not found !");
    }
    await schoolService.deleteSchool(schoolId);
    res.status(200).json({
      success: true,
      message: "Delete School detail successfully !",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createSchool,
  getSchoolList,
  deleteSchool,
};
