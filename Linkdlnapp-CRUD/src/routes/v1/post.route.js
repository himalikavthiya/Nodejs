const express = require("express");
const { postController } = require("../../controllers");

const router = express.Router();

/* post posts listing. */
router.post("/create-post", postController.createPostDetail);

/* Get post list */
router.get("/list-post", postController.getPostList);

/**Update post by Id */
router.put(
  "/update-post/:postId",
  postController.upadatePostDetail
);

/**delete post detail by Id */
router.put("/delete-post/:postId", postController.deletePostDetail);

module.exports = router;
