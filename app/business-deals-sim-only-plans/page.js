"use client"
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";
import Link from "next/link";

function BusinessSimOnlyPlan () {
    return (
        <>
        <Header />
        <HeadBar text="SIM Only Plans" />
        <Container className="text-center p-5">
            <h2 className="green18 mb-4">Select Contract Duration</h2>
            <ul className="nav nav-tabs" role="tablist" style={{justifyContent:'center'}}>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link active" id="justified-tab-0" data-bs-toggle="tab" href="#24month" role="tab" aria-controls="justified-tabpanel-0" aria-selected="true"> 24 Months </Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link" id="justified-tab-2" data-bs-toggle="tab" href="#12month" role="tab" aria-controls="justified-tabpanel-2" aria-selected="false"> 12 Months </Link>
                </li>
            </ul>
        </Container>
        <Container fluid className="mb-4 px-3">
            <div className="tab-content simplandeal">
                <div id="24month" className="tab-pane active" aria-current="page">
                    <Row>
                        <Col md={4} sm={12} xs={12}>
                            <div className="card">
                                <div className="card-body">
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
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={12} xs={12}>
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
                                        <li>Unlimited Calls, Texts &amp; MMS</li>
                                        <li>Wi-Fi Calling &amp; eSIM</li>
                                        <li>Wi-Fi Calling & eSIM</li>
                                        <li>Roaming 30GB/2000 min/2000 Texts</li>
                                    </ul>
                                    <hr className="separator" />
                                    <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={12} xs={12}>
                            <div className="card">
                                <div className="card-body">
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
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div id="12month" className="tab-pane">
                    <Row>
                        <Col md={4} sm={12} xs={12}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Business Booster Lite</h5>
                                    <hr className="separator" />
                                    <Row>
                                        <Col>
                                            <div className="data">30GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                        </Col>
                                        <Col>
                                            <p style={{textAlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£13.99</span><br /><span className="curprice">£12.49</span><br />per month</p>
                                        </Col>
                                    </Row>
                                    <hr className="separator" />
                                    <ul>
                                        <li>Unlimited Calls, Texts &amp; MMS</li>
                                        <li>Wi-Fi Calling &amp; eSIM</li>
                                        <li>Free International Calls</li>
                                        <li>EU Roaming: 15GB/1000 min/1000 Texts</li>
                                    </ul>
                                    <hr className="separator" />
                                    <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={12} xs={12}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Business Booster Premium</h5>
                                    <hr className="separator" />
                                    <Row>
                                        <Col>
                                            <div className="data">100GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                        </Col>
                                        <Col>
                                            <p style={{textAlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£33.00</span><br /><span className="curprice">£26.99</span><br />per month</p>
                                        </Col>
                                    </Row>
                                    <hr className="separator" />
                                    <ul>
                                        <li>Unlimited Calls, Texts &amp; MMS</li>
                                        <li>Wi-Fi Calling &amp; eSIM</li>
                                        <li>Free International Calls</li>
                                        <li>Roaming 30GB/2000 min/2000 Texts</li>
                                    </ul>
                                    <hr className="separator" />
                                    <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={12} xs={12}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Business Booster Pro</h5>
                                    <hr className="separator" />
                                    <div className="row">
                                        <div className="col">
                                            <div className="data">Unlimited</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                        </div>
                                        <div className="col">
                                            <p style={{textAlign:'right'}} className="mt-4"><span style={{textDecoration:'line-through'}}>£35.50</span><br /><span className="curprice">£28.99</span><br />per month</p>
                                        </div>
                                    </div>
                                    <hr className="separator" />
                                    <ul>
                                        <li>Unlimited Calls, Texts &amp; MMS</li>
                                        <li>Wi-Fi Calling &amp; eSIM</li>
                                        <li>Free International Calls</li>
                                        <li>EU Roaming: 40GB/Unlimited Minutes/Unlimited Texts</li>
                                    </ul>
                                    <hr className="separator" />
                                    <div className="text-center"><Link href="#" className="btn btn-outline-danger mb-3 px-4">View plan</Link><br /><Link href="#" className="btn btn-danger">Buy this plan</Link></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
        <Footer />
        </>
    );
}
export default BusinessSimOnlyPlan;