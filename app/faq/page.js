"use client"
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";

export default function FAQs () {
    return (
        <>
        <Header />
        <HeadBar text="Got Questions? Zoiko&apos;s Got Answers!" />
        <Container className="p-5">
            <Accordion defaultActiveKey="0">
                <AccordionItem eventKey="0">
                    <AccordionHeader>How Zoiko Mobile Help and Support Team helps?</AccordionHeader>
                    <AccordionBody>Welcome to our Zoiko Mobile Help and Support hub, where we&apos;re here to assist you with a wide range of services. Whether you have questions about your plan, need technical support, or require help with billing and account management, our dedicated customer support team is ready to help. Explore our FAQs for quick answers to common inquiries or reach out directly for personalized assistance. From troubleshooting and upgrading mobile plans to addressing network issues and roaming support, we&apos;ve got you covered. Feel free to contact us for any queries regarding lost or stolen phones, billing disputes, or assistance with activations and deactivations. Your satisfaction is our priority, and we&apos;re here to ensure a smooth and seamless mobile experience for you.</AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="1">
                    <AccordionHeader>How can I receive texts with Zoiko Mobile offers and promotions?</AccordionHeader>
                    <AccordionBody>Our offers and promotions are regularly updated on our website and communicated to our customers by emails and SMS.</AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="2">
                    <AccordionHeader>Is it mandatory to register my details to use Zoiko Mobile services?</AccordionHeader>
                    <AccordionBody>While it is not mandatory to register your details, to use our paid monthly plan we would strongly recommend you do. Howevr, you will be required to register all your details to use our contract plans. Registering your number opens up many additional facilities, including the ability to manage your Zoiko Mobile account online, set up Auto Renewal, collect itemised bill copies, change or update personal information, and more.</AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="3">
                    <AccordionHeader>Why have I been charged for internet access when I use WiFi?</AccordionHeader>
                    <AccordionBody>Please note that some handsets switch from WiFi to Mobile Internet depending on signal strength. To avoid these issues, please deactivate the data option on your mobile phone while using WiFi.</AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="4">
                    <AccordionHeader>How to Register Your Zoiko Mobile SIM?</AccordionHeader>
                    <AccordionBody>We&apos;ll guide you through the process of registering your Zoiko Mobile SIM to ensure a smooth start: Text or call Customer Services at 500 using your Zoiko Mobile phone, and in the body of the text type your OTP (One Time Passcode) which begins with ZM, along with your full name, and a dedicated Zoiko Mobile Customer Services Representative will complete the process for you. Alternatively, you can contact +44 207 164 6399 from any other phone.</AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="5">
                    <AccordionHeader>Will a plan purchase be considered a top-up?</AccordionHeader>
                    <AccordionBody>No, a plan purchase will not be considered as a top-up.</AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="6">
                    <AccordionHeader>Do you provide a Zoiko Mobile SIM with a handset?</AccordionHeader>
                    <AccordionBody>Yes, provide a FREE SIM card as well as new and refurbished handsets.</AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="7">
                    <AccordionHeader>Do you provide locked or unlocked handsets?</AccordionHeader>
                    <AccordionBody>Yes, we sell new and refurbished handsets and they are all unlocked.</AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="8">
                    <AccordionHeader>Do you offer contract services?</AccordionHeader>
                    <AccordionBody>Yes, Zoiko Mobile offers a variety of SIM Only deals with contract options spanning 30 days and 24 months. Depending on the contract length you choose, you can enjoy up to unlimited texts, unlimited data, unlimited SMS, and unlimited MMS.. Opting for the 30-day SIM Only contract provides you with the added benefit of flexibility, allowing you to modify or cancel your plan any time after the initial month of service.</AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="9">
                    <AccordionHeader>I have just registered MyZoiko Mobile SIM. Why am I still unable to activate a plan?</AccordionHeader>
                    <AccordionBody>This could possibly be due to an active data connection. Please turn off mobile data and restart your handset. If the problem continues, please contact Customer Services on 500 from your Zoiko Mobile.</AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="10">
                    <AccordionHeader>How can I get a copy of my itemised bill?</AccordionHeader>
                    <AccordionBody>To get a copy of your itemised billing, please log in to your account using the link that was sent to you after purchasing your Zoiko Mobile plan and follow the prompts. Alternatively, you may log in to your Zoiko Mobile account at MyBill</AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="11">
                    <AccordionHeader>How can I check my billing details?</AccordionHeader>
                    <AccordionBody>To check your billing details, log in to your Zoiko Mobile account at MyBill and view or update your billing details.</AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="12">
                    <AccordionHeader>How do I check my balance?</AccordionHeader>
                    <AccordionBody>Zoiko Mobile currently offers a paid monthly service, which means that once you buy one of our plans you will never have to worry about running out of credit.</AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="13">
                    <AccordionHeader>How do I check the call rates?</AccordionHeader>
                    <AccordionBody>You can check our unbeatably low rates from our website here www.zoikomobile.co.uk/plan/ Alternatively, you can dial Customer Service at 500 from your Zoiko Mobile.</AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="14">
                    <AccordionHeader>How do I find my Zoiko Mobile number?</AccordionHeader>
                    <AccordionBody>On your iPhone handset you can find your number by going to &apos;Settings&apos;, then &apos;Telephone&apos;. You can find your number on your Android handset go to &apos;Setting&apos; then go to &apos;About Phone&apos;.</AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="15">
                    <AccordionHeader>Why can&apos;t I send or receive texts?</AccordionHeader>
                    <AccordionBody>Firstly, please make sure you have enough credit to send a text. If you still can&apos;t send or receive texts, please check the Message Centre Number (MCN) in your SMS settings - it should be +44 7870 020 555 for Zoiko Mobile UK. If you see a different number, enter +447870 020 555 turn your handset off and on and then retry sending any unsent texts. If the problem remains, please contact Customer Services at 500 from your Zoiko Mobile handset.</AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="16">
                    <AccordionHeader>How do I activate roaming using Zoiko Mobile?</AccordionHeader>
                    <AccordionBody>There could be various reasons for your Zoiko Mobile services not working after a period of inactivity. It&apos;s advisable to check if your postpaid plan is paid up to date, and for your 30-day Monthly Rolling Plan, you should recharge if necessary and ensure there are no issues with your SIM card or phone settings. If the problems persist, contacting Zoiko Mobile customer support at 500 from your Zoiko Mobile phone or +44 2071 646 399 from another handset would be a good next step.</AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="17">
                    <AccordionHeader>Can I send or receive premium rate texts or make premium rate calls using Zoiko Mobile?</AccordionHeader>
                    <AccordionBody>Accessing premium rate services will depend on the type of Zoiko Mobile Plan you have purchased. The 30-day Monthly Rolling Plan does not automatically include any premium rate services. If you are interested in upgrading your Zoiko Mobile plan, please do not hesitate to contact us at 500 from your Zoiko Mobile phone or +44 2071 646 399 from another handset. Note that premium services are charged at premium rates</AccordionBody>
                </AccordionItem>
                <AccordionItem eventKey="18">
                    <AccordionHeader>What mobile handsets can I use with Zoiko Mobile?</AccordionHeader>
                    <AccordionBody>Your handset needs to be compatible with internationally recognized GSM standards, adopted by all the major handset manufacturers. There are no other restrictions on the type of handset you can use with Zoiko Mobile. Please call our Customer Services team on +44 2071 646 399 if you are unsure about your handset or call 500 with a Zoiko Mobile phone.</AccordionBody>
                </AccordionItem>
            </Accordion>
        </Container>
        <Footer />
        </>
    );
}