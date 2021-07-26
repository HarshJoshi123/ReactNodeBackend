const express=require('express');
const app=express();
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const Routes=require('./routes');
const cors=require('cors');
dotenv.config();

const PORT=process.env.PORT || 8080;
const URI=process.env.URI;
mongoose.connect(URI,{useNewUrlParser: true,useUnifiedTopology:true,useCreateIndex: true});
mongoose.set('useFindAndModify', false);
const connection=mongoose.connection;
connection.once('open',()=>{
	console.log("Mongo connection running");
})
mongoose.connection.on("error", (err) => {
        console.log("MongoDB connection error. Please make sure MongoDb is running.", err);
        process.exit();
});

app.use(cors());
app.use(express.json());
app.use('/',Routes);
app.listen(PORT,()=>{
    console.log(`Connection running at Port no. ${PORT}`);
})
