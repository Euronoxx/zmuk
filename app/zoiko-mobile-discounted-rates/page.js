"use client"
import Header from "../components/Header";
import HeadBar from "../components/HeadBar";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

export default function DiscountedRates () {

    return (
        <>
        <Header />
        <HeadBar text="Zoiko Mobile Discounted Rates" />
        <Container className="redborderbox p-4 my-5">
            <ol className="body22">
                <li><span className="bigred">Bundle Plans:</span><br />Our bundled packages include talk, text, mms and data services at a lower rate than if you purchased these services separately.</li>
                <li><span className="bigred">SIM-Only Plans:</span><br />SIM-only plans, which exclude the cost of a new or refurbished device, are typically more affordable than traditional mobile contracts.</li>
                <li><span className="bigred">Pay-As-You-Go:</span><br />Our Monthly Rolling plans are like pay-as-you-go, allow customers to pay only for the services they use with the flexibility of not having to enter long-term contracts, providing cost control and potential savings for low-usage customers.</li>
                <li><span className="bigred">Family Plans:</span><br />We offer discounted rates for multiple SIMs or family plans, making it more cost-effective for households.</li>
                <li><span className="bigred">Data-specific Discounts:</span><br />We offer data-specific discounts or unlimited data options for a reduced price.</li>
                <li><span className="bigred">Promotional Deals:</span><br />We often run promotions, such as introductory offers, discounts for switching from another provider, or seasonal sales on our SIMs, Phones and accessories.</li>
                <li><span className="bigred">Loyalty Rewards:</span><br />We do have loyalty programmes that provide discounts, free upgrades, or other perks to long-term customers.</li>
                <li><span className="bigred">Student or Senior Discounts:</span><br />We offer specialised plans with discounts for students, seniors, or other specific customer groups, such as migrants and tourists.</li>
                <li><span className="bigred">International Calling and Roaming:</span><br />We have competitive international calling and roaming rates, which can result in significant savings for frequent travellers. Some of our bundled plans include massive amount of EU roaming data</li>
                <li><span className="bigred">Refer-a-Friend Programme:</span><br />We offer discounts or credits to customers who refer friends or family members to our services.</li>
            </ol>
            <p className="body22">The specific discounted rates and plans available will depend on our current market offerings. To find the best discounted rates suitable to your specific needs, it&apos;s recommended to research and compare plans from All Plans category to see which one best suit your needs and budget.</p>
        </Container>
        <Footer />
        </>
    );
}