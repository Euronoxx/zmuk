"use client"
import React, { useState } from "react";
import Header from "../components/Header";
import HeadBar from "../components/HeadBar";
import Footer from "../components/Footer";
import { Col, Container, Row, Button } from "react-bootstrap";
import HeadBarSmall from "../components/HeadBarSmall";

export default function RoamingOverage () {

    const [isToggled, setIsToggled] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const toggleView = () => {
        setOpen(!isOpen);
        setIsToggled(!isToggled);
    }

    return (
        <>
        <Header />
        <HeadBar text="Zoiko Roaming Zone Charges (Text)" />
        <Container className="greenborderbox mt-4" style={{paddingBottom:'8px'}}>
            <Row className="text-center">
                <Col><p className="bigredlt">Zones</p></Col>
                <Col><p className="bigredlt">Cost Per Text</p></Col>
                <Col><p className="bigredlt">Cost Per Text</p></Col>
            </Row>
        </Container>
        <Container className="mt-2 mb-4 text-center" style={{paddingBottom:'8px'}}>
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
        <Container className="greenborderbox mt-3" style={{paddingBottom:'8px'}}>
            <Row className="text-center">
                <Col><p className="bigredlt">Zones</p></Col>
                <Col><p className="bigredlt">Inbound cost (£)/Min</p></Col>
                <Col><p className="bigredlt">Outbound cost (£)/Min</p></Col>
            </Row>
        </Container>
        <Container className="mt-2 text-center mb-3">
            <Row className="text-center">
                <Col><p className="green18">Countries</p></Col>
                <Col><p className="green18">Sent from visited Zones to any destinations whilst abroad (£)</p></Col>
                <Col><p className="green18">Received whilst abroad (£)</p></Col>
            </Row>
            <Row>
                <Col style={{border:'1px solid #0A5A35'}} className="green18">Zone 1 Countries</Col>
                <Col style={{border:'1px solid #0A5A35'}} className="body22">£0.013</Col>
                <Col style={{border:'1px solid #0A5A35'}} className="body22">£0.036</Col>
            </Row>
            <Row>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="green18">Zone 2 Countries</Col>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="body22">£0.065</Col>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="body22">£0.052</Col>
            </Row>
            <Row>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="green18">Zone 3 Countries</Col>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="body22">£0.065</Col>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="body22">£0.033</Col>
            </Row>
            <Row>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="green18">Zone 4 Countries</Col>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="body22">£0.065</Col>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="body22">£0.390</Col>
            </Row>
            <Row>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="green18">Zone 5 Countries</Col>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="body22">£0.520</Col>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="body22">£1.170</Col>
            </Row>
        </Container>
        <HeadBarSmall text="Zoiko Roaming Zone Charges (Data)" />
        <Container className="greenborderbox mt-3" style={{paddingBottom:'8px'}}>
            <Row className="text-center">
                <Col><p className="bigredlt">Zones</p></Col>
                <Col><p className="bigredlt">Price (£)/MB</p></Col>
            </Row>
        </Container>
        <Container className="mt-2 text-center mb-3">
            <Row>
                <Col style={{border:'1px solid #0A5A35'}} className="green18">Zone 1 Countries</Col>
                <Col style={{border:'1px solid #0A5A35'}} className="body22">£0.0040</Col>
            </Row>
            <Row>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="green18">Zone 2 Countries</Col>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="body22">£0.0160</Col>
            </Row>
            <Row>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="green18">Zone 3 Countries</Col>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="body22">£0.0320</Col>
            </Row>
            <Row>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="green18">Zone 4 Countries</Col>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="body22">£0.0800</Col>
            </Row>
            <Row>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="green18">Zone 5 Countries</Col>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="body22">£1.0900</Col>
            </Row>
            <Row>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="green18">Zone 6 Countries</Col>
                <Col style={{border:'1px solid #0A5A35', borderTop:'none'}} className="body22">£3.1250</Col>
            </Row>
            <h2 className="green32bold text-center py-3">Roaming Data is billed per kilobyte sent to or from Subscribers.</h2>
        </Container>
        <HeadBarSmall text="--" />
        <Container className="greenborderbox text-center p-5 mb-4" style={{marginTop:'-30px'}}>
            <p className="bigred">For Pay Monthly Subscribers</p>
            <p className="green18">For monthly recurring data bundles, Zoiko Mobile does not impose a cap, and any Out-of-Bundle usage will be charged at the Data Out-of-Bundle Charge rate. Subscriptions are charged upfront for the upcoming month. Pro-rata charges apply during the first billing period from the date of bundle activation until the next bill-cycle date.</p>
        </Container>
        <Container className="redborderbox p-5 mb-3">
            <p className="bigred text-center">Voice and Text Bundles</p>
            <p className="green18">Zoiko Mobile offers Voice and Text Bundles for National Calls and National Texts within the Underlying Mobile Network and while roaming in Zone 1 (to comply with RLAH regulation). These bundles do not cover Calls and SMS while roaming outside the EU, to any international destination, to any Premium or Special numbers or Services, or incoming Calls and Texts. Please note that only one Voice and Texts Bundle can be subscribed to per SIM card at a time.</p>
            {isOpen && (
                <>
                <p className="green18">Pro-rata charges are applied during the first billing period from the date of Bundle activation until the next bill- cycle date. No pro-rata balance is refunded upon Bundle de-activation (the last month is fully billed).</p>
                <p className="green18">Voice and Text Bundles come with an Allowance of Minutes and SMS. If you exceed the allowances, Zoiko Mobile will apply the Out-of-Bundle Charge for each additional Minute/SMS used outside the defined Bundle Allowance.</p>
                <p className="green18">For subscribers using SIP Mobile Services, the Voice Allowance includes National Calls on the Underlying Mobile Network and while roaming in Zone 1 (to comply with RLAH regulation), to be routed to the Zoiko Mobile Platform. Please note that for voice calls delivered to the Service Provider Platform, the Service Provider is responsible for the costs associated with the termination of calls through its own interconnect agreements. Voice Calls from the Service Provider network (Mobile Call Termination SIP Service) are also included.</p>
                <p className="green18">The maximum call duration is set to 2 hours. Beyond this duration, Zoiko Mobile reserves the right to bill the extra usage at the Out-of-Bundle Charge.</p>
                <p className="green18">All Voice and Texts Bundles are limited to a maximum of 99 distinct destination numbers from each mobile Subscriber per month. Exceeding this limit, Zoiko Mobile reserves the right to bill the extra usage at the Out-of-Bundle Charge.</p>
                </>
            )}
            <div className="text-center py-4"><Button variant="outline-danger" onClick={toggleView}>{isToggled ? 'Read Less' : 'Read More'}</Button></div>
        </Container>
        <div className="text-center py-4">
            <Button href="#" variant="outline-danger" size="lg">Zone 1 - Ireland, Guernsey, Jersey, Isle of Man</Button>
        </div>
        <Footer />
        </>
    );
}