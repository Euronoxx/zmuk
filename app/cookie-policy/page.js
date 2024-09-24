"use client"
import { Button, Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";

export default function CookiePolicy () {
    return (
        <>
        <Header />
        <HeadBar text="Cookie Policy" />
        <Container className="py-5 body22">
            <ol>
                <li><p className="bigred">Introduction</p>
                    <p>Our website uses cookies to improve your experience. This Cookie Policy explains what cookies are, how we use them, and how you can control your cookie preferences.</p>
                </li>
                <li>
                    <p className="bigred">What Are Cookies?</p>
                    <ol>
                        <li>
                            <p className="bigred">Definition:</p>
                            <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.</p>
                        </li>
                        <li>
                            <p className="bigred">Session and Persistent Cookies:</p>
                            <p>Cookies can be categorised into two main types:</p>
                            <p>Session cookies are temporary cookies that are deleted from your device when you close your browser. Persistent cookies remain on your device for a specified period or until you delete them.</p>
                        </li>
                    </ol>
                </li>
                <li>
                    <p className="bigred">How We Use Cookies</p>
                    <ol>
                        <li>
                            <p className="bigred">Essential Cookies:</p>
                            <p>These cookies are necessary for the basic functionality of our website. They enable you to navigate the site, use its features, and access secure areas. Without these cookies, our website may not function properly.</p>
                        </li>
                        <li>
                            <p className="bigred">Performance Cookies:</p>
                            <p>These cookies collect information about how visitors use our website, such as which pages are most frequently visited and whether users encounter error messages. These cookies help us improve the performance of our website.</p>
                        </li>
                        <li>
                            <p className="bigred">Functionality Cookies:</p>
                            <p>Functionality cookies allow our website to remember choices you make (such as your user name, language, or region) and provide enhanced, personalised features.</p>
                        </li>
                        <li>
                            <p className="bigred">Advertising and Marketing Cookies:</p>
                            <p>These cookies are used to deliver advertisements that are relevant to your interests. They may also be used to limit the number of times you see an advertisement and help measure the effectiveness of our advertising campaigns.</p>
                        </li>
                    </ol>
                </li>
                <li>
                    <p className="bigred">Cookie Preferences</p>
                    <p>You can manage your cookie preferences by adjusting the settings on your browser. Most web browsers allow some control over cookies through browser settings. However, please note that disabling cookies may impact the functionality and user experience of our website.</p>
                </li>
                <li>
                    <p className="bigred">Updates to the Cookie Policy</p>
                    <p>We may update this Cookie Policy from time to time to reflect changes in our services or for other operational, legal, or regulatory reasons. The date of the latest revision will be indicated at the top of the document.</p>
                </li>
                <li>
                    <p className="bigred">Contact Information:</p>
                    <p>If you have any questions or concerns about these Terms of Use for Mobile Apps, please contact us at the following address:</p>
                    <p>Zoiko Mobile<br />Berkeley Suite, 35 Berkeley Square,<br />Mayfair, London W1J 5BF<br />Email:info@zoikomobile.co.uk<br />Telephone:+44 2071 646 399</p>
                    <p>By using Zoiko Mobile&apos;s website, you consent to the use of cookies as described in this policy. Thank you for choosing Zoiko Mobile, and we hope you enjoy your improved website experience.</p>
                </li>
            </ol>
            <br />
            <Button href="/login" variant="outline-danger" size="lg">Back to My Contact</Button>
        </Container>
        <Footer />
        </>
    );
}
