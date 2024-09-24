"use client"
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";
import Link from "next/link";

export default function DayPassRoaming () {
    return (
        <>
        <Header />
        <HeadBar text="Day Pass Roaming Plans" />
        <Container className="simplandeal py-5">
            <Row>
                <Col>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Day Pass Roaming Zones 2 <span className="txtred">&amp;</span> 3</h5>
                            <hr className="separator" />
                            <Row>
                                <Col>
                                    <div className="data">500MB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                </Col>
                                <Col>
                                    <p style={{textAlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£5.99</span><br /><span className="curprice">£4.99</span><br />per month</p>
                                </Col>
                            </Row>
                            <hr className="separator" />
                            <ul>
                                <li>100 Free Texts</li>
                                <li>100 Minutes Calling</li>
                                <li>International Calls<span className="txtred">*</span></li>
                                <li>Out of Bundle Charges 20p per Texts/Minute/MB</li>
                            </ul>
                            <hr className="separator" />
                            <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Day Pass Roaming Zones 4 <span className="txtred">&amp;</span> 5</h5>
                            <hr className="separator" />
                            <Row>
                                <Col>
                                    <div className="data">100MB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                </Col>
                                <Col>
                                    <p style={{textAlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£12.99</span><br /><span className="curprice">£10.99</span><br />per month</p>
                                </Col>
                            </Row>
                            <hr className="separator" />
                            <ul>
                                <li>20 Free Texts</li>
                                <li>20 Minutes Calling</li>
                                <li>International Calls<span className="txtred">*</span></li>
                                <li>Out of Bundle Charges 33p per Texts/Minute/MB</li>
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