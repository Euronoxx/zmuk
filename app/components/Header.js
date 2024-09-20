import { Container } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../globals.css';

const header = () => {
    return (
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
                                <li><Link className="dropdown-item" href="#">30-Day Plans With Phones</Link></li>
                                <li><Link className="dropdown-item" href="#">Contract Plans With Phones</Link></li>
                                <li><Link className="dropdown-item" href="#">International Calling Plans</Link></li>
                                <li><Link className="dropdown-item" href="#">International Bolt-On Plans</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle mainmenu" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Business Deals</Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" href="/business-deals-sim-only-plans">SIM Only Plans</Link></li>
                                <li><Link className="dropdown-item" href="/business-deals-data-only-sims">Data Only SIMs</Link></li>
                                <li><Link className="dropdown-item" href="#">Super-Fast Broadband</Link></li>
                                <li><Link className="dropdown-item" href="#">Digital Lines</Link></li>
                                <li><Link className="dropdown-item" href="#">Day Pass Roaming Plans</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle mainmenu" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Devices</Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" href="#">Refurbished Smartphones</Link></li>
                                <li><Link className="dropdown-item" href="#">Tablets</Link></li>
                                <li><Link className="dropdown-item" href="#">Accessories</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mainmenu" href="animal-music-channel">Animal &amp; Music</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mainmenu" href="/about-us">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mainmenu" href="/contact-us">Contact Us</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle mainmenu" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Support
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" href="#">Action</Link></li>
                                <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                            </ul>
                        </li>
                    </ul>

                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" href="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/register">Register</Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default header;