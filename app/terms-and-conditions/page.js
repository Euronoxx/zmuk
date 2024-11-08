"use client"
import Header from "../components/Header";
import HeadBar from "../components/HeadBar";
import Footer from "../components/Footer";
import { Button, Container } from "react-bootstrap";
import Link from "next/link";

export default function TermsAndConditions () {
    return (
        <>
        <Header />
        <HeadBar text="Terms and Conditions" />
        <Container className="p-5">
            <p className="bigred">1. Introduction</p>
            <p className="body22">Welcome to Zoiko Mobile. By accessing and using our website, you agree to abide by these Terms and Conditions. Please read this document carefully as it contains important information about your rights and responsibilities.</p>
            <p className="bigred">2. User Responsibilities</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="bigred">2.1 Compliance</p>
                    <p className="body22">When using our website, you agree to comply with all applicable laws and regulations, both local and international. You are responsible for ensuring that your use of the site does not violate any legal requirements..</p>
                </li>
                <li>
                    <p className="bigred">2.2 Accuracy of Information:</p>
                    <p className="body22">You are responsible for the accuracy and truthfulness of the information you provide on our website. Any information you submit should not be misleading, false, or fraudulent.</p>
                </li>
                <li>
                    <p className="bigred">2.3 Security</p>
                    <p className="body22">You are responsible for maintaining the confidentiality of your account information, including your username and password. You agree not to share your login credentials with anyone else and to notify us immediately if you suspect any unauthorised access to your account.</p>
                </li>
            </ul>
            <p className="bigred">3. Intellectual Property Rights</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="bigred">3.1 Content Ownership</p>
                    <p className="body22">All content on this website, including but not limited to text, images, graphics, logos, and software, is the property of Zoiko Mobile or its content suppliers and is protected by intellectual property laws. You may not use, reproduce, or distribute our content without our express written permission.</p>
                </li>
                <li>
                    <p className="bigred">3.2 User-Generated Content</p>
                    <p className="body22">If you submit content to our website, such as comments, reviews, or other user-generated material, you grant Zoiko Mobile a non-exclusive, royalty-free, worldwide, and perpetual license to use, modify, reproduce, and distribute that content for any purpose</p>
                </li>
            </ul>
            <p className="bigred">4. Prohibited Activities</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="bigred">4.1 Unauthorised Access</p>
                    <p className="body22">You may not attempt to gain unauthorised access to our website or any part of it. This includes circumventing any security measures, hacking, or using any automated tools for data extraction.</p>
                </li>
                <li>
                    <p className="bigred">4.2 Malicious Use</p>
                    <p className="body22">You may not use our website for any malicious purposes, such as spreading malware, conducting phishing attacks, or engaging in any other harmful activities.</p>
                </li>
                <li>
                    <p className="bigred">4.3 Infringement</p>
                    <p className="body22">You may not use our website to infringe on the intellectual property rights of others, engage in defamation, or violate any laws related to the content you publish.</p>
                </li>
            </ul>
            <p className="bigred">5. Limitation of Liability</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="bigred">5.1 Disclaimer</p>
                    <p className="body22">Zoiko Mobile is not responsible for any indirect, incidental, special, or consequential damages that result from your use of our website. We provide our services &quot;as is&quot; without any warranties</p>
                </li>
                <li>
                    <p className="bigred">5.2 Third-Party Links</p>
                    <p className="body22">Our website may contain links to third-party websites. We are not responsible for the content, reliability, or privacy practices of these external sites.</p>
                </li>
            </ul>
            <p className="bigred">6. Dispute Resolution</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="body22">In the event of any disputes or claims related to your use of our website, you agree to attempt to resolve them through negotiation and good faith communication. If a resolution cannot be reached through negotiation, the dispute will be subject to the exclusive jurisdiction of the courts in England and Wales</p>
                </li>
            </ul>
            <p className="bigred">7. Updates to the Terms and Conditions</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="body22">We may update these Terms and Conditions from time to time to reflect changes in our services or for other operational, legal, or regulatory reasons. The date of the latest revision will be indicated at the top of the document.</p>
                </li>
            </ul>
            <p className="bigred">8. Contact Information</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="body22">If you have any questions or concerns about these Terms and Conditions, please contact us at the following address:</p>
                    <p className="body22">Zoiko Mobile<br />Berkeley Suite, 35 Berkeley Square,<br />Mayfair, London W1J 5BF<br />Email: <Link href="mailto:info@zoikomobile.co.uk">info@zoikomobile.co.uk</Link><br />Telephone: +44 2071 646 399</p>
                    <p className="body22">By using Zoiko Mobile&apos;s website, you agree to these Terms and Conditions. Thank you for choosing Zoiko Mobile as your online destination. We value your compliance with these guidelines to ensure a secure and enjoyable online experience.</p>
                </li>
            </ul>
            <div className="text-center mt-5">
                <Button variant="outline-danger" size="lg" href="/login">Back to My Account</Button>
            </div>
        </Container>
        <Footer />
        </>
    );
}