const { skillService } = require("../services");

/** create Skill */
const createSkillDetail = async (req, res) => {
  try {
    const reqBody = req.body;
    const Skill = await skillService.createSkill(reqBody);

    res.status(200).json({
      message: "Skill create successfully!",
      data: Skill
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

/**Get Skill List */
const getSkillList = async (req, res) => {
  try {
    const getSkillList = await skillService.getSkillList(req, res);
    res.status(200).json({
      success: true,
      message: "Get Skill list successfully!",
      data: getSkillList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**Update data by id */
const upadateSkillDetail = async (req, res) => {
  try {
    const skillId = req.params.skillId;
    const SkillExists = await skillService.getSkillId(skillId);
    if (!SkillExists) {
      throw new Error("Skill not Found!");
    }
    await skillService.upadateSkill(skillId, req.body);
    res.status(200).json({
      success: true,
      message: "Skill details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**delete data by id */
const deleteSkillDetail = async (req, res) => {
  try {
    const skillId = req.params.skillId;
    const SkillExists = await skillService.getSkillId(skillId);
    if (!SkillExists) {
      throw new Error("Skill not Found!");
    }
    await skillService.upadateSkill(skillId, req.body);
    res.status(200).json({
      success: true,
      message: "Skill details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createSkillDetail,
  getSkillList,
  upadateSkillDetail,
  deleteSkillDetail
};
