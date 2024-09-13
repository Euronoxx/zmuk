"use client"
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";
import Link from "next/link";

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
        <Footer />
        </>
    );
}
export default ThirtyDay;