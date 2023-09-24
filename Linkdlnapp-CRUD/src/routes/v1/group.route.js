const express = require("express");
const { groupController } = require("../../controllers");

const router = express.Router();

/* group group listing. */
router.post("/create-group", groupController.createGroupDetail);

/* Get group list */
router.get("/list-group", groupController.getGroupList);

/**delete group  by Id */
router.put("/delete-group/:groupId", groupController.deleteGroupDetail);

/**Update group by Id */
router.put("/update-group/:groupId", groupController.upadateGroupDetails);

module.exports = router;
