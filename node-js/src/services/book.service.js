const { book } = require("../models");

/**create book details */
const createBookDetail = async (reqBody) => {
  return book.create(reqBody);
};

/**get Book list */
const getBookList = async (req,res) => {
//   return book.find();
return book.find({$or:[{is_active:true}]});

};

/**get book detail Id */
const getBookId = async (bookId) => {
  return book.findById(bookId);
};
/**Delete Book id */
const deleteBook = async (bookId) => {
  return book.findByIdAndDelete(bookId);
};
module.exports = {
  createBookDetail,
  getBookList,
  getBookId,
  deleteBook,
};
