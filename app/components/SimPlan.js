import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const simplan = () => {
    
    return (
        <>
        <Container className="py-4">
            <h2 className="text-center py-4">Choose Your SIM Only Plan &amp; Duration Below</h2>
            <ul className="nav nav-tabs nav-justified" role="tablist">
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
                    <div id="carouselExampleControls" className="carousel slide mt-4" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <Row>
                                    <Col>
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
                                    <Col>
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
                                    <Col>
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
                            </div>
                            <div className="carousel-item">
                                <Row>
                                    <Col>
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
                                    <Col>
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
                                    <Col>
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
                            </div>
                        </div>
                    </div>
                </div>
                <div id="menu1" className="tab-pane fade">
                    <div id="carouselExampleControls" className="carousel slide mt-4" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <Row>
                                    <Col>
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
                                    <Col>
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
                                    <Col>
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
                            </div>
                            <div className="carousel-item">
                                <Row>
                                    <Col>
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
                                    <Col>
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
                                    <Col>
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
                            </div>
                        </div>
                    </div>
                </div>
                <div id="menu2" className="tab-pane fade">
                    <div id="carouselExampleControls" className="carousel slide mt-4" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <Row>
                                    <Col>
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
                                    <Col>
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
                                    <Col>
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
                            </div>
                            <div className="carousel-item">
                                <Row>
                                    <Col>
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
                                    <Col>
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
                                    <Col>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        <div className="text-center my-5">
            <Link href="{{ route('all-plans') }}" className="allplans">View All Plans <i className="bi bi-arrow-right"></i></Link>
        </div>
        <Container className="py-4 simplanbox">
            <h2 className="text-center py-4">Reasons to Love Zoiko Mobile</h2>
            <p>Zoiko Mobile offers unbeatable advantages <span style={{color:'#DF1E5A'}}>|</span> Free international calls <span style={{color:'#DF1E5A'}}>|</span> No credit check <span style={{color:'#DF1E5A'}}>|</span> Budget-friendly plans <span style={{color:'#DF1E5A'}}>|</span> Seamless connectivity with free EU roaming <span style={{color:'#DF1E5A'}}>|</span> Zoiko is the perfect choice for your mobile needs</p>
            <Row className="py-4 gx-6">
                <div className="col text-center">
                    <Image src='/img/mobile-round-icon.png' className="mb-4" width={100} height={100} alt="" />
                    <div className="text-center">
                        <h4>Free International Calls</h4>
                        <p>Connect with loved ones abroad without any extra charges.</p>
                    </div>
                </div>
                <div className="col text-center">
                    <Image src='/img/eye-icon.png' className="mb-4" width={100} height={100} alt="" />
                    <div className="text-center">
                        <h4>No Credit Check</h4>
                        <p>Get a mobile plan without worrying about credit checks.</p>
                    </div>
                </div>
                <div className="col text-center">
                    <Image src='/img/dot-icon.png' className="mb-4" width={100} height={100} alt="" />
                    <div className="text-center">
                        <h4>Pocket Friendly</h4>
                        <p>Choose from a range of affordable plans that suit your budget.</p>
                    </div>
                </div>
                <div className="col text-center">
                    <Image src='/img/search-icon.png' className="mb-4" width={100} height={100} alt="" />
                    <div className="text-center">
                        <h4>Free to Raom</h4>
                        <p>Enjoy free roaming in the EU with all our plans.</p>
                    </div>
                </div>
            </Row>
        </Container>
        <Container fluid className="refurbished">
            <Container className="py-4">
                <Row>
                    <Col className="col-md-4 py-4">
                        <h2>Peck Up A Fantastic Deal On Our Refurbished Smartphones!</h2>
                        <p>From Sleek Design to Lightning-Fast Processors, Our Refurbished Smartphones Have Got It All.</p>
                        <button type="button" className="btn btn-danger btn-lg">View Details</button>
                    </Col>
                    <Col className="col-md-8">
                        <Image src='/img/mobile_group.png' className="w-100" width={450} height={400} alt="" />
                    </Col>
                </Row>
            </Container>
        </Container>
        </>
    );
};
export default simplan;