"use client"
import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../globals.css';
import { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';

const Header = () => {
    const [isMounted, setIsMounted] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }
    return (
        <>
        <nav className="navbar companyred sticky-top navbar-expand-lg navbar-light bg-light">
            <Container>
                <Link className="navbar-brand" href="/">
                    <Image src='/img/zoikomobile_logo.png' width={170} height={65} alt="Logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle mainmenu" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Zoiko Plans</Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" href='/plans'>All Plans</Link></li>
                                <li><Link className="dropdown-item" href="/civilservants">Public Sector Lifetime Deals</Link></li>
                                <li><Link className="dropdown-item" href="/zoiko-saver-deals">Low Income Deals</Link></li>
                                <li><Link className="dropdown-item" href="/student-discount-programme">Student Deals</Link></li>
                                <li><Link className="dropdown-item" href="/business-deals-data-only-sims">Data Only SIMs</Link></li>
                                <li><Link className="dropdown-item" href="/30-day-plan">30-Day &apos;No Contract&apos; Plans</Link></li>
                                <li><Link className="dropdown-item" href="/product-category/monthly-plan-mobile">30-Day Plans With Phones</Link></li>
                                <li><Link className="dropdown-item" href="/product-category/contract-plan-mobile">Contract Plans With Phones</Link></li>
                                <li><Link className="dropdown-item" href="#">International Calling Plans</Link></li>
                                <li><Link className="dropdown-item" href="#">International Bolt-On Plans</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle mainmenu" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Business Deals</Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" href="/business-deals-sim-only-plans">SIM Only Plans</Link></li>
                                <li><Link className="dropdown-item" href="/business-deals-data-only-sims">Data Only SIMs</Link></li>
                                <li><Link className="dropdown-item" href="/broadband-deals">Super-Fast Broadband</Link></li>
                                <li><Link className="dropdown-item" href="/business-deals-digital-lines">Digital Lines</Link></li>
                                <li><Link className="dropdown-item" href="/business-deals-day-pass-roaming-plans">Day Pass Roaming Plans</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle mainmenu" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Devices</Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" href="/product-category/refurbished">Refurbished Smartphones</Link></li>
                                <li><Link className="dropdown-item" href="#">Tablets</Link></li>
                                <li><Link className="dropdown-item" href="#">Accessories</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mainmenu" href="/animal-music-channel">Animal &amp; Music</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mainmenu" href="/about-us">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mainmenu" href="/contact-us">Contact Us</Link>
                        </li>
                        <li className="nav-item dropdown widemenu">
                            <Link className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Support</Link>
                            <div className="dropdown-menu mgwidemenu" role="menu">
                                <Container className="py-4">
                                    <Row>
                                        <Col md={3} sm={12} xs={12}>
                                            <p><span className="txtgreen">Customer Support</span></p>
                                            <ul className="menulist">
                                                <li><Link href={"/support"}>Help &amp; Support</Link></li>
                                                <li><Link href={"/reasons-to-love-zoiko-mobile"}>Reasons to love Zoiko</Link></li>
                                                <li><Link href={"https://ee.co.uk/help/mobile-coverage-checker"} target="_blank">Check Network Coverage</Link></li>
                                                <li><Link href={"/faq"}>FAQs</Link></li>
                                                <li><Link href={"/how-to-activate-sim"}>How to activate SIM Cards</Link></li>
                                            </ul>
                                        </Col>
                                        <Col md={2} sm={12} xs={12}>
                                            <p><span className="txtgreen">Get Started</span></p>
                                            <ul className="menulist">
                                                <li><Link href={"/switch"}>Switch &amp; Save</Link></li>
                                                <li><Link href="/login">Join Zoiko Family</Link></li>
                                                <li><Link href="/free-delivery-policy">Free Delivery</Link></li>
                                                <li><Link href="/product-category/refurbished">Refurbished Smartphones</Link></li>
                                                <li><Link href={"/return-policy"}>Return Policy</Link></li>
                                            </ul>
                                        </Col>
                                        <Col md={2} sm={12} xs={12}>
                                            <p><span className="txtgreen">Customer Dashbpard</span></p>
                                            <ul className="menulist">
                                                <li><Link href="/login">Login</Link></li>
                                            </ul>
                                        </Col>
                                        <Col md={3} sm={12} xs={12}>
                                            <p><span className="txtgreen">Tariffs &amp; Prices</span></p>
                                            <ul className="menulist">
                                                <li><Link href={"/roaming-and-overage"}>Roaming Charges</Link></li>
                                                <li><Link href={"/bundled-sim-plan-offer"}>Bundled Offers</Link></li>
                                                <li>Free International Calls</li>
                                                <li><Link href={"/international-out-of-bundle-rates"}>Out-of-Bundle Rates</Link></li>
                                                <li><Link href={"/civilservants"}>Public Sector Lifetime Deals</Link></li>
                                            </ul>
                                        </Col>
                                        <Col md={2} sm={12} xs={12}>
                                            <p><span className="txtgreen">What&apos;s Included</span></p>
                                            <ul className="menulist">
                                                <li><Link href={"/5G-speed"}>5G Speed</Link></li>
                                                <li><Link href={"/wi-fi-calling"}>Wi-Fi Calling</Link></li>
                                                <li><Link href={"/eu-roaming"}>EU Roaming</Link></li>
                                                <li><Link href={"/global-chatter-free-international-calls"}>International Calls</Link></li>
                                                <li><Link href={"/esim"}>eSIM</Link></li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </li>
                    </ul>

                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link href={"#"} className="nav-link" onClick={handleShow}><i className="bi bi-search"></i></Link>
                        </li>
                        <li className="nav-item">
                            <Link href={"#"} className="nav-link px-3"><i className="bi bi-cart"></i></Link>
                        </li>
                        <li className="nav-item dropdown">
                            <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">My Zoiko</button>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" href="/login">Login</Link></li>
                                <li><Link className="dropdown-item" href="/register">Register</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>

        <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Body>
                <div className="p-5">
                    <h2 className="mb-3">Search Zoiko Products</h2>
                    <label htmlFor="search">Enter keyword to search</label>
                    <input type="text" name="search" className="form-control" />
                    <Button variant="primary" onClick={handleClose} className="mt-4">Search</Button>&nbsp;
                    <Button variant="primary" onClick={handleClose} className="mt-4">Cancel</Button>
                </div>
            </Modal.Body>
        </Modal>
        </>
    );
};

export default Header;