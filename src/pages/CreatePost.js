import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {

    useEffect(()=>{
        document.title = "Create Post";
    },[]);

    const navigate = useNavigate();

    const [titlePost, setTitlePost] = useState("");
    const [authorPost, setAuthorPost] = useState("");
    const [bodyPost, setBodyPost] = useState("");

    const [error, setError] = useState("");
    const [succes, setSucces] = useState("");

    function postRequest(){
        axios({
            method: 'post',
            url: 'http://localhost:3500/newBlogPost',
            data: {
              titlePost, 
              authorPost, 
              bodyPost
            }
          })
          .then(()=> {
            console.log("Succesfully posted!")
          })
          .catch((error) => {
            console.log(error);
          })
        navigate("/blogsPage");
    }

    async function postData(){
        if (
            titlePost.length === 0 || authorPost.length === 0 || bodyPost.length === 0) {
            return setError("Please fill all fields.");
        } 
        setSucces("Posted!");
        setError("");
        await postRequest();
    }

    return(
       <>
       <h1> Create new blog post </h1>
        <form>
            <input style={{height: "50px", width: "300px", margin: '10px'}} type={"text"} placeholder="Title" value={titlePost} onChange={(e)=>setTitlePost(e.target.value)} name={"blogPostTitle"} /> <br />
            <input style={{height: "50px", width: "300px", margin: '10px'}} type={"text"} placeholder="Author" value={authorPost} onChange={(e)=>setAuthorPost(e.target.value)} name={"blogPostAuthor"} /> <br />
            <textarea style={{margin: '10px'}} cols="39" rows="10" type={"text"} placeholder="Body" value={bodyPost} onChange={(e)=>setBodyPost(e.target.value)} name={"blogPostBody"} /> <br />
            <button onClick={postData} type="submit">My submit button</button>
        </form>
        {error.length ? <span>{error}</span> : null}
        {succes.length ? <span style={{color: "green"}}>{succes}</span> : null}
       </>
    )
}

export default CreatePost;