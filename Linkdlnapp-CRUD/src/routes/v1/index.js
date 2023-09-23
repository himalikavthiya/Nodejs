const express = require('express');
const userRoute=require('./user.route');
const profileRoute=require('./profile.route');

const router = express.Router();


/**Create particular routes */
router.use('/user',userRoute);
router.use('/profile',profileRoute);

module.exports = router;
