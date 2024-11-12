"use client"
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import HeadBar from "../components/HeadBar";

export function Blogs () {

    const [posts, setPosts] = useState(null)
    useEffect(() => {
        async function fetchPosts() {
            let res = await fetch('https://zoikomobile.co.uk/wp-json/wp/v2/posts?_embed&per_page=22')
            let data = await res.json()
            setPosts(data)
        }
        fetchPosts()
    }, [])

    const formatPublishedDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };
    
    if (!posts) return <div>Loading...</div>
    console.log(posts)

    return (
        <>
        <Header />
        <HeadBar text="Zoiko&apos;s Latest Tech Tea: On the Digital Pulse!" />
        <Container className="p-4">
            <Row>
                {posts.map((post) => (
                <Col key={post.id} md={4} className="gx-5 mb-5">
                    <Card className="my-3" style={{height:'600px',border:'none'}}>
                        <Image src={post._embedded['wp:featuredmedia'][0].source_url} fluid alt={post.title.rendered} style={{height:'240px'}} rounded />
                        <p className="txtred">{formatPublishedDate(post.date)}</p>
                        <h2 className="green18" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                        <Button href={`/blog/${post.slug}`} variant="outline-danger" size="sm" style={{width:'100px'}}>Read More</Button>
                    </Card>
                </Col>
                ))}
            </Row>
        </Container>
        <Footer />
        </>
    );
};
export default Blogs;