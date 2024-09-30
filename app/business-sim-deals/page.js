"use client"
import { Button, Card, CardTitle, Carousel, CarouselItem, Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";
import simdata from "../products/simdeals.json";
import daypass from "../products/daypassroaming.json";
import dataonly from "../products/dataonlysim.json";
import Link from "next/link";
import HeadBarSmall from "@/app/components/HeadBarSmall";
import Image from "next/image";

export default function BusinessSimDeals () {
    console.log(simdata)
    return (
        <>
        <Header />
        <HeadBar text="Explore Cutting-Edge SIM Deals: Transform Your Business!" />
        <Container className="pt-5">
            <ul className="nav nav-tabs" role="tablist" style={{justifyContent:'center'}}>
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
        <div className="tab-content simplandeal">
            <div id="home" className="tab-pane active" aria-current="page">
                <Container>
                    <Row className="py-4">
                        {simdata.twentyfour.map((item, index) => (
                            <Col key={index} md={4}>
                                <Card className="p-4">
                                    <CardTitle className="text-center">{item.plan}</CardTitle>
                                    <Row>
                                        <Col md={6} sm={6} xs={6}>
                                            <p className="datasm">{item.data}</p>
                                            <p className="bigredlt"><span style={{textDecoration:'line-through'}}>{item.prevprice}</span> {item.curprice}</p>
                                        </Col>
                                        <Col md={6} sm={6} xs={6}>
                                            {item.features.map((feature) => (
                                                <li key={feature.id} style={{listStyleType:'none',fontSize:'14px'}}>-- {feature}</li>
                                            ))}
                                        </Col>
                                    </Row>
                                    <div className="d-block my-3">
                                        <Button variant="outline-danger">View Plan</Button>&nbsp;<Button variant="outline-danger">Buy Now</Button>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <HeadBarSmall text="Zoiko Business: Day Pass Roaming Bundles" />
                <Container>
                    <Row className="py-4">
                        {daypass.twentyfour.map((item, index) => (
                            <Col key={index} md={6}>
                                <Card className="p-4">
                                    <CardTitle className="text-center">{item.plan}</CardTitle>
                                    <Row>
                                        <Col md={6} sm={6} xs={6}>
                                            <p className="green18">Day Pass Roaming</p>
                                            <p className="datasm">{item.data}</p>
                                            <p className="bigredlt"> {item.curprice}</p>
                                        </Col>
                                        <Col md={6} sm={6} xs={6}>
                                            {item.features.map((feature, index) => (
                                                <li key={feature.index} style={{listStyleType:'none'}}>-- {feature}</li>
                                            ))}
                                        </Col>
                                    </Row>
                                    <div className="d-block my-3">
                                        <Button variant="outline-danger">View Plan</Button>&nbsp;<Button variant="outline-danger">Buy Now</Button>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <HeadBar text="Zoiko Business: Data Only SIM Plans" />
                <Container fluid>
                    <div className="d-flex flex-md-row flex-column p-4 justify-content-center" style={{gap:'20px'}}>
                        {dataonly.twentyfour.map((item) => (
                            <Card className="p-4" key={item.id}>
                                <CardTitle className="text-center">{item.plan}</CardTitle>
                                <Row>
                                    <Col md={6} sm={6} xs={6}>
                                        <p className="datasm">{item.data}</p>
                                        <p className="bigredlt"><span style={{textDecoration:'line-through'}}>{item.prevprice}</span> {item.curprice}</p>
                                    </Col>
                                    <Col md={6} sm={6} xs={6}>
                                        {item.features.map((feature) => (
                                            <li key={feature.id} style={{listStyleType:'none',fontSize:'14px'}}>{feature}</li>
                                        ))}
                                    </Col>
                                </Row>
                                <div className="d-block my-3">
                                    <Button variant="outline-danger">View Plan</Button>&nbsp;<Button variant="outline-danger">Buy Now</Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Container>
            </div>
            <div id="menu1" className="tab-pane" aria-current="page">
                <Container>
                    <Row className="py-4">
                        {simdata.twelve.map((item, index) => (
                            <Col key={index} md={4}>
                                <Card className="p-4">
                                    <CardTitle className="text-center">{item.plan}</CardTitle>
                                    <Row>
                                        <Col md={6} sm={6} xs={6}>
                                            <p className="datasm">{item.data}</p>
                                            <p className="bigredlt"><span style={{textDecoration:'line-through'}}>{item.prevprice}</span> {item.curprice}</p>
                                        </Col>
                                        <Col md={6} sm={6} xs={6}>
                                            {item.features.map((feature) => (
                                                <li key={feature.id} style={{listStyleType:'none',fontSize:'14px'}}>{feature}</li>
                                            ))}
                                        </Col>
                                    </Row>
                                    <div className="d-block my-3">
                                        <Button variant="outline-danger">View Plan</Button>&nbsp;<Button variant="outline-danger">Buy Now</Button>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <HeadBarSmall text="Zoiko Business: Day Pass Roaming Bundles" />
                <Container>
                    <Row className="py-4">
                        {daypass.twelve.map((item, index) => (
                            <Col key={index} md={6}>
                                <Card className="p-4">
                                    <CardTitle className="text-center">{item.plan}</CardTitle>
                                    <Row>
                                        <Col md={6} sm={6} xs={6}>
                                            <p className="green18">Day Pass Roaming</p>
                                            <p className="datasm">{item.data}</p>
                                            <p className="bigredlt"> {item.curprice}</p>
                                        </Col>
                                        <Col md={6} sm={6} xs={6}>
                                            {item.features.map((feature) => (
                                                <li key={feature.id} style={{listStyleType:'none',fontSize:'14px'}}>{feature}</li>
                                            ))}
                                        </Col>
                                    </Row>
                                    <div className="d-block my-3">
                                        <Button variant="outline-danger">View Plan</Button>&nbsp;<Button variant="outline-danger">Buy Now</Button>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <HeadBar text="Zoiko Business: Data Only SIM Plans" />
                <Container fluid>
                    <div className="d-flex flex-md-row flex-column p-4 justify-content-center" style={{gap:'20px'}}>
                        {dataonly.twelve.map((item) => (
                            <Card className="p-4" key={item.id}>
                                <CardTitle className="text-center">{item.plan}</CardTitle>
                                <Row>
                                    <Col md={6} sm={6} xs={6}>
                                        <p className="datasm">{item.data}</p>
                                        <p className="bigredlt"><span style={{textDecoration:'line-through'}}>{item.prevprice}</span> {item.curprice}</p>
                                    </Col>
                                    <Col md={6} sm={6} xs={6}>
                                        {item.features.map((feature) => (
                                            <li key={feature.id} style={{listStyleType:'none',fontSize:'14px'}}>{feature}</li>
                                        ))}
                                    </Col>
                                </Row>
                                <div className="d-block my-3">
                                    <Button variant="outline-danger">View Plan</Button>&nbsp;<Button variant="outline-danger">Buy Now</Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Container>
            </div>
            <div id="menu2" className="tab-pane" aria-current="page">
                <Container>
                    <Row className="py-4">
                        {simdata.thirty.map((item, index) => (
                            <Col key={index} md={4}>
                                <Card className="p-4">
                                    <CardTitle className="text-center">{item.plan}</CardTitle>
                                    <Row>
                                        <Col md={6} sm={6} xs={6}>
                                            <p className="datasm">{item.data}</p>
                                            <p className="bigredlt"><span style={{textDecoration:'line-through'}}>{item.prevprice}</span> {item.curprice}</p>
                                        </Col>
                                        <Col md={6} sm={6} xs={6}>
                                            {item.features.map((feature) => (
                                                <li key={feature.id} style={{listStyleType:'none',fontSize:'14px'}}>{feature}</li>
                                            ))}
                                        </Col>
                                    </Row>
                                    <div className="d-block my-3">
                                        <Button variant="outline-danger">View Plan</Button>&nbsp;<Button variant="outline-danger">Buy Now</Button>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
                
                <HeadBarSmall text="Zoiko Business: Day Pass Roaming Bundles" />
                <Container>
                    <Row className="py-4">
                        {daypass.thirty.map((item, index) => (
                            <Col key={index} md={6}>
                                <Card className="p-4">
                                    <CardTitle className="text-center">{item.plan}</CardTitle>
                                    <Row>
                                        <Col md={6} sm={6} xs={6}>
                                            <p className="green18">Day Pass Roaming</p>
                                            <p className="datasm">{item.data}</p>
                                            <p className="bigredlt"> {item.curprice}</p>
                                        </Col>
                                        <Col md={6} sm={6} xs={6}>
                                            {item.features.map((feature) => (
                                                <li key={feature.id} style={{listStyleType:'none',fontSize:'14px'}}>--{feature}</li>
                                            ))}
                                        </Col>
                                    </Row>
                                    <div className="d-block my-3">
                                        <Button variant="outline-danger">View Plan</Button>&nbsp;<Button variant="outline-danger">Buy Now</Button>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <HeadBar text="Zoiko Business: Data Only SIM Plans" />
                <Container fluid>
                    <div className="d-flex flex-md-row flex-column p-4 justify-content-center" style={{gap:'20px'}}>
                        {dataonly.thirty.map((item) => (
                            <Card className="p-4" key={item.id}>
                                <CardTitle className="text-center">{item.plan}</CardTitle>
                                <Row>
                                    <Col md={6} sm={6} xs={6}>
                                        <p className="datasm">{item.data}</p>
                                        <p className="bigredlt"><span style={{textDecoration:'line-through'}}>{item.prevprice}</span> {item.curprice}</p>
                                    </Col>
                                    <Col md={6} sm={6} xs={6}>
                                        {item.features.map((feature) => (
                                            <li key={feature.id} style={{listStyleType:'none',fontSize:'14px'}}>{feature}</li>
                                        ))}
                                    </Col>
                                </Row>
                                <div className="d-block my-3">
                                    <Button variant="outline-danger">View Plan</Button>&nbsp;<Button variant="outline-danger">Buy Now</Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Container>
            </div>
        </div>
        <HeadBarSmall text="--" />
        <Container className="announcebox p-4 mb-4">
            <Row>
                <Col md={8} sm={12} xs={12}>
                    <h2 className="bigred">Stay Ahead With Zoiko Mobile&apos;s Business SIM Deals!</h2>
                    <ul className="green18 musicicon">
                        <li>Quick Setup, Easy Management</li>
                        <li>Affordable, Reliable, And Tailored to Your Texts</li>
                        <li>Generous Data, Calls, And Texts</li>
                    </ul>
                    <p className="green18">Perfect For Small To Medium-Sized Businesses, Our Deals Offers:</p>
                    <ul className="green18 musicicon">
                        <li>Scalable Solutions</li>
                        <li>Dedicated Customer Support</li>
                    </ul>
                    <p className="txtred body22">Burrow Into The Benefits And Grow Your Business With Zoiko Mobile!</p>
                </Col>
                <Col md={4}>
                    <Image src={"/img/rabit-bg-green.png"} alt="Rabit" width={300} height={340} style={{width:'100%', height:'auto'}} />
                </Col>
            </Row>
        </Container>
        <HeadBarSmall text="--" />
        <Container className="aboutgreybox mb-5" style={{marginTop:'-30px'}}>
            <h3>Reasons to Love Zoiko Mobile</h3>
            <Row>
                <div className="col-md-2 col-sm-6 col-xs-6">
                    <Image src={'/img/free-international-call.png'} alt="Free international calls" width={180} height={180} />
                </div>
                <div className="col-md-2 col-sm-6 col-xs-6">
                    <Image src={'/img/no-credit-check-2.png'} alt="No credit check" width={180} height={180} />
                </div>
                <div className="col-md-2 col-sm-6 col-xs-6">
                    <Image src={'/img/poket-friendly-2.png'} alt="Pocket friendly" width={180} height={180} />
                </div>
                <div className="col-md-2 col-sm-6 col-xs-6">
                    <Image src={'/img/swtich-to-zm.png'} alt="Switch to ZM" width={180} height={180} />
                </div>
                <div className="col-md-2 col-sm-6 col-xs-6">
                    <Image src={'/img/no-1-network.png'} alt="No 1 network" width={180} height={180} />
                </div>
                <div className="col-md-2 col-sm-6 col-xs-6">
                    <Image src={'/img/free-roam.png'} alt="Free to roam" width={180} height={180} />
                </div>
            </Row>
        </Container>
        <HeadBarSmall text="--" />
        <Container className="announcebox p-4 mb-4">
            <h3 className="txtred text-center">Here&apos;s Why Others Chose Zoiko</h3>
            <Row className="text-center mb-4">
                <Col md={4} sm={12} xs={12}>
                    <Image src={"/img/free-sim-card.png"} alt="Free SIM Card" width={240} height={80} />
                </Col>
                <Col md={4} sm={12} xs={12}>
                    <Image src={"/img/free-delivery.png"} alt="Free Delivery" width={240} height={80} />
                </Col>
                <Col md={4} sm={12} xs={12}>
                    <Image src={"/img/free-5g-data.png"} alt="Free 5G data" width={240} height={80} />
                </Col>
            </Row>
            <Row className="text-center mb-4">
                <Col md={4} sm={12} xs={12}>
                    <Image src={"/img/free-customer-service.png"} alt="Free Customer Service" width={240} height={80} />
                </Col>
                <Col md={4} sm={12} xs={12}>
                    <Image src={"/img/free-customer-support.png"} alt="Free Customer Support" width={240} height={80} />
                </Col>
                <Col md={4} sm={12} xs={12}>
                    <Image src={"/img/free-switching.png"} alt="Free Switching" width={240} height={80} />
                </Col>
            </Row>
        </Container>
        <hr style={{color:'#FECC00',border:'2px solid #fecc00'}} />
        <Container className="p-5">
            <Carousel controls={false}>
                <CarouselItem>
                    <Row>
                        <Col md={4} sm={12} xs={12}>
                            <Image src={"/img/star-rating.png"} width={300} height={60} alt="Rating" />
                        </Col>
                        <Col md={8} sm={12} xs={12}>
                            <p className="txtgreen green18">Zoiko Mobile has exceeded my expectations. <b>Not only do they offer great value-for-money deals, but their service is top-notch.</b> Setting up and changing tariffs has never been easier &mdash; a few simple steps and you&apos;re good to go. What truly sets Zoiko Mobile apart is the inclusion of unlimited text, picture messages, and calls in all their plans. Plus, as the UK&apos;s best-rated mobile network, they ensure reliable coverage wherever I go.</p>
                            <p className="txtgreen green18">Kärt J.</p>
                        </Col>
                    </Row>
                </CarouselItem>
                <CarouselItem>
                    <Row>
                        <Col md={4} sm={12} xs={12}>
                            <Image src={"/img/star-rating.png"} width={300} height={60} alt="Rating" />
                        </Col>
                        <Col md={8} sm={12} xs={12}>
                            <p className="txtgreen green18">I cannot speak highly enough about Zoiko Mobile. <b>Using their services, I have been able to effortlessly stay connected with my loved ones across Europe. What truly impressed me was the affordable plans they offer, which perfectly fit within everyone&apos;s budget. </b>With Zoiko Mobile, I never have to worry about outrageous bills or hidden charges.</p>
                            <p className="txtgreen green18">Georgina H.</p>
                        </Col>
                    </Row>
                </CarouselItem>
            </Carousel>
        </Container>
        <Footer />
        </>
    );
}