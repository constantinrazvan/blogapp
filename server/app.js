const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express(); 
require("dotenv").config("/.env");
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/blogAppPosts", {useNewUrlParser: true})

const blogPost = new mongoose.Schema({ 
    title: String, 
    author: String, 
    body: String
})

const BlogPost = new mongoose.model("BlogPost", blogPost, "blogPosts");

app.get("/getBlogs", function(req, res){ 
    console.log("Get function called!");

    BlogPost.find({  })
    .then((data) => {
        console.log('Data: ', data);
        res.json(data);
    })
    .catch((error) => {
        console.log('error: ', daerrorta);
    });
});

app.get("fetch/:id", function(req, res){
    fetchid = req.params.id;
    
    BlogPost.findById({id:fetchid})
    .then((data) => {
        console.log('Data: ', data);
    })
    .catch((error) => {
        console.log('error: ', daerrorta);
    });
});

app.post("/newBlogPost", function(req, res){ 
    const newBlogPost = new BlogPost({
        title: req.body.titlePost, 
        author: req.body.authorPost, 
        body: req.body.bodyPost
    })

    newBlogPost.save()
    .then(()=> {
        console.log("Post has been succesfully created!");
    })
    .catch((error)=> { 
        console.log("Error"); 
        res.stat
    })
});

app.listen(port, function(req,res){ 
    console.log(`Server is listening ${port}`)
})