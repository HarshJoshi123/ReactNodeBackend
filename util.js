const Post=require('./postModel');

exports.getPosts=(req,res)=>{
const posts=Post.find().then(posts=>{
   console.log(posts);
  res.status(200).json(posts);
}).catch(err=> 
    res.status(401).json({
        err:err
    })
    );

}

exports.addPost=async (req,res)=>{
  try{
    const post=await new Post(req.body);
  await post.save();
  res.status(200).json({post});
  }
  catch(error){
      console.log(error);
  }

}

exports.deletePost=(req,res)=>{
Post.findById(req.params['postId'],(err,post)=>{
 post.remove((err,post)=>{
     if(err){
    res.status(401).json({error:err});
     }
     else{
         res.status(200).json({message:"Post deleted successfully"});
     }
 })

})

}