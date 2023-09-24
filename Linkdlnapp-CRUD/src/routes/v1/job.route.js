const express = require("express");
const { jobController } = require("../../controllers");

const router = express.Router();

/* job jobs listing. */
router.post("/create-job", jobController.createJobDetail);

/* Get job list */
router.get("/list-job", jobController.getJobList);

/**delete job  by Id */
router.put("/delete-job/:jobId", jobController.deleteJobDetail);

/**Update job by Id */
router.put("/update-job/:jobId", jobController.upadateJobDetails);

module.exports = router;
