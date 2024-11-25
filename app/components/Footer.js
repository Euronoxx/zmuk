import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    const curyear = new Date().getFullYear();
    return (
        <>
        <Container fluid className="topfooter">
            <Container>
                <Row>
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <Link className="navbar-brand" href="/">
                            <Image src='/img/zoikomobile_logo.png' width={313} height={130} className="footerlogo" alt="ZM Logo" />
                        </Link>
                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12">
                        <h4>Zoiko Mobile</h4>
                        <ul>
                            <li><Link href="/plans">Zoiko Mobile Plans</Link></li>
                            <li><Link href="/business-sim-deals">Business SIM Deals</Link></li>
                            <li><Link href="/business-deals-data-only-sims">Data Only SIMs</Link></li>
                            <li><Link href="/30-day-plan">30-Day Plans</Link></li>
                            <li><Link href="https://ee.co.uk/help/mobile-coverage-checker" target="_blank">Coverage Checker</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12">
                        <h4>Zoiko Rates</h4>
                        <ul>
                            <li><Link href={"/roaming-and-overage"}>Roaming and Overage</Link></li>
                            <li><Link href={"/zero-rated"}>Zero Cost SMS</Link></li>
                            <li><Link href="/zoiko-mobile-discounted-rates">Discounted Rates</Link></li>
                            <li><Link href="/refer-a-friend-page">Refer A Friend</Link></li>
                            <li className="dropdown"><Link href="#">Zioko Programs <i className="bi bi-chevron-down"></i></Link>
                                <ul className="dropdownmenu">
                                    <li><Link href="/studentdiscount">Student Discount Prgm</Link></li>
                                    <li><Link href="/student-discount-application">Student Discount Form</Link></li>
                                    <li><Link href="/join-our-network">Join Our Network</Link></li>
                                    <li><Link href="/smart-scholar-ambassadors-programme-application-form">Student Ambassador Prgm</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12">
                        <h4>About Zoiko</h4>
                        <ul>
                            <li><Link href="/blog">Blogs</Link></li>
                            <li><Link href="/news">News</Link></li>
                            <li><Link href="/faq">FAQs</Link></li>
                            <li><Link href="/contact-us">Contact Us</Link></li>
                            <li className="dropdown"><Link href="#">Useful Resources <i className="bi bi-chevron-down"></i></Link>
                                <ul className="dropdownmenu">
                                    <li><Link href="/uk-retirement-resources">UK Retirement Resources</Link></li>
                                    <li><Link href="/uk-buisness-resources">UK Business Resources</Link></li>
                                    <li><Link href="/customer-complaint">Customer Complaint</Link></li>
                                    <li><Link href="/uk-government-websites">UK Government Websites</Link></li>
                                    <li><Link href="/uk-family-resources">UK Family Resources</Link></li>
                                    <li className="dropdown2"><Link href="#">Online Safty <i className="bi bi-chevron-down"></i></Link>
                                        <ul className="dropdownmenu2">
                                            <li><Link href="/secondary-student">Secondary Students</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-12 col-xs-12">
                        <h4>Zoiko Legal</h4>
                        <ul>
                            <li><Link href="/terms-and-conditions">Term and Conditions</Link></li>
                            <li><Link href="/vulnerability-policy">Vulnerability Policy</Link></li>
                            <li><Link href="/modern-slavery-policy">Modern Slavery Policy</Link></li>
                            <li><Link href="/esg-policy">ESG Policy</Link></li>
                            <li className="dropdown"><Link href="#">Zoiko Policies <i className="bi bi-chevron-down"></i></Link>
                                <ul className="dropdownmenu">
                                    <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                    <li><Link href="/cookie-policy">Cookie Policy</Link></li>
                                    <li><Link href="/late-fee-policy">Late Fee Policy</Link></li>
                                    <li><Link href="/refund-policy">Refund Policy</Link></li>
                                    <li><Link href="/terms-of-sale-policy">Terms of Sale Policy</Link></li>
                                    <li><Link href="/term-of-use-for-mobile-apps">Terms of Use for Mobile Apps</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
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
                <p className="text-center">&copy; {curyear} Zoiko Mobile is Link trading name of Zoiko Telecom Ltd. Registered in England and Wales (No. 15021457). Information Commissioner&apos;s Office Registration Number ZB585887. VAT Registration Number 465 1110 23. All rights reserved.</p>
            </Container>
        </Container>
        </>
    );
};

export default Footer;