"use client"
import React from 'react';
import { Container, Carousel, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";
import Link from 'next/link';

export default function SimBusinessDeal () {
    return (
        <>
        <Header />
        <HeadBar text='Data Only SIMs' />
        <Container className="py-4">
            <h2 className="text-center py-4 green24bold">Select Contract Duration</h2>
            <ul className="nav nav-tabs nav-justified" role="tablist">
                <li className="nav-item" role="presentation">
                    <Link className="nav-link active" id="justified-tab-0" data-bs-toggle="tab" href="#home" role="tab" aria-controls="justified-tabpanel-0" aria-selected="true"> 24 Month Plan </Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link" id="justified-tab-1" data-bs-toggle="tab" href="#menu1" role="tab" aria-controls="justified-tabpanel-1" aria-selected="false"> 12 Month Plan </Link>
                </li>
            </ul>
        </Container>
        <Container fluid className="px-4 pb-5">
            <div className="tab-content simplandeal">
                <div id="home" className="tab-pane active" aria-current="page">
                    <Carousel>
                        <Carousel.Item>
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
                        </Carousel.Item>
                        <Carousel.Item>
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
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div id="menu1" className="tab-pane active" aria-current="page">
                    <Carousel>
                        <Carousel.Item>
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
                        </Carousel.Item>
                        <Carousel.Item>
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
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </Container>
        <Footer />
        </>
    );
}