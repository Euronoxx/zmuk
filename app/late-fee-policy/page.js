"use client"
import { Button, Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";
import Link from "next/link";

export default function LateFeePolicy () {
    return (
        <>
        <Header />
        <HeadBar text="Zoiko Mobile Late Fee Policy" />
        <Container className="py-5 body22">
            <p className="bigred">Introduction</p>
            <p>At Zoiko Mobile, we are committed to providing our customers with top-notch service and ensuring that their mobile phone bills are as convenient and hassle-free as possible. To maintain the quality of our services and ensure prompt payment processing, we have implemented this Late Fee Policy.</p>
            <ol>
                <li>
                    <p className="bigred">Payment Due Date:</p>
                    <p>All mobile phone bills from Zoiko Mobile are due on the date specified in your billing statement, which is typically on a monthly basis. It is the responsibility of the customer to ensure timely payment of their bills.</p>
                </li>
                <li>
                    <p className="bigred">Late Fee Assessment:</p>
                    <p>If a customer fails to make a payment by the due date, Zoiko Mobile will assess a late fee as follows:</p>
                    <p>A late fee of £7.50 will be applied to the unpaid balance for bills that are not paid within 14 days from the due date.</p>
                </li>
                <li>
                    <p className="bigred">Notification of Late Fee:</p>
                    <p>Zoiko Mobile will send a notification to the customer via email or text message when a late fee is assessed. The notification will include the late fee amount and details on how to make the payment.</p>
                </li>
                <li>
                    <p className="bigred">Disputed Charges:</p>
                    <p>If you believe there is an error in your bill or you have concerns about the late fee assessed, please contact our customer support team immediately. We will work with you to investigate and resolve the issue promptly.</p>
                </li>
                <li>
                    <p className="bigred">Waiver of Late Fee:</p>
                    <p>Zoiko Mobile may, at its discretion, waive late fees under certain circumstances, such as billing errors, documented medical emergencies, or other valid reasons. To request a waiver, please contact our customer support team and provide appropriate documentation.</p>
                </li>
                <li>
                    <p className="bigred">Collections and Account Suspension:</p>
                    <p>If a bill remains unpaid for an extended period, Zoiko Mobile reserves the right to refer the account to a collections agency or suspend mobile services until the outstanding balance is settled.</p>
                </li>
                <li>
                    <p className="bigred">Reconnection and Reactivation:</p>
                    <p>In case of account suspension, a customer may be required to pay any outstanding balance, including late fees, and a reconnection or reactivation fee before Zoiko Mobile will restore mobile services.</p>
                </li>
                <li>
                    <p className="bigred">Payment Options:</p>
                    <p>Zoiko Mobile offers various payment options, including online payments, automatic bill pay, and in-person payments at designated locations. Customers are encouraged to utilize the most convenient and timely payment method for their specific needs.</p>
                </li>
                <li>
                    <p className="bigred">Communication Preferences:</p>
                    <p>Customers are responsible for ensuring that their contact information, including email addresses and phone numbers, is up to date in our system to receive timely notifications and important billing information.</p>
                </li>
                <li>
                    <p className="bigred">Review and Amendments:</p>
                    <p>Zoiko Mobile reserves the right to review and amend this Late Fee Policy as needed to align with evolving business practices and regulations. Any changes will be communicated to customers through the appropriate channels.</p>
                    <p>By using Zoiko Mobile's services, you agree to abide by this Late Fee Policy. We appreciate your business and thank you for your understanding and cooperation in adhering to these guidelines. If you have any questions or require further information, please don't hesitate to contact our customer support team.</p>
                    <p>Zoiko Mobile<br />Berkeley Suite, 35 Berkeley Square,<br />Mayfair, London W1J 5BF<br />Email:info@zoikomobile.co.uk<br />Telephone:+44 2071 646 399<br />Email: <Link href={"mailto:accounts@zoikomobile.co.uk"}>accounts@zoikomobile.co.uk</Link></p>
                </li>
            </ol>
            <br />
            <Button href="/login" variant="outline-danger" size="lg">Back to My Contact</Button>
        </Container>
        <Footer />
        </>
    );
}
