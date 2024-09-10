"use client"
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SimBusinessDeal () {
    return (
        <>
        <Header />
        <Container fluid className="p-0">
            <div className="headbar">
                <Container className="py-2">
                    Data Only SIMs
                </Container>
            </div>
        </Container>
        <Container>
            <h2>Data-only-SIM Business Deals</h2>
        </Container>
        <Footer />
        </>
    );
}