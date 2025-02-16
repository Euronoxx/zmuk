"use client"
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

export default function CarouselSimPlan () {

    const directionButtons = (direction) => {
        return (
            <span aria-hidden="true" className={direction === "Next" ? "button-next" : "button-prev"}>
              {direction}
            </span>
        );
    };
    return (
        <>
        <Container className="py-4">
            <h2 className="text-center py-4 green24bold">Choose Your SIM Only Plan <span className="txtred">&amp;</span> Duration Below</h2>
            <ul className="nav nav-tabs nav-justified" role="tablist" style={{border:'1px solid black',borderRadius:'8px'}}>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link active" id="justified-tab-0" data-bs-toggle="tab" href="#home" role="tab" aria-controls="justified-tabpanel-0" aria-selected="true"> 24 Month Plan </Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link" id="justified-tab-1" data-bs-toggle="tab" href="#menu1" role="tab" aria-controls="justified-tabpanel-1" aria-selected="false"> 12 Month Plan </Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link" id="justified-tab-2" data-bs-toggle="tab" href="#menu2" role="tab" aria-controls="justified-tabpanel-2" aria-selected="false"> 30 Day Plan </Link>
                </li>
            </ul>
        </Container>
        <Container fluid className="px-4">
            <div className="tab-content simplandeal">
                <div id="home" className="tab-pane active" aria-current="page">
                    <Carousel nextIcon={directionButtons(<i class="bi bi-arrow-right-circle carousel-next-icon"></i>)} prevIcon={directionButtons(<i class="bi bi-arrow-left-circle carousel-prev-btn"></i>)}>
                        <Carousel.Item>
                            <Row>
                                <Col md={4} sm={12} xs={12}>
                                    <div className="card">
                                        <div className="card-header">
                                            Value Pack 
                                        </div>
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
                                <Col md={4} sm={12} xs={12}>
                                    <div className="card">
                                        <div className="card-header">
                                            Best Seller
                                        </div>
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
                                <Col md={4} sm={12} xs={12}>
                                    <div className="card">
                                        <div className="card-header">
                                            Exclusive Offer
                                        </div>
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
                                <Col md={4} sm={12} xs={12}>
                                    <div className="card">
                                        <div className="card-header">
                                            Value Pack
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Silver Surfer</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">10GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textAlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£8.35</span><br /><span className="curprice">£6.49</span><br />per month</p>
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
                                <Col md={4} sm={12} xs={12}>
                                    <div className="card">
                                        <div className="card-header">
                                            Best Seller
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Zoiko Elite</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">100GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textAlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£25.50</span><br /><span className="curprice">£15.99</span><br />per month</p>
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
                                <Col md={4} sm={12} xs={12}>
                                    <div className="card">
                                        <div className="card-header">
                                            Exclusive Offer
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Public Sector Workers&apos; Deal</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">30GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£11.99</span><br /><span className="curprice">£9.99</span><br />per month</p>
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
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div id="menu1" className="tab-pane fade">
                    <Carousel>
                        <Carousel.Item>
                            <Row>
                                <Col md={4} sm={12} xs={12}>
                                    <div className="card">
                                        <div className="card-header">
                                            Value Pack
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Roam &amp; Study MAX</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">30GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£11.99</span><br /><span className="curprice">£9.99</span><br />per month</p>
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
                                <Col md={4} sm={12} xs={12}>
                                    <div className="card">
                                        <div className="card-header">
                                            Best Seller
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Business Booster Premium</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">100GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£31.00</span><br /><span className="curprice">£22.99</span><br />per month</p>
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
                                <Col md={4} sm={12} xs={12}>
                                    <div className="card">
                                        <div className="card-header">
                                            Exclusive Offer
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Unlimited Data Bundle</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">Unlimited</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£27.50</span><br /><span className="curprice">£19.99</span><br />per month</p>
                                                </Col>
                                            </Row>
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
                                <Col md={4} sm={12} xs={12}>
                                    <div className="card">
                                        <div className="card-header">
                                            Value Pack
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Silver Surfer</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">10GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£8.35</span><br /><span className="curprice">£6.49</span><br />per month</p>
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
                                <Col md={4} sm={12} xs={12}>
                                    <div className="card">
                                        <div className="card-header">
                                            Best Seller
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Zoiko Elite</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">100GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£25.50</span><br /><span className="curprice">£15.99</span><br />per month</p>
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
                                <Col md={4} sm={12} xs={12}>
                                    <div className="card">
                                        <div className="card-header">
                                            Exclusive Offer
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Public Sector Workers&apos; Deal</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">30GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£11.99</span><br /><span className="curprice">£9.99</span><br />per month</p>
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
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div id="menu2" className="tab-pane fade">
                    <Carousel>
                        <Carousel.Item>
                            <Row>
                                <Col md={4} sm={12} xs={12}>
                                    <div className="card">
                                        <div className="card-header">
                                            Value Pack
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Roam &amp; Study MAX</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">30GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£11.99</span><br /><span className="curprice">£9.99</span><br />per month</p>
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
                                <Col md={4} sm={12} xs={12}>
                                    <div className="card">
                                        <div className="card-header">
                                            Best Seller
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Business Booster Premium</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">100GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£31.00</span><br /><span className="curprice">£22.99</span><br />per month</p>
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
                                <Col md={4} sm={12} xs={12}>
                                    <div className="card">
                                        <div className="card-header">
                                            Exclusive Offer
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Unlimited Data Bundle</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">Unlimited</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£27.50</span><br /><span className="curprice">£19.99</span><br />per month</p>
                                                </Col>
                                            </Row>
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
                                <Col md={4} sm={12} xs={12}>
                                    <div className="card">
                                        <div className="card-header">
                                            Value Pack
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Silver Surfer</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">10GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£8.35</span><br /><span className="curprice">£6.49</span><br />per month</p>
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
                                <Col md={4} sm={12} xs={12}>
                                    <div className="card">
                                        <div className="card-header">
                                            Best Seller
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Zoiko Elite</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">100GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£25.50</span><br /><span className="curprice">£15.99</span><br />per month</p>
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
                                <Col md={4} sm={12} xs={12}>
                                    <div className="card">
                                        <div className="card-header">
                                            Exclusive Offer
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Public Sector Workers&apos; Deal</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">30GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£11.99</span><br /><span className="curprice">£9.99</span><br />per month</p>
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
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </Container>
        </>
    );
}