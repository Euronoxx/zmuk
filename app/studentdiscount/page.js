"use client"
import Header from "../components/Header";
import HeadBar from "../components/HeadBar";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import HeadBarSmall from "../components/HeadBarSmall";

export default function StudentDiscount () {

    return (
        <>
        <Header />
        <HeadBar text="Zoiko Mobile Student Discount Programme" />
        <Container className="redborderbox p-4 my-5">
            <p className="body22">Zoiko Mobile is delighted to introduce a comprehensive student discount programme that not only offers significant savings on our monthly price plans but also provides a free SIM card to students looking to switch networks within the UK. We recognise the importance of staying connected while managing a tight budget, and we are here to help students make the most of their mobile services, including a hassle-free network switch.</p>
            <h3 className="bigred">Who Is Eligibile?</h3>
            <p className="body22">To qualify for Zoiko Mobile&apos;s student discount programme and receive a free SIM card for network switching, you must be a registered student age 16 and over at a recognised educational institution in the United Kingdom, including universities, colleges, and other higher education institutions. Proof of enrolment or a valid student ID is required when signing up for the discount and obtaining a free SIM card.</p>
            <h3 className="bigred">Discounted Monthly Price Plans</h3>
            <p className="body22">We offer discounted monthly price plans for students on various contract durations, including 6, 12, 18, and 24-month contracts. Here are the details of the student discounts available for our popular plans:</p>
        </Container>
        <Container className="p-5">
            <Row className="gx-5">
                <Col md={6} sm={12} xs={12}>
                    <Container className="redborderbox px-5">
                        <h2 className="bigred text-center">Junior Jetsetter</h2>
                        <ul className="green18">
                            <li>30 Day Rolling Plan: £5.00</li>
                            <li>12 Month Contract Plan: £4.80</li>
                            <li>24 Month Contract Plan: £4.65</li>
                            <hr />
                            <li>Data: 3GB</li>
                            <li>Calling Minutes: 500 (UK minutes)</li>
                            <li>SMS: 500 UK SMS</li>
                            <li>MMS: 500 UK MMS</li>
                            <li>Roaming Data: 2GB EU Roaming</li>
                            <li>300 Calling Minutes || 300 SMS</li>
                            <li>WiFi Calling: Yes</li>
                            <li>E-SIM: Yes</li>
                        </ul>
                    </Container>
                </Col>
                <Col md={6} sm={12} xs={12}>
                    <Container className="greenborderbox px-5">
                        <h2 className="green24bold text-center">Roam &amp; Study Max</h2>
                        <ul className="txtred body22">
                            <li>30 Day Rolling Plan: £15.99</li>
                            <li>12 Month Contract Plan: £13.99</li>
                            <li>24 Month Contract Plan: £11.99</li>
                            <hr />
                            <li>Data: 30GB</li>
                            <li>Calling Minutes: Unlimited (UK minutes)</li>
                            <li>SMS: Unlimited(UK SMS)</li>
                            <li>MMS: Unlimited(UK MMS)</li>
                            <li>Roaming Data: 15GB EU Roaming</li>
                            <li>1000 Calling Minutes || 1000 SMS</li>
                            <li>Include Free International Call to over 80 countries</li>
                            <li>WiFi Calling: Yes</li>
                            <li>E-SIM: Yes</li>
                        </ul>
                    </Container>
                </Col>
            </Row>
        </Container>
        <HeadBarSmall text="--" />
        <Container className="redborderbox" style={{marginTop:'-30px'}}>
            <Row>
                <Col md={8} sm={12} xs={12}>
                    <h3 className="bigred">Wag Your Way To A Fantastic Deal With Zoiko Mobile&apos;s Student Discount Programme!</h3>
                    <p className="green18">Our lovable Labrador, Max, knows that student life can be a bit of a challenge at times. That&apos;s why we&apos;re offering an exclusive 20% discount on our mobile plans, just for you! Whether you&apos;re studying hard or hardly studying, we&apos;ve got you covered with our fantastic student deals. So why wait? Sign up today and start enjoying the benefits of being a Zoiko Mobile student - <span className="txtred">it&apos;s a paw-some offer you won&apos;t want to miss!</span></p>
                </Col>
                <Col md={4} sm={12} xs={12}>
                    <Image src={"/img/studentdiscount.png"} width={300} height={300} alt="EU Roaming" style={{width:'90%',height:'auto'}} />
                </Col>
            </Row>
        </Container>
        <Container className="redborderbox py-5 my-5">
            <h3 className="bigred">Free SIM Card and Network Switching</h3>
            <p className="body22">As part of our student discount programme, you will also receive a free SIM card when you switch to Zoiko Mobile. Switching networks within the UK is a straightforward process, and you can keep your existing number. By making this switch, you gain access to our discounted student plans, ensuring flexibility and savings.</p>
            <h3 className="bigred">How to Switch Networks in the UK</h3>
            <ul className="body22">
                <li>Visit the Zoiko Mobile website at www.zoikomobile.co.uk.</li>
                <li>Select the monthly plan that best suits your requirements.</li>
                <li>Present your valid student ID or proof of enrolment to our customer service representative.</li>
                <li>Fill out the necessary paperwork and provide your student details.</li>
                <li>Enjoy the discounted rate on your chosen plan, and receive your free SIM card for network switching.</li>
                <li>Contact your current network provider to request a PAC (Porting Authorisation Code).</li>
                <li>Insert your Zoiko Mobile SIM card and contact our customer support to initiate the porting process.</li>
                <li>Your existing number will be transferred to Zoiko Mobile, and you can start enjoying our services with your familiar number.</li>
            </ul>
            <h3 className="bigred">Terms and Conditions</h3>
            <ul className="body22">
                <li>The student discount and free SIM card offer are available exclusively to registered students at recognised UK educational institutions.</li>
                <li>A valid proof of enrolment or student ID is required for eligibility.</li>
                <li>The discount is applicable to the specified monthly plans and contract durations as mentioned earlier.</li>
                <li>The free SIM card is available to students switching networks to Zoiko Mobile.</li>
                <li>Renew your student discount with updated proof of enrolment upon contract expiration.</li>
                <li>Zoiko Mobile is dedicated to helping students stay connected, save money, and make network switching in the UK a seamless process. Join us today to experience affordable, high-quality mobile services while focusing on your studies and social life. Stay connected, stay smart, and stay within your budget with Zoiko Mobile.</li>
            </ul>
        </Container>
        <Footer />
        </>
    );
}