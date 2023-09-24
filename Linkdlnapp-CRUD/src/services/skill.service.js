const { Skill } = require("../models");

/** Create Skill detail*/
const createSkill = async (reqBody) => {
  return Skill.create(reqBody);
};

/**Get Skill detail List */
const getSkillList = async (req,res) => {
  return Skill.find();
};

/**get Skill by Id */
const getSkillId = async (SkillId) => {
  return Skill.findById(SkillId);
};

/**update Skill data */
const upadateSkill = async (SkillId, updateBody) => {
  return Skill.findByIdAndUpdate(SkillId,updateBody);
};

/**delete Skill data by id */
const deleteSkill = async (SkillId) => {
  return Skill.findByIdAndDelete(SkillId);
};

module.exports = {
  createSkill,
  getSkillList,
  getSkillId,
  upadateSkill,
  deleteSkill
};
