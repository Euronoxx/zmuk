"use client"
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import HeadBar from '../../components/HeadBar';
import Footer from '@/app/components/Footer';
import { Button, Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

export default function Page ({params}) {

    const paramUrl = params.slug;
    const [title, setTitle] = useState(null);
    const [date, setDate] = useState(null);
    const [featureImage, setFeatureImage] = useState(null);
    const [content, setContent] = useState(null);
    const [error, setError] = useState(false); // Error state to handle error page

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              `https://zoikomobile.co.uk/wp-json/wp/v2/posts?_embed&slug=${paramUrl}`,
            );
            const data = await response.json();
            
            if (data && data.length > 0) {
              const post = data[0];
    
              setTitle(post.title.rendered);
              setDate(post.date);
              setContent(post.content.rendered);
    
              // Fetch the featured image if it exists
              if (post.featured_media) {
                try {
                  const mediaResponse = await fetch(
                    `https://zoikomobile.co.uk/wp-json/wp/v2/media/${post.featured_media}`,
                  );
                  const mediaResult = await mediaResponse.json();
                  setFeatureImage(mediaResult.source_url || null);
                } catch (error) {
                  console.error("Error fetching media for post:", error);
                  setFeatureImage(null);
                }
              }
            } else {
              console.error("No post data found.");
              setError(true); // Set error state if no post found
            }
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, [paramUrl]);

    const formatPublishedDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <>
        <Header />
        <HeadBar text="Zoiko Mobile Blog" />
        <Container className='p-4 my-4' style={{overflow:'hidden'}}>
            <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
            <p>{formatPublishedDate(date)}</p>
            <p dangerouslySetInnerHTML={{ __html: content }} className="body22" />
            <Button variant='outline-success' size='lg' href='/blog' className='mt-5'>Back To Blogs</Button>
        </Container>
        <Footer />
        </>
    );
}