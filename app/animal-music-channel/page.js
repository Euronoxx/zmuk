"use client"
import { Card, Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

export function Animal () {

    const [posts, setPosts] = useState(null)
    useEffect(() => {
        async function fetchPosts() {
            let res = await fetch('https://zoikomobile.co.uk/wp-json/wp/v2/posts?_embed&per_page=10')
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
        <Container className="p-4">
            <h2>Animal Music Channel</h2>
            {posts.map((post) => (
                <div key={post.id}>
                    <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                </div>
            ))}
        </Container>
        <Footer />
        </>
    );
};
export default Animal;