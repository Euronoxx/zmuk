"use client"
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";

export default function Login () {
    return (
        <>
        <Header />
        <HeadBar text='Join us today and enjoy our fantastic mobile services, all while supporting animal welfare and music initiatives!' />
        <Container>
            <h2>Login</h2>
        </Container>
        <Footer />
        </>
    );
}