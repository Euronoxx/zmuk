"use client"
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeadBar from "../../components/HeadBar";
import Link from "next/link";
import HeadBarSmall from "@/app/components/HeadBarSmall";
import Image from "next/image";
import data from '../../products/mobiledata.json';

export default function ContractPlanMobile () {
    return (
        <>
        <Header />
        <HeadBar text="Get Trend-setting Smartphones With Flexible Monthly Contracts!" />
        <Container className="py-4">
            <HeadBarSmall text="--" />
            <div className="announcebox">
                <Row>
                    <div className="col-md-8 col-sm-12 p-4">
                        <div className="bigred">
                        Get a Honk-tastic deal with our Contract Plans and smartphones!
                        </div>
                        <p className="green18 pt-4">Our loyal goose, Gerald, has waddled in with some fantastic offers:</p>
                        <p className="green18">
                        <i className="bi bi-music-note-beamed txtred"></i> Affordable phones with no strings attached<br />
                        <i className="bi bi-music-note-beamed txtred"></i> Flexible Contract Plans to suit your needs<br />
                        <i className="bi bi-music-note-beamed txtred"></i> Generous data, calls, and texts to keep you connected<br />
                        <i className="bi bi-music-note-beamed txtred"></i> Loyalty rewards and discounts with our Goose Loyalty Programme
                        </p>
                        <Link href={'/login'} className="txtred body22">Don&apos;t be a featherbrain, grab a deal today and stay connected with Zoiko Mobile!</Link>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <Image src={"/img/duck.png"} width={400} height={400} alt="Red Fox" style={{width:'100%', height:'auto'}} />
                    </div>
                </Row>
            </div>
        </Container>
        <Container className="p-5">
            <p className="green18">Showing 9 Products out of 9</p>
            <Row>
                {data.phones.map((item) => (
                    <Col key={item.id} md={4}>
                        <Card className="p-4 mb-4" style={{height:'400px'}}>
                            <h3 dangerouslySetInnerHTML={{ __html: item.name }} className="green24bold" />
                            <Row>
                                <Col md={6} sm={6} xs={6}>
                                    Starting From:<p dangerouslySetInnerHTML={{ __html: item.price }} className="txtred" style={{fontSize:'14px'}} />
                                </Col>
                                <Col md={6} sm={6} xs={6}>
                                    Device condition:<p dangerouslySetInnerHTML={{ __html: item.condition }} style={{fontSize:'14px'}} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} sm={6} xs={6}>
                                    <Image src={item.image} alt={item.name} width={130} height={180} />
                                </Col>
                                <Col md={6} sm={6} xs={6}>
                                    Available colors:<p dangerouslySetInnerHTML={{ __html: item.color }} style={{fontSize:'14px'}} />
                                    Internal Storage:<p dangerouslySetInnerHTML={{ __html: item.storage }} style={{fontSize:'14px'}} />
                                    <p dangerouslySetInnerHTML={{ __html: item.quality }} style={{fontSize:'14px'}} />
                                </Col>
                            </Row>
                            <div className="mt-4">
                                <Button variant="outline-danger" href={`/products/${item.slug}`}>View Details</Button>&nbsp;<Button variant="outline-danger" href={`/products/${item.slug}`}>Buy Now</Button>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
        <Footer />
        </>
    );
}