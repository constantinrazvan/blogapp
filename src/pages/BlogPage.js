import React, {useEffect, useState} from "react";
import axios from "axios";

//IS NOT WORKING RIGHT NOW

const BlogPage = () => {

    useEffect(() => {
        document.title = "Title";
    },[]);

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3500/fetch/:id')
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

    return (
        <React.Fragment>
            <h1>Blog Page</h1>
            {loading ? (
                <span>Loading...</span> 
               ) : (
                blogs.map((blog) => (
                    <div key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.body}</p>
                    </div>
               )))}
        </React.Fragment>
    )
}

export default BlogPage;