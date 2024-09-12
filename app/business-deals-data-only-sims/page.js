"use client"
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";

export default function SimBusinessDeal () {
    return (
        <>
        <Header />
        <HeadBar text='Data Only SIMs' />
        <Container>
            <h2>Data-only-SIM Business Deals</h2>
        </Container>
        <Footer />
        </>
    );
}