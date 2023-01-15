import React from "react";
import "./Blog.scss";
import { useState, useEffect } from "react";


const Blog = () => {

    const [posts, setPosts] = useState([]);

    const query = `
        query {
            user(username: "Janitijj") {
            publication {
                posts(page:0){
                slug
                title
                brief
                coverImage
                cuid
                _id
                }
            }
            }
        }
        `;


    useEffect(() => {
        fetchPosts();
    }, []);


    const fetchPosts = async () => {

        const response = await fetch("https://api.hashnode.com", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            // "Authorization": "Bearer ce8fa49f-43e6-4aff-8af3-3d888fc4531f ",
          },
          body: JSON.stringify({ query }),
        });
    
        const data = await response.json();
        // console.log(data);
        setPosts(data.data.user.publication.posts);
        // console.log(data.data.user.publication.posts);
    };


    return (
        <div className="blog">

            <h1 className="blog-header">Blog</h1>

            <div className="blog-posts">
                {posts.map((post) => (
                    <div className="blog-post">
                        <img className="cover-image" src={post.coverImage} alt={post.title} />
                        <h2>{post.title}</h2>
                        <p>{post.brief}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Blog;

//75c8d714-2da6-42c6-a67e-c2b0d4fe225b