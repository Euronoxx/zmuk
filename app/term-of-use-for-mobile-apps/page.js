"use client"
import Header from "../components/Header";
import HeadBar from "../components/HeadBar";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import Link from "next/link";

export default function TermsForMobileApps () {
    return (
        <>
        <Header />
        <HeadBar text="Terms of Use for Mobile Apps" />
        <Container className="p-5">
            <p className="bigred">1. Introduction</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="body22">These Terms of Use (&quot;Terms&quot;) govern your use of the mobile applications provided by Zoiko Mobile (&quot;the App&quot;). By downloading, installing, or using the App, you agree to be bound by these Terms. Please read these Terms carefully before using the App.</p>
                </li>
            </ul>
            <p className="bigred">2. App License</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="bigred">2.1 Grant of Licence:</p>
                    <p className="body22">Zoiko Mobile grants you a non-exclusive, non-transferable, limited licence to use the App solely for your personal, non-commercial purposes.</p>
                </li>
                <li>
                    <p className="bigred">2.2 Restrictions:</p>
                    <p className="body22">You may not copy, modify, distribute, sell, or lease any part of the App. You may not reverse engineer, decompile, or attempt to extract the source code of the App, unless it is expressly permitted or required by law.</p>
                </li>
            </ul>
            <p className="bigred">3. App Updates</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="bigred">3.1 Automatic Updates:</p>
                    <p className="body22">The App may periodically check for updates and download and install them automatically. You agree to receive such updates as part of your use of the App.</p>
                </li>
            </ul>
            <p className="bigred">4. User Accounts</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="bigred">4.1 Account Registration:</p>
                    <p className="body22">Some features of the App may require you to register an account. You agree to provide accurate and complete information when creating an account and to update such information to keep it accurate and current.</p>
                </li>
                <li>
                    <p className="bigred">4.2 Account Security:</p>
                    <p className="body22">You are responsible for maintaining the confidentiality of your account login credentials. You agree to notify Zoiko Mobile immediately of any unauthorised access to your account or any other security breaches.</p>
                </li>
            </ul>
            <p className="bigred">5. User Conduct</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="bigred">5.1 Acceptable Use:</p>
                    <p className="body22">You agree to use the App in compliance with all applicable laws and regulations. You may not use the App for any unlawful or harmful purpose, or in any way that could damage, disable, or impair the App or its functionality.</p>
                </li>
                <li>
                    <p className="bigred">5.2 Permissions:</p>
                    <p className="body22">You agree to grant the App the necessary permissions to access your device&apos;s functions and data, including but not limited to camera, location, and storage, as required for the App&apos;s intended functionality.</p>
                </li>
                <li>
                    <p className="bigred">5.3 User Content:</p>
                    <p className="body22">Any content you provide or upload through the App is your responsibility. You warrant that you have the necessary rights to upload or share such content and that it does not infringe upon the rights of any third party.</p>
                </li>
            </ul>
            <p className="bigred">6. Termination</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="bigred">6.1 Termination by User:</p>
                    <p className="body22">You may uninstall and stop using the App at any time.</p>
                </li>
                <li>
                    <p className="bigred">6.2 Termination by Zoiko Mobile:</p>
                    <p className="body22">Zoiko Mobile reserves the right to terminate your access to the App, with or without notice, if you violate these Terms.</p>
                </li>
            </ul>
            <p className="bigred">7. Disclaimer and Limitation of Liability</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="bigred">7.1 Disclaimer:</p>
                    <p className="body22">The App is provided on an &quot;as is&quot; and &quot;as available&quot; basis, and Zoiko Mobile makes no representations or warranties of any kind regarding the App&apos;s operation or functionality.</p>
                </li>
                <li>
                    <p className="bigred">7.2 Limitation of Liability:</p>
                    <p className="body22">Zoiko Mobile shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of the App or any inability to use the App.</p>
                </li>
            </ul>
            <p className="bigred">8. Governing Law</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="body22">These Terms are governed by the laws of England and Wales. Any disputes arising from or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
                </li>
            </ul>
            <p className="bigred">9. Contact Information</p>
            <ul style={{listStyleType:'none'}}>
                <li>
                    <p className="body22">If you have any questions or concerns about these Terms and Conditions, please contact us at the following address:</p>
                    <p className="body22">Zoiko Mobile<br />Berkeley Suite, 35 Berkeley Square,<br />Mayfair, London W1J 5BF<br />Email: <Link href="mailto:info@zoikomobile.co.uk">info@zoikomobile.co.uk</Link><br />Telephone: +44 2071 646 399</p>
                    <p className="body22">By using the App, you agree to these Terms. Thank you for choosing Zoiko Mobile and for adhering to these guidelines for app usage.</p>
                </li>
            </ul>
        </Container>
        <Footer />
        </>
    );
}