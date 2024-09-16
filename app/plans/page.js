"use client"
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carouselsimplan from "../components/carouselsimplans";
import HeadBar from "../components/HeadBar";

const plans = () => {
    return (
        <>
        <Header />
        <HeadBar text={<>All Plans <span className="msicon"><i className="bi bi-music-note-beamed"></i></span> Unlimited Data <span className="msicon"><i className="bi bi-music-note-beamed"></i></span> Unlimited SMS <span className="msicon"><i className="bi bi-music-note-beamed"></i></span> Unlimited Calls <span className="msicon"><i className="bi bi-music-note-beamed"></i></span> Free Interntional Calls</>} />
        <Carouselsimplan />
        <br />
        <HeadBar text='Zoiko SIM Only Business Deals' />
        <Container fluid className="my-4 simplandeal">
            <Row>
                <Col>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Roam &amp; Study MAX</h5>
                            <hr className="separator" />
                            <Row>
                                <Col>
                                    <div className="data">30GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                </Col>
                                <Col>
                                    <p style={{textAlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£11.99</span><br /><span className="curprice">£9.99</span><br />per month</p>
                                </Col>
                            </Row>
                            <hr className="separator" />
                            <ul>
                                <li>Unlimited Calls &amp; Texts</li>
                                <li>Free International Calls</li>
                                <li>Wi-Fi Calling &amp; eSIM</li>
                                <li>EU Roaming: 15GB/1000 min/1000 Texts</li>
                            </ul>
                            <hr className="separator" />
                            <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Business Booster Premium</h5>
                            <hr className="separator" />
                            <Row>
                                <Col>
                                    <div className="data">100GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                </Col>
                                <Col>
                                    <p style={{textAlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£31.00</span><br /><span className="curprice">£22.99</span><br />per month</p>
                                </Col>
                            </Row>
                            <hr className="separator" />
                            <ul>
                                <li>Unlimited Calls &amp; Texts</li>
                                <li>Free International Calls</li>
                                <li>Wi-Fi Calling &amp; eSIM</li>
                                <li>Roaming 30GB/2000 min/2000 Texts</li>
                            </ul>
                            <hr className="separator" />
                            <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Unlimited Data Bundle</h5>
                            <hr className="separator" />
                            <div className="row">
                                <div className="col">
                                    <div className="data">Unlimited</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                </div>
                                <div className="col">
                                    <p style={{textAlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£27.50</span><br /><span className="curprice">£19.99</span><br />per month</p>
                                </div>
                            </div>
                            <hr className="separator" />
                            <ul>
                                <li>Unlimited Calls &amp; Texts</li>
                                <li>Free International Calls</li>
                                <li>Wi-Fi Calling &amp; eSIM</li>
                                <li>EU Roaming: 40GB/Unlimited Calls &amp; Texts</li>
                            </ul>
                            <hr className="separator" />
                            <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        <HeadBar text='Zoiko Mobile Roaming Deals' />
        <Container className="simplandeal my-4">
            <Row>
                <Col>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Day Pass Roaming Zones 2 &amp; 3</h5>
                            <hr className="separator" />
                            <div className="row">
                                <div className="col">
                                    <div className="data">500MB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                </div>
                                <div className="col">
                                    <p style={{textAlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£5.99</span><br /><span className="curprice">£4.99</span><br />per month</p>
                                </div>
                            </div>
                            <hr className="separator" />
                            <ul>
                                <li>100 Free Texts</li>
                                <li>100 Minutes Calling</li>
                                <li>International Calls*</li>
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
                            <h5 className="card-title">Day Pass Roaming Zones 4 &amp; 5</h5>
                            <hr className="separator" />
                            <div className="row">
                                <div className="col">
                                    <div className="data">100MB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                </div>
                                <div className="col">
                                    <p style={{textAlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£12.99</span><br /><span className="curprice">£10.99</span><br />per month</p>
                                </div>
                            </div>
                            <hr className="separator" />
                            <ul>
                                <li>100 Free Texts</li>
                                <li>100 Minutes Calling</li>
                                <li>International Calls*</li>
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
export default plans;