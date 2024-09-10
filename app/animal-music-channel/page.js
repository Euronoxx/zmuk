"use client"
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from 'react';

export function Animal () {

    const [posts, setPosts] = useState(null)
    useEffect(() => {
        async function fetchPosts() {
            let res = await fetch('https://zoikomobile.co.uk/wp-json/wp/v2/posts')
            let data = await res.json()
            setPosts(data)
        }
        fetchPosts()
    }, [])
    
    if (!posts) return <div>Loading...</div>
    console.log(posts)

    return (
        <>
        <Header />
        <Container>
            <h2>Animal Music Channel</h2>
                {posts.map((post) => (
                    <div key={post.id}><h3>{post.title.rendered}</h3>{post.excerpt.rendered}</div>
                ))}
        </Container>
        <Footer />
        </>
    );
};
export default Animal;