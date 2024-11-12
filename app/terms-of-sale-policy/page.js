"use client"
import Header from "../components/Header";
import HeadBar from "../components/HeadBar";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import Link from "next/link";

export default function TermsOfSale () {
    return (
        <>
        <Header />
        <HeadBar text="Terms of Sale Policy" />
        <Container className="p-5">
            <p className="bigred">1. Introduction</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="body22">Welcome to Zoiko Mobile. Our Terms of Sale Policy outlines the terms and conditions that apply to the purchase of our products and services in the United Kingdom. By making a purchase through our platform, you agree to comply with and be bound by these terms.</p>
                </li>
            </ul>
            <p className="bigred">2. Definitions</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="bigred">2.1 Seller:</p>
                    <p className="body22">&quot;Seller&quot; refers to Zoiko Mobile, the provider of products and services.</p>
                </li>
                <li>
                    <p className="bigred">2.2 Buyer:</p>
                    <p className="body22">&quot;Buyer&quot; refers to the individual or entity making a purchase from the Seller.</p>
                </li>
            </ul>
            <p className="bigred">3. Product Information</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="bigred">3.1 Product Descriptions:</p>
                    <p className="body22">Zoiko Mobile makes every effort to accurately describe our products. However, we do not warrant that product descriptions or other content on our website are entirely error-free. If you have questions about a product, please contact us for clarification.</p>
                </li>
            </ul>
            <p className="bigred">4. Pricing</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="bigred">4.1 Prices:</p>
                    <p className="body22">All prices are in GBP (British Pounds) and are inclusive of applicable taxes - with the exception of Business Plans.</p>
                </li>
                <li>
                    <p className="bigred">4.2 Price Changes:</p>
                    <p className="body22">Zoiko Mobile reserves the right to change prices for products and services at any time. Price changes will not affect orders that have already been accepted.</p>
                </li>
            </ul>
            <p className="bigred">5. Orders</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="bigred">5.1 Order Acceptance:</p>
                    <p className="body22">Your order is an offer to purchase our products and services. We may accept your order by sending an order confirmation, or we may decline your order for any reason.</p>
                </li>
                <li>
                    <p className="bigred">5.2 Cancellation:</p>
                    <p className="body22">You have the right to cancel your order within 14 days of receipt of the products, in line with your rights under the Consumer Rights Act 2015. Please refer to our Return and Refund Policy for details on how to return products.</p>
                </li>
            </ul>
            <p className="bigred">6. Payment</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="bigred">6.1 Payment Methods:</p>
                    <p className="body22">Zoiko Mobile accepts various payment methods, including credit/debit cards and other payment solutions available on our website.</p>
                </li>
                <li>
                    <p className="bigred">6.2 Payment Security:</p>
                    <p className="body22">We take the security of your payment information seriously and ensure that it is processed securely. Payment details are encrypted to protect your data.</p>
                </li>
            </ul>
            <p className="bigred">7. Delivery</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="bigred">7.1 Delivery Times:</p>
                    <p className="body22">Delivery times for products are provided at the time of purchase. These times may vary based on the destination and shipping method.</p>
                </li>
                <li>
                    <p className="bigred">7.2 Delivery Address:</p>
                    <p className="body22">The Buyer is responsible for providing an accurate and complete delivery address. Zoiko Mobile is not liable for any delayed or failed delivery due to incorrect address details.</p>
                </li>
            </ul>
            <p className="bigred">8. Returns and Refunds</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="bigred">8.1 Return Policy:</p>
                    <p className="body22">Please refer to our Return and <Link href="/refund-policy">Refund Policy</Link> for information on returns, refunds, and the process for returning products, as per your rights under the Consumer Rights Act 2015.</p>
                </li>
            </ul>
            <p className="bigred">9. Warranty</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="bigred">9.1 Product Warranty:</p>
                    <p className="body22">Our products come with a standard 30-day warranty. Please refer to the warranty information provided with your product for details on coverage and duration.</p>
                </li>
            </ul>
            <p className="bigred">10. Optional Insurance</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="bigred">10.1 Insurance:</p>
                    <p className="body22">Optional insurance is available at checkout for an additional cost. This insurance provides added protection for your purchase, and you have the option to include it with your order.</p>
                </li>
            </ul>
            <p className="bigred">11. Dispute Resolution</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="bigred">11.1 Negotiation:</p>
                    <p className="body22">In the event of any disputes or claims related to your purchase, the parties agree to attempt to resolve them through negotiation and good faith communication.</p>
                </li>
                <li>
                    <p className="bigred">11.2 Jurisdiction:</p>
                    <p className="body22">If a resolution cannot be reached through negotiation, the dispute will be subject to the exclusive jurisdiction of the courts in England and Wales.</p>
                </li>
            </ul>
            <p className="bigred">12. Contact Information</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="body22">If you have any questions or concerns about these Terms and Conditions, please contact us at the following address:</p>
                    <p className="body22">Zoiko Mobile<br />Berkeley Suite, 35 Berkeley Square,<br />Mayfair, London W1J 5BF<br />Email: <Link href="mailto:info@zoikomobile.co.uk">info@zoikomobile.co.uk</Link><br />Telephone: +44 2071 646 399</p>
                    <p className="body22">Thank you for choosing Zoiko Mobile for your product and service needs. We value your compliance with these guidelines to ensure a smooth and secure shopping experience, while also respecting your rights under the <Link href="https://en.wikipedia.org/wiki/Consumer_Rights_Act_2015" target="_blank">Consumer Rights Act 2015</Link>.</p>
                </li>
            </ul>
        </Container>
        <Footer />
        </>
    );
}