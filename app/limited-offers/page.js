"use client"
import { div, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Limitedoffers () {
    return (
        <>
        <Header />
        <Container fluid className="p-0">
            <Image src={'/img/limited-offers.webp'} alt="Limited Offers" width={2000} height={400} style={{width:'100%'}} className="limtbanner" />
            <Container className="text-center">
                <Link href={'/plans'} className="btn btn-outline-danger">View all plans</Link>
            </Container>
            <Container className="my-5">
                <h3 className="green24bold text-center my-4">How to Get 3 Months Free</h3>
                <Image src={'/img/number-slide.png'} width={400} height={60} alt="Number link" style={{width:'100%'}} className="numslide" />
                <Row className="mt-5">
                    <div className="col-md-3 col-sm-12">
                    <h4 className="green18">Select Your Plan</h4>
                    <p>Browse through our range of plans and select the one that aligns with your usage requirements.</p>
                    </div>
                    <div className="col-md-3 col-sm-12">
                    <h4 className="green18">Choose Contract duration</h4>
                    <p>Opt for our 24-month contract duration to unlock exclusive benefits and savings.</p>
                    </div>
                    <div className="col-md-3 col-sm-12">
                    <h4 className="green18">Enter Promo Code</h4>
                    <p>During checkout, remember to enter the promo code <span className="txtred">ZMOBILE24</span> to receive three months of service absolutely free.</p>
                    </div>
                    <div className="col-md-3 col-sm-12">
                    <h4 className="green18">Enjoy Your Free Month</h4>
                    <p>Once activated, enjoy uninterrupted service for the next 24 months with the added benefit of not paying for the 1st, 4th, and 6th months,</p>
                    </div>
                </Row>
                <Row className="mt-5">
                    <div className="col-md-3">
                    <p className="bigred">ZOIKO UPCOMING<br /><span className="verybigred">OFFERS</span></p>
                    </div>
                    <div className="col-md-9">
                    <p className="bigred">Get ready to snag some cracking deals!<br /><span className="bigblack">Stay tuned for existing new offers heading your way soon.</span></p>
                    </div>
                </Row>
            </Container>
        </Container>
        <Footer />
        </>
    );
}