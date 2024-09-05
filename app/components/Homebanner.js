import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import '../globals.css';
import { Carousel } from "react-bootstrap";

const homebanner = () => {

    return (
        <Container fluid className="p-0">
            <div className="headbar">
                <Container className="py-2">
                    Enjoy Amazing SIM Only Deals From the Animal <span className="txtred">&amp;</span> Music Loving Network!
                </Container>
            </div>

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item slide1 active">
                        <div className="container">
                            <div className="btnbox">
                                <Link href='/zoiko-mobile-switch-save-form' className="gr">Switch &amp; Save</Link>
                                <Link href="#" className="wh">Find out more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item slide2">
                        <div className="container">
                            <div className="btnbox">
                                <Link href='/zoiko-mobile-switch-save-form' className="gr">Switch &amp; Save</Link>
                                <Link href="#" className="wh">Find out more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item slide3">
                        <div className="container">
                            <div className="btnbox">
                                <Link href='/zoiko-mobile-switch-save-form' className="gr">Switch &amp; Save</Link>
                                <Link href="#" className="wh">Find out more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item slide4">
                        <div className="container">
                            <div className="btnbox">
                                <Link href="#" className="gr">View Detail</Link>
                                <Link href="#" className="wh">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item slide5">
                        <div className="container">
                            <div className="btnbox">
                                <Link href='/zoiko-mobile-switch-save-form' className="gr">Switch &amp; Save</Link>
                                <Link href="#" className="wh">Find out more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item slide6">
                        <div className="container">
                            <div className="btnbox">
                                <Link href='/zoiko-mobile-switch-save-form' className="gr">Switch &amp; Save</Link>
                                <Link href="#" className="wh">Find out more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item slide7">
                        <div className="container">
                            <div className="btnbox">
                                <Link href='/zoiko-mobile-switch-save-form' className="gr">Switch &amp; Save</Link>
                                <Link href="#" className="wh">Find out more</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </Container>
    );
};
export default homebanner;