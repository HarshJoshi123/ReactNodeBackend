const mongoose=require('mongoose');
const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:'Post Title is Mandatory'
    },
    body:{
        type:String,
        required:'Body Required'
    }
});
module.exports=mongoose.model("Post",postSchema);
