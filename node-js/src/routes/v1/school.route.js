const express =require('express');
const { schoolController } = require('../../controllers');

const router=express.Router();

/**create school detail */
router.post('/create-school',schoolController.createSchool);

module.exports=router;