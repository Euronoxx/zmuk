"use client"
import { Container, Button } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";
import React, { useState } from "react";

function BillingWorks () {

    const [isToggled, setIsToggled] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const toggleView = () => {
        setOpen(!isOpen);
        setIsToggled(!isToggled);
    }

    return (
        <>
        <Header />
        <HeadBar text="How billing works with Zoiko" />
        <Container className="py-4 redborderbox my-5">
            <p>Billing with Zoiko Mobile involves several payment options, all of which are paid in advance. You can choose from the following payment methods:</p>
            <ul>
                <li>Credit/Debit card</li>
                <li>PayPal</li>
                <li>Apple/Google Pay if your device is compatible</li>
                <li>BACS Payment</li>
                <li>Direct Debit</li>
            </ul>
            <p>An initial payment is only required when you choose a Monthly Rolling Plan or if your purchase a device or accessory. Your billing cycle starts when you activate your SIM card for contract plans. Your billing cycle is done on a calendar month basis.</p>
            <p>Your phone bill is produced on the 1st day of each month. This means that if your SIM card was activated during the month, your first bill will be prorated.</p>
            {isOpen && (
            <>
            <p>Zoiko Mobile accepts various billing payment menthods for all contracts, and will conduct credit checks only where the customer is buying a phone on credit. Credit checks are not required for Monthly Rolling Plans customers and other plans without a phone.
            When you activate your plan, and set up your Direct Debit or any other acceptable payment method, this will ensure that you enjoy our uninterrupted service. It&apos;s important to keep in mind that without an active plan, you won&apos;t be able to use any Zoiko Mobile services, including data, text messaging, and calls. If your phone plan is interrupted because of an outstanding payment, Zoiko Mobile will address the issue and contact you. We will make efforts to capture the payment over the next couple of days to ensure your service continues without interruption.</p>
            <p>Setting up Direct Debit or other payment methods for your Zoiko Mobile plan is a straightforward process, and you can also manage your payment settings with ease. Here&apos;s how you can do it</p>
            <p className="bigred">MyZoiko</p>
            <p>First, make sure you are logged into your Zoiko Mobile account. This is the starting point for managing your payment.</p>
            <p className="bigred">Access Settings</p>
            <p>Once you are logged in, navigate to your &apos;payment methods&apos;.</p>
            <p className="bigred">Choose Payment Method</p>
            <p>You may also be able to manage your payment methods in the same settings section. Select your preferred payment method, whether it&apos;s a credit card, PayPal, or another option.</p>
            <p className="bigred">Save Changes</p>
            <p>Make sure to save your changes after updating your payment method. This ensures that your settings are updated and your plan will continue without any unnecessary interruptions.</p>
            </>
            )}
            <div className="text-center py-4"><Button variant="outline-danger" onClick={toggleView}>{isToggled ? 'Read Less' : 'Read More'}</Button></div>
        </Container>
        <Footer />
        </>
    );
}
export default BillingWorks;