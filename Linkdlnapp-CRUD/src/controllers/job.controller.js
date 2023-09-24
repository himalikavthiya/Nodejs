const { jobService } = require("../services");

/** create Job */
const createJobDetail = async (req, res) => {
  try {
    const reqBody = req.body;
    const JobDetail = await jobService.createJob(reqBody);
   
    res.status(201).json({
      message: "Job create successfully!",
      data: { JobDetail }
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

/**Get Job List */
const getJobList = async (req, res) => {
  try {
    const getJob = await jobService.getJobList(req, res);
    res.status(200).json({
      success: true,
      message: "Get Job list successfully!",
      data: getJob,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**Update data by id */
const upadateJobDetails = async (req, res) => {
  try {
    const jobId = req.params.jobId;
    const JobExists = await jobService.getJobId(jobId);
    if (!JobExists) {
      throw new Error("Job not Found!");
    }
    await jobService.upadateJob(jobId, req.body);
    res.status(200).json({
      success: true,
      message: "Job details update successfully!",
      data: JobExists,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**delete data by id */
const deleteJobDetail = async (req, res) => {
  try {
    const jobId = req.params.jobId;
    const JobExists = await jobService.getJobId(jobId);
    if (!JobExists) {
      throw new Error("Job not Found!");
    }
    await jobService.deleteJob(jobId, req.body);
    res.status(200).json({
      success: true,
      message: "Job details update successfully!",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createJobDetail,
  getJobList,
  upadateJobDetails,
  deleteJobDetail,
};
