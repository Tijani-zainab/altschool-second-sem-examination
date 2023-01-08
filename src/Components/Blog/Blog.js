import React from "react";
import "./Blog.scss";
import { useState, useEffect } from "react";

const Blog = () => {

    const API_URL = 'https://api.hashnode.com/';

    const getBlogPosts = async () => {
        try {
            const query = `
                query {
                blogs(username: "Janitijj") {
                    posts {
                    title
                    coverImage
                    excerpt
                    }
                }
                }
            `;
        
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer API_KEY',
                },
        
                body: JSON.stringify({ query }),
            });
        
        const data = await response.json();
            return data.data.blogs.posts;
        } catch (error) {
            console.error(error);
        }

    };


    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        getBlogPosts().then((blogs) => {
            setBlogs(blogs)
        });
    }, []);

    return (
        <div className="blog">
            <h1>Blog</h1>
            {blogs.map(blog => (
                <div>
                    <h2>{blog.title}</h2>
                    <img src={blog.coverImage} alt={blog.title} />
                    <p>{blog.excerpt}</p>
                </div>
            ))}
        </div>
    );
};


export default Blog;