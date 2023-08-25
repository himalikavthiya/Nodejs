const express =require('express');
const { schoolController } = require('../../controllers');
const { schoolService } = require('../../services');

const router=express.Router();

/**create school detail */
router.post('/create-school',schoolController.createSchool);

/**Get school detail List */
router.get('/getschool-list',schoolController.getSchoolList);

router.delete('/deleteschool/:schoolId',schoolController.deleteSchool);

module.exports=router;