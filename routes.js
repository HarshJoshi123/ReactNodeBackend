const express=require('express');
const {addPost,getPosts,deletePost}=require('./util');
const router=express.Router();
router.post("/newpost",addPost);
router.get("/getpost",getPosts);
router.delete("/deletepost/:postId",deletePost);
module.exports=router;