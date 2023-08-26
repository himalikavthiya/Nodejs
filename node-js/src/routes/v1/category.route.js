const express=require('express');

const {categoryController} = require("../../controllers");
const  validate  = require('../../middlewares/validate');
const { categoryValidation } = require('../../validations');

const router=express.Router();


/*create user*/
router.post('/create-category',
 validate(categoryValidation.createCategory),
 categoryController.createCategory
);


/* Get user list */
router.get('/category-list',
    categoryController.getCategoryList
);

module.exports=router;