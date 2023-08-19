const express=require('express');
const validate=require('../../middlewares/validate')
const {bookController} =require('../../controllers')
const {bookValidation} =require('../../validations')

const router=express.Router();

/**create book store details */
router.post('/create-book-detail',
validate(bookValidation.createBookDetail),
bookController.createBookDetail
);

/**Get Book List */
router.get('/book-list',
bookController.getBooklist
);
module.exports=router;