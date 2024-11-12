"use client"
import Header from "../components/Header";
import HeadBar from "../components/HeadBar";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import Link from "next/link";

export default function SlaveryPolicy () {
    return (
        <>
        <Header />
        <HeadBar text="Modern Slavery Policy" />
        <Container className="p-5">
            <p className="bigred">1. Introduction</p>
            <p className="body22">Zoiko Mobile is committed to combating modern slavery and human trafficking in all its forms. This Modern Slavery Policy outlines our commitment to taking proactive measures to prevent such practices within our organization and supply chains.</p>
            <p className="bigred">2. Policy Statement</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="bigred">2.1 Our Commitment:</p>
                    <p className="body22">Zoiko Mobile is dedicated to ensuring that modern slavery and human trafficking have no place in our business operations. We uphold the principles of transparency, accountability, and ethical conduct in our approach to business.</p>
                </li>
                <li>
                    <p className="bigred">2.2 Compliance:</p>
                    <p className="body22">We are committed to complying with the provisions of the Modern Slavery Act 2015 and other relevant legislation, taking necessary steps to prevent slavery and human trafficking within our operations.</p>
                </li>
            </ul>
            <p className="bigred">3. Organizational Responsibility</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="bigred">3.1 Senior Leadership:</p>
                    <p className="body22">Our senior leadership team is responsible for setting the tone and ensuring that our commitment to eradicating modern slavery is upheld at all levels of the organization.</p>
                </li>
                <li>
                    <p className="bigred">3.2 Employees:</p>
                    <p className="body22">All employees of Zoiko Mobile are expected to act in accordance with this policy and report any concerns related to modern slavery or human trafficking through our confidential reporting channels.</p>
                </li>
            </ul>
            <p className="bigred">4. Supply Chain</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="bigred">4.1 Supplier Engagement</p>
                    <p className="body22">Zoiko Mobile works with suppliers who share our commitment to preventing modern slavery and human trafficking. We require our suppliers to adhere to this policy and to demonstrate their compliance.</p>
                </li>
                <li>
                    <p className="bigred">4.2 Due Diligence:</p>
                    <p className="body22">We conduct due diligence to assess and address risks within our supply chain. We strive to identify and mitigate risks of modern slavery and human trafficking, with a focus on high-risk areas.</p>
                </li>
                <li>
                    <p className="bigred">4.3 Audits and Monitoring:</p>
                    <p className="body22">Periodic audits and monitoring of our supply chain are conducted to ensure compliance with this policy and the law.</p>
                </li>
            </ul>
            <p className="bigred">5. Training and Awareness</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="bigred">5.1 Training:</p>
                    <p className="body22">We provide training to our employees and suppliers to raise awareness of modern slavery and human trafficking risks and to equip them with the knowledge and tools necessary to identify and address such risks.</p>
                </li>
            </ul>
            <p className="bigred">6. Reporting and Whistleblowing</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="bigred">6.1 Reporting Channels:</p>
                    <p className="body22">Zoiko Mobile maintains confidential reporting channels for employees, suppliers, and other stakeholders to report concerns related to modern slavery or human trafficking.</p>
                    <p className="body22">Reports are thoroughly investigated, and appropriate actions are taken in response to concerns or allegations of modern slavery or human trafficking.</p>
                </li>
            </ul>
            <p className="bigred">7. Transparency</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="bigred">7.1 Transparency in Reporting:</p>
                    <p className="body22">Zoiko Mobile commits to providing annual transparency reports in compliance with the Modern Slavery Act 2015, outlining the steps taken to prevent modern slavery and human trafficking within our organisation and supply chain.</p>
                </li>
            </ul>
            <p className="bigred">8. Contact Information</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="body22">If you have any questions or require further information about our Modern Slavery Policy, please contact us at the following address:</p>
                    <p className="body22">Zoiko Mobile<br />Berkeley Suite, 35 Berkeley Square,<br />Mayfair, London W1J 5BF<br />Email: <Link href="mailto:info@zoikomobile.co.uk">info@zoikomobile.co.uk</Link><br />Telephone: +44 2071 646 399</p>
                    <p className="body22">Zoiko Mobile is unwavering in its commitment to the eradication of modern slavery and human trafficking. We believe in a world where every individual is treated with dignity, respect, and fairness. Thank you for choosing Zoiko Mobile and for supporting our mission to end modern slavery.</p>
                </li>
            </ul>
        </Container>
        <Footer />
        </>
    );
}