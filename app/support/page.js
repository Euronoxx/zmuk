"use client"
import Header from "../components/Header";
import HeadBar from "../components/HeadBar";
import Footer from "../components/Footer";
import { Container, Form, InputGroup, Button, Row, Col, Card, CardBody, Accordion, AccordionItem, AccordionHeader, AccordionBody } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import HeadBarSmall from "../components/HeadBarSmall";

export default function HelpSupport () {
    return (
        <>
        <Header />
        <HeadBar text="Support You May Find Here" />
        <Container className="p-4 my-4">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <InputGroup className="mb-3">
                        <Form.Control placeholder="Search For Articles" aria-label="Search For Articles" aria-describedby="basic-addon2" />
                        <Button variant="outline-danger" size="lg" id="button-addon2">Search</Button>
                    </InputGroup>
                </Col>
            </Row>
        </Container>
        <Container className="p-4 my-4">
            <Row>
                <Col md={4} sm={12} xs={12}>
                    <Link href={"/how-to-billing-works-with-zoiko"}>
                        <Card>
                            <CardBody>
                                <p className="bigred text-center">Account &amp; Billing</p>
                                <p className="green18 text-center">How billing works<br />with Zoiko</p>
                            </CardBody>
                        </Card>
                    </Link>
                </Col>
                <Col md={4} sm={12} xs={12}>
                    <Link href={"/why-you-need-to-know-about-keeping-your-number"}>
                        <Card>
                            <CardBody>
                                <p className="bigred text-center">Network Switch</p>
                                <p className="green18 text-center">What you need to know about keeping your number</p>
                            </CardBody>
                        </Card>
                    </Link>
                </Col>
                <Col md={4} sm={12} xs={12}>
                    <Link href={"/international-calling"}>
                        <Card>
                            <CardBody>
                                <p className="bigred text-center">Buy Calling Plans</p>
                                <p className="green18 text-center">Preparing your phone for roaming with zoiko</p>
                            </CardBody>
                        </Card>
                    </Link>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={4} sm={12} xs={12}>
                    <Link href={"/how-to-billing-works-with-zoiko"}>
                        <Card>
                            <CardBody>
                                <p className="bigred text-center">Calling Abroad</p>
                                <p className="green18 text-center">Preparing your phone<br />for roaming with Zoiko</p>
                            </CardBody>
                        </Card>
                    </Link>
                </Col>
                <Col md={4} sm={12} xs={12}>
                    <Link href={"/why-you-need-to-know-about-keeping-your-number"}>
                        <Card>
                            <CardBody>
                                <p className="bigred text-center">Android &amp; Zoiko</p>
                                <p className="green18 text-center">Setting Up your Android Phone<br />for roaming with Zoiko</p>
                            </CardBody>
                        </Card>
                    </Link>
                </Col>
                <Col md={4} sm={12} xs={12}>
                    <Link href={"/international-calling"}>
                        <Card>
                            <CardBody>
                                <p className="bigred text-center">Phasing Out 3G (UK)</p>
                                <p className="green18 text-center">3G on<br />Phone out</p>
                            </CardBody>
                        </Card>
                    </Link>
                </Col>
            </Row>
        </Container>
        <Container className="py-4">
            <div className="announcebox">
                <Row>
                    <div className="col-md-8 col-sm-12 p-4">
                        <p className="bigred">
                        Hello there, friend! I&apos;m Daisy, the Golden Retriever - and sister of Zoikie and the most helpful dog in the pack!
                        </p>
                        <p className="green18">Need a paw with something? Our Help & Support team is here to assist you! Whether you have a question about your plan, need help with your device, or just need some friendly advice, we&apos;re here to lend a listening ear and a helping paw.</p>
                        <p className="green18">Just like I always help my human friends, our support team is dedicated to making sure you have the best experience with Zoiko Mobile.<br /><span className="txtred">So don&apos;t hesitate to reach out - we&apos;re always here to help!</span></p>
                        <Link href={'/login'} className="txtred body22">#ZoikoMobile #HelpAnd Support</Link>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <Image src={"/img/support.png"} width={400} height={400} alt="Red Fox" style={{width:'100%', height:'auto'}} />
                    </div>
                </Row>
            </div>
        </Container>
        <HeadBarSmall text="Got Questions? Zoiko&apos;s Got Answers!" />
        <Container className="py-4 mb-5">
            <Accordion defaultActiveKey={"0"}>
                <AccordionItem eventKey="0">
                    <AccordionHeader>How Zoiko Mobile Help and Support Team helps?</AccordionHeader>
                    <AccordionBody>
                    Welcome to our Zoiko Mobile Help and Support hub, where we&apos;re here to assist you with a wide range of services. Whether you have questions about your plan, need technical support, or require help with billing and account management, our dedicated customer support team is ready to help. Explore our FAQs for quick answers to common inquiries or reach out directly for personalized assistance. From troubleshooting and upgrading mobile plans to addressing network issues and roaming support, we&apos;ve got you covered. Feel free to contact us for any queries regarding lost or stolen phones, billing disputes, or assistance with activations and deactivations. Your satisfaction is our priority, and we&apos;re here to ensure a smooth and seamless mobile experience for you.
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="1">
                    <AccordionHeader>Does your eSIM card allow other network integrations?</AccordionHeader>
                    <AccordionBody>
                    Dual SIM phones that come with eSIM cards have the advantage of allowing users to access two phone numbers on a single device. These smartphones are equipped with both a physical SIM card and an eSIM card, which gives users connect to different data networks with their respective plans. This feature is particularly suitable for individuals who require separate phone networks for different purposes or who frequently roam overseas.
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="2">
                    <AccordionHeader>What is A non-steering M2M SIM?</AccordionHeader>
                    <AccordionBody>
                    <p>Non-steering M2M SIM card refers to a machine-to-machine (M2M) SIM card that does not have any restrictions or limitations on the network or service it can be used with. M2M SIM cards are specifically designed for devices and applications that require connectivity for communication and data exchange, such as smart meters, GPS trackers, vending machines, or industrial sensors. Non-steering M2M SIM cards offer the flexibility for these devices to connect to any available cellular network, regardless of the network operator. This means that they can be used globally, roaming seamlessly between different networks and countries, without any limitations or restrictions.</p>
                    <p>With Zoiko Mobile&apos;s M2M SIM cards, you can get cohesive network coverage as prefer. The following benefits you may expect: - Build your own Carrier Wi-Fi network footprint and revoke the other network operators you decline. - Configure Multi-Network Management. - Remotely switch carrier connectivity with instant SIM list switching. Businesses and organizations can easily deploy their M2M devices and systems with non-steering M2M SIM cards, ensuring reliable connectivity and uninterrupted data exchange across different networks and regions.</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="3">
                    <AccordionHeader>Can I get Zoiko Mobile&apos;s eSIM cards prepaid plans?</AccordionHeader>
                    <AccordionBody>
                    Yes, indeed! We are equipped with eSIM cards&apos;prepaid plans only, for all our customers, if your smartphones are compatible with the 5G eSIM card technology, you can successfully get our eSIM card deals for prepaid customers.
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="4">
                    <AccordionHeader>How does scanning an eSIM card QR code with a smartphone work?</AccordionHeader>
                    <AccordionBody>
                    <p>Scanning a QR code with a smartphone is a simple and convenient process. It involves using the built-in camera on your smartphone to capture the QR code image and decode the barcode embedded within it. Here&apos;s how it typically works:</p>
                    <ol>
                        <li>Open your smartphone&apos;s camera app: Open the camera app on your smartphone.</li>
                        <li>Align the sent QR code within the camera frame: Hold your smartphone steady and position it so that the QR code is visible within the camera frame. Make sure the entire QR code is within the frame and not cut off.</li>
                    </ol>
                    <p>Let your smartphone detect the QR code: Once the QR code is in focus, your smartphone will automatically detect it.</p>
                    <ol>
                        <li>Tap on the notification or follow the instructions: Depending on your device, you may receive a notification or prompt to open a link associated with the QR code.</li>
                        <li>Access information: After scanning, you will be directed to a webpage, app, or other relevant content related to the QR code.</li>
                    </ol>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="5">
                    <AccordionHeader>How do I activate my eSIM cards that I ordered online via the Zoiko Mobile website?</AccordionHeader>
                    <AccordionBody>
                    <p>Please follow this guide to activate your eSIM card:</p>
                    <ol>
                        <li>After choosing and ordering our bundle plan for your digital sim card or eSIM online from Zoiko Mobile, you going to receive a confirmation email.</li>
                        <li>This email consists of a QR code for turning on your eSIM card.</li>
                        <li>Concerning your smartphone models (iOS or Android), oversee the guide below for the successful activation of your eSIM card;</li>
                    </ol>
                    <p>For iPhone users:</p>
                    <p>Your smartphone&apos;s WiFi connection is needed when activating your eSIM card with a QR code from your email ID. To download your eSIM card, open the camera app on your smartphone, align the sent QR code within the camera frame and follow the instructions. If you are still unable to scan the QR code, keep overseeing the below steps.</p>
                    <ol>
                        <li>Connect the Wi-Fi network on your smartphone.</li>
                        <li>Open Quick Settings.</li>
                        <li>Access Mobile data on.</li>
                        <li>Click on “Add eSIM card” (It will allow you to open the QR code scanner).</li>
                        <li>Follow the eSIM card activating instructions by scanning the QR code from Zoiko Mobile.</li>
                    </ol>
                    <p>Samsung Smartphone users: For the same purpose, connect your Wi-Fi network on your device and select the eSIM card activation prompt with a QR code from Zoiko Mobile. To download eSIM on your smartphone, open the camera app on your smartphone, align the sent QR code within the camera frame and follow the instructions.  If you are still unable to scan the QR code, keep overseeing the below steps.</p>
                    <ol>
                        <li>Connect the Wi-Fi network on your smartphone.</li>
                        <li>Open Quick Settings.</li>
                        <li>Access Mobile data on</li>
                        <li>Click on eSIM card manager.</li>
                        <li>Click on &qout;Add Mobile plan&qout;.</li>
                        <li>Follow the eSIM card activating instructions by scanning the QR code from Zoiko Mobile.</li>
                    </ol>
                    <p>Google Smartphone users:</p>
                    <p>For the same purpose, connect your Wi-Fi network on your device and select the eSIM card activation prompt with a QR code from Zoiko Mobile. To download eSIM on your smartphone, open the camera app on your smartphone, align the sent QR code within the camera frame and follow the instructions. If you are still unable to scan the QR code, keep overseeing the below steps.</p>
                    <ol>
                        <li>Connect the Wi-Fi network on your smartphone.</li>
                        <li>Open Quick Settings.</li>
                        <li>Select Network &amp; Internet.</li>
                        <li>Choose the plus sign (+) that appears next to the Mobile network.</li>
                        <li>Click Download SIM instead. Then click on the “Next” button.</li>
                        <li>Follow the eSIM card activating instructions by scanning the QR code from Zoiko Mobile.</li>
                    </ol>
                    <p>Huawei Smartphone users:</p>
                    <p>For the same purpose, connect your Wi-Fi network on your Huawei smartphone and select the eSIM card activation prompt with a QR code from Zoiko Mobile. To download eSIM on your smartphone, open the camera app on your smartphone, align the sent QR code within the camera frame and follow the instructions. If you are still unable to scan the QR code, keep overseeing the below steps.</p>
                    <ol>
                        <li>Connect the Wi-Fi network on your smartphone.</li>
                        <li>Open Quick Settings and choose Mobile Network.</li>
                        <li>Select SIM Management.</li>
                        <li>Click on Add eSIM card.</li>
                        <li>Click Sim Type - eSIM card.</li>
                        <li>ollow the eSIM card activating instructions by scanning the QR code from Zoiko Mobile.</li>
                    </ol>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="6">
                    <AccordionHeader>Can I activate my eSIM whilst I&apos;m out of the UK?</AccordionHeader>
                    <AccordionBody>
                    Your Zoiko Mobile eSIM card must be active in the UK territory. Once you cross the border, your eSIM card tariff plan needs to be activated as per the international standard plan.
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="7">
                    <AccordionHeader>I am an existing Zoiko Mobile customer and have a physical SIM card too. How do I exchange it with an eSIM card?</AccordionHeader>
                    <AccordionBody>
                    <p>It&apos;s easy to swap an eSIM card with another physical SIM! Here&apos;s how:</p>
                    <ol>
                        <li>Go to zoikomobile.co.uk and place your order for a free eSIM card.</li>
                        <li>Once you purchase an eSIM card, you will get a confirmation email from Zoiko Mobile with a QR code.</li>
                        <li>Then scan the QR code from your smartphone and install the eSIM card on your smartphone.</li>
                        <li>Then you need to log in to your Zuico Mobile account from our website.</li>
                        <li>Visit the Account Manager section.</li>
                        <li>Press the tick button on the “SIM Swap” menu on the left navigation panel.</li>
                        <li>Choose the option to exchange from a physical SIM to an eSIM card. And you have done.</li>
                    </ol>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="8">
                    <AccordionHeader>How many devices are compatible with your Zoiko Mobile eSIM card?</AccordionHeader>
                    <AccordionBody>
                    <p>Zoiko Mobile eSIM card is the most convenient way to use your smart devices. It gives you more flexibility to switch between plans with Zoiko Mobile and allows you to enjoy the convenience of porting your number.</p>
                    <p>Stay connected with your friends, colleagues, and families. Just have a look at our device-compatible tabs and match your smartphone device&apos;s name for the compatible check.</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="9">
                    <AccordionHeader>How do I consume less data, how do I cut costs?</AccordionHeader>
                    <AccordionBody>
                    <p>If you want to reduce your data costs, it&apos;s crucial to consider the key features that can help you achieve this goal. Zoiko Mobile enables encryption, cloud certificates, and certificate validation to be added to the network instead of the device&apos;s SDK, ensuring greater security on the network for the public domain. That signifies, don&apos;t have to worry about having SDKs on your device, and everything just happens seamlessly in the network. No more cluttered apps, no more worrying about updates - everything just works!</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="10">
                    <AccordionHeader>Whom I talk to if any queries?</AccordionHeader>
                    <AccordionBody>
                    <p>If you have any doubts, please reach out to us. We can connect you with a CS executives who can answer your detailed questions about connectivity.</p>
                    <p>If you are still interested in Zoiko Mobile, our customer service team will guide you and your team through the onboarding process. Our team consists of top executives who have been engaged in several development projects and processes of larger deployments on a global scale.</p>
                    <p>No need to worry, you will get used to it and save time troubleshooting.</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="11">
                    <AccordionHeader>What plan durations are available?</AccordionHeader>
                    <AccordionBody>
                    <p>Zoiko Mobile offers flexible plan durations, including 30-day, 12-month, or 24-month options. Choose the plan that best suits your needs.</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="12">
                    <AccordionHeader>Can I switch plans if I need more data or minutes?</AccordionHeader>
                    <AccordionBody>
                    <p>Absolutely! With Zoiko Mobile, you can easily switch plans using the Zoiko Mobile App or your online account, providing the flexibility to adjust your plan based on your requirements.</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="13">
                    <AccordionHeader>What are the key features of Zoiko Mobile plans?</AccordionHeader>
                    <AccordionBody>
                    <p>Zoiko Mobile plans come with a monthly data allowance, unlimited talk, MMS, Wi-Fi calling, and customised SMS. Additionally, enjoy perks such as inclusive Roaming.</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="14">
                    <AccordionHeader>How do I use Inclusive Roaming?</AccordionHeader>
                    <AccordionBody>
                    <p>Inclusive Roaming allows you to use your Zoiko Mobile plan abroad without incurring additional charges. Ensure your phone is set up for roaming, and you&apos;re good to stay connected internationally.</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="15">
                    <AccordionHeader>Can I use Zoiko Mobile eSIM data plans with any phone?</AccordionHeader>
                    <AccordionBody>
                    <p>Zoiko Mobile eSIM cards can used in any 5G compatible device with most GSM unlocked phones. Just make sure your phone is not locked to another network before inserting the Zoiko eSIM card.</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="16">
                    <AccordionHeader>How do I get started with Zoiko Mobile eSIM Only plans?</AccordionHeader>
                    <AccordionBody>
                    <p>Getting started is easy! Order your Zoiko Mobile eSIM card, pop it into your phone, and activate it following the provided instructions. You&apos;ll be enjoying your budget-friendly plan in no time.</p>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </Container>
        <Footer />
        </>
    );
}