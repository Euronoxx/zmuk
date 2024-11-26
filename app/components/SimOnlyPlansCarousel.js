"use client"
import Link from "next/link";
import React from "react";
import { Card, Row, Col, CardBody } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimOnlyPlansCarousel () {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dote: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dote: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dote: false
                }
            }
        ]
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <Card>
                    <CardBody>
                        <h5 className="card-title">Business Booster Lite</h5>
                        <hr className="separator" />
                        <Row>
                            <Col>
                                <div className="data">30GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                            </Col>
                            <Col>
                                <p style={{textAlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£11.99</span><br /><span className="curprice">£10.49</span><br />per month</p>
                            </Col>
                        </Row>
                        <hr className="separator" />
                        <ul>
                            <li>Unlimited Calls, Texts &amp; MMS</li>
                            <li>Wi-Fi Calling &amp; eSIM</li>
                            <li>Wi-Fi Calling & eSIM</li>
                            <li>EU Roaming: 15GB/1000 min/1000 Texts</li>
                        </ul>
                        <hr className="separator" />
                        <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
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
                            <li>Unlimited Calls, Texts &amp; MMS</li>
                            <li>Wi-Fi Calling &amp; eSIM</li>
                            <li>Wi-Fi Calling & eSIM</li>
                            <li>Roaming 30GB/2000 min/2000 Texts</li>
                        </ul>
                        <hr className="separator" />
                        <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <h5 className="card-title">Business Booster Pro</h5>
                        <hr className="separator" />
                        <div className="row">
                            <div className="col">
                                <div className="data">Unlimited</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                            </div>
                            <div className="col">
                                <p style={{textAlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£33.50</span><br /><span className="curprice">£24.99</span><br />per month</p>
                            </div>
                        </div>
                        <hr className="separator" />
                        <ul>
                            <li>Unlimited Calls, Texts &amp; MMS</li>
                            <li>Wi-Fi Calling &amp; eSIM</li>
                            <li>Wi-Fi Calling & eSIM</li>
                            <li>EU Roaming: 40GB/Unlimited Minutes/Unlimited Texts</li>
                        </ul>
                        <hr className="separator" />
                        <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <h5 className="card-title">Business Booster Pro</h5>
                        <hr className="separator" />
                        <div className="row">
                            <div className="col">
                                <div className="data">Unlimited</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                            </div>
                            <div className="col">
                                <p style={{textAlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£33.50</span><br /><span className="curprice">£24.99</span><br />per month</p>
                            </div>
                        </div>
                        <hr className="separator" />
                        <ul>
                            <li>Unlimited Calls, Texts &amp; MMS</li>
                            <li>Wi-Fi Calling &amp; eSIM</li>
                            <li>Wi-Fi Calling & eSIM</li>
                            <li>EU Roaming: 40GB/Unlimited Minutes/Unlimited Texts</li>
                        </ul>
                        <hr className="separator" />
                        <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <h5 className="card-title">Business Booster Pro</h5>
                        <hr className="separator" />
                        <div className="row">
                            <div className="col">
                                <div className="data">Unlimited</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                            </div>
                            <div className="col">
                                <p style={{textAlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£33.50</span><br /><span className="curprice">£24.99</span><br />per month</p>
                            </div>
                        </div>
                        <hr className="separator" />
                        <ul>
                            <li>Unlimited Calls, Texts &amp; MMS</li>
                            <li>Wi-Fi Calling &amp; eSIM</li>
                            <li>Wi-Fi Calling & eSIM</li>
                            <li>EU Roaming: 40GB/Unlimited Minutes/Unlimited Texts</li>
                        </ul>
                        <hr className="separator" />
                        <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                    </CardBody>
                </Card>
            </Slider>
        </div>
    );
}