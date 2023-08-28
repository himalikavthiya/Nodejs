const express = require('express');
const {
    stationaryController
} = require('../../controllers');
const validate  = require('../../middlewares/validate');
const { stationaryValidation } = require('../../validations');

const router = express.Router();

/**create stationary detail */
router.post('/create-stationary',
validate(stationaryValidation.createStationary),
stationaryController.createStationary);

/**get stationary List */
router.get('/list-stationary', stationaryController.getStationaryList);

/**delete stationary detail */
router.delete('/delete-stationary/:stationaryId',stationaryController.deleteStationary);

/**Upadte staionary By ID */
router.put('/upadate-stationary/:stationaryId',stationaryController.updateStationary);

module.exports = router;