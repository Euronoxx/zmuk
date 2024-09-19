"use client"
import { Col, Container, Row, Card } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import HeadBar from "../components/HeadBar";

function SaverDeals () {
    return (
        <>
        <Header />
        <HeadBar text="A Comprehensive Plan for Low-Income Individuals &amp; Families" />
        <Container fluid className="saverdeal p-0">
            <Container>
                <Row>
                    <Col>
                        <p><span className="bigred">Zoiko Saver Deals</span><br />
                        <span className="green18">A Comprehensive Plan for Low-Income Individuals &amp; Families</span><br />
                        Zoiko Saver Deals aims to provide affordable and reliable mobile, broadband, and digital phone services to individuals on low income or Benefits. By offering competitive pricing and flexible packages, Zoiko Mobile ensures that everyone stays connected without breaking the bank.</p>
                        <Link href={'/zoiko-saver-deals-application-form'} className="btn btn-outline-danger btn-sm">Register Now</Link>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </Container>
        <HeadBar text="SIM Only Plans" />
        <Container className="pt-4">
            <h2 className="green24bold text-center mb-5">Select Contract Duration</h2>
            <ul className="nav nav-tabs nav-justified" role="tablist">
                <li className="nav-item" role="presentation">
                    <Link className="nav-link active" id="justified-tab-0" data-bs-toggle="tab" href="#24month" role="tab" aria-controls="justified-tabpanel-0" aria-selected="true"> 24 Months </Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link" id="justified-tab-1" data-bs-toggle="tab" href="#18month" role="tab" aria-controls="justified-tabpanel-1" aria-selected="false"> 18 Months </Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link" id="justified-tab-2" data-bs-toggle="tab" href="#12month" role="tab" aria-controls="justified-tabpanel-2" aria-selected="false"> 12 Months </Link>
                </li>
            </ul>
        </Container>
        <Container className="mb-4 px-3 mt-2">
            <div className="tab-content simplandeal">
                <div id="24month" className="tab-pane active" aria-current="page">
                    <Row>
                        <div className="col-md-4 col-sm-12">
                            <Card style={{height:'380px'}}>
                                <Card.Body>
                                    <Card.Title>Zoiko Saver Basic</Card.Title>
                                    <Row>
                                        <Col>
                                            <div className="data">3GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                        </Col>
                                        <Col>
                                            <p style={{textlign:'right'}} className="mt-4"><span className="curprice">£5</span>/per month</p>
                                        </Col>
                                    </Row>
                                    <ul>
                                        <li>150 UK Minutes</li>
                                        <li>150 Texts</li>
                                        <li>Free Calls to Zoiko Customer Service</li>
                                    </ul>
                                    <div className="text-center">
                                        <Link href="#" className="btn btn-outline-danger">View plan</Link>&nbsp;
                                        <Link href="#" className="btn btn-danger"> Buy now </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <Card style={{height:'380px'}}>
                                <Card.Body>
                                    <Card.Title>Zoiko Saver Plus</Card.Title>
                                    <Row>
                                        <Col>
                                            <div className="data">3GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                        </Col>
                                        <Col>
                                            <p style={{textlign:'right'}} className="mt-4"><span className="curprice">£4.50</span>/per month</p>
                                        </Col>
                                    </Row>
                                    <ul>
                                        <li>150 UK Minutes</li>
                                        <li>150 Texts</li>
                                        <li>Free Calls to Zoiko Customer Service</li>
                                        <li>Discount on family Plans</li>
                                    </ul>
                                    <div className="text-center">
                                        <Link href="#" className="btn btn-outline-danger">View plan</Link>&nbsp;
                                        <Link href="#" className="btn btn-danger"> Buy now </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <Card style={{height:'380px'}}>
                                <Card.Body>
                                    <Card.Title>Zoiko Saver Pro</Card.Title>
                                    <Row>
                                        <Col>
                                            <div className="data">10GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                        </Col>
                                        <Col>
                                            <p style={{textlign:'right'}} className="mt-4"><span className="curprice">£7.50</span>/per month</p>
                                        </Col>
                                    </Row>
                                    <ul>
                                        <li>150 UK Minutes</li>
                                        <li>150 Texts</li>
                                        <li>Free Calls to Zoiko Customer Service</li>
                                        <li>Priority customer support</li>
                                        <li>Discount on family Plans</li>
                                    </ul>
                                    <div className="text-center">
                                        <Link href="#" className="btn btn-outline-danger">View plan</Link>&nbsp;
                                        <Link href="#" className="btn btn-danger"> Buy now </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                </div>
                <div id="18month" className="tab-pane">
                    <Row>
                        <div className="col-md-4 col-sm-12">
                            <Card style={{height:'380px'}}>
                                <Card.Body>
                                    <Card.Title>Zoiko Saver Basic</Card.Title>
                                    <Row>
                                        <Col>
                                            <div className="data">3GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                        </Col>
                                        <Col>
                                            <p style={{textlign:'right'}} className="mt-4"><span className="curprice">£5</span>/per month</p>
                                        </Col>
                                    </Row>
                                    <ul>
                                        <li>150 UK Minutes</li>
                                        <li>150 Texts</li>
                                        <li>Free Calls to Zoiko Customer Service</li>
                                    </ul>
                                    <div className="text-center">
                                        <Link href="#" className="btn btn-outline-danger">View plan</Link>&nbsp;
                                        <Link href="#" className="btn btn-danger"> Buy now </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <Card style={{height:'380px'}}>
                                <Card.Body>
                                    <Card.Title>Zoiko Saver Plus</Card.Title>
                                    <Row>
                                        <Col>
                                            <div className="data">3GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                        </Col>
                                        <Col>
                                            <p style={{textlign:'right'}} className="mt-4"><span className="curprice">£4.50</span>/per month</p>
                                        </Col>
                                    </Row>
                                    <ul>
                                        <li>150 UK Minutes</li>
                                        <li>150 Texts</li>
                                        <li>Free Calls to Zoiko Customer Service</li>
                                        <li>Discount on family Plans</li>
                                    </ul>
                                    <div className="text-center">
                                        <Link href="#" className="btn btn-outline-danger">View plan</Link>&nbsp;
                                        <Link href="#" className="btn btn-danger"> Buy now </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <Card style={{height:'380px'}}>
                                <Card.Body>
                                    <Card.Title>Zoiko Saver Pro</Card.Title>
                                    <Row>
                                        <Col>
                                            <div className="data">10GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                        </Col>
                                        <Col>
                                            <p style={{textlign:'right'}} className="mt-4"><span className="curprice">£7.50</span>/per month</p>
                                        </Col>
                                    </Row>
                                    <ul>
                                        <li>150 UK Minutes</li>
                                        <li>150 Texts</li>
                                        <li>Free Calls to Zoiko Customer Service</li>
                                        <li>Priority customer support</li>
                                        <li>Discount on family Plans</li>
                                    </ul>
                                    <div className="text-center">
                                        <Link href="#" className="btn btn-outline-danger">View plan</Link>&nbsp;
                                        <Link href="#" className="btn btn-danger"> Buy now </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                </div>
                <div id="12month" className="tab-pane">
                    <Row>
                        <div className="col-md-4 col-sm-12">
                            <Card style={{height:'380px'}}>
                                <Card.Body>
                                    <Card.Title>Zoiko Saver Basic</Card.Title>
                                    <Row>
                                        <Col>
                                            <div className="data">3GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                        </Col>
                                        <Col>
                                            <p style={{textlign:'right'}} className="mt-4"><span className="curprice">£5</span>/per month</p>
                                        </Col>
                                    </Row>
                                    <ul>
                                        <li>150 UK Minutes</li>
                                        <li>150 Texts</li>
                                        <li>Free Calls to Zoiko Customer Service</li>
                                    </ul>
                                    <div className="text-center">
                                        <Link href="#" className="btn btn-outline-danger">View plan</Link>&nbsp;
                                        <Link href="#" className="btn btn-danger"> Buy now </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <Card style={{height:'380px'}}>
                                <Card.Body>
                                    <Card.Title>Zoiko Saver Plus</Card.Title>
                                    <Row>
                                        <Col>
                                            <div className="data">3GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                        </Col>
                                        <Col>
                                            <p style={{textlign:'right'}} className="mt-4"><span className="curprice">£4.50</span>/per month</p>
                                        </Col>
                                    </Row>
                                    <ul>
                                        <li>150 UK Minutes</li>
                                        <li>150 Texts</li>
                                        <li>Free Calls to Zoiko Customer Service</li>
                                        <li>Discount on family Plans</li>
                                    </ul>
                                    <div className="text-center">
                                        <Link href="#" className="btn btn-outline-danger">View plan</Link>&nbsp;
                                        <Link href="#" className="btn btn-danger"> Buy now </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <Card style={{height:'380px'}}>
                                <Card.Body>
                                    <Card.Title>Zoiko Saver Pro</Card.Title>
                                    <Row>
                                        <Col>
                                            <div className="data">10GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                        </Col>
                                        <Col>
                                            <p style={{textlign:'right'}} className="mt-4"><span className="curprice">£7.50</span>/per month</p>
                                        </Col>
                                    </Row>
                                    <ul>
                                        <li>150 UK Minutes</li>
                                        <li>150 Texts</li>
                                        <li>Free Calls to Zoiko Customer Service</li>
                                        <li>Priority customer support</li>
                                        <li>Discount on family Plans</li>
                                    </ul>
                                    <div className="text-center">
                                        <Link href="#" className="btn btn-outline-danger">View plan</Link>&nbsp;
                                        <Link href="#" className="btn btn-danger"> Buy now </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                </div>
            </div>
        </Container>
        <HeadBar text="Broadband" />
        <Container className="pt-4">
            <h2 className="green24bold text-center mb-5">Select Contract Duration</h2>
            <ul className="nav nav-tabs nav-justified" role="tablist">
                <li className="nav-item" role="presentation">
                    <Link className="nav-link active" id="justified-tab-0" data-bs-toggle="tab" href="#24broadband" role="tab" aria-controls="justified-tabpanel-0" aria-selected="true"> 24 Months </Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link" id="justified-tab-1" data-bs-toggle="tab" href="#18broadband" role="tab" aria-controls="justified-tabpanel-1" aria-selected="false"> 18 Months </Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link" id="justified-tab-2" data-bs-toggle="tab" href="#12broadband" role="tab" aria-controls="justified-tabpanel-2" aria-selected="false"> 12 Months </Link>
                </li>
            </ul>
        </Container>
        <Container className="mb-4 px-3 mt-2">
            <div className="tab-content simplandeal">
                <div id="24broadband" className="tab-pane active" aria-current="page">
                    <Row>
                        <div className="col-md-6 col-sm-12">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Zoiko Saver Broadband Basic</Card.Title>
                                    <Row>
                                        <Col>
                                            <small>upto</small>
                                            <div className="data">0.5MBps</div>
                                            <p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>£18.00 /month</p>
                                        </Col>
                                        <Col>
                                            <ul>
                                                <li><small>Data: Unlimited</small></li>
                                                <li><small>Free Router</small></li>
                                                <li><small>Priority support for technical issues</small></li>
                                                <li><small>Installation cost: £19.00</small></li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    <div className="text-center">
                                        <Link href="#" className="btn btn-outline-danger">View plan</Link>&nbsp;
                                        <Link href="#" className="btn btn-danger"> Buy now </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Zoiko Saver Broadband Plus</Card.Title>
                                    <Row>
                                        <Col>
                                            <small>upto</small>
                                            <div className="data">40MBps</div>
                                            <p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>£28.50 /month</p>
                                        </Col>
                                        <Col>
                                            <ul>
                                                <li><small>Data: Unlimited</small></li>
                                                <li><small>Free Router</small></li>
                                                <li><small>Priority support for technical issues</small></li>
                                                <li><small>Installation cost: £19.00</small></li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    <div className="text-center">
                                        <Link href="#" className="btn btn-outline-danger">View plan</Link>&nbsp;
                                        <Link href="#" className="btn btn-danger"> Buy now </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                </div>
                <div id="18broadband" className="tab-pane">
                    <Row>
                        <div className="col-md-6 col-sm-12">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Zoiko Saver Broadband Basic</Card.Title>
                                    <Row>
                                        <Col>
                                            <small>upto</small>
                                            <div className="data">0.5MBps</div>
                                            <p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>£18.00 /month</p>
                                        </Col>
                                        <Col>
                                            <ul>
                                                <li><small>Data: Unlimited</small></li>
                                                <li><small>Free Router</small></li>
                                                <li><small>Priority support for technical issues</small></li>
                                                <li><small>Installation cost: £19.00</small></li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    <div className="text-center">
                                        <Link href="#" className="btn btn-outline-danger">View plan</Link>&nbsp;
                                        <Link href="#" className="btn btn-danger"> Buy now </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Zoiko Saver Broadband Plus</Card.Title>
                                    <Row>
                                        <Col>
                                            <small>upto</small>
                                            <div className="data">40MBps</div>
                                            <p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>£28.50 /month</p>
                                        </Col>
                                        <Col>
                                            <ul>
                                                <li><small>Data: Unlimited</small></li>
                                                <li><small>Free Router</small></li>
                                                <li><small>Priority support for technical issues</small></li>
                                                <li><small>Installation cost: £19.00</small></li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    <div className="text-center">
                                        <Link href="#" className="btn btn-outline-danger">View plan</Link>&nbsp;
                                        <Link href="#" className="btn btn-danger"> Buy now </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                </div>
                <div id="12broadband" className="tab-pane">
                    <Row>
                        <div className="col-md-6 col-sm-12">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Zoiko Saver Broadband Basic</Card.Title>
                                    <Row>
                                        <Col>
                                            <small>upto</small>
                                            <div className="data">0.5MBps</div>
                                            <p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>£18.00 /month</p>
                                        </Col>
                                        <Col>
                                            <ul>
                                                <li><small>Data: Unlimited</small></li>
                                                <li><small>Free Router</small></li>
                                                <li><small>Priority support for technical issues</small></li>
                                                <li><small>Installation cost: £19.00</small></li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    <div className="text-center">
                                        <Link href="#" className="btn btn-outline-danger">View plan</Link>&nbsp;
                                        <Link href="#" className="btn btn-danger"> Buy now </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Zoiko Saver Broadband Plus</Card.Title>
                                    <Row>
                                        <Col>
                                            <small>upto</small>
                                            <div className="data">40MBps</div>
                                            <p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>£28.50 /month</p>
                                        </Col>
                                        <Col>
                                            <ul>
                                                <li><small>Data: Unlimited</small></li>
                                                <li><small>Free Router</small></li>
                                                <li><small>Priority support for technical issues</small></li>
                                                <li><small>Installation cost: £19.00</small></li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    <div className="text-center">
                                        <Link href="#" className="btn btn-outline-danger">View plan</Link>&nbsp;
                                        <Link href="#" className="btn btn-danger"> Buy now </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                </div>
            </div>
        </Container>
        <HeadBar text="Digital Lines" />
        <Container className="pt-4">
            <h2 className="green24bold text-center mb-5">Select Contract Duration</h2>
            <ul className="nav nav-tabs nav-justified" role="tablist">
                <li className="nav-item" role="presentation">
                    <Link className="nav-link active" id="justified-tab-0" data-bs-toggle="tab" href="#60digital" role="tab" aria-controls="justified-tabpanel-0" aria-selected="true"> 60 Months </Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link" id="justified-tab-1" data-bs-toggle="tab" href="#36digital" role="tab" aria-controls="justified-tabpanel-1" aria-selected="false"> 36 Months </Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link" id="justified-tab-2" data-bs-toggle="tab" href="#24digital" role="tab" aria-controls="justified-tabpanel-2" aria-selected="false"> 24 Months </Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link" id="justified-tab-2" data-bs-toggle="tab" href="#12digital" role="tab" aria-controls="justified-tabpanel-2" aria-selected="false"> 12 Months </Link>
                </li>
            </ul>
        </Container>
        <Container className="mb-4 px-3 mt-2">
            <div className="tab-content simplandeal">
                <div id="60digital" className="tab-pane active" aria-current="page">
                    <Row>
                        <div className="col-md-6 col-sm-12">
                            <Card style={{height:'220px'}}>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Title>Zoiko Saver Phone Basic</Card.Title>
                                            <p className="txtred">£8.50 /month</p>
                                        </Col>
                                        <Col>
                                            <ul>
                                                <li><small>1000 local and national minutes</small></li>
                                                <li><small>Voicemail</small></li>
                                                <li><small>Caller ID</small></li>
                                                <li><small>Call Waiting</small></li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    <div className="text-center">
                                        <Link href="#" className="btn btn-outline-danger">View plan</Link>&nbsp;
                                        <Link href="#" className="btn btn-danger"> Buy now </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <Card style={{height:'220px'}}>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Title>Zoiko Saver Phone Plus</Card.Title>
                                            <p className="txtred">£11.50 /month</p>
                                        </Col>
                                        <Col>
                                            <ul>
                                                <li><small>3000 local and national minutes</small></li>
                                                <li><small>Voicemail</small></li>
                                                <li><small>Caller ID</small></li>
                                                <li><small>Call Waiting</small></li>
                                                <li><small>Free calls to Zoiko customer service</small></li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    <div className="text-center">
                                        <Link href="#" className="btn btn-outline-danger">View plan</Link>&nbsp;
                                        <Link href="#" className="btn btn-danger"> Buy now </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                </div>
                <div id="36digital" className="tab-pane">
                    <Row>
                        <div className="col-md-6 col-sm-12">
                            <Card style={{height:'220px'}}>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Title>Zoiko Saver Phone Basic</Card.Title>
                                            <p className="txtred">£8.50 /month</p>
                                        </Col>
                                        <Col>
                                            <ul>
                                                <li><small>1000 local and national minutes</small></li>
                                                <li><small>Voicemail</small></li>
                                                <li><small>Caller ID</small></li>
                                                <li><small>Call Waiting</small></li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    <div className="text-center">
                                        <Link href="#" className="btn btn-outline-danger">View plan</Link>&nbsp;
                                        <Link href="#" className="btn btn-danger"> Buy now </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <Card style={{height:'220px'}}>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Title>Zoiko Saver Phone Plus</Card.Title>
                                            <p className="txtred">£11.50 /month</p>
                                        </Col>
                                        <Col>
                                            <ul>
                                                <li><small>3000 local and national minutes</small></li>
                                                <li><small>Voicemail</small></li>
                                                <li><small>Caller ID</small></li>
                                                <li><small>Call Waiting</small></li>
                                                <li><small>Free calls to Zoiko customer service</small></li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    <div className="text-center">
                                        <Link href="#" className="btn btn-outline-danger">View plan</Link>&nbsp;
                                        <Link href="#" className="btn btn-danger"> Buy now </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                </div>
                <div id="24digital" className="tab-pane">
                    <Row>
                        <div className="col-md-6 col-sm-12">
                            <Card style={{height:'220px'}}>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Title>Zoiko Saver Phone Basic</Card.Title>
                                            <p className="txtred">£8.50 /month</p>
                                        </Col>
                                        <Col>
                                            <ul>
                                                <li><small>1000 local and national minutes</small></li>
                                                <li><small>Voicemail</small></li>
                                                <li><small>Caller ID</small></li>
                                                <li><small>Call Waiting</small></li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    <div className="text-center">
                                        <Link href="#" className="btn btn-outline-danger">View plan</Link>&nbsp;
                                        <Link href="#" className="btn btn-danger"> Buy now </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <Card style={{height:'220px'}}>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Title>Zoiko Saver Phone Plus</Card.Title>
                                            <p className="txtred">£11.50 /month</p>
                                        </Col>
                                        <Col>
                                            <ul>
                                                <li><small>3000 local and national minutes</small></li>
                                                <li><small>Voicemail</small></li>
                                                <li><small>Caller ID</small></li>
                                                <li><small>Call Waiting</small></li>
                                                <li><small>Free calls to Zoiko customer service</small></li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    <div className="text-center">
                                        <Link href="#" className="btn btn-outline-danger">View plan</Link>&nbsp;
                                        <Link href="#" className="btn btn-danger"> Buy now </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                </div>
                <div id="12digital" className="tab-pane">
                    <Row>
                        <div className="col-md-6 col-sm-12">
                            <Card style={{height:'220px'}}>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Title>Zoiko Saver Phone Basic</Card.Title>
                                            <p className="txtred">£8.50 /month</p>
                                        </Col>
                                        <Col>
                                            <ul>
                                                <li><small>1000 local and national minutes</small></li>
                                                <li><small>Voicemail</small></li>
                                                <li><small>Caller ID</small></li>
                                                <li><small>Call Waiting</small></li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    <div className="text-center">
                                        <Link href="#" className="btn btn-outline-danger">View plan</Link>&nbsp;
                                        <Link href="#" className="btn btn-danger"> Buy now </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <Card style={{height:'220px'}}>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Title>Zoiko Saver Phone Plus</Card.Title>
                                            <p className="txtred">£11.50 /month</p>
                                        </Col>
                                        <Col>
                                            <ul>
                                                <li><small>3000 local and national minutes</small></li>
                                                <li><small>Voicemail</small></li>
                                                <li><small>Caller ID</small></li>
                                                <li><small>Call Waiting</small></li>
                                                <li><small>Free calls to Zoiko customer service</small></li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    <div className="text-center">
                                        <Link href="#" className="btn btn-outline-danger">View plan</Link>&nbsp;
                                        <Link href="#" className="btn btn-danger"> Buy now </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                </div>
            </div>
        </Container>
        <HeadBar text="Combo Deals" />
        <Container className="simplandeal py-4">
            <Row>
                <div className="col-md-4 col-sm-12">
                    <Card style={{height:'380px'}}>
                        <Card.Body>
                            <Card.Title>Zoiko Saver Basic</Card.Title>
                            <Row>
                                <Col>
                                    <div className="data">3GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                </Col>
                                <Col>
                                    <p style={{textlign:'right'}} className="mt-4"><span className="curprice">£5</span>/per month</p>
                                </Col>
                            </Row>
                            <ul>
                                <li>150 UK Minutes</li>
                                <li>150 Texts</li>
                                <li>Free Calls to Zoiko Customer Service</li>
                            </ul>
                            <div className="text-center">
                                <Link href="#" className="btn btn-outline-danger">View plan</Link>&nbsp;
                                <Link href="#" className="btn btn-danger"> Buy now </Link>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4 col-sm-12">
                    <Card style={{height:'380px'}}>
                        <Card.Body>
                            <Card.Title>Zoiko Saver Plus</Card.Title>
                            <Row>
                                <Col>
                                    <div className="data">3GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                </Col>
                                <Col>
                                    <p style={{textlign:'right'}} className="mt-4"><span className="curprice">£4.50</span>/per month</p>
                                </Col>
                            </Row>
                            <ul>
                                <li>150 UK Minutes</li>
                                <li>150 Texts</li>
                                <li>Free Calls to Zoiko Customer Service</li>
                                <li>Discount on family Plans</li>
                            </ul>
                            <div className="text-center">
                                <Link href="#" className="btn btn-outline-danger">View plan</Link>&nbsp;
                                <Link href="#" className="btn btn-danger"> Buy now </Link>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4 col-sm-12">
                    <Card style={{height:'380px'}}>
                        <Card.Body>
                            <Card.Title>Zoiko Saver Pro</Card.Title>
                            <Row>
                                <Col>
                                    <div className="data">10GB</div><p style={{marginTop:'-26px',fontWeight:'bold',fontSize:'20px'}}>Data</p>
                                </Col>
                                <Col>
                                    <p style={{textlign:'right'}} className="mt-4"><span className="curprice">£7.50</span>/per month</p>
                                </Col>
                            </Row>
                            <ul>
                                <li>150 UK Minutes</li>
                                <li>150 Texts</li>
                                <li>Free Calls to Zoiko Customer Service</li>
                                <li>Priority customer support</li>
                                <li>Discount on family Plans</li>
                            </ul>
                            <div className="text-center">
                                <Link href="#" className="btn btn-outline-danger">View plan</Link>&nbsp;
                                <Link href="#" className="btn btn-danger"> Buy now </Link>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Row>
            <p className="text-center pt-5">Zoiko Saver Deals is designed to bridge the digital divide by providing affordable and reliable mobile, broadband, and digital phone services to low-income individuals. By offering competitive pricing, flexible packages, and robust customer support, Zoiko Mobile ensures that everyone has access to essential communication tools.</p>
        </Container>
        <Footer />
        </>
    );
}
export default SaverDeals;