"use client"
import Header from "../components/Header";
import HeadBar from "../components/HeadBar";
import Footer from "../components/Footer";
import { Col, Container, Row } from "react-bootstrap";
import HeadBarSmall from "../components/HeadBarSmall";

export default function RoamingOverage () {

    return (
        <>
        <Header />
        <HeadBar text="Zoiko Roaming Zone Charges (Text)" />
        <Container className="greenborderbox mt-5" style={{paddingBottom:'8px'}}>
            <Row className="text-center">
                <Col><p className="bigredlt">Zones</p></Col>
                <Col><p className="bigredlt">Cost Per Text</p></Col>
                <Col><p className="bigredlt">Cost Per Text</p></Col>
            </Row>
        </Container>
        <Container className="mt-2 text-center" style={{paddingBottom:'8px'}}>
            <Row className="text-center">
                <Col><p className="green18">Countries</p></Col>
                <Col><p className="green18">Sent from visited Zones to any destinations whilst abroad (£)</p></Col>
                <Col><p className="green18">Received whilst abroad (£)</p></Col>
            </Row>
            <Row>
                <Col style={{border:'1px solid #0A5A35'}} className="green18">Zone 1 Countries</Col>
                <Col style={{border:'1px solid #0A5A35'}} className="body22">£0.08</Col>
                <Col style={{border:'1px solid #0A5A35'}} className="body22">£0.00</Col>
            </Row>
            <Row>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="green18">Zone 2 Countries</Col>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="body22">£0.10</Col>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="body22">£0.00</Col>
            </Row>
            <Row>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="green18">Zone 3 Countries</Col>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="body22">£0.16</Col>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="body22">£0.00</Col>
            </Row>
            <Row>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="green18">Zone 4 Countries</Col>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="body22">£0.35</Col>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="body22">£0.00</Col>
            </Row>
            <Row>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="green18">Zone 5 Countries</Col>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="body22">£0.70</Col>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="body22">£0.00</Col>
            </Row>
            <Row>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="green18">Zone 6 Countries</Col>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="body22">£0.70</Col>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="body22">£0.00</Col>
            </Row>
        </Container>
        <HeadBarSmall text="Roaming Zones (Calls)" />
        <Footer />
        </>
    );
}