import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const phoneslider = () => {
    return (
        <>
        <Container fluid className="py-4 px-4 phoneslider">
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Row className="gx-5">
                            <Col>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">iPhone 12 Pro Max</h5>
                                        <div className="imgbox"><Image src="/img/iphone-12-pro-max-graphite.jpg" alt="iPhone 12 Pro Max" width={300} height={400} /></div>
                                        <div className="row px-4">
                                            <div className="col">
                                                Starting from:<br /><span className="price">£563</span><br />Device Condition:<br />A1-Flawless || <br />A2-Excellent
                                            </div>
                                            <div className="col">
                                                Available Colors:<br />
                                                <ul className="color-options">
                                                    <li style={{backgroundColor:'red'}} className="red color-contain"></li>
                                                    <li style={{backgroundColor:'blue'}} className="blue color-contain"></li>
                                                    <li style={{backgroundColor:'green'}} className="green color-contain"></li>
                                                </ul>
                                                <br />Internal Storage:<br />265GB
                                            </div>
                                        </div>
                                        <p className="card-text text-center">Premium Quality</p>
                                        <div className="imgbox">
                                            <Link href="#" className="btn btn-outline-danger" style={{marginRight:'20px'}}>View Detail</Link>
                                            <Link href="#" className="btn btn-success">Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">iPhone 13 Mini</h5>
                                        <div className="imgbox"><Image src="/img/iphone-13-mini-pink.jpg" alt="iPhone 13 Mini" width={300} height={400} /></div>
                                        <div className="row px-4">
                                            <div className="col">
                                                Starting from:<br /><span className="price">£393</span><br />Device Condition:<br />A1-Flawless || <br />A2-Excellent
                                            </div>
                                            <div className="col">
                                                Available Colors:<br />
                                                <ul className="color-options">
                                                    <li style={{backgroundColor:'red'}} className="red color-contain"></li>
                                                    <li style={{backgroundColor:'blue'}} className="blue color-contain"></li>
                                                    <li style={{backgroundColor:'green'}} className="green color-contain"></li>
                                                </ul>
                                                <br />Internal Storage:<br />265GB
                                            </div>
                                        </div>
                                        <p className="card-text text-center">Premium Quality</p>
                                        <div className="imgbox">
                                            <Link href="#" className="btn btn-outline-danger" style={{marginRight:'20px'}}>View Detail</Link>
                                            <Link href="#" className="btn btn-success">Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Galaxy S22</h5>
                                        <div className="imgbox"><Image src="/img/galaxy-s22.jpg" alt="Glaxy S22" width={300} height={400} /></div>
                                        <div className="row px-4">
                                            <div className="col">
                                                Starting from:<br /><span className="price">£347</span><br />Device Condition:<br />A1-Flawless || <br />A2-Excellent
                                            </div>
                                            <div className="col">
                                                Available Colors:<br />
                                                <ul className="color-options">
                                                    <li style={{backgroundColor:'red'}} className="red color-contain"></li>
                                                    <li style={{backgroundColor:'blue'}} className="blue color-contain"></li>
                                                    <li style={{backgroundColor:'green'}} className="green color-contain"></li>
                                                </ul>
                                                <br />Internal Storage:<br />265GB
                                            </div>
                                        </div>
                                        <p className="card-text text-center">Premium Quality</p>
                                        <div className="imgbox">
                                            <Link href="#" className="btn btn-outline-danger" style={{marginRight:'20px'}}>View Detail</Link>
                                            <Link href="#" className="btn btn-success">Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">iPhone 14 Pro Max</h5>
                                        <div className="imgbox"><Image src="/img/iphone-14-pro-max-black.jpg" alt="iPhone 14 Pro Max" width={300} height={400} /></div>
                                        <div className="row px-4">
                                            <div className="col">
                                                Starting from:<br /><span className="price">£563</span><br />Device Condition:<br />A1-Flawless || <br />A2-Excellent
                                            </div>
                                            <div className="col">
                                                Available Colors:<br />
                                                <ul className="color-options">
                                                    <li style={{backgroundColor:'red'}} className="red color-contain"></li>
                                                    <li style={{backgroundColor:'blue'}} className="blue color-contain"></li>
                                                    <li style={{backgroundColor:'green'}} className="green color-contain"></li>
                                                </ul>
                                                <br />Internal Storage:<br />265GB
                                            </div>
                                        </div>
                                        <p className="card-text text-center">Premium Quality</p>
                                        <div className="imgbox">
                                            <Link href="#" className="btn btn-outline-danger" style={{marginRight:'20px'}}>View Detail</Link>
                                            <Link href="#" className="btn btn-success">Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="carousel-item">
                        <Row className="gx-5">
                            <Col>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">iPhone 13 Mini</h5>
                                        <div className="imgbox"><Image src="/img/iphone-13-mini-pink.jpg" alt="iPhone 13 Mini" width={300} height={400} /></div>
                                        <div className="row px-4">
                                            <div className="col">
                                                Starting from:<br /><span className="price">£393</span><br />Device Condition:<br />A1-Flawless || <br />A2-Excellent
                                            </div>
                                            <div className="col">
                                                Available Colors:<br />
                                                <ul className="color-options">
                                                    <li style={{backgroundColor:'red'}} className="red color-contain"></li>
                                                    <li style={{backgroundColor:'blue'}} className="blue color-contain"></li>
                                                    <li style={{backgroundColor:'green'}} className="green color-contain"></li>
                                                </ul>
                                                <br />Internal Storage:<br />265GB
                                            </div>
                                        </div>
                                        <p className="card-text text-center">Premium Quality</p>
                                        <div className="imgbox">
                                            <Link href="#" className="btn btn-outline-danger" style={{marginRight:'20px'}}>View Detail</Link>
                                            <Link href="#" className="btn btn-success">Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Galaxy S22</h5>
                                        <div className="imgbox"><Image src="/img/galaxy-s22.jpg" alt="Glaxy S22" width={300} height={400} /></div>
                                        <div className="row px-4">
                                            <div className="col">
                                                Starting from:<br /><span className="price">£347</span><br />Device Condition:<br />A1-Flawless || <br />A2-Excellent
                                            </div>
                                            <div className="col">
                                                Available Colors:<br />
                                                <ul className="color-options">
                                                    <li style={{backgroundColor:'red'}} className="red color-contain"></li>
                                                    <li style={{backgroundColor:'blue'}} className="blue color-contain"></li>
                                                    <li style={{backgroundColor:'green'}} className="green color-contain"></li>
                                                </ul>
                                                <br />Internal Storage:<br />265GB
                                            </div>
                                        </div>
                                        <p className="card-text text-center">Premium Quality</p>
                                        <div className="imgbox">
                                            <Link href="#" className="btn btn-outline-danger" style={{marginRight:'20px'}}>View Detail</Link>
                                            <Link href="#" className="btn btn-success">Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">iPhone 12 Pro Max</h5>
                                        <div className="imgbox"><Image src="/img/iphone-12-pro-max-graphite.jpg" alt="iPhone 12 Pro Max" width={300} height={400} /></div>
                                        <div className="row px-4">
                                            <div className="col">
                                                Starting from:<br /><span className="price">£563</span><br />Device Condition:<br />A1-Flawless || <br />A2-Excellent
                                            </div>
                                            <div className="col">
                                                Available Colors:<br />
                                                <ul className="color-options">
                                                    <li style={{backgroundColor:'red'}} className="red color-contain"></li>
                                                    <li style={{backgroundColor:'blue'}} className="blue color-contain"></li>
                                                    <li style={{backgroundColor:'green'}} className="green color-contain"></li>
                                                </ul>
                                                <br />Internal Storage:<br />265GB
                                            </div>
                                        </div>
                                        <p className="card-text text-center">Premium Quality</p>
                                        <div className="imgbox">
                                            <Link href="#" className="btn btn-outline-danger" style={{marginRight:'20px'}}>View Detail</Link>
                                            <Link href="#" className="btn btn-success">Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">iPhone 14 Pro Max</h5>
                                        <div className="imgbox"><Image src="/img/iphone-14-pro-max-black.jpg" alt="iPhone 14 Pro Max" width={300} height={400} /></div>
                                        <div className="row px-4">
                                            <div className="col">
                                                Starting from:<br /><span className="price">£563</span><br />Device Condition:<br />A1-Flawless || <br />A2-Excellent
                                            </div>
                                            <div className="col">
                                                Available Colors:<br />
                                                <ul className="color-options">
                                                    <li style={{backgroundColor:'red'}} className="red color-contain"></li>
                                                    <li style={{backgroundColor:'blue'}} className="blue color-contain"></li>
                                                    <li style={{backgroundColor:'green'}} className="green color-contain"></li>
                                                </ul>
                                                <br />Internal Storage:<br />265GB
                                            </div>
                                        </div>
                                        <p className="card-text text-center">Premium Quality</p>
                                        <div className="imgbox">
                                            <Link href="#" className="btn btn-outline-danger" style={{marginRight:'20px'}}>View Detail</Link>
                                            <Link href="#" className="btn btn-success">Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </Container>
        <Container fluid className="switchnsave">
            <div className="snslink">
                <a href="#">Find out more</a>
                <a href='/zoiko-mobile-switch-save-form'>Switch &amp; Save</a>
            </div>
        </Container>
        </>
    );
};
export default phoneslider;