const express=require('express');
// const { userValidation } = require("../../validations");
const {userController} = require("../../controllers");
const {categoryController} = require("../../controllers");

const router=express.Router();


/*create user*/
router.post('/create-category',
//  validate(userValidation.createUser),
 categoryController.createCategory
);


/* Get user list */
router.get('/category-list',
    categoryController.getCategoryList
);

module.exports=router;