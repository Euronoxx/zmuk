"use client"
import { Card, CardBody, CardTitle, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";
import HeadBarSmall from "../components/HeadBarSmall";
import Link from "next/link";

function PlanPage () {
    return (
        <>
        <Header />
        <HeadBar text={<>All Plans <span className="msicon"><i className="bi bi-music-note-beamed"></i></span> Unlimited Data <span className="msicon"><i className="bi bi-music-note-beamed"></i></span> Unlimited SMS <span className="msicon"><i className="bi bi-music-note-beamed"></i></span> Unlimited Calls <span className="msicon"><i className="bi bi-music-note-beamed"></i></span> Free International Calls</>} />
        <Container className="text-center p-5">
            <h2 className="green18 mb-4">Select Contract Duration</h2>
            <ul className="nav nav-tabs" role="tablist" style={{justifyContent:'center'}}>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link active" id="justified-tab-0" data-bs-toggle="tab" href="#24month" role="tab" aria-controls="justified-tabpanel-0" aria-selected="true"> 24 Months Plan </Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link" id="justified-tab-2" data-bs-toggle="tab" href="#12month" role="tab" aria-controls="justified-tabpanel-2" aria-selected="false"> 12 Months Plan </Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link" id="justified-tab-3" data-bs-toggle="tab" href="#30day" role="tab" aria-controls="justified-tabpanel-3" aria-selected="false"> 30 Day Plan </Link>
                </li>
            </ul>
        </Container>
        <Container>
            <div className="tab-content simplandeal">
                <div id="24month" className="tab-pane active" aria-current="page">
                    <Row className="simplandeal mb-5 gx-5">
                        <div className="col-md-6 col-sm-12">
                            <p className="green18 text-center">Thrifty Connect</p>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="data">1GB</div>
                                            <p><span className="curprice" style={{textDecoration:'line-through'}}>£3.70</span> <span className="curprice">£2.99</span></p>
                                            
                                        </div>
                                        <div className="col-md-8 col-sm-6">
                                            <ul>
                                                <li>150 MMS &amp; Texts</li>
                                                <li>International Calls</li>
                                                <li>Wi-Fi Calling &amp; eSIM</li>
                                                <li>150 Calling Minutes</li>
                                                <li>EU Roaming: 500MB/100 min/100 Texts</li>
                                            </ul>
                                        </div>
                                    </Row>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <p className="green18 text-center">Junior Jetsetter</p>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="data">3GB</div>
                                            <p><span className="curprice" style={{textDecoration:'line-through'}}>£4.65</span> <span className="curprice">£3.65</span></p>
                                            
                                        </div>
                                        <div className="col-md-8 col-sm-6">
                                            <ul>
                                                <li>500 MMS &amp; Texts</li>
                                                <li>International Calls</li>
                                                <li>Wi-Fi Calling &amp; eSIM</li>
                                                <li>500 Calling Minutes</li>
                                                <li>EU Roaming: 2GB/300 min/300 Texts</li>
                                            </ul>
                                        </div>
                                    </Row>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                    <Row className="simplandeal mb-5 gx-5">
                        <div className="col-md-6 col-sm-12">
                            <p className="green18 text-center">Silver Surfer</p>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="data">10GB</div>
                                            <p><span className="curprice" style={{textDecoration:'line-through'}}>£8.35</span> <span className="curprice">£6.49</span></p>
                                            
                                        </div>
                                        <div className="col-md-8 col-sm-6">
                                            <ul>
                                                <li>500 MMS &amp; Texts</li>
                                                <li>Free International Calls</li>
                                                <li>Wi-Fi Calling &amp; eSIM</li>
                                                <li>500 Calling Minutes</li>
                                                <li>EU Roaming: 5GB/500 min/500 Texts</li>
                                            </ul>
                                        </div>
                                    </Row>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <p className="green18 text-center">Roam &amp; Study MAX</p>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="data">30GB</div>
                                            <p><span className="curprice" style={{textDecoration:'line-through'}}>£11.99</span> <span className="curprice">£9.99</span></p>
                                            
                                        </div>
                                        <div className="col-md-8 col-sm-6">
                                            <ul>
                                                <li>Unlimited MMS &amp; Texts</li>
                                                <li>Free International Calls</li>
                                                <li>Wi-Fi Calling &amp; eSIM</li>
                                                <li>Unlimited Calling Minutes</li>
                                                <li>EU Roaming: 15GB/1000 min/1000 Texts</li>
                                            </ul>
                                        </div>
                                    </Row>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                    <Row className="simplandeal mb-5 gx-5">
                        <div className="col-md-6 col-sm-12">
                            <p className="green18 text-center">Zoiko Elite</p>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="data">100GB</div>
                                            <p><span className="curprice" style={{textDecoration:'line-through'}}>£25.50</span> <span className="curprice">£15.99</span></p>
                                            
                                        </div>
                                        <div className="col-md-8 col-sm-6">
                                            <ul>
                                                <li>Unlimited MMS &amp; Texts</li>
                                                <li>Free International Calls</li>
                                                <li>Wi-Fi Calling &amp; eSIM</li>
                                                <li>Unlimited Calling Minutes</li>
                                                <li>EU Roaming: 30GB/2000 min/2000 Texts</li>
                                            </ul>
                                        </div>
                                    </Row>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <p className="green18 text-center">Unlimited Data Bundle</p>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="data" style={{fontSize:'34px',lineHeight:'36px'}}>Unlimited Data</div>
                                            <p><span className="curprice" style={{textDecoration:'line-through'}}>£27.50</span> <span className="curprice">£19.99</span></p>
                                            
                                        </div>
                                        <div className="col-md-8 col-sm-6">
                                            <ul>
                                                <li>Unlimited MMS &amp; Texts</li>
                                                <li>Free International Calls</li>
                                                <li>Wi-Fi Calling &amp; eSIM</li>
                                                <li>Unlimited Calling Minutes</li>
                                                <li>EU Roaming: 40GB/Unlimited Calls &amp; Texts</li>
                                            </ul>
                                        </div>
                                    </Row>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                    <HeadBarSmall text="Zoiko SIM Only Business Deals" />
                    <Row className="gx-5 py-4 text-center">
                        <div className="col-md-4 col-sm-12">
                            <Card>
                                <CardBody>
                                    <CardTitle>Business Booster Lite</CardTitle>
                                    <div className="data" style={{fontSize:'30px',lineHeight:'36px'}}>30GB</div>
                                    <p><span className="curprice" style={{textDecoration:'line-through'}}>£11.99</span> <span className="curprice">£10.49</span></p>
                                    <ul>
                                        <li>Unlimited MMS &amp; Texts</li>
                                        <li>Free International Calls</li>
                                        <li>Wi-Fi Calling &amp; eSIM</li>
                                        <li>Unlimited Calling Minutes</li>
                                        <li>EU Roaming: 40GB/Unlimited Calls &amp; Texts</li>
                                    </ul>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <Card>
                                <CardBody>
                                    <CardTitle>Business Booster Premium</CardTitle>
                                    <div className="data" style={{fontSize:'30px',lineHeight:'36px'}}>100GB</div>
                                    <p><span className="curprice" style={{textDecoration:'line-through'}}>£31</span> <span className="curprice">£22.99</span></p>
                                    <ul>
                                        <li>Unlimited MMS &amp; Texts</li>
                                        <li>Free International Calls</li>
                                        <li>Wi-Fi Calling &amp; eSIM</li>
                                        <li>Unlimited Calling Minutes</li>
                                        <li>EU Roaming: 40GB/Unlimited Calls &amp; Texts</li>
                                    </ul>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <Card>
                                <CardBody>
                                    <CardTitle>Business Booster Pro</CardTitle>
                                    <div className="data" style={{fontSize:'30px',lineHeight:'36px'}}>Unlimited Data</div>
                                    <p><span className="curprice" style={{textDecoration:'line-through'}}>£33.50</span> <span className="curprice">£24.99</span></p>
                                    <ul>
                                        <li>Unlimited MMS &amp; Texts</li>
                                        <li>Free International Calls</li>
                                        <li>Wi-Fi Calling &amp; eSIM</li>
                                        <li>Unlimited Calling Minutes</li>
                                        <li>EU Roaming: 40GB/Unlimited Calls &amp; Texts</li>
                                    </ul>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                    <HeadBarSmall text="Zoiko Roaming Deals" />
                    <Row className="simplandeal mb-5 gx-5 mt-4">
                        <div className="col-md-6 col-sm-12">
                            <p className="green18 text-center">Day Pass Roaming Zones 2 &amp; 3</p>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="data">1GB</div>
                                            <p><span className="curprice" style={{textDecoration:'line-through'}}>£3.70</span> <span className="curprice">£2.99</span></p>
                                        </div>
                                        <div className="col-md-8 col-sm-6">
                                            <ul>
                                                <li>150 MMS &amp; Texts</li>
                                                <li>International Calls</li>
                                                <li>Wi-Fi Calling &amp; eSIM</li>
                                                <li>150 Calling Minutes</li>
                                                <li>EU Roaming: 500MB/100 min/100 Texts</li>
                                            </ul>
                                        </div>
                                    </Row>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <p className="green18 text-center">Day Pass Roaming Zones 4 &amp; 5</p>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="data">3GB</div>
                                            <p><span className="curprice" style={{textDecoration:'line-through'}}>£4.65</span> <span className="curprice">£3.65</span></p>
                                        </div>
                                        <div className="col-md-8 col-sm-6">
                                            <ul>
                                                <li>500 MMS &amp; Texts</li>
                                                <li>International Calls</li>
                                                <li>Wi-Fi Calling &amp; eSIM</li>
                                                <li>500 Calling Minutes</li>
                                                <li>EU Roaming: 2GB/300 min/300 Texts</li>
                                            </ul>
                                        </div>
                                    </Row>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                </div>
                <div id="12month" className="tab-pane">
                <Row className="simplandeal mb-5 gx-5">
                        <div className="col-md-6 col-sm-12">
                            <p className="green18 text-center">Thrifty Connect</p>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="data">1GB</div>
                                            <p><span className="curprice" style={{textDecoration:'line-through'}}>£3.70</span> <span className="curprice">£2.99</span></p>
                                            
                                        </div>
                                        <div className="col-md-8 col-sm-6">
                                            <ul>
                                                <li>150 MMS &amp; Texts</li>
                                                <li>International Calls</li>
                                                <li>Wi-Fi Calling &amp; eSIM</li>
                                                <li>150 Calling Minutes</li>
                                                <li>EU Roaming: 500MB/100 min/100 Texts</li>
                                            </ul>
                                        </div>
                                    </Row>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <p className="green18 text-center">Junior Jetsetter</p>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="data">3GB</div>
                                            <p><span className="curprice" style={{textDecoration:'line-through'}}>£4.65</span> <span className="curprice">£3.65</span></p>
                                            
                                        </div>
                                        <div className="col-md-8 col-sm-6">
                                            <ul>
                                                <li>500 MMS &amp; Texts</li>
                                                <li>International Calls</li>
                                                <li>Wi-Fi Calling &amp; eSIM</li>
                                                <li>500 Calling Minutes</li>
                                                <li>EU Roaming: 2GB/300 min/300 Texts</li>
                                            </ul>
                                        </div>
                                    </Row>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                    <Row className="simplandeal mb-5 gx-5">
                        <div className="col-md-6 col-sm-12">
                            <p className="green18 text-center">Silver Surfer</p>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="data">10GB</div>
                                            <p><span className="curprice" style={{textDecoration:'line-through'}}>£8.35</span> <span className="curprice">£6.49</span></p>
                                            
                                        </div>
                                        <div className="col-md-8 col-sm-6">
                                            <ul>
                                                <li>500 MMS &amp; Texts</li>
                                                <li>Free International Calls</li>
                                                <li>Wi-Fi Calling &amp; eSIM</li>
                                                <li>500 Calling Minutes</li>
                                                <li>EU Roaming: 5GB/500 min/500 Texts</li>
                                            </ul>
                                        </div>
                                    </Row>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <p className="green18 text-center">Roam &amp; Study MAX</p>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="data">30GB</div>
                                            <p><span className="curprice" style={{textDecoration:'line-through'}}>£11.99</span> <span className="curprice">£9.99</span></p>
                                            
                                        </div>
                                        <div className="col-md-8 col-sm-6">
                                            <ul>
                                                <li>Unlimited MMS &amp; Texts</li>
                                                <li>Free International Calls</li>
                                                <li>Wi-Fi Calling &amp; eSIM</li>
                                                <li>Unlimited Calling Minutes</li>
                                                <li>EU Roaming: 15GB/1000 min/1000 Texts</li>
                                            </ul>
                                        </div>
                                    </Row>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                    <Row className="simplandeal mb-5 gx-5">
                        <div className="col-md-6 col-sm-12">
                            <p className="green18 text-center">Zoiko Elite</p>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="data">100GB</div>
                                            <p><span className="curprice" style={{textDecoration:'line-through'}}>£25.50</span> <span className="curprice">£15.99</span></p>
                                            
                                        </div>
                                        <div className="col-md-8 col-sm-6">
                                            <ul>
                                                <li>Unlimited MMS &amp; Texts</li>
                                                <li>Free International Calls</li>
                                                <li>Wi-Fi Calling &amp; eSIM</li>
                                                <li>Unlimited Calling Minutes</li>
                                                <li>EU Roaming: 30GB/2000 min/2000 Texts</li>
                                            </ul>
                                        </div>
                                    </Row>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <p className="green18 text-center">Unlimited Data Bundle</p>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="data" style={{fontSize:'34px',lineHeight:'36px'}}>Unlimited Data</div>
                                            <p><span className="curprice" style={{textDecoration:'line-through'}}>£27.50</span> <span className="curprice">£19.99</span></p>
                                            
                                        </div>
                                        <div className="col-md-8 col-sm-6">
                                            <ul>
                                                <li>Unlimited MMS &amp; Texts</li>
                                                <li>Free International Calls</li>
                                                <li>Wi-Fi Calling &amp; eSIM</li>
                                                <li>Unlimited Calling Minutes</li>
                                                <li>EU Roaming: 40GB/Unlimited Calls &amp; Texts</li>
                                            </ul>
                                        </div>
                                    </Row>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                    <HeadBarSmall text="Zoiko SIM Only Business Deals" />
                    <Row className="gx-5 py-4 text-center">
                        <div className="col-md-4 col-sm-12">
                            <Card>
                                <CardBody>
                                    <CardTitle>Business Booster Lite</CardTitle>
                                    <div className="data" style={{fontSize:'30px',lineHeight:'36px'}}>30GB</div>
                                    <p><span className="curprice" style={{textDecoration:'line-through'}}>£11.99</span> <span className="curprice">£10.49</span></p>
                                    <ul>
                                        <li>Unlimited MMS &amp; Texts</li>
                                        <li>Free International Calls</li>
                                        <li>Wi-Fi Calling &amp; eSIM</li>
                                        <li>Unlimited Calling Minutes</li>
                                        <li>EU Roaming: 40GB/Unlimited Calls &amp; Texts</li>
                                    </ul>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <Card>
                                <CardBody>
                                    <CardTitle>Business Booster Premium</CardTitle>
                                    <div className="data" style={{fontSize:'30px',lineHeight:'36px'}}>100GB</div>
                                    <p><span className="curprice" style={{textDecoration:'line-through'}}>£31</span> <span className="curprice">£22.99</span></p>
                                    <ul>
                                        <li>Unlimited MMS &amp; Texts</li>
                                        <li>Free International Calls</li>
                                        <li>Wi-Fi Calling &amp; eSIM</li>
                                        <li>Unlimited Calling Minutes</li>
                                        <li>EU Roaming: 40GB/Unlimited Calls &amp; Texts</li>
                                    </ul>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <Card>
                                <CardBody>
                                    <CardTitle>Business Booster Pro</CardTitle>
                                    <div className="data" style={{fontSize:'30px',lineHeight:'36px'}}>Unlimited Data</div>
                                    <p><span className="curprice" style={{textDecoration:'line-through'}}>£33.50</span> <span className="curprice">£24.99</span></p>
                                    <ul>
                                        <li>Unlimited MMS &amp; Texts</li>
                                        <li>Free International Calls</li>
                                        <li>Wi-Fi Calling &amp; eSIM</li>
                                        <li>Unlimited Calling Minutes</li>
                                        <li>EU Roaming: 40GB/Unlimited Calls &amp; Texts</li>
                                    </ul>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                    <HeadBarSmall text="Zoiko Roaming Deals" />
                    <Row className="simplandeal mb-5 gx-5 mt-4">
                        <div className="col-md-6 col-sm-12">
                            <p className="green18 text-center">Day Pass Roaming Zones 2 &amp; 3</p>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="data">1GB</div>
                                            <p><span className="curprice" style={{textDecoration:'line-through'}}>£3.70</span> <span className="curprice">£2.99</span></p>
                                        </div>
                                        <div className="col-md-8 col-sm-6">
                                            <ul>
                                                <li>150 MMS &amp; Texts</li>
                                                <li>International Calls</li>
                                                <li>Wi-Fi Calling &amp; eSIM</li>
                                                <li>150 Calling Minutes</li>
                                                <li>EU Roaming: 500MB/100 min/100 Texts</li>
                                            </ul>
                                        </div>
                                    </Row>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <p className="green18 text-center">Day Pass Roaming Zones 4 &amp; 5</p>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="data">3GB</div>
                                            <p><span className="curprice" style={{textDecoration:'line-through'}}>£4.65</span> <span className="curprice">£3.65</span></p>
                                        </div>
                                        <div className="col-md-8 col-sm-6">
                                            <ul>
                                                <li>500 MMS &amp; Texts</li>
                                                <li>International Calls</li>
                                                <li>Wi-Fi Calling &amp; eSIM</li>
                                                <li>500 Calling Minutes</li>
                                                <li>EU Roaming: 2GB/300 min/300 Texts</li>
                                            </ul>
                                        </div>
                                    </Row>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                </div>
                <div id="30day" className="tab-pane">
                <Row className="simplandeal mb-5 gx-5">
                        <div className="col-md-6 col-sm-12">
                            <p className="green18 text-center">Thrifty Connect</p>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="data">1GB</div>
                                            <p><span className="curprice" style={{textDecoration:'line-through'}}>£3.70</span> <span className="curprice">£2.99</span></p>
                                            
                                        </div>
                                        <div className="col-md-8 col-sm-6">
                                            <ul>
                                                <li>150 MMS &amp; Texts</li>
                                                <li>International Calls</li>
                                                <li>Wi-Fi Calling &amp; eSIM</li>
                                                <li>150 Calling Minutes</li>
                                                <li>EU Roaming: 500MB/100 min/100 Texts</li>
                                            </ul>
                                        </div>
                                    </Row>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <p className="green18 text-center">Junior Jetsetter</p>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="data">3GB</div>
                                            <p><span className="curprice" style={{textDecoration:'line-through'}}>£4.65</span> <span className="curprice">£3.65</span></p>
                                            
                                        </div>
                                        <div className="col-md-8 col-sm-6">
                                            <ul>
                                                <li>500 MMS &amp; Texts</li>
                                                <li>International Calls</li>
                                                <li>Wi-Fi Calling &amp; eSIM</li>
                                                <li>500 Calling Minutes</li>
                                                <li>EU Roaming: 2GB/300 min/300 Texts</li>
                                            </ul>
                                        </div>
                                    </Row>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                    <Row className="simplandeal mb-5 gx-5">
                        <div className="col-md-6 col-sm-12">
                            <p className="green18 text-center">Silver Surfer</p>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="data">10GB</div>
                                            <p><span className="curprice" style={{textDecoration:'line-through'}}>£8.35</span> <span className="curprice">£6.49</span></p>
                                            
                                        </div>
                                        <div className="col-md-8 col-sm-6">
                                            <ul>
                                                <li>500 MMS &amp; Texts</li>
                                                <li>Free International Calls</li>
                                                <li>Wi-Fi Calling &amp; eSIM</li>
                                                <li>500 Calling Minutes</li>
                                                <li>EU Roaming: 5GB/500 min/500 Texts</li>
                                            </ul>
                                        </div>
                                    </Row>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <p className="green18 text-center">Roam &amp; Study MAX</p>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="data">30GB</div>
                                            <p><span className="curprice" style={{textDecoration:'line-through'}}>£11.99</span> <span className="curprice">£9.99</span></p>
                                            
                                        </div>
                                        <div className="col-md-8 col-sm-6">
                                            <ul>
                                                <li>Unlimited MMS &amp; Texts</li>
                                                <li>Free International Calls</li>
                                                <li>Wi-Fi Calling &amp; eSIM</li>
                                                <li>Unlimited Calling Minutes</li>
                                                <li>EU Roaming: 15GB/1000 min/1000 Texts</li>
                                            </ul>
                                        </div>
                                    </Row>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                    <Row className="simplandeal mb-5 gx-5">
                        <div className="col-md-6 col-sm-12">
                            <p className="green18 text-center">Zoiko Elite</p>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="data">100GB</div>
                                            <p><span className="curprice" style={{textDecoration:'line-through'}}>£25.50</span> <span className="curprice">£15.99</span></p>
                                            
                                        </div>
                                        <div className="col-md-8 col-sm-6">
                                            <ul>
                                                <li>Unlimited MMS &amp; Texts</li>
                                                <li>Free International Calls</li>
                                                <li>Wi-Fi Calling &amp; eSIM</li>
                                                <li>Unlimited Calling Minutes</li>
                                                <li>EU Roaming: 30GB/2000 min/2000 Texts</li>
                                            </ul>
                                        </div>
                                    </Row>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <p className="green18 text-center">Unlimited Data Bundle</p>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="data" style={{fontSize:'34px',lineHeight:'36px'}}>Unlimited Data</div>
                                            <p><span className="curprice" style={{textDecoration:'line-through'}}>£27.50</span> <span className="curprice">£19.99</span></p>
                                            
                                        </div>
                                        <div className="col-md-8 col-sm-6">
                                            <ul>
                                                <li>Unlimited MMS &amp; Texts</li>
                                                <li>Free International Calls</li>
                                                <li>Wi-Fi Calling &amp; eSIM</li>
                                                <li>Unlimited Calling Minutes</li>
                                                <li>EU Roaming: 40GB/Unlimited Calls &amp; Texts</li>
                                            </ul>
                                        </div>
                                    </Row>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                    <HeadBarSmall text="Zoiko SIM Only Business Deals" />
                    <Row className="gx-5 py-4 text-center">
                        <div className="col-md-4 col-sm-12">
                            <Card>
                                <CardBody>
                                    <CardTitle>Business Booster Lite</CardTitle>
                                    <div className="data" style={{fontSize:'30px',lineHeight:'36px'}}>30GB</div>
                                    <p><span className="curprice" style={{textDecoration:'line-through'}}>£11.99</span> <span className="curprice">£10.49</span></p>
                                    <ul>
                                        <li>Unlimited MMS &amp; Texts</li>
                                        <li>Free International Calls</li>
                                        <li>Wi-Fi Calling &amp; eSIM</li>
                                        <li>Unlimited Calling Minutes</li>
                                        <li>EU Roaming: 40GB/Unlimited Calls &amp; Texts</li>
                                    </ul>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <Card>
                                <CardBody>
                                    <CardTitle>Business Booster Premium</CardTitle>
                                    <div className="data" style={{fontSize:'30px',lineHeight:'36px'}}>100GB</div>
                                    <p><span className="curprice" style={{textDecoration:'line-through'}}>£31</span> <span className="curprice">£22.99</span></p>
                                    <ul>
                                        <li>Unlimited MMS &amp; Texts</li>
                                        <li>Free International Calls</li>
                                        <li>Wi-Fi Calling &amp; eSIM</li>
                                        <li>Unlimited Calling Minutes</li>
                                        <li>EU Roaming: 40GB/Unlimited Calls &amp; Texts</li>
                                    </ul>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <Card>
                                <CardBody>
                                    <CardTitle>Business Booster Pro</CardTitle>
                                    <div className="data" style={{fontSize:'30px',lineHeight:'36px'}}>Unlimited Data</div>
                                    <p><span className="curprice" style={{textDecoration:'line-through'}}>£33.50</span> <span className="curprice">£24.99</span></p>
                                    <ul>
                                        <li>Unlimited MMS &amp; Texts</li>
                                        <li>Free International Calls</li>
                                        <li>Wi-Fi Calling &amp; eSIM</li>
                                        <li>Unlimited Calling Minutes</li>
                                        <li>EU Roaming: 40GB/Unlimited Calls &amp; Texts</li>
                                    </ul>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                    <HeadBarSmall text="Zoiko Roaming Deals" />
                    <Row className="simplandeal mb-5 gx-5 mt-4">
                        <div className="col-md-6 col-sm-12">
                            <p className="green18 text-center">Day Pass Roaming Zones 2 &amp; 3</p>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="data">1GB</div>
                                            <p><span className="curprice" style={{textDecoration:'line-through'}}>£3.70</span> <span className="curprice">£2.99</span></p>
                                        </div>
                                        <div className="col-md-8 col-sm-6">
                                            <ul>
                                                <li>150 MMS &amp; Texts</li>
                                                <li>International Calls</li>
                                                <li>Wi-Fi Calling &amp; eSIM</li>
                                                <li>150 Calling Minutes</li>
                                                <li>EU Roaming: 500MB/100 min/100 Texts</li>
                                            </ul>
                                        </div>
                                    </Row>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <p className="green18 text-center">Day Pass Roaming Zones 4 &amp; 5</p>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="data">3GB</div>
                                            <p><span className="curprice" style={{textDecoration:'line-through'}}>£4.65</span> <span className="curprice">£3.65</span></p>
                                        </div>
                                        <div className="col-md-8 col-sm-6">
                                            <ul>
                                                <li>500 MMS &amp; Texts</li>
                                                <li>International Calls</li>
                                                <li>Wi-Fi Calling &amp; eSIM</li>
                                                <li>500 Calling Minutes</li>
                                                <li>EU Roaming: 2GB/300 min/300 Texts</li>
                                            </ul>
                                        </div>
                                    </Row>
                                    <div className="text-center">
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">View Plan</Link>&nbsp;
                                        <Link href={"#"} className="btn btn-outline-danger mt-4">Buy Now</Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                </div>
            </div>
        </Container>
        <Footer />
        </>
    );
}
export default PlanPage;
