"use client"
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";
import Link from "next/link";

export default function BroadbandDeals () {
    return (
        <>
        <Header />
        <HeadBar text="Superfast Broadband Deals" />
        <Container>
            <h2 className="green24bold text-center py-5">Select Contract Duration</h2>
            <ul className="nav nav-tabs" role="tablist" style={{justifyContent:'center'}}>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link active" id="justified-tab-0" data-bs-toggle="tab" href="#24month" role="tab" aria-controls="justified-tabpanel-0" aria-selected="true"> 24 Months </Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link" id="justified-tab-2" data-bs-toggle="tab" href="#18month" role="tab" aria-controls="justified-tabpanel-2" aria-selected="false"> 18 Months </Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link" id="justified-tab-3" data-bs-toggle="tab" href="#12month" role="tab" aria-controls="justified-tabpanel-3" aria-selected="false"> 12 Months </Link>
                </li>
            </ul>
        </Container>
        <Container fluid className="mb-4 px-4 py-3">
            <div className="tab-content simplandeal">
                <div id="24month" className="tab-pane active" aria-current="page">
                    <Carousel>
                        <Carousel.Item>
                            <Row>
                                <Col>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Zippy Fiber</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">0.5mb/s</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Download speed</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textAlign:'right'}} className="mt-4"><span className="curprice">£22.00</span><br />per month</p>
                                                </Col>
                                            </Row>
                                            <hr className="separator" />
                                            <ul>
                                                <li>0.5 mb/s upload speed</li>
                                                <li>£25 installation cost</li>
                                            </ul>
                                            <hr className="separator" />
                                            <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Turbo Fiber</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">40mb/s</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Download speed</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textAlign:'right'}} className="mt-4"><span className="curprice">£35.00</span><br />per month</p>
                                                </Col>
                                            </Row>
                                            <hr className="separator" />
                                            <ul>
                                                <li>10 mb/s upload speed</li>
                                                <li>£25 installation cost</li>
                                            </ul>
                                            <hr className="separator" />
                                            <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Hyper Fiber</h5>
                                            <hr className="separator" />
                                            <div className="row">
                                                <div className="col">
                                                    <div className="data">80mb/s</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Download speed</p>
                                                </div>
                                                <div className="col">
                                                    <p style={{textAlign:'right'}} className="mt-4"><span className="curprice">£39.00</span><br />per month</p>
                                                </div>
                                            </div>
                                            <hr className="separator" />
                                            <ul>
                                                <li>20 mb/s upload speed</li>
                                                <li>£25 installation cost</li>
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
                                            <h5 className="card-title">Quantum Fiber</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">115mb/s</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Download speed</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textAlign:'right'}} className="mt-4"><span className="curprice">£42.99</span><br />per month</p>
                                                </Col>
                                            </Row>
                                            <hr className="separator" />
                                            <ul>
                                                <li>20 mb/s upload speed</li>
                                                <li>£75 installation cost</li>
                                            </ul>
                                            <hr className="separator" />
                                            <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Ultra Fiber</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">160mb/s</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Download speed</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textAlign:'right'}} className="mt-4"><span className="curprice">£44.99</span><br />per month</p>
                                                </Col>
                                            </Row>
                                            <hr className="separator" />
                                            <ul>
                                                <li>30 mb/s upload speed</li>
                                                <li>£75 installation cost</li>
                                            </ul>
                                            <hr className="separator" />
                                            <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Rocket Fiber</h5>
                                            <hr className="separator" />
                                            <div className="row">
                                                <div className="col">
                                                    <div className="data">220mb/s</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Download speed</p>
                                                </div>
                                                <div className="col">
                                                    <p style={{textAlign:'right'}} className="mt-4"><span className="curprice">£47.99</span><br />per month</p>
                                                </div>
                                            </div>
                                            <hr className="separator" />
                                            <ul>
                                                <li>30 mb/s upload speed</li>
                                                <li>£75 installation cost</li>
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
                                            <h5 className="card-title">Xplosion Fiber</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">330mb/s</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Download speed</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textAlign:'right'}} className="mt-4"><span className="curprice">£53.99</span><br />per month</p>
                                                </Col>
                                            </Row>
                                            <hr className="separator" />
                                            <ul>
                                                <li>50 mb/s upload speed</li>
                                                <li>£75 installation cost</li>
                                            </ul>
                                            <hr className="separator" />
                                            <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Elite Fiber</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">550mb/s</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Download speed</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textAlign:'right'}} className="mt-4"><span className="curprice">£58.99</span><br />per month</p>
                                                </Col>
                                            </Row>
                                            <hr className="separator" />
                                            <ul>
                                                <li>75 mb/s upload speed</li>
                                                <li>£75 installation cost</li>
                                            </ul>
                                            <hr className="separator" />
                                            <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Supersonic Fiber</h5>
                                            <hr className="separator" />
                                            <div className="row">
                                                <div className="col">
                                                    <div className="data">1000mb/s</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Download speed</p>
                                                </div>
                                                <div className="col">
                                                    <p style={{textAlign:'right'}} className="mt-4"><span className="curprice">£63.99</span><br />per month</p>
                                                </div>
                                            </div>
                                            <hr className="separator" />
                                            <ul>
                                                <li>115 mb/s upload speed</li>
                                                <li>£75 installation cost</li>
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
                <div id="18month" className="tab-pane">
                    <Carousel>
                        <Carousel.Item>
                            <Row>
                                <Col>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Zippy Fiber</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">0.5mb/s</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Download speed</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textAlign:'right'}} className="mt-4"><span className="curprice">£22.00</span><br />per month</p>
                                                </Col>
                                            </Row>
                                            <hr className="separator" />
                                            <ul>
                                                <li>0.5 mb/s upload speed</li>
                                                <li>£25 installation cost</li>
                                            </ul>
                                            <hr className="separator" />
                                            <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Turbo Fiber</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">40mb/s</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Download speed</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textAlign:'right'}} className="mt-4"><span className="curprice">£35.00</span><br />per month</p>
                                                </Col>
                                            </Row>
                                            <hr className="separator" />
                                            <ul>
                                                <li>10 mb/s upload speed</li>
                                                <li>£25 installation cost</li>
                                            </ul>
                                            <hr className="separator" />
                                            <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Hyper Fiber</h5>
                                            <hr className="separator" />
                                            <div className="row">
                                                <div className="col">
                                                    <div className="data">80 mb/s</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Download speed</p>
                                                </div>
                                                <div className="col">
                                                    <p style={{textAlign:'right'}} className="mt-4"><span className="curprice">£39.00</span><br />per month</p>
                                                </div>
                                            </div>
                                            <hr className="separator" />
                                            <ul>
                                                <li>20 mb/s upload speed</li>
                                                <li>£25 installation cost</li>
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
                                            <h5 className="card-title">Zippy Fiber</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">0.5mb/s</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Download speed</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textAlign:'right'}} className="mt-4"><span className="curprice">£22.00</span><br />per month</p>
                                                </Col>
                                            </Row>
                                            <hr className="separator" />
                                            <ul>
                                                <li>0.5 mb/s upload speed</li>
                                                <li>£25 installation cost</li>
                                            </ul>
                                            <hr className="separator" />
                                            <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Turbo Fiber</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">40mb/s</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Download speed</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textAlign:'right'}} className="mt-4"><span className="curprice">£35.00</span><br />per month</p>
                                                </Col>
                                            </Row>
                                            <hr className="separator" />
                                            <ul>
                                                <li>10 mb/s upload speed</li>
                                                <li>£25 installation cost</li>
                                            </ul>
                                            <hr className="separator" />
                                            <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Hyper Fiber</h5>
                                            <hr className="separator" />
                                            <div className="row">
                                                <div className="col">
                                                    <div className="data">80 mb/s</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Download speed</p>
                                                </div>
                                                <div className="col">
                                                    <p style={{textAlign:'right'}} className="mt-4"><span className="curprice">£39.00</span><br />per month</p>
                                                </div>
                                            </div>
                                            <hr className="separator" />
                                            <ul>
                                                <li>20 mb/s upload speed</li>
                                                <li>£25 installation cost</li>
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
                                            <h5 className="card-title">Zippy Fiber</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">0.5mb/s</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Download speed</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textAlign:'right'}} className="mt-4"><span className="curprice">£22.00</span><br />per month</p>
                                                </Col>
                                            </Row>
                                            <hr className="separator" />
                                            <ul>
                                                <li>0.5 mb/s upload speed</li>
                                                <li>£25 installation cost</li>
                                            </ul>
                                            <hr className="separator" />
                                            <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Turbo Fiber</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">40mb/s</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Download speed</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textAlign:'right'}} className="mt-4"><span className="curprice">£35.00</span><br />per month</p>
                                                </Col>
                                            </Row>
                                            <hr className="separator" />
                                            <ul>
                                                <li>10 mb/s upload speed</li>
                                                <li>£25 installation cost</li>
                                            </ul>
                                            <hr className="separator" />
                                            <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Hyper Fiber</h5>
                                            <hr className="separator" />
                                            <div className="row">
                                                <div className="col">
                                                    <div className="data">80 mb/s</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Download speed</p>
                                                </div>
                                                <div className="col">
                                                    <p style={{textAlign:'right'}} className="mt-4"><span className="curprice">£39.00</span><br />per month</p>
                                                </div>
                                            </div>
                                            <hr className="separator" />
                                            <ul>
                                                <li>20 mb/s upload speed</li>
                                                <li>£25 installation cost</li>
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
                <div id="12month" className="tab-pane">
                    <Carousel>
                        <Carousel.Item>
                            <Row>
                                <Col>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Zippy Fiber</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">0.5mb/s</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Download speed</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textAlign:'right'}} className="mt-4"><span className="curprice">£22.00</span><br />per month</p>
                                                </Col>
                                            </Row>
                                            <hr className="separator" />
                                            <ul>
                                                <li>0.5 mb/s upload speed</li>
                                                <li>£25 installation cost</li>
                                            </ul>
                                            <hr className="separator" />
                                            <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Turbo Fiber</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">40mb/s</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Download speed</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textAlign:'right'}} className="mt-4"><span className="curprice">£35.00</span><br />per month</p>
                                                </Col>
                                            </Row>
                                            <hr className="separator" />
                                            <ul>
                                                <li>10 mb/s upload speed</li>
                                                <li>£25 installation cost</li>
                                            </ul>
                                            <hr className="separator" />
                                            <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Hyper Fiber</h5>
                                            <hr className="separator" />
                                            <div className="row">
                                                <div className="col">
                                                    <div className="data">80 mb/s</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Download speed</p>
                                                </div>
                                                <div className="col">
                                                    <p style={{textAlign:'right'}} className="mt-4"><span className="curprice">£39.00</span><br />per month</p>
                                                </div>
                                            </div>
                                            <hr className="separator" />
                                            <ul>
                                                <li>20 mb/s upload speed</li>
                                                <li>£25 installation cost</li>
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
                                            <h5 className="card-title">Zippy Fiber</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">0.5mb/s</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Download speed</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textAlign:'right'}} className="mt-4"><span className="curprice">£22.00</span><br />per month</p>
                                                </Col>
                                            </Row>
                                            <hr className="separator" />
                                            <ul>
                                                <li>0.5 mb/s upload speed</li>
                                                <li>£25 installation cost</li>
                                            </ul>
                                            <hr className="separator" />
                                            <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Turbo Fiber</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">40mb/s</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Download speed</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textAlign:'right'}} className="mt-4"><span className="curprice">£35.00</span><br />per month</p>
                                                </Col>
                                            </Row>
                                            <hr className="separator" />
                                            <ul>
                                                <li>10 mb/s upload speed</li>
                                                <li>£25 installation cost</li>
                                            </ul>
                                            <hr className="separator" />
                                            <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Hyper Fiber</h5>
                                            <hr className="separator" />
                                            <div className="row">
                                                <div className="col">
                                                    <div className="data">80 mb/s</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Download speed</p>
                                                </div>
                                                <div className="col">
                                                    <p style={{textAlign:'right'}} className="mt-4"><span className="curprice">£39.00</span><br />per month</p>
                                                </div>
                                            </div>
                                            <hr className="separator" />
                                            <ul>
                                                <li>20 mb/s upload speed</li>
                                                <li>£25 installation cost</li>
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
                                            <h5 className="card-title">Zippy Fiber</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">0.5mb/s</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Download speed</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textAlign:'right'}} className="mt-4"><span className="curprice">£22.00</span><br />per month</p>
                                                </Col>
                                            </Row>
                                            <hr className="separator" />
                                            <ul>
                                                <li>0.5 mb/s upload speed</li>
                                                <li>£25 installation cost</li>
                                            </ul>
                                            <hr className="separator" />
                                            <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Turbo Fiber</h5>
                                            <hr className="separator" />
                                            <Row>
                                                <Col>
                                                    <div className="data">40mb/s</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Download speed</p>
                                                </Col>
                                                <Col>
                                                    <p style={{textAlign:'right'}} className="mt-4"><span className="curprice">£35.00</span><br />per month</p>
                                                </Col>
                                            </Row>
                                            <hr className="separator" />
                                            <ul>
                                                <li>10 mb/s upload speed</li>
                                                <li>£25 installation cost</li>
                                            </ul>
                                            <hr className="separator" />
                                            <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Hyper Fiber</h5>
                                            <hr className="separator" />
                                            <div className="row">
                                                <div className="col">
                                                    <div className="data">80 mb/s</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Download speed</p>
                                                </div>
                                                <div className="col">
                                                    <p style={{textAlign:'right'}} className="mt-4"><span className="curprice">£39.00</span><br />per month</p>
                                                </div>
                                            </div>
                                            <hr className="separator" />
                                            <ul>
                                                <li>20 mb/s upload speed</li>
                                                <li>£25 installation cost</li>
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