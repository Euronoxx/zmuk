"use client"
import Header from "../../components/Header";
import HeadBar from "../../components/HeadBar";
import Footer from "../../components/Footer";
import { Button, Container } from "react-bootstrap";
import { useRouter } from "next/navigation";
import data from "../../products/mobiledata.json";

export default function ProductDetail ({ params }) {
    const router = useRouter();
    const paramUrl = params.slug;

    return (
        <>
        <Header />
        <HeadBar text={<>Discover Premium Quality Refurbished Smartphones <span style={{color:'#DF1E5A'}}>@</span> Zoiko Mobile</>} />
        <Container>
            {data.phones.map((item) => (
                <div key={item.id}>{item.name}</div>
            ))}
        </Container>
        <Footer />
        </>
        
    );
}