"use client"
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";
import { Carousel } from "react-bootstrap";

export default function AnimalMusic () {

    return (
        <>
        <Header />
        <HeadBar text="Welcome to the Animal &amp; Music Channel!" />
        <Container fluid className="animalmusicbannerbg">
            <Container className="p-4 my-4">
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <div className="text-center">
                            <h2 className="verybigred">Where Your Love For Animals Meets The Rhythm Of Music</h2>
                            <p className="green18">Explore The Unique Bond Between Animals And Music</p>
                            <Button variant="outline-danger mx-4" href="/zoiko-mobile-switch-save-form">Switch &amp; Save</Button>
                            <Button variant="outline-danger" href="/plan">View All Plans</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
        <Container className="pt-5">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <div className="text-center">
                        <h2 className="bigred">Adorable Animal Moments</h2>
                        <p className="body22">Watch Heartwarming Videos Of Animals Doing What They Do Best - Being Cute, Playful, And Full Of Life.</p>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container fluid className="p-5">
            <Row>
                <Col md={4} sm={12} xs={12}>
                    <Image src="/img/petdog.jpg" fluid alt="Pet Dog" rounded />
                </Col>
                <Col md={4} sm={12} xs={12}>
                    <Image src="/img/petchimp.jpg" fluid alt="Pet Chimp" rounded />
                </Col>
                <Col md={4} sm={12} xs={12}>
                    <Image src="/img/catndog.jpg" fluid alt="Cat and Dog" rounded />
                </Col>
            </Row>
            <Container className="py-5">
                <Row>
                    <Col md={4}>
                        <h2 className="verybigred">Animals In Harmony</h2>
                        <p className="body22">Discover Videos Featuring Animals That Sing, Dance, And Groove To The Beat. From Parrats That Sing To Dogs That Dance, These Animals Are True Performers!</p>
                        <Button variant="outline-danger" size="lg" href="/plan" className="mb-4">Explore Our Plans <i class="bi bi-arrow-right"></i></Button>
                    </Col>
                    <Col md={8}>
                        <Carousel controls={false}>
                            <Carousel.Item>
                                <Image src="/img/puppy.jpg" fluid alt="Puppy" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src="/img/puppies.jpg" fluid alt="Puppies" />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
            <Row>
                <Col md={4} sm={12}>
                    <Image src="/img/smallpuppy.jpg" fluid alt="Small Puppy" rounded className="mb-3" />
                    <Image src="/img/dogfood.jpg" fluid alt="Dog Meal" rounded />
                </Col>
                <Col md={4} sm={12}>
                    <h3 className="verybigred text-center">Special Moments Shared</h3>
                    <p className="body22 text-center">Enjoy Touching And Fun Videos Of Animals And Their Owners Sharing Special Moments. See How Music Brings Them Closer Together.</p>
                    <Image src="/img/donkey.jpg" fluid alt="Donkey" rounded />
                </Col>
                <Col md={4} sm={12}>
                    <Image src="/img/puppyncat.jpg" fluid alt="Cat and Puppy" rounded className="mb-3" />
                    <Image src="/img/singlepuppy.jpg" fluid alt="Single Puppy" rounded />
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    );
}