"use client"
import React, { useState } from "react";
import Header from "../components/Header";
import HeadBar from "../components/HeadBar";
import Footer from "../components/Footer";
import HeadBarSmall from "../components/HeadBarSmall";
import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";


export default function BundledSimPlan () {

    const [isToggled, setIsToggled] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const toggleView = () => {
        setOpen(!isOpen);
        setIsToggled(!isToggled);
    }

    return (
        <>
        <Header />
        <HeadBar text="Cost Saving Bundled Plans" />
        <Container className="greenborderbox mt-4 p-0">
            <Row className="text-center">
                <Col className="bigredlt p-2" style={{borderRight:'1px solid #DF1E5A'}}>Features</Col>
                <Col className="bigredlt p-2" style={{borderRight:'1px solid #DF1E5A'}}>Cost</Col>
                <Col className="bigredlt p-2">Included</Col>
            </Row>
        </Container>
        <Container>
            <Row style={{borderBottom:'1px solid #DF1E5A'}}>
                <Col className="txtgreen p-2" style={{borderRight:'1px solid #DF1E5A'}}>Calls to UK landlines starting with 01, 02, 03</Col>
                <Col className="txtgreen text-center p-2" style={{borderRight:'1px solid #DF1E5A'}}>£0.22/min</Col>
                <Col className="txtgreen text-center p-2">YES*</Col>
            </Row>
            <Row style={{borderBottom:'1px solid #DF1E5A'}}>
                <Col className="txtgreen p-2" style={{borderRight:'1px solid #DF1E5A'}}>Calls to UK mobiles (any network)</Col>
                <Col className="txtgreen text-center p-2" style={{borderRight:'1px solid #DF1E5A'}}>£0.25/min</Col>
                <Col className="txtgreen text-center p-2">YES*</Col>
            </Row>
            <Row style={{borderBottom:'1px solid #DF1E5A'}}>
                <Col className="txtgreen p-2" style={{borderRight:'1px solid #DF1E5A'}}>Customer service 500</Col>
                <Col className="txtgreen text-center p-2" style={{borderRight:'1px solid #DF1E5A'}}>FREE</Col>
                <Col className="txtgreen text-center p-2">YES*</Col>
            </Row>
            <Row style={{borderBottom:'1px solid #DF1E5A'}}>
                <Col className="txtgreen p-2" style={{borderRight:'1px solid #DF1E5A'}}>Voicemail 555</Col>
                <Col className="txtgreen text-center p-2" style={{borderRight:'1px solid #DF1E5A'}}>FREE</Col>
                <Col className="txtgreen text-center p-2">N/A</Col>
            </Row>
            <Row style={{borderBottom:'1px solid #DF1E5A'}}>
                <Col className="txtgreen p-2" style={{borderRight:'1px solid #DF1E5A'}}>999, 112, NHS 111</Col>
                <Col className="txtgreen text-center p-2" style={{borderRight:'1px solid #DF1E5A'}}>FREE</Col>
                <Col className="txtgreen text-center p-2">N/A</Col>
            </Row>
            <Row style={{borderBottom:'1px solid #DF1E5A'}}>
                <Col className="txtgreen p-2" style={{borderRight:'1px solid #DF1E5A'}}>Non-emergency 101</Col>
                <Col className="txtgreen text-center p-2" style={{borderRight:'1px solid #DF1E5A'}}>£0.15/CALL</Col>
                <Col className="txtgreen text-center p-2">NO</Col>
            </Row>
            <Row style={{borderBottom:'1px solid #DF1E5A'}}>
                <Col className="txtgreen p-2" style={{borderRight:'1px solid #DF1E5A'}}>0800/0500/0808</Col>
                <Col className="txtgreen text-center p-2" style={{borderRight:'1px solid #DF1E5A'}}>FREE</Col>
                <Col className="txtgreen text-center p-2">N/A</Col>
            </Row>
            <Row style={{borderBottom:'1px solid #DF1E5A'}}>
                <Col className="txtgreen p-2" style={{borderRight:'1px solid #DF1E5A'}}>UK SMS</Col>
                <Col className="txtgreen text-center p-2" style={{borderRight:'1px solid #DF1E5A'}}>£0.07/SMS</Col>
                <Col className="txtgreen text-center p-2">YES*</Col>
            </Row>
            <Row style={{borderBottom:'1px solid #DF1E5A'}}>
                <Col className="txtgreen p-2" style={{borderRight:'1px solid #DF1E5A'}}>UK MMS</Col>
                <Col className="txtgreen text-center p-2" style={{borderRight:'1px solid #DF1E5A'}}>£0.25/MMS</Col>
                <Col className="txtgreen text-center p-2">YES*</Col>
            </Row>
            <Row style={{borderBottom:'1px solid #DF1E5A'}}>
                <Col className="txtgreen p-2" style={{borderRight:'1px solid #DF1E5A'}}>UK DATA</Col>
                <Col className="txtgreen text-center p-2" style={{borderRight:'1px solid #DF1E5A'}}>£0.08/MB</Col>
                <Col className="txtgreen text-center p-2">YES*</Col>
            </Row>
        </Container>
        <Container className="p-4">
            <p className="green18">For monthly recurring data bundles and All-In-One Mobile Deals, Zoiko Mobile does not impose a cap, and any Out-of-Bundle usage will be charged at the Data Out-of-Bundle Charge rate for affordable Bundled SIM Plan Offers and cheap bundle deals. Subscriptions for SIM and Data Packages are charged upfront for the upcoming month. Pro-rata charges apply during the first billing period from the date of bundle activation until the next bill-cycle date.</p>
        </Container>
        <HeadBarSmall text="Voice And Text Bundles" />
        <Container className="redborderbox p-4 my-4">
            <p className="green18">Zoiko Mobile offers Voice and Text Bundles for National Calls and National SMS within the Underlying Mobile Network and Value Mobile Packages while roaming in Zone 1 (to comply with RLAH regulation). These bundles do not cover Calls and SMS while roaming outside the EU, to any international destination, to any Premium or Special numbers or Services, or incoming Calls and SMS. Please note that only one Voice and Texts can be subscribed to per SIM card at a time.</p>
        </Container>
        <div className="text-center py-4">
            <Button href="#" variant="outline-danger" size="lg">Zone 1 - Ireland, Guernsey, Jersey, Isle of Man</Button>
        </div>
        {isOpen && (
        <Container className="body22">
            <p>Pro-rata charges are applied during the first billing period from the date of Bundle activation until the next bill- cycle date. No pro-rata balance is refunded upon Bundle de-activation the last month is fully billed.</p>
            <p>Voice and Text Bundles come with an Allowance of Minutes and SMS. If you exceed the allowances, Zoiko Mobile will apply the Out-of-Bundle Charge for each additional Minute/SMS used outside the defined Bundle Allowance.</p>
            <p>For subscribers using SIP Mobile Services, the Voice Allowance includes National Calls on the Underlying Mobile Network and while roaming in Zone 1 (to comply with RLAH regulation), to be routed to the Zoiko Mobile Platform. Please note that for <Link href={"https://zoikomobile.co.uk/plan"} target="_blank">voice calls</Link> delivered to the Service Provider Platform, the Service Provider is responsible for the costs associated with the termination of calls through its own interconnect agreements. Voice Calls from the Service Provider network (Mobile Call Termination SIP Service) are also included.</p>
            <p style={{fontWeight:'bold'}}>For subscribers using SIP Mobile Services, the Voice Allowance includes National Calls on the Underlying Mobile Network and while roaming in Zone 1 (to comply with RLAH regulation), to be routed to the <Link href={"https://zoikomobile.co.uk"} target="_blank">Zoiko Mobile</Link> Platform. Zoiko Mobile offers affordable bundle SIM plans and cheap bundle deals. Please note that for voice calls delivered to the Service Provider Platform, the Service Provider is responsible for the costs associated with the termination of calls through its own interconnect agreements. Voice Calls from the Service Provider network (Mobile Call Termination SIP Service) are also included.</p>
            <p>The maximum call duration is set to 2 hours. Beyond this duration, Zoiko Mobile reserves the right to bill the extra usage at the Out-of-Bundle Charge.</p>
            <p>All Voice and Texts Bundles are limited to a maximum of 99 distinct destination numbers from each mobile Subscriber per month. Exceeding this limit, Zoiko Mobile reserves the right to bill the extra usage at the Out-of-Bundle Charge.
            </p>
        </Container>
        )}
        <div className="text-center py-4"><Button variant="outline-danger" onClick={toggleView}>{isToggled ? 'Read Less' : 'Read More'}</Button></div>
        <Footer />
        </>
    );
}