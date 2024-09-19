"use client"
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";

function BusinessSimOnlyPlan () {
    return (
        <>
        <Header />
        <HeadBar text="SIM Only Plans" />
        <Container fluid className="text-center p-5">
            <h2 className="green18">Select Contract Duration</h2>
        </Container>
        <Footer />
        </>
    );
}
export default BusinessSimOnlyPlan;