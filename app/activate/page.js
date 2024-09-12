"use client"
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";

const activate = () => {
    return (
        <>
        <Header />
        <HeadBar text='Activate your SIM' />
        <Container>
            <h4 className="my-4 green18 text-center">Get started with our services! Initiate the activation process for your new SIM card here</h4>
            <form action="" method="post" className="my-5">
                <Row>
                    <Col>
                        <label for="fname">Username</label>
                        <input type="text" name="username" className="form-control" placeholder="Username" aria-label="Username" required />
                    </Col>
                    <Col>
                        <label for="lname">Email</label>
                        <input type="text" name="email" className="form-control" placeholder="Email" aria-label="Email" required />
                    </Col>
                </Row>
                <br />
                <label for="data">OTP Code</label>
                <input type="text" name="otpcode" className="form-control" placeholder="OTP Code" aria-label="OTP Code" />
                <br />
                <Row>
                    <Col>
                        <label for="email">SIM Serial Number</label>
                        <input type="email" name="serialno" className="form-control" placeholder="SIM Serial Number" aria-label="SIM Serial Number" required />
                    </Col>
                    <Col>
                        <label for="mobile">Title</label>
                        <select className="form-select" name="title">
                            <option value={'Mr'}>Mr</option>
                            <option value={'Mrs'}>Mrs</option>
                            <option value={'Miss'}>Miss</option>
                            <option value={'Ms'}>Ms</option>
                            <option value={'Dr'}>Dr</option>
                            <option value={'Prof'}>Prof</option>
                        </select>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <label for="provider">Last Name</label>
                        <input type="text" name="lname" className="form-control" placeholder="Last Name" aria-label="Last Name" />
                    </Col>
                    <Col>
                        <label for="cost">First Name</label>
                        <input type="text" name="fname" className="form-control" placeholder="First Name" aria-label="First Name" />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <label for="email">Date of Birth</label>
                        <input type="date" name="dob" className="form-control" placeholder="Date of Birth" aria-label="Date of Birth" required />
                    </Col>
                    <Col>
                        <label for="mobile">Your Zoiko Package</label>
                        <select className="form-select" name="package">
                            <option value="77984">Zoiko Saver Basic</option>
                            <option value="38890">Business Booster Pro</option>
                            <option value="38872">Business Booster Premium</option>
                            <option value="37111">Silver Surfer</option>
                            <option value="37103">Roam &amp; Study Max</option>
                            <option value="34339">Unlimited Data Bundle</option>
                            <option value="34305">Zoiko Elite</option>
                            <option value="31089">Business Booster Lite</option>
                            <option value="31009">Junior Jetsetter</option>
                            <option value="30772">International plan</option>
                            <option value="16634">Day Pass Roaming Plan: Zones 4 &amp; 5</option>
                            <option value="16628">Daily Roaming Pass: Zones 2 &amp; 3</option>
                            <option value="16356">Thrifty Connect</option>
                            <option value="16003">Web Wanderer</option>
                            <option value="16000">Stream Seeker</option>
                            <option value="15997">Connect Compass</option>
                            <option value="15994">Gig Guru</option>
                            <option value="15991">Data Dash</option>
                        </select>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <label for="fname">Country</label>
                        <input type="text" name="country" className="form-control" placeholder="Country" aria-label="Country" required />
                    </Col>
                    <Col>
                        <label for="lname">Postalcode/ZIP code</label>
                        <input type="text" name="zipcode" className="form-control" placeholder="Postalcode/ZIP code" aria-label="Postalcode/ZIP code" required />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <label for="fname">City</label>
                        <input type="text" name="city" className="form-control" placeholder="City" aria-label="City" required />
                    </Col>
                    <Col>
                        <label for="lname">Address</label>
                        <input type="text" name="addr" className="form-control" placeholder="Address" aria-label="Address" required />
                    </Col>
                </Row>
                <br />
                <input type="submit" value="Submit" name="submit" className="btn btn-outline-danger btn-lg" />
            </form>
        </Container>
        <Footer />
        </>
    );
};

export default activate;