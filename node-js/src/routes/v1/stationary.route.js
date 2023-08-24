const express = require('express');
const {
    stationaryController
} = require('../../controllers');

const router = express.Router();

/**create stationary detail */
router.post('/create-stationary', stationaryController.createStationary);

/**get stationary List */
router.get('/list-stationary', stationaryController.getStationaryList);

/**delete stationary detail */
router.delete('/delete-stationary/:stationaryId',stationaryController.deleteStationary);

module.exports = router;