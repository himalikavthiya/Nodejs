const { experienceService } = require("../services");

/** create experience */
const createExperience = async (req, res) => {
  try {
    const reqBody = req.body;
    const experience = await experienceService.createExperience(reqBody);
    if (!experience) {
      throw new Error(" please try again or later!");
    }
    res.status(200).json({
      message: "experience create successfully!",
      data: {experience},
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

/**Get experience List */
const getExperienceList = async (req, res) => {
  try {
    const getexperience = await experienceService.getExperienceList(req, res);
    res.status(200).json({
      success: true,
      message: "Get experience list successfully!",
      data: getexperience,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**Update data by id */
const upadateExperienceDetail = async (req, res) => {
  try {
    const experId = req.params.experId;
    const experienceExists = await experienceService.getExperienceId(experId);
    if (!experienceExists) {
      throw new Error("experience not Found!");
    }
    await experienceService.upadateExperience(experId, req.body);
    res.status(200).json({
      success: true,
      message: "experience details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**delete data by id */
const deleteExperienceDetail = async (req, res) => {
  try {
    const experId = req.params.experId;
    const experienceExists = await experienceService.getExperienceId(experId);
    if (!experienceExists) {
      throw new Error("experience not Found!");
    }
    await experienceService.deleteExperience(experId, req.body);
    res.status(200).json({
      success: true,
      message: "experience details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createExperience,
  getExperienceList,
  upadateExperienceDetail,
  deleteExperienceDetail
};
