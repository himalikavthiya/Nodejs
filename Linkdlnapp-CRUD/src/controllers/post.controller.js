const { postService } = require("../services");

/** create Post */
const createPostDetail = async (req, res) => {
  try {
    const reqBody = req.body;
    const postDetail = await postService.createPost(reqBody);

    res.status(201).json({
      message: "Post created successfully!",
      data: postDetail
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

/**Get Post List */
const getPostList = async (req, res) => {
  try {
    const getPostList = await postService.getPostList(req, res);
    res.status(200).json({
      success: true,
      message: "Post list successfully!",
      data: getPostList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**Update data by id */
const upadatePostDetail = async (req, res) => {
  try {
    const postId = req.params.postId;
    const postExists = await postService.getPostId(postId);
    if (!postExists) {
      throw new Error("Post not Found!");
    }
    await postService.upadatePost(postId, req.body);

    res.status(200).json({
      message: "Post details update successfully!",
      data:postExists
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

/**delete data by id */
const deletePostDetail = async (req, res) => {
  try {
    const postId = req.params.postId;
    const postExists = await postService.getPostId(postId);
    if (!postExists) {
      throw new Error("Post not Found!");
    }
    await postService.upadatePost(postId, req.body);
    res.status(200).json({
      message: "Post details update successfully!",
      data:postExists
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  createPostDetail,
  getPostList,
  upadatePostDetail,
  deletePostDetail
};
