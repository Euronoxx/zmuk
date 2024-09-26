"use client"
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

function CivilServants () {
    return (
        <>
        <Header />
        <Container fluid className="civilservant p-0">
            <Container>
                <Row>
                    <Col>
                        <p>At Zoiko Mobile, we appreciate the hard work and dedication of our public sector workers. As a token of gratitude, we are offering an <span className="txtred">exclusive 30% lifetime discount</span> on any of our SIM-only plans for the public sector workers, and 20% lifetime discount for up to 5 nominated family and friends.</p>
                        <Link href={'/public-sector-workers-form'} className="btn btn-outline-danger btn-sm">Register Now</Link>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </Container>
        <Container className="py-5">
            <h2 className="green24bold text-center mb-5">How to Get Your Discount</h2>
            <Row>
                <div className="col-md-4 col-sm-12 col-12">
                    <Row>
                        <div className="col-md-2 col-sm-2 col-2 numvlarge">1</div>
                        <div className="col-md-10 col-sm-10 col-10">
                            <h4 className="txtred">Choose Your Plan</h4>
                            <p>Browse our range of SIM-only plans and select the one that best suits your needs.</p>
                        </div>
                    </Row>
                </div>
                <div className="col-md-4 col-sm-12 col-12">
                    <Row>
                        <div className="col-md-2 col-sm-2 col-2 numvlarge">2</div>
                        <div className="col-md-10 col-sm-10 col-10">
                            <h4 className="txtred">Sign Up with Your Work Email</h4>
                            <p>Register for a Zoiko Mobile account using your work email address.</p>
                        </div>
                    </Row>
                </div>
                <div className="col-md-4 col-sm-12 col-12">
                    <Row>
                        <div className="col-md-2 col-sm-2 col-2 numvlarge">3</div>
                        <div className="col-md-10 col-sm-10 col-10">
                            <h4 className="txtred">Verify Your Status</h4>
                            <p>Provide a valid work ID to confirm your public sector working status.</p>
                        </div>
                    </Row>
                </div>
            </Row>
            <br />
            <Row>
                <div className="col-sm-4 col-12 offset-md-2">
                    <Row>
                        <div className="col-md-2 col-sm-2 col-2 numvlarge">4</div>
                        <div className="col-md-10 col-sm-10 col-10">
                            <h4 className="txtred">Nominate Family and Friends</h4>                        
                            <p>Choose up to 5 family and friends to receive a 20% lifetime discount on their SIM-only plans.</p>
                        </div>
                    </Row>
                </div>
                <div className="col-sm-4 col-12">
                    <Row>
                        <div className="col-md-2 col-sm-2 col-2 numvlarge">5</div>
                        <div className="col-md-10 col-sm-10 col-10">
                            <h4 className="txtred">Get Your Discount</h4>                        
                            <p>Enjoy 30% off your chosen plan for as long as you remain a Zoiko Mobile customer, and 20% off for your nominated family and friends.
                        </p>
                        </div>
                    </Row>
                </div>
            </Row>
            <br />
            <Row>
                <div className="col-md-9 col-sm-12">
                    <h3 className="green18">Don&apos;t Miss Out</h3>
                    <p>Take advantage of this exclusive offer and enjoy significant saving on your mobile plan. Browse our plans today and start saving with Zoiko Mobile.</p>
                </div>
                <div className="col-md-3 col-sm-12 text-center">
                    <Link href={"/plan"} className="btn btn-outline-danger btn-sm mt-4">Browse Plans Now</Link>
                </div>
            </Row>
            <br />
            <Row>
                <div className="col-md-3">
                    <h3 className="txtred">Thank you for your service</h3>
                </div>
                <div className="col-md-9">
                    <p>At <span className="txtred">Zoiko Mobile</span>, we are proud to support our public sector workers and their loved ones. We look forword to providing you with the best network experience at an unbeatable price.</p>
                </div>
            </Row>
            <h3 className="mt-5">Terms &amp; Conditions</h3>
            <h3 className="txtred mt-3">30% Discount</h3>
            <p>Applies to any Zoiko Mobile SIM-only plan for as long as you remain a customer.</p>
            <h3 className="txtred mt-3">20% Discount for Family and Friends</h3>
            <p>Applies to up to 5 nominated family and friends for as long as they remain Zoiko Mobile customers.</p>
            <h3 className="txtred mt-3">Valid Work ID</h3>
            <p>You must provide a valid work ID to confirm your public sector work status.</p>
            <h3 className="txtred mt-3">Eligibility</h3>
            <p>This offer is available to new public sector workers customers only.</p>
            <h3 className="txtred mt-3">Fair Usage Policy</h3>
            <p>Applies to all plans, including unlimited calls &amp; texts and EU roaming.</p>
            <h3 className="txtred mt-3">5G Coverage</h3>
            <p>Available in selected areas only.</p>
            <h3 className="txtred mt-3">Wi-Fi Calling</h3>
            <p>Requires compatible handset and network coverage.</p>
            <h3 className="txtred mt-3">EU Roaming</h3>
            <p>For use in EU countries only.</p>
            <p className="text-center mt-4">This offer can be used in conjunction with other promotional offers from Zoiko Mobile.</p>
        </Container>
        <Footer />
        </>
    );
}
export default CivilServants;