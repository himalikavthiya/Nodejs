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

/**Delete Book details by id*/
// router.delete('/delete-book/:deteleId',
// bookController.
// )

module.exports=router;