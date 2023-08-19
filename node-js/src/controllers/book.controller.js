const {bookService}=require('../services');


/**create book detail */
const createBookDetail=async(req,res)=>{
    try{
        const reqBody=req.body;
        const book=await(bookService.createBookDetail(reqBody));

        res.status(201).json({
           success:true,
           messge:"Book detail add successfully! ",
           data:{book}
        });
    }catch(error){
      res.status(400).json(
        {success:false,
        message:error.message});
    }
};
/**get book list */

const getBooklist = async (req, res) => {
    try {
      const getBooklist = await bookService.getBookList(req,res);
      res.status(200).json({
        success: true,
        message: "Get Book list successfully!",
        data: getBooklist,
      });
  
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  };
module.exports={
    createBookDetail,
    getBooklist
}