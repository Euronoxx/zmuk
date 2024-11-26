"use client"
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import HeadBar from "../components/HeadBar";

function StudentDiscount () {
    return (
        <>
        <Header />
        <HeadBar text="Zoiko Mobile Student Discount Programme" />
        <Container fluid className="studentdiscount p-0">
            <Container>
                <Row>
                    <Col>
                        <p>Zoiko Mobile is delighted to introduce a comprehensive student discount programme with student sim only deals uk that not only offers significant Savings on our monthly price plans but also provides a free SIM card to students looking to switch networks within the UK. We recognise the importance of staying connected while managing a tight budget, and we are here to help students make the most of their mobile services, including a hassle-free network switch.</p>
                        <Link href={'/student-discount-application'} className="btn btn-outline-danger btn-sm">Register Now</Link>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </Container>
        <Container className="py-5">
            <h2 className="green24bold text-center mb-5">How to Get Your Discount - Student Sim only Deals UK</h2>
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
                            <h4 className="txtred">Sign Up with Student Email</h4>
                            <p>Register for a Zoiko Mobile account using your student email address.</p>
                        </div>
                    </Row>
                </div>
                <div className="col-md-4 col-sm-12 col-12">
                    <Row>
                        <div className="col-md-2 col-sm-2 col-2 numvlarge">3</div>
                        <div className="col-md-10 col-sm-10 col-10">
                            <h4 className="txtred">Verify Student Status</h4>
                            <p>Fill out the form and submit your student ID or proof of enrollment to confirm your eligibility for the discount.</p>
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
                            <h4 className="txtred">Receive Promotional Code</h4>                        
                            <p>After successful registration and verification, we will share a promotional code with you via email or through the registered account.</p>
                        </div>
                    </Row>
                </div>
                <div className="col-sm-4 col-12">
                    <Row>
                        <div className="col-md-2 col-sm-2 col-2 numvlarge">5</div>
                        <div className="col-md-10 col-sm-10 col-10">
                            <h4 className="txtred">Get Your Discount</h4>                        
                            <p>Apply the promotional code during the checkout process to receive a 20% discount on your chosen plan.</p>
                        </div>
                    </Row>
                </div>
            </Row>
            <br />
            <Row>
                <div className="col-md-9 col-sm-12">
                    <h3 className="green18">Don&apos;t Miss Out</h3>
                    <p>Zoiko Mobile is dedicated to helping students stay connected, save money, and make network switching in the UK a seamless process. Join us today to experience affordable, high-quality mobile services while focusing on your studies and social life. Stay connected, stay smart, and stay within your budget with Zoiko Mobile.</p>
                </div>
                <div className="col-md-3 col-sm-12 text-center">
                    <Link href={"/plan"} className="btn btn-outline-danger btn-sm mt-4">Browse Plans Now</Link>
                </div>
            </Row>
            <br />
            <Row>
                <div className="col-md-3">
                    <h3 className="txtred">Free SIM Card and Network Switching</h3>
                </div>
                <div className="col-md-9">
                    <p>As part of our student discount programme, you will also receive a free SIM card when you join Zoiko Mobile or switch from another network. Switching networks within the UK is a straightforward process, and you can keep your existing number. By making this switch or joining as a new user, you gain access to our discounted student plans, ensuring flexibility and savings.</p>
                </div>
            </Row>
            <h4 className="mt-5">Terms &amp; Conditions</h4>
            <ul>
                <li>The student discount and free SIM card offer are available exclusively to registered students at recognized UK educational institutions.</li>
                <li>A valid proof of enrolment or student ID is required for eligibility.</li>
                <li>The discount is applicable to the specified monthly plans and contract durations as mentioned earlier.</li>
                <li>The free SIM card is available to students switching networks to Zoiko Mobile, as well as to new customers.</li>
                <li>Renew your student discount with updated proof of enrolment upon contract expiration.</li>
            </ul>
            <p className="text-center my-4 body22">This offer can be used in conjunction with other promotional offers from Zoiko Mobile.</p>
            <div className="text-center">
                <Link href={'/login'} className="btn btn-outline-danger px-5">Join Now</Link><Link href={'/zoiko-mobile-switch-save-form'} className="btn btn-outline-danger px-5 mx-5">Switch &amp; Save</Link>
            </div>
        </Container>
        <Footer />
        </>
    );
}
export default StudentDiscount;