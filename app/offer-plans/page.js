import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";

const offerplans = () => {
    return (
        <>
        <Header />
        <HeadBar text='Zoiko Mobile Limited Offers!' />

        <Container className="my-5">
            <Row>
                <Col>
                    <div className="offerbox mx-4">
                        <div className="paybox">
                            Pay for -------------<br /><span className="numb">21</span> <span className="green24bold">Months</span>
                        </div>
                        <span className="andsign">&amp;</span>
                        <div className="paybox">
                            Get -------------<br /> <span className="numb">3</span> <span className="green24bold">Months free</span>
                        </div>
                        <p className="mt-4 green18">Duration of Contract: <span className="txtred">24 months</span><br />
                        Bill Free Months: <span className="txtred">3</span><br />
                        Months Eligible: <span className="txtred">1st, 4th &amp; 6th month</span></p>
                        <div className="promobar">Use Code : <span className="txtred">ZMOBILE24</span></div>
                    </div>
                    <div className="text-center mt-2">
                        <Link href="{{ route('offer-plans') }}" className="btn btn-outline-danger btn-lg">Buy now</Link>
                    </div>
                </Col>
                <Col>
                    <div className="offerbox mx-4">
                        <div className="paybox">
                            Pay for -------------<br /><span className="numb">16</span> <span className="green24bold">Months</span>
                        </div>
                        <span className="andsign">&amp;</span>
                        <div className="paybox">
                            Get -------------<br /> <span className="numb">2</span> <span className="green24bold">Months free</span>
                        </div>
                        <p className="mt-4 green18">Duration of Contract: <span className="txtred">18 months</span><br />
                        Bill Free Months: <span className="txtred">2</span><br />
                        Months Eligible: <span className="txtred">1st &amp; 4th month</span></p>
                        <div className="promobar">Use Code : <span className="txtred">ZMOBILE18</span></div>
                    </div>
                    <div className="text-center mt-2">
                        <Link href="{{ route('offer-plans') }}" className="btn btn-outline-danger btn-lg">Buy now</Link>
                    </div>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <div className="offerbox mx-4">
                        <div className="paybox">
                            Pay for -------------<br /><span className="numb">11</span> <span className="green24bold">Months</span>
                        </div>
                        <span className="andsign">&amp;</span>
                        <div className="paybox">
                            Get -------------<br /> <span className="numb">1</span> <span className="green24bold">Months free</span>
                        </div>
                        <p className="mt-4 green18">Duration of Contract: <span className="txtred">12 months</span><br />
                        Bill Free Months: <span className="txtred">1</span><br />
                        Months Eligible: <span className="txtred">2nd month</span></p>
                        <div className="promobar">Use Code : <span className="txtred">ZMOBILE12</span></div>
                    </div>
                    <div className="text-center mt-2">
                        <Link href="{{ route('offer-plans') }}" className="btn btn-outline-danger btn-lg">Buy now</Link>
                    </div>
                </Col>
                <Col>
                    <div className="offerbox mx-4">
                        <div className="paybox">
                            Pay for -------------<br /><span className="numb">6</span> <span className="green24bold">Months</span>
                        </div>
                        <span className="andsign">&amp;</span>
                        <div className="paybox">
                            Get -------------<br /> <span className="numb">50%</span> <span className="green24bold">Discount</span>
                        </div>
                        <p className="mt-4 green18">Duration of Contract: <span className="txtred">6 months</span><br />
                        Bill Free Months: <span className="txtred">30% - 50% Discount</span><br />
                        Months Eligible: <span className="txtred">1st(30%) &amp; 2nd(50%)</span></p>
                        <div className="promobar">Use Code : <span className="txtred">ZMOBILE6</span></div>
                    </div>
                    <div className="text-center mt-2">
                        <Link href="{{ route('offer-plans') }}" className="btn btn-outline-danger btn-lg">Buy now</Link>
                    </div>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <div className="offerbox mx-4">
                        <div className="paybox">
                            Pay for -------------<br /><span className="numb">30</span> <span className="green24bold">Days</span>
                        </div>
                        <span className="andsign">&amp;</span>
                        <div className="paybox">
                            Get -------------<br /> <span className="numb">30%</span> <span className="green24bold">Discount</span>
                        </div>
                        <p className="mt-4 green18">Duration of Contract: <span className="txtred">30 Days</span><br />
                        Bill Free Months: <span className="txtred">30% Discount</span><br />
                        Months Eligible: <span className="txtred">1st month</span></p>
                        <div className="promobar">Use Code : <span className="txtred">ZMOBILE30</span></div>
                    </div>
                    <div className="text-center mt-2">
                        <Link href="{{ route('offer-plans') }}" className="btn btn-outline-danger btn-lg">Buy now</Link>
                    </div>
                </Col>
                <Col>
                    <div className="offerbox">
                        <div className="green24bold text-center my-5">Zoiko Upcoming Offers</div>
                        <h3 className="txtred text-center">Get ready to snag some cracking deals!</h3>
                        <p className="text-center py-5">Stay tuned for exciting new offers heading your way soon.</p>
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    );
};
export default offerplans;