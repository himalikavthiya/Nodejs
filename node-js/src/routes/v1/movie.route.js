const express =require('express');
const { movieController } = require('../../controllers');

const router=express.Router();

/**create movie detail */
router.post('/create-movie',movieController.createMovie);

/**get movie detail list */
router.get('/list-movie',movieController.getMovieList);

/**delete movie detail */
router.delete('/delete-movie/:movieId',movieController.deleteMovie);






module.exports=router;