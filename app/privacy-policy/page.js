"use client"
import { Button, Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";

export default function PrivacyPolicy () {
    return (
        <>
        <Header />
        <HeadBar text="Privacy Policy" />
        <Container className="py-5 body22">
            <p>At Zoiko Mobile, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information. By using our website, you consent to the practices described in this policy.</p>
            <ol>
                <li><p className="bigred">Information We Collect:</p><p>At Zoiko Mobile, we may collect the following types of information:</p>
                    <ol>
                        <li>
                            <p className="bigred">Personal Information:</p>
                            <p>We may collect personal information, such as your name, email address, phone number, or other identifying information when you voluntarily provide it to us through our website, forms, or other interactions.</p>
                        </li>
                        <li>
                            <p className="bigred">Device Information:</p>
                            <p>We may also collect information about the device you use to access our website, including your IP address, browser type, operating system, and other technical details.</p>
                        </li>
                    </ol>
                </li>
                <li>
                    <p className="bigred">How We Use Your Information:</p>
                    <p>We may use the information we collect for various purposes, including but not limited to:</p>
                    <ol>
                        <li>
                            <p className="bigred">Providing Services:</p>
                            <p>To provide you with the services and products you request, process transactions, and deliver customer support.</p>
                        </li>
                        <li>
                            <p className="bigred">Improving Our Website:</p>
                            <p>To enhance and optimise our website's functionality, user experience, and content.</p>
                        </li>
                        <li>
                            <p className="bigred">Marketing and Communications:</p>
                            <p>To send you promotional materials, updates, and notifications about our products and services, subject to your consent where required by law.</p>
                        </li>
                    </ol>
                </li>
                <li>
                    <p className="bigred">Cookie Policy</p>
                    <p>Please refer to our Cookie Policy for detailed information about the use of cookies, including types of cookies used and instructions on how to manage your cookie preferences.</p>
                </li>
                <li>
                    <p className="bigred">Data Retension</p>
                    <p>We will retain your personal information only for as long as necessary for the purposes set out in this Privacy Policy unless a longer retention period is required or permitted by law.</p>
                </li>
                <li>
                    <p className="bigred">User Rights</p>
                    <p>Under the General Data Protection Regulation (GDPR), you have certain rights regarding your personal information. These rights include:</p>
                    <ol>
                        <li>
                            <p className="bigred">Access</p>
                            <p>You have the right to request a copy of the personal information we hold about you.</p>
                        </li>
                        <li>
                            <p className="bigred">Rectification</p>
                            <p>You have the right to request that we correct any inaccurate or incomplete personal information.</p>
                        </li>
                        <li>
                            <p className="bigred">Deletion</p>
                            <p>You have the right to request the deletion of your personal information under certain circumstances.</p>
                        </li>
                        <li>
                            <p className="bigred">Restriction</p>
                            <p>You have the right to request the restriction of processing of your personal information under certain circumstances.</p>
                        </li>
                    </ol>
                </li>
                <li>
                    <p className="bigred">Security Measures</p>
                    <p>We implement appropriate technical and organisational measures to protect your personal information. However, no method of transmission over the internet or electronic storage is entirely secure, and we cannot guarantee absolute security.</p>
                </li>
                <li>
                    <p className="bigred">Disclosure of Information:</p>
                    <p>We may disclose your personal information to third parties in the following circumstances:</p>
                    <p>With your explicit consent.<br />To comply with legal obligations.<br />To protect our rights, privacy, safety, or property.<br />In connection with the sale, merger, or acquisition of all or part of our company.</p>
                </li>
                <li>
                    <p className="bigred">Third-party Links:</p>
                    <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We encourage you to read the privacy policies of these third-party sites.</p>
                </li>
                <li>
                    <p className="bigred">Children&apos;s Policy</p>
                    <p>Our website is not intended for children under the age of 13. We do not knowingly collect or maintain personal information from children under 13 years of age. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will take appropriate action to remove the information.</p>
                </li>
                <li>
                    <p className="bigred">Updates to the Privacy Policy:</p>
                    <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The date of the latest revision will be indicated at the top of the policy.</p>
                </li>
                <li>
                    <p className="bigred">Contact Information:</p>
                    <p>If you have any questions or concerns about these Terms of Use for Mobile Apps, please contact us at the following address:</p>
                    <p>Zoiko Mobile<br />Berkeley Suite, 35 Berkeley Square,<br />Mayfair, London W1J 5BF<br />Email:info@zoikomobile.co.uk<br />Telephone:+44 2071 646 399</p>
                    <p>By using the App, you agree to these Terms. Thank you for choosing Zoiko Mobile and for adhering to these guidelines for app usage.</p>
                </li>
            </ol>
            <br />
            <Button href="/login" variant="outline-danger" size="lg">Back to My Contact</Button>
        </Container>
        <Footer />
        </>
    );
}
