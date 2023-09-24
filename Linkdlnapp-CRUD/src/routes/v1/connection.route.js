const express = require("express");
const { connectionController } = require("../../controllers");

const router = express.Router();

/* post connections listing. */
router.post("/create-connection", connectionController.createConnection);

/* Get connection list */
router.get("/list-connection", connectionController.getConnectionList);

/**Update connection detail by Id */
router.put(
  "/update-connection/:connectionId",
  connectionController.upadateConnectionDetail
);

/**delete connection detail by Id */
router.put("/delete-connection/:connectionId", connectionController.deleteConnectionDetail);

module.exports = router;
