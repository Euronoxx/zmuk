"use client"
import { Button, Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";
import Link from "next/link";

export default function RefundPolicy () {
    return (
        <>
        <Header />
        <HeadBar text="Refund Policy" />
        <Container className="py-5 body22">
            <ol>
                <li>
                    <p className="bigred">Overview</p>
                    <p>At Zoiko Mobile, we are committed to ensuring your satisfaction with our products. This refund policy outlines the guidelines for refunds and returns for SIM cards, mobile phone and other devices purchased through our platform.</p>
                </li>
                <li>
                    <p className="bigred">Refund Eligibility</p>
                    <ol>
                        <li>
                            <p className="bigred">SIM Cards</p>
                            <p>We offer refunds for SIM cards that meet the following criteria:</p>
                            <p>The request for a refund is made within 14 days of purchase.</p>
                        </li>
                        <li>
                            <p className="bigred">Mobile Phone And Other Devices:</p>
                            <p>Refunds for mobile phone and other devices are eligible under the following circumstances:</p>
                            <p>The mobile phone or any other device is returned in its original condition with all accessories, manuals, and packaging.</p>
                            <p>The request for a refund is made within 14 days of purchase.</p>
                        </li>
                    </ol>
                </li>
                <li>
                    <p className="bigred">Refund Process</p>
                    <ol>
                        <li>
                            <p className="bigred">Requesting a Refund:</p>
                            <p>To request a refund, please contact our customer support team via email at accounts@zoikomobile.co.uk or by phone at 44 2071 646 399.</p>
                            <p>When requesting a refund, please provide your order details and a clear reason for the refund request.</p>
                        </li>
                        <li>
                            <p className="bigred">Return of Products:</p>
                            <p>If your refund request is approved, we will provide you with instructions for returning the SIM card or mobile phone or any other device.</p>
                            <p>You are responsible for the cost of return shipping unless the product is defective or the return is due to an error on our part.</p>
                        </li>
                        <li>
                            <p className="bigred">Refund Processing:</p>
                            <p>Refunds will be processed within 7 business days of receiving the returned product. Refunds will be issued in the original form of payment used for the purchase.</p>
                        </li>
                    </ol>
                </li>
                <li>
                    <p className="bigred">Non-Refundable Items</p>
                    <ol>
                        <li>
                            <p className="bigred">SIM Cards</p>
                            <p>We do not offer refunds for SIM cards that have been Activated or for any prepaid credit or plan associated with the SIM card.</p>
                        </li>
                        <li>
                            <p className="bigred">Mobile phone and other devices:</p>
                            <p>Mobile phone and other devices must be returned in their original, unaltered condition to be eligible for a refund. We do not offer refunds for mobile phone and other devices that have been damaged or modified by the user.</p>
                        </li>
                    </ol>
                </li>
                <li>
                    <p className="bigred">Defective or Damaged Products</p>
                    <ol>
                        <li>
                            <p className="bigred">Defective Products:</p>
                            <p>If your SIM card or mobile phone or any other device is defective, please contact our customer support team within 14 days of purchase for assistance. We will provide guidance on the return and replacement process.</p>
                        </li>
                    </ol>
                </li>
                <li>
                    <p className="bigred">Contact Information</p>
                    <p>If you have any questions or require assistance regarding our Refund Policy for SIM Cards, mobile phone and other devices, please contact us at the following address:</p>
                    <p>Zoiko Mobile<br />Berkeley Suite, 35 Berkeley Square,<br />Mayfair, London W1J 5BF<br />Email:info@zoikomobile.co.uk<br />Telephone:+44 2071 646 399<br />Email: <Link href={"mailto:accounts@zoikomobile.co.uk"}>accounts@zoikomobile.co.uk</Link></p>
                    <p>We are committed to providing a seamless and transparent refund process for our customers. Thank you for choosing Zoiko Mobile.</p>
                </li>
            </ol>
            <br />
            <Button href="/login" variant="outline-danger" size="lg">Back to My Contact</Button>
        </Container>
        <Footer />
        </>
    );
}
