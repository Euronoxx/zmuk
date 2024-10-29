"use client"
import Header from "../components/Header";
import HeadBar from "../components/HeadBar";
import Footer from "../components/Footer";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function ReferFriend () {

    return (
        <>
        <Header />
        <HeadBar text="Zoiko Mobile Refer A Friend Programme" />
        <Container fluid className="referfriendbanner">
            <Container className="p-5">
                <Row>
                    <Col md={6} sm={12} xs={12}>
                        <h2 className="verybigred">Spread the Word and Get Rewarded!</h2>
                        <p className="body22">Welcome to the Zoiko Mobile Refer A Friend Programme! We&apos;re excited to offer our valued customers a chance to earn rewards by referring friends and family to join Zoiko Mobile.</p>
                        <Button variant="outline-success" href="/friend">Sign Up Today</Button>
                    </Col>
                    <Col md={6} sm={12} xs={12}></Col>
                </Row>
            </Container>
        </Container>

        <Container className="py-4">
            <h2 className="text-center green24bold mb-4">How it works</h2>
            <Row className="gx-5">
                <Col md={6} sm={12} xs={12}>
                    <Row>
                        <Col md={2}>
                            <div className="numvlarge">1</div>
                        </Col>
                        <Col md={10}>
                            <div className="txtred">Eligibility:</div>
                            <ul>
                                <li>The Refer A Friend Programme is open to all Zoiko Mobile customers. Each customer can refer up to 100 friends.</li>
                                <li>The programme is exclusively accessible via the Zoiko Mobile website. Signup here.</li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} sm={12} xs={12}>
                    <Row>
                        <Col md={2}>
                            <div className="numvlarge">2</div>
                        </Col>
                        <Col md={10}>
                            <div className="txtred">Referrer&apos;s Responsibilities:</div>
                            <p>Ensure you have an active Zoiko Mobile account and are in good standing.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="gx-5">
                <Col md={6} sm={12} xs={12}>
                    <Row>
                        <Col md={2}>
                            <div className="numvlarge">3</div>
                        </Col>
                        <Col md={10}>
                            <div className="txtred">Referee&apos;s Responsibilities:</div>
                            <p>Referred friends must be new Zoiko Mobile customers and not have an existing account.</p>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} sm={12} xs={12}>
                    <Row>
                        <Col md={2}>
                            <div className="numvlarge">4</div>
                        </Col>
                        <Col md={10}>
                            <div className="txtred">Referral Process:</div>
                            <p>Refer friends via our website. You&apos;ll receive a unique referral link for easy tracking.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="gx-5">
                <Col md={6} sm={12} xs={12}>
                    <Row>
                        <Col md={2}>
                            <div className="numvlarge">5</div>
                        </Col>
                        <Col md={10}>
                            <div className="txtred">Rewards:</div>
                            <ul>
                                <li>Both you and your referred friend will each receive a £20 credit when they activate their Zoiko Mobile plan.</li>
                                <li>Enjoy fantastic entertainment benefits, including Spotify, Netflix, and Amazon Prime!</li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} sm={12} xs={12}>
                    <Row>
                        <Col md={2}>
                            <div className="numvlarge">6</div>
                        </Col>
                        <Col md={10}>
                            <div className="txtred">Bonus Redemption:</div>
                            <p>Redeem your credits for Zoiko Mobile bill discounts through customer support or your online account.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="gx-5">
                <Col md={6} sm={12} xs={12}>
                    <Row>
                        <Col md={2}>
                            <div className="numvlarge">7</div>
                        </Col>
                        <Col md={10}>
                            <div className="txtred">Timeline for Receiving Rewards:</div>
                            <p>Referral rewards will be credited to your account within 30 days of your friend activating their Zoiko Mobile plan.</p>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} sm={12} xs={12}>
                    <Row>
                        <Col md={2}>
                            <div className="numvlarge">8</div>
                        </Col>
                        <Col md={10}>
                            <div className="txtred">Additional Information:</div>
                            <ul>
                                <li>VAT is not included in the credit value.</li>
                                <li>Zoiko Mobile reserves the right to modify or terminate the programme without prior notice.</li>
                                <li>By participating, you acknowledge and agree to these terms and conditions, subject to modification.</li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        <Container className="p-5">
            <Row>
                <Col md={3}>
                    <div className="green32bold" style={{lineHeight:'42px'}}>Start Refering Today!</div>
                </Col>
                <Col md={9}>
                    <p className="body22">Don&apos;t miss out on this opportunity to earn rewards and share the benefitZoiko Mobile Refer A Friend Programmes of Zoiko Mobile with your friends. Share your unique referral link and start enjoying the perks of being a Zoiko Mobile customer!</p>
                    <Button variant="outline-success" href="/friend">Sign Up Today</Button>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    );
}