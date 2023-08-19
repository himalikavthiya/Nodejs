const {book}=require("../models");

/**create book details */
const createBookDetail=async(reqBody) => {
    return book.create(reqBody);
};

/**get Book list */
const getBookList=async(req,res)=>{
    return book.find();
}
module.exports={
    createBookDetail,
    getBookList
}