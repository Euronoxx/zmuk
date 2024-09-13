"use client"
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";
import Link from "next/link";
import React from "react";

function ThirtyDay () {
    return (
        <>
        <Header />
        <HeadBar text={<>FlexiFrenzy<span className="txtred">:</span> 30-Day Plans With No Commitments<span className="txtred">!</span></>} />
        <Container>
            <h2 className="bigred text-center py-4">30-Day &apos;No Contract&apos; Plans</h2>
            <Row className="simplandeal mb-5">
                <div className="col-md-4 sol-sm-12 col-xs-12">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title green18">Thrifty Connect</h3>
                            <hr className="separator" />
                            <Row>
                                <Col>
                                    <div className="data">1GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                </Col>
                                <Col>
                                    <p style={{textAlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£3.99</span><br /><span className="curprice">£3.25</span><br />per month</p>
                                </Col>
                            </Row>
                            <hr className="separator" />
                            <ul>
                                <li>150 MMS &amp; Texts</li>
                                <li>International Calls*</li>
                                <li>Wi-Fi Calling &amp; eSIM</li>
                                <li>150 Calling Minutes</li>
                                <li>EU Roaming: 500MB/100 min/100 Texts</li>
                            </ul>
                            <hr className="separator" />
                            <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View Details</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 sol-sm-12 col-xs-12">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title green18">Junior Jetsetter</h3>
                            <hr className="separator" />
                            <Row>
                                <Col>
                                    <div className="data">1GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                </Col>
                                <Col>
                                    <p style={{textAlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£4.65</span><br /><span className="curprice">£4.59</span><br />per month</p>
                                </Col>
                            </Row>
                            <hr className="separator" />
                            <ul>
                                <li>500 MMS &amp; Texts</li>
                                <li>International Calls*</li>
                                <li>Wi-Fi Calling &amp; eSIM</li>
                                <li>500 Calling Minutes</li>
                                <li>EU Roaming: 2GB/300 min/300 Texts</li>
                            </ul>
                            <hr className="separator" />
                            <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View Details</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 sol-sm-12 col-xs-12">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title green18">Silver Surfer</h3>
                            <hr className="separator" />
                            <Row>
                                <Col>
                                    <div className="data">10GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                </Col>
                                <Col>
                                    <p style={{textAlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£8.99</span><br /><span className="curprice">£7.99</span><br />per month</p>
                                </Col>
                            </Row>
                            <hr className="separator" />
                            <ul>
                                <li>150 MMS &amp; Texts</li>
                                <li>International Calls*</li>
                                <li>Wi-Fi Calling &amp; eSIM</li>
                                <li>150 Calling Minutes</li>
                                <li>EU Roaming: 5GB/500 min/500 Texts</li>
                            </ul>
                            <hr className="separator" />
                            <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View Details</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                        </div>
                    </div>
                </div>
            </Row>
            <div className="text-center my-5">
                <Link href='/plans' className="allplans">View All Plans <i className="bi bi-arrow-right"></i></Link>
            </div>
        </Container>
        <HeadBar text='Data-Only SIM Plans' />
        <Carousel className="py-5 px-4 simplandeal">
            <Carousel.Item>
                <Row>
                    <Col>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Stream Seeker</h5>
                                <hr className="separator" />
                                <Row>
                                    <Col>
                                        <div className="data">10GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                    </Col>
                                    <Col>
                                        <p style={{textAlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£7.99</span><br /><span className="curprice">£6.49</span><br />per month</p>
                                    </Col>
                                </Row>
                                <hr className="separator" />
                                <ul>
                                    <li>500MB EU Roaming Data</li>
                                    <li>Calling Minutes<span className="txtred">*</span></li>
                                    <li>Unlimited Texts<span className="txtred">*</span></li>
                                    <li>International Calls<span className="txtred">*</span></li>
                                </ul>
                                <hr className="separator" />
                                <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Connect Compass</h5>
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
                                    <li>500MB EU Roaming Data</li>
                                    <li>Calling Minutes<span className="txtred">*</span></li>
                                    <li>Unlimited Texts<span className="txtred">*</span></li>
                                    <li>International Calls<span className="txtred">*</span></li>
                                </ul>
                                <hr className="separator" />
                                <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Web Wanderer</h5>
                                <hr className="separator" />
                                <div className="row">
                                    <div className="col">
                                        <div className="data">100GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                    </div>
                                    <div className="col">
                                        <p style={{textAlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£24.99</span><br /><span className="curprice">£21.99</span><br />per month</p>
                                    </div>
                                </div>
                                <hr className="separator" />
                                <ul>
                                    <li>500MB EU Roaming Data</li>
                                    <li>Calling Minutes<span className="txtred">*</span></li>
                                    <li>Unlimited Texts<span className="txtred">*</span></li>
                                    <li>International Calls<span className="txtred">*</span></li>
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
                                <h5 className="card-title">Data Dash</h5>
                                <hr className="separator" />
                                <Row>
                                    <Col>
                                        <div className="data">1GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                    </Col>
                                    <Col>
                                        <p style={{textAlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£2.99</span><br /><span className="curprice">£2.79</span><br />per month</p>
                                    </Col>
                                </Row>
                                <hr className="separator" />
                                <ul>
                                    <li>500MB EU Roaming Data</li>
                                    <li>Calling Minutes<span className="txtred">*</span></li>
                                    <li>Unlimited Texts<span className="txtred">*</span></li>
                                    <li>International Calls<span className="txtred">*</span></li>
                                </ul>
                                <hr className="separator" />
                                <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Gig Guru</h5>
                                <hr className="separator" />
                                <Row>
                                    <Col>
                                        <div className="data">3GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                    </Col>
                                    <Col>
                                        <p style={{textAlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£2.99</span><br /><span className="curprice">£2.79</span><br />per month</p>
                                    </Col>
                                </Row>
                                <hr className="separator" />
                                <ul>
                                    <li>500MB EU Roaming Data</li>
                                    <li>Calling Minutes<span className="txtred">*</span></li>
                                    <li>Unlimited Texts<span className="txtred">*</span></li>
                                    <li>International Calls<span className="txtred">*</span></li>
                                </ul>
                                <hr className="separator" />
                                <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Stream Seeker</h5>
                                <hr className="separator" />
                                <div className="row">
                                    <div className="col">
                                        <div className="data">10GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                    </div>
                                    <div className="col">
                                        <p style={{textAlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£7.99</span><br /><span className="curprice">£6.49</span><br />per month</p>
                                    </div>
                                </div>
                                <hr className="separator" />
                                <ul>
                                    <li>500MB EU Roaming Data</li>
                                    <li>Calling Minutes<span className="txtred">*</span></li>
                                    <li>Unlimited Texts<span className="txtred">*</span></li>
                                    <li>International Calls<span className="txtred">*</span></li>
                                </ul>
                                <hr className="separator" />
                                <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Carousel.Item>
        </Carousel>
        <HeadBar text='Zoiko Roaming Deals' />
        <Container className="py-5 simplandeal">
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
export default ThirtyDay;