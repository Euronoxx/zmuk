"use client"
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";

export default function ReturnPolicy () {
    return (
        <>
        <Header />
        <HeadBar text="Return Policy" />
        <Container className="p-5 my-4" style={{border:'1px solid #DF1E5A', borderRadius:'8px'}}>
            <p>
                <span className="bigred">1. Introduction</span><br />
                At Zoiko Mobile, we aim to ensure that all our customers are completely satisfied with their purchases. This returns policy sets out the conditions under which you can return purchased items.
            </p>
            <p>
                <span className="bigred">2. Returns Eligibility</span>
            </p>
            <p>
                <span className="bigred">2.1 SIM Cards:</span><br />
                - Returns of SIM cards are accepted only if they are in their original, unopened packaging.<br />
                - Returns must be initiated within 14 days of receipt, in line with your statutory rights under the Consumer Contracts Regulations.
            </p>
            <p>
                <span className="bigred">2.2 Mobile Phones and Other Devices:</span><br />
                - Returns of mobile phones and other devices are accepted if they are in their original condition, with all accessories, manuals, and packaging.<br />
                - Items must be returned within 14 days of receipt, which also aligns with the Consumer Contracts Regulations allowing consumers to change their minds.
            </p>
            <p>
                <span className="bigred">3. How to Return an Item</span>
            </p>
            <p>
                <span className="bigred">3.1 Initiating a Return:</span><br />
                - To begin the return process, please contact our customer support team via email at accounts@zoikomobile.co.uk or by phone at +44 2071 646 399.<br />
                - You will need to provide your order details and a reason for the return, although a reason is not necessary under the Consumer Contracts Regulations if you are acting within the 14-day cooling-off period.
            </p>
            <p>
                <span className="bigred">3.2 Returning the Products:</span><br />
                - Following approval, we will provide instructions and a return address.<br />
                - You are responsible for the return shipping costs, which is standard, but in cases of faulty or misdescribed items, Zoiko Mobile will cover the return shipping costs.
            </p>
            <p>
                <span className="bigred">4. Processing Returns</span><br />
                - We will inspect returned items to confirm they meet the return conditions.<br />
                - Refunds or exchanges will be processed within 14 days of receiving the returned item, in compliance with UK consumer law.<br />
                - Refunds will be issued to the original payment method used during purchase.
            </p>
            <p>
                <span className="bigred">5. Non-Returnable Items</span><br />
                - Activated SIM cards and any associated prepaid credit are non-returnable once activated.<br />
                - Devices that have been damaged or modified by the customer are not eligible for a return.
            </p>
            <p>
                <span className="bigred">6. Defective or Damaged Products</span><br />
                - If you receive a defective product, please inform us within 14 days of receipt for a prompt return or exchange, in accordance with your rights under the Consumer Rights Act 2015.
            </p>
            <p>
                <span className="bigred">7. Contact Us</span><br />
                For further assistance or queries regarding our returns policy, please contact us at:<br />
                Zoiko Mobile<br />Berkeley Suite, 35 Berkeley Square,<br />Mayfair, London W1J 5BF<br />Email: accounts@zoikomobile.co.uk<br />Telephone: +44 2071 646 399<br />
                We are committed to complying with UK consumer law and ensuring a transparent and straightforward returns process. Thank you for choosing Zoiko Mobile.
            </p>
        </Container>
        <Footer />
        </>
    );
}