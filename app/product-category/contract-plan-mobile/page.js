"use client"
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeadBar from "../../components/HeadBar";
import Link from "next/link";

export default function ContractPlanMobile () {
    return (
        <>
        <Header />
        <HeadBar text="Get Trend-setting Smartphones With Flexible Monthly Contracts!" />
        <Container className="py-4">
            <h2 className="text-center">Contract Plan Mobile</h2>
        </Container>
        <Footer />
        </>
    );
}