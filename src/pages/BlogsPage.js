import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  "../App.css";

const Blogs = () => {

    useEffect(() => {
        document.title = "Blogs";
    },[]);

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3500/getBlogs')
        .then((response) => {
           setBlogs(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            setLoading(false);
        });
    },[]);


    return(
        <React.Fragment>
        <h1>Blogs</h1>
        <div className='cards'>
            {loading ? (
                <span>Loading...</span>
            ) : (
                
            blogs.map((blog) => (
                    <div className="card" key={blog.id}>
                        <h1>{blog.title} </h1>
                        <h3>{blog.author}</h3>
                        <p>{blog.body}</p>
                        <a href="/blogPage">READ</a>
                    </div>
            ))
            )}
        </div>
      </React.Fragment>
    )
}

export default Blogs;