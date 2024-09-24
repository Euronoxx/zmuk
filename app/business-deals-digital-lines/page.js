"use client"
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";
import Link from "next/link";

export default function BusinessDealsDigital () {
    return (
        <>
        <Header />
        <HeadBar text="Zoiko Digital Lines" />
        <Container className="simplandeal py-5">
            <h2 className="green24bold text-center">Select Contract Duration</h2>
            <h3 className="text-center pt-4">12 months</h3>
            <Row>   
                <Col>
                    <div className="card">
                        <div className="card-body">
                            <Row>
                                <Col>
                                    <div className="green18">Zoiko Saver Phone Basic</div>
                                </Col>
                                <Col>
                                    <p style={{textAlign:'right'}}><span className="curprice">£8.50</span><br />per month</p>
                                </Col>
                            </Row>
                            <hr className="separator" />
                            <ul>
                                <li>1000 local and national minutes</li>
                                <li>Voicemail</li>
                                <li>Caller ID</li>
                                <li>Call Waiting</li>
                            </ul>
                            <hr className="separator" />
                            <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="card">
                        <div className="card-body">
                            <Row>
                                <Col>
                                    <div className="green18">Zoiko Saver Phone Plus</div>
                                </Col>
                                <Col>
                                    <p style={{textAlign:'right'}}><span className="curprice">£11.50</span><br />per month</p>
                                </Col>
                            </Row>
                            <hr className="separator" />
                            <ul>
                                <li>3000 local and national minutes</li>
                                <li>Voicemail</li>
                                <li>Caller ID</li>
                                <li>Call Waiting</li>
                                <li>Free calls to Zoiko customer service</li>
                            </ul>
                            <hr className="separator" />
                            <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    );
}