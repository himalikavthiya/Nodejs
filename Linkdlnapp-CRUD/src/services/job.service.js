const { Job } = require("../models");

/** Create Job detail*/
const createJob = async (reqBody) => {
  return Job.create(reqBody);
};

/**Get Job detail List */
const getJobList = async (req,res) => {
  return Job.find();
};

/**get Job detail by Id */
const getJobId = async (jobId) => {
  return Job.findById(jobId);
};

/**upadate Job data */
const upadateJob = async (jobId, updateBody) => {
  return Job.findByIdAndUpdate(jobId,updateBody);
};

/**delete Job data */
const deleteJob = async (jobId) => {
  return Job.findByIdAndDelete(jobId);
};

module.exports = {
  createJob,
  getJobList,
  getJobId,
  upadateJob,
  deleteJob
};
