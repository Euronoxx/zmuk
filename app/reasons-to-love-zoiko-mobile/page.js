"use client"
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";
import Link from "next/link";
import Image from "next/image";

export default function LoveZoiko () {
    return (
        <>
        <Header />
        <HeadBar text="Reasons to Love Zoiko" />
        <Container className="p-5">
            <div className="d-flex flex-md-row flex-column">
                <Image src={"/img/zk2.webp"} width={380} height={260} alt="I am Zoiko" style={{height:'auto'}} />
                <div className="p-4">
                    <h3 className="bigred">Zoikie the Labrador shares why Zoiko Mobile is the top dog in town!</h3>
                    <p className="green18 my-4">Zoikie gives Zoiko Mobile two paws up!<br />Join the pack and experience the love for youself!</p>
                    <Button href="/login" variant="outline-danger">Join Our Network Today</Button>
                </div>
            </div>
        </Container>
        <Container className="p-5">
            <Row>
                <Col md={4} sm={12} xs={12}>
                    <Link href={"/how-to-billing-works-with-zoiko"}>
                        <Card className="text-center p-5 w-100 cardheight">
                            <h4 className="txtred">Reason: 1<br />Unbeatable Coverage</h4>
                            <p className="txtgreen body22">Zoikie says, &quot;With Zoiko Mobile, I can stay connected even on the longest walks!&quot;</p>
                        </Card>
                    </Link>
                </Col>
                <Col md={4} sm={12} xs={12}>
                    <Link href={"/how-to-billing-works-with-zoiko"}>
                        <Card className="text-center p-5 w-100 cardheight">
                            <h4 className="txtred">Reason: 2<br />Super-Speedy Data</h4>
                            <p className="txtgreen body22">Zoikie exclaims, &quot;Zoiko&apos;s lightning-fast data keeps me streaming my favourite dog videos all day long!&quot;</p>
                        </Card>
                    </Link>
                </Col>
                <Col md={4} sm={12} xs={12}>
                     <Link href={"/how-to-billing-works-with-zoiko"}>
                    <Card className="text-center p-5 w-100 cardheight">
                        <h4 className="txtred">Reason: 3<br />Paws-itively Affordable</h4>
                        <p className="txtgreen body22">Zoikie remarks, &quot;My humans love Zoiko&apos;s competitive pricing - more treats for me, please!&quot;</p>
                    </Card>
                </Link>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={4} sm={12} xs={12}>
                    <Link href={"/how-to-billing-works-with-zoiko"}>
                        <Card className="text-center p-5 w-100 cardheight">
                            <h4 className="txtred">Reason: 4<br />Tail-Wagging Customer Support</h4>
                            <p className="txtgreen body22">Zoikie assures, &quot;Zoiko&apos;s customer support team is always there to lend a helping paw when I need it!&quot;</p>
                        </Card>
                    </Link>
                </Col>
                <Col md={4} sm={12} xs={12}>
                    <Link href={"/how-to-billing-works-with-zoiko"}>
                        <Card className="text-center p-5 w-100 cardheight">
                            <h4 className="txtred">Reason: 5<br />Fetching Rewards and Perks</h4>
                            <p className="txtgreen body22">Zoikie says, &quot;Zoiko&apos;s rewards programme is the pick of the litter - I get exclusive discounts and perks galore!&quot;</p>
                        </Card>
                    </Link>
                </Col>
                <Col md={4} sm={12} xs={12}>
                    <Link href={"/how-to-billing-works-with-zoiko"}>
                        <Card className="text-center p-5 w-100 cardheight">
                            <h4 className="txtred">Reason: 6<br />Flexible Plans to Suit Your Lifestyle</h4>
                            <p className="txtgreen body22">Zoikie says, &quot;Whether I&apos;m going on a short stroll or a long hike, Zoiko&apos;s flexible plans mean my humans can choose the perfect fit for our adventures together!&quot;</p>
                        </Card>
                    </Link>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    );
}