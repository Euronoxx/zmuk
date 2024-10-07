"use client"
import React from "react";
import { Container, Row, Col, Carousel, CarouselItem } from "react-bootstrap";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carouselsimplan from "../components/carouselsimplans";
import HeadBar from "../components/HeadBar";
import Image from "next/image";

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
        <Container className="p-4">
            <Carousel controls={false}>
                <CarouselItem>
                    <Row>
                        <Col md={4} sm={12} xs={12}>
                            <Image src={"/img/star-rating.png"} width={300} height={60} alt="Rating" />
                        </Col>
                        <Col md={8} sm={12} xs={12}>
                            <p className="txtgreen green18">Zoiko Mobile has exceeded my expectations. <b>Not only do they offer great value-for-money deals, but their service is top-notch.</b> Setting up and changing tariffs has never been easier &mdash; a few simple steps and you&apos;re good to go. What truly sets Zoiko Mobile apart is the inclusion of unlimited text, picture messages, and calls in all their plans. Plus, as the UK&apos;s best-rated mobile network, they ensure reliable coverage wherever I go.</p>
                            <p className="txtgreen green18">Kärt J.</p>
                        </Col>
                    </Row>
                </CarouselItem>
                <CarouselItem>
                    <Row>
                        <Col md={4} sm={12} xs={12}>
                            <Image src={"/img/star-rating.png"} width={300} height={60} alt="Rating" />
                        </Col>
                        <Col md={8} sm={12} xs={12}>
                            <p className="txtgreen green18">I cannot speak highly enough about Zoiko Mobile. <b>Using their services, I have been able to effortlessly stay connected with my loved ones across Europe. What truly impressed me was the affordable plans they offer, which perfectly fit within everyone&apos;s budget. </b>With Zoiko Mobile, I never have to worry about outrageous bills or hidden charges.</p>
                            <p className="txtgreen green18">Georgina H.</p>
                        </Col>
                    </Row>
                </CarouselItem>
            </Carousel>
        </Container>
        <Footer />
        </>
    );
}
export default plans;