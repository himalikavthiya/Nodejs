const { educationService } = require("../services");

/** create Education */
const createEducation = async (req, res) => {
  try {
    const reqBody = req.body;
    const Education = await educationService.createEducation(reqBody);
    if (!Education) {
      throw new Error(" please try again or later!");
    }
    res.status(200).json({
      message: "Education create successfully!",
      data: {Education},
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

/**Get Education List */
const getEducationList = async (req, res) => {
  try {
    const getEducation = await educationService.getEducationList(req, res);
    res.status(200).json({
      success: true,
      message: "Education detail list successfully!",
      data: getEducation,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**Update data by id */
const upadateEducationDetail = async (req, res) => {
  try {
    const educationId = req.params.educationId;
    const EducationExists = await educationService.getEducationId(educationId);
    if (!EducationExists) {
      throw new Error("Education not Found!");
    }
    await educationService.upadateEducation(educationId, req.body);
    res.status(200).json({
      success: true,
      message: "Education details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**delete data by id */
const deleteEducationDetail = async (req, res) => {
  try {
    const educationId = req.params.educationId;
    const EducationExists = await educationService.getEducationId(educationId);
    if (!EducationExists) {
      throw new Error("Education not Found!");
    }
    await educationService.deleteEducation(educationId, req.body);
    res.status(200).json({
      success: true,
      message: "Education details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createEducation,
  getEducationList,
  upadateEducationDetail,
  deleteEducationDetail
};
