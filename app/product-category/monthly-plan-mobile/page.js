"use client"
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeadBar from "../../components/HeadBar";
import Link from "next/link";

export default function MonthlyPlanMobile () {
    return (
        <>
        <Header />
        <HeadBar text="Grab &amp; Go: Smartphones with 30-Day Flexi SIM Plans" />
        <Container className="py-4">
            <h2 className="text-center">Monthly Plan Mobile</h2>
        </Container>
        <Footer />
        </>
    );
}