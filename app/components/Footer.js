import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const footer = () => {
    return (
        <>
        <Container fluid className="topfooter">
            <Container>
                <Row>
                    <Col className="col-md-4">
                        <Link className="navbar-brand" href="#">
                            <Image src='/img/zoikomobile_logo.png' width={313} height={130} alt="ZM Logo" />
                        </Link>
                    </Col>
                    <Col>
                        <h4>Zoiko Mobile</h4>
                        <ul>
                            <li>Zoiko Mobile Plans</li>
                            <li>Business SIM Deals</li>
                            <li>Data Only SIMs</li>
                            <li>30-Day Plans</li>
                            <li>Coverage Checker</li>
                        </ul>
                    </Col>
                    <Col>
                        <h4>Zoiko Rates</h4>
                        <ul>
                            <li>Roaming and Overage</li>
                            <li>Zero Cost SMS</li>
                            <li>Discounted Rates</li>
                            <li>Refer Link Friend</li>
                            <li className="dropdown"><Link href="#">Zioko Programs</Link>
                                <ul className="dropdownmenu">
                                    <li><Link href="#">Student Discount Prgm</Link></li>
                                    <li><Link href="#">Student Discount Form</Link></li>
                                    <li><Link href="#">Join Our Network</Link></li>
                                    <li><Link href="#">Student Ambassador Prgm</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <h4>About Zoiko</h4>
                        <ul>
                            <li><Link href="#">Blogs</Link></li>
                            <li><Link href="#">News</Link></li>
                            <li><Link href="#">FAQs</Link></li>
                            <li><Link href="#">Contact Us</Link></li>
                            <li className="dropdown"><Link href="">Useful Resources</Link>
                                <ul className="dropdownmenu">
                                    <li><Link href="#">UK Retirement Resources</Link></li>
                                    <li><Link href="#">UK Business Resources</Link></li>
                                    <li><Link href="#">Customer Complaint</Link></li>
                                    <li><Link href="#">UK Government Websites</Link></li>
                                    <li><Link href="#">UK Family Resources</Link></li>
                                    <li><Link href="#">Online Safty</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <h4>Zoiko Legal</h4>
                        <ul>
                            <li><Link href="#">Term and Conditions</Link></li>
                            <li><Link href="#">Vulnerability Policy</Link></li>
                            <li><Link href="#">Modern Slavery Policy</Link></li>
                            <li><Link href="#">ESG Policy</Link></li>
                            <li className="dropdown"><Link href="#">Zoiko Policies</Link>
                                <ul className="dropdownmenu">
                                    <li><Link href="#">Privacy Policy</Link></li>
                                    <li><Link href="#">Cookie Policy</Link></li>
                                    <li><Link href="#">Late Fee Policy</Link></li>
                                    <li><Link href="#">Refund Policy</Link></li>
                                    <li><Link href="#">Terms of Sale Policy</Link></li>
                                    <li><Link href="#">Terms of Use for Mobile Apps</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
        <Container fluid className="footer">
            <Container>
                <Row>
                    <Col>
                        <ul>
                            <li><Link href="https://www.google.com/maps/place/Your+City+Office/@51.5097579,-0.1447229,15z/data=!4m2!3m1!1s0x0:0x4ddfeee0d3aacc04?sa=X&ved=1t:2428&ictx=111" target="_blank"><b>Head Office</b><br />35 Berkeley Squre, Mayfair,<br />London W1J 5BF</Link></li>
                            <li><Link href="#"><b>Head Office +44 (0) 2071 646 399</b></Link></li>
                            <li><Link href="mailto:info@zoikomobile.co.uk"><b>info@zoikomobile.co.uk</b></Link></li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li><Link href="https://www.google.com/maps/place/Suite+2%2F3+2nd+Floor,+48+W+George+St,+Glasgow+G2+1BP,+UK/data=!4m2!3m1!1s0x4888469fe6c85455:0x9346510e0eb5d9d?sa=X&ved=1t:242&ictx=111" target="_blank"><b>Gsalgow</b><br />Suite 2/3, 2nd Floor, 48 West George Street,<br />Glasgow G2 1BP</Link></li>
                            <li><Link href="#"><b>Glasgow +44 141 530 1560</b></Link></li>
                            <li><Link href="mailto:glasgow@zoikomobile.co.uk"><b>glasgow@zoikomobile.co.uk</b></Link></li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li><Link href="https://www.google.com/maps/place/Living+Data+Ltd/@51.4655052,-3.1663962,15z/data=!4m2!3m1!1s0x0:0x6bcfaac8d50c4090?sa=X&ved=1t:2428&ictx=111" target="_blank"><b>Cardiff</b><br />Portland House, 113-116 Blue Street,<br />Cardiff CF10 5EQ</Link></li>
                            <li><Link href="#"><b>Cardiff +44 292 000 1374</b></Link></li>
                            <li><Link href="mailto:cardiff@zoikomobile.co.uk"><b>cardiff@zoikomobile.co.uk</b></Link></li>
                        </ul>
                    </Col>
                </Row>
                <p className="text-center">&copy; 2024 Zoiko Mobile is Link trading name of Zoiko Telecom Ltd. Registered in England and Wales (No. 15021457). Information Commissioner&apos;s Office Registration Number ZB585887. VAT Registration Number 465 1110 23. All rights reserved.</p>
            </Container>
        </Container>
        </>
    );
};

export default footer;