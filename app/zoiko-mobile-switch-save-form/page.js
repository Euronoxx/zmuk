import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

const switchsave = () => {
    
    return (
        <>
        <Header />
        <Container fluid className="p-0">
            <div className="headbar">
                <Container className="py-2">
                Switch to Simplicity <span className="msicon"><i className="bi bi-music-note-beamed"></i></span> More Data <span className="msicon"><i className="bi bi-music-note-beamed"></i></span> More Saving <span className="msicon"><i className="bi bi-music-note-beamed"></i></span> Less Hassle
                </Container>
            </div>
        </Container>

        <Container className="greybox">
            <Row>
                <Col>
                    <h4>Speed up your savings with Zoiko Mobile&apos;s Switch &amp; Save deal!</h4>
                    <p>Our speedy Cheetah, Finn, knows a thing or two about fast tracking your finances. Switch to Zoiko Mobile today and enjoy fantastic saving on your mobile plan, plus free 5G speed!</p>
                    <Image src='/img/cheetah.png' className="w-100" width={300} height={600} alt="Speed of Cheetah" />
                </Col>
                <Col>
                    <div className="redborderbox">
                        <form action="" method="post">
                            <h5>Personal Information</h5>
                            <Row>
                                <Col>
                                    <label for="fname">First name</label>
                                    <input type="text" name="fname" className="form-control" placeholder="First name" aria-label="First name" Required />
                                </Col>
                                <Col>
                                    <label for="lname">Last name</label>
                                    <input type="text" name="lname" className="form-control" placeholder="Last name" aria-label="Last name" Required />
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col>
                                    <label for="email">Email</label>
                                    <input type="email" name="email" className="form-control" placeholder="Email" aria-label="Email" Required />
                                </Col>
                                <Col>
                                    <label for="mobile">Mobile</label>
                                    <input type="text" name="mobile" className="form-control" placeholder="Mobile" aria-label="Mobile" Required />
                                </Col>
                            </Row>
                            <h5 className="mt-4">Current Mobile Service Details</h5>
                            <Row>
                                <Col>
                                    <label for="provider">Current Provider</label>
                                    <input type="text" name="provider" className="form-control" placeholder="Current provider" aria-label="Current Provider" />
                                </Col>
                                <Col>
                                    <label for="cost">Current Provider Cost(£)</label>
                                    <input type="text" name="cost" className="form-control" placeholder="Cost" aria-label="Cost" />
                                </Col>
                            </Row>
                            <br />
                            <label for="data">Data Allowance(GB)</label>
                            <input type="text" name="data" className="form-control" placeholder="Current provider" aria-label="Data Allowance" />
                            <br />
                            <h5>Select Your New Zoiko Mobile Plan</h5>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Yes, I want to keep my current mobile number
                                </label>
                            </div>
                            <Row>
                                <Col>
                                    <label for="fname">PAC Code: *</label>
                                    <input type="text" name="paccode" className="form-control" /><small>(Required if keeping your number)</small>
                                </Col>
                                <Col></Col>
                            </Row>
                            <br />
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    No, I would like a new number and to cancel my current. (Please provide your STAC below)
                                </label>
                            </div>
                            <Row>
                                <div className="col">
                                    <label for="fname">STAC Code: *</label>
                                    <input type="text" name="staccode" className="form-control" /><small>(Required if cancelling your current service without porting your numbe)</small>
                                </div>
                                <div className="col"></div>
                            </Row>
                            <br />
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                I agree to the terms and conditions of Zoiko Mobile.
                                </label>
                            </div>
                            <br />
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                I consent to the transfer of my service to Zoiko Mobile and understand that my current services will be terminated once the switch is complete.
                                </label>
                            </div>
                            <br />
                            <input type="submit" value="Submit" name="submit" className="btn btn-outline-danger" />
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    );
};
export default switchsave;