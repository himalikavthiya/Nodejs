const { Post } = require("../models");

/** Create Post*/
const createPost = async (reqBody) => {
  return Post.create(reqBody);
};

/**Get Post List */
const getPostList = async (req,res) => {
  return Post.find().populate({
    path:"userId",
    select:["firstName"]
  });
};

/**get Post by Id */
const getPostId = async (postId) => {
  return Post.findById(postId);
};

/**upadate Post data */
const upadatePost = async (postId, updateBody) => {
  return Post.findByIdAndUpdate(postId,updateBody);
};

/**delete Post data */
const deletePost = async (postId) => {
  return Post.findByIdAndDelete(postId);
};

module.exports = {
  createPost,
  getPostList,
  getPostId,
  upadatePost,
  deletePost
};
