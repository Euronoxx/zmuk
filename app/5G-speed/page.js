"use client"
import Header from "../components/Header";
import HeadBar from "../components/HeadBar";
import Footer from "../components/Footer";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

export default function FiveGSpeed () {
    return (
        <>
        <Header />
        <HeadBar text="Superfast 5G Data" />
        <Container className="redbordercontainer my-5 p-0">
            <Row>
                <Col md={6} sm={12} xs={12}>
                    <Image src={"/img/superfast-5g-data.png"} width={200} height={140} style={{width:'100%', height:'auto'}} alt="5G Data" />
                </Col>
                <Col md={6} sm={12} xs={12}>
                    <div className="p-5">
                        <h3 className="verybigred" style={{lineHeight:'42px'}}>SUPERFAST<br />5G DATA</h3>
                        <p className="green24bold mt-4">Another Reasone To Love<br />Zoiko Mobile: <span className="bigred">Speed &amp; Agility</span>!</p>
                    </div>
                </Col>
            </Row>
            <div className="p-4 body22 text-center">
            Get ready to supercharge your mobile experience with our ultra-fast 5G speed! It&apos;s not just fast; it&apos;s instant. Stream, game, download, and browse at speeds that keep up with your lifestyle. Whether you&apos;re streaming your favourite series in ultra-HD, battling it out in the latest online game, or downloading big files in a flash, our 5G has you covered.
            </div>
            <h2 className="text-center green24bold">Benefits of 5G</h2>
            <div className="d-flex flex-row justify-content-center" style={{gap:'20px'}}>
                <div className="text-center justify-content-center p-3" style={{width:'28%'}}>
                    <Image src={"/img/9x-faster.png"} alt="9X Faster" className="text-center" width={70} height={70} />
                    <p className="green24bold py-2">9X Faster</p>
                </div>
                <div className="text-center justify-content-center p-3" style={{width:'28%'}}>
                    <Image src={"/img/connectivity.png"} alt="Better Connectivity" className="text-center" width={70} height={70} />
                    <p className="green24bold py-2">Better Connectivity</p>
                </div>
                <div className="text-center justify-content-center p-3" style={{width:'28%'}}>
                    <Image src={"/img/super-smooth.png"} alt="Super Smooth" className="text-center" width={70} height={70} />
                    <p className="green24bold py-2">Super Smooth</p>
                </div>
            </div>
            <div className="p-4 body22 text-center">
            Not only does it enhance your day-to-day mobile interactions, but 5G also opens up new possibilities for advanced mobile technologies like augmented reality and next-generation IoT devices. This is more than just speed; it&apos;s a gateway to future tech, right in your pocket!
            </div>
            <div className="p-4 body22 text-center">
            Embrace the fast lane with 5G and never look back. It&apos;s not just an upgrade; it&apos;s a transformation to the way you connect, create, and explore online. Stay ahead of the curve &mdash; <span className="txtred">join the 5G revolution today!</span>
            </div>
        </Container>
        <Footer />
        </>
    );
}