"use client"
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

const about = () => {
    return (
        <>
        <Header />
        <Container fluid className="p-0">
            <div className="headbar">
                <Container className="py-2">
                    The Zoiko Philosophy <span className="msicon"><i className="bi bi-music-note-beamed"></i></span> Innovate <span className="msicon"><i className="bi bi-music-note-beamed"></i></span> Connect <span className="msicon"><i className="bi bi-music-note-beamed"></i></span> Communicate
                </Container>
            </div>
        </Container>
        <Container fluid className="p-0">
            <Image src={'/img/about-us-banner.webp'} alt="About Us Banner" width={2000} height={655} className="aboutbannerimg" />
        </Container>
        <Container>
            <Row>
                <Col className="col-md-2 col-xs-0 col-sm-0"></Col>
                <Col>
                    <div className="aboutbox mb-5">
                        <h2>The Zoiko Mobile Chronicle</h2>
                        <Row>
                            <Col>
                                <p>Welcome to Zoiko Mobile, the premier provider of free SIM cards with visionary dream conceived by our founder back in 2008. In 2022, he, along with his friends who shared the same passion for connecting people, reignited that vision. Together, they embarked on a mission to reshape the world of mobile technology.</p>
                                <p>Our tagline, Connecting Every Possibility encapsulates the heart and soul of Zoiko Mobile, and we are excited to share this inspiring journey with you.</p>
                                <p className="readmore"><Link href="#">Read more</Link></p>
                            </Col>
                            <Col className="col-md-4 text-center hidden-lg hidden-md hidden-sm hidden-xs">
                                <Image src={'/img/Zoiko-logo-big.png'} alt="Zoiko Mobile Logo" width={240} height={240} />
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col className="col-md-2 col-xs-0 col-sm-0"></Col>
            </Row>
        </Container>
        <Container className="aboutgreybox mb-5">
            <h3>Reasons to Love Zoiko - Free SIM Card with SIM only deals UK</h3>
            <div className="imgbox">
                <Image src={'/img/free-international-call.png'} alt="Free international calls" width={180} height={180} />
                <Image src={'/img/no-credit-check-2.png'} alt="No credit check" width={180} height={180} />
                <Image src={'/img/poket-friendly-2.png'} alt="Pocket friendly" width={180} height={180} />
                <Image src={'/img/swtich-to-zm.png'} alt="Switch to ZM" width={180} height={180} />
                <Image src={'/img/no-1-network.png'} alt="No 1 network" width={180} height={180} />
                <Image src={'/img/free-roam.png'} alt="Free to roam" width={180} height={180} />
            </div>
            <p className="readmore"><Link href="#">Read more</Link></p>
        </Container>
        <Container className="text-center green24bold">
            <h2>You will never regret choosing Zoiko Mobile - SIM only deals UK with Unlimited Data</h2>
        </Container>
        <Container className="aboutgreybox mb-5">
            <div className="whitebox">
                <div className="txtbox">
                    <div className="headline">UK&apos;s BestNetwork</div>
                    <p>99% UK coverage powered by Uk&apos;s No 1 Network with 4G and 5G coverage</p>
                </div>
                <div className="txtbox">
                    <div className="headline">Fantastic Features</div>
                    <p>Features like 5G, Data rollover, Bundled offers, Roaming and Customised Plans</p>
                </div>
                <div className="txtbox">
                    <div className="headline">Roam Free</div>
                    <p>Roam hassle-free with Zoiko Mobile. Enjoy crystal-clear calls, lightning-fast data!</p>
                </div>
                <div className="txtbox">
                    <div className="headline">Amazing Value</div>
                    <p>Whether you are after the latest phone or SIM only plans we&apos;ve got you covered with all the fantastic deals</p>
                </div>
                <div className="txtbox">
                    <div className="headline">Help &amp; Support</div>
                    <p>We&apos;ve got you covered 24x7 with LIVE &amp; Customer Care Support</p>
                </div>
                <div className="txtbox">
                    <div className="headline">Switch With a Text</div>
                    <p>Switch to Zoiko Mobile with a simple Text, for hassle-free, reliable connectivity everywhere!</p>
                </div>
            </div>
        </Container>
        <Footer />
        </>
    );
};
export default about;