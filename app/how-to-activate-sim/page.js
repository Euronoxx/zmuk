"use client"
import React, {useState} from "react";
import Header from "../components/Header";
import HeadBar from "../components/HeadBar";
import Footer from "../components/Footer";
import { Container, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

export default function ActivateSIM () {

    const [isToggled, setIsToggled] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const toggleView = () => {
        setOpen(!isOpen);
        setIsToggled(!isToggled);
    }

    return (
        <>
        <Header />
        <HeadBar text="Activate Your SIM with Tech Guru Ollie!" />
        <Container className="p-3">
            <div className="d-flex flex-md-row flex-column">
                <Image src={"/img/zoiko-owl.png"} width={380} height={260} alt="I am Ollie" style={{height:'auto'}} />
                <div>
                    <h3 className="bigred">Follow Tech Guru Ollie&apos;s expert steps:</h3>
                    <p className="green18 body22"><span className="txtred">Step 1:</span> Enter your details.</p>
                    <p className="green18 body22"><span className="txtred">Step 2:</span> Enter OTP &amp; SIM Serial Number.</p>
                    <p className="green18 body22"><span className="txtred">Step 3:</span> Enter the 8-digit OTP then your 19-digit SIM serial number.</p>
                    <p className="green24bold">Activate SIM &amp; Get Connected!</p>
                    <p className="green18">Click &quot;Activate SIM&quot; to start enjoying Zoiko Mobile services!</p>
                    <p className="green24bold">Need Help?</p>
                    <p className="green18">Call us on <span className="txtred">+44 (0) 2071 646 399</span> or visit our <Link href={"/support"} target="_blank">Help &amp; Support</Link> page.</p>
                    <Button href="/activate" variant="outline-danger" className="mx-3">Activate Your SIM</Button>
                    <Button variant="outline-danger" onClick={toggleView}>{isToggled ? 'Read Less' : 'Read More'}</Button>
                </div>
            </div>
        </Container>
        {isOpen && (
        <Container className="p-3">
            <p className="bigred">Here&apos;s How to Activate Your Zoiko Mobile SIM Card:</p>
            <p className="txtred body22">1. PURCHASE SIM AND BUNDLE:</p>
            <ul className="green18">
                <li>Order your SIM and chosen bundle via the Zoiko Mobile website or mobile app.</li>
                <li>During the order process, you&apos;ll be prompted to register on &quot;My Login&quot;</li>
                <li>Fill in your details meticulously and create a secure password.</li>
            </ul>
            <p className="txtred body22">2. OTP SENT VIA EMAIL:</p>
            <ul className="green18">
                <li>Upon completing your purchase, you will receive an email containing an 8-digit OTP. It&apos;s crucial to keep this OTP safe.</li>
            </ul>
            <p className="txtred body22">3. SIM SENT IN POST:</p>
            <ul className="green18">
                <li>Zoiko Mobile will dispatch your SIM card to the address you have provided.</li>
            </ul>
            <p className="txtred body22">4. CUSTOMER RECEIVES SIM VIA POST:</p>
            <ul className="green18">
                <li>Await the arrival of your Zoiko Mobile SIM card through the post.</li>
            </ul>
            <p className="txtred body22">5. INSERT SIM INTO PHONE:</p>
            <ul className="green18">
                <li>Before logging into your &quot;My Login&quot; account, please ensure you insert your SIM card into your mobile phone. Follow the instructions provided in your SIM pack and insert the SIM correctly.</li>
            </ul>
            <p className="txtred body22">6. CUSTOMER LOGS IN TO MY LOGIN:</p>
            <ul className="green18">
                <li>With your SIM inserted, log into your &quot;My Login&quot; account to proceed with the activation.</li>
            </ul>
            <p className="txtred body22">7. CUSTOMER ACTIVATES SIM USING OTP AND SIM SERIAL NUMBER:</p>
            <ul className="green18">
                <li>Proceed with the activation by inputting the 8-digit OTP and the 19-digit Serial Number located above the barcode and above your mobile number on your SIM card.</li>
            </ul>
            <p className="txtred body22">8. ACTIVATION COMPLETE:</p>
            <ul className="green18">
                <li>Once activated, a confirmation email will be sent to you.</li>
                <li>Your Zoiko Mobile services are now ready for use!</li>
            </ul>
            <p className="txtred body22 mt-4">IMPORTANT SECURITY REMINDERS:</p>
            <p className="green18">Your OTP is confidential; do not share it with anyone, including representatives from Zoiko Mobile.</p>
            <p className="green18">Ensure your &apos;My Login&apos; account password is strong to secure your account.</p>
        </Container>
        )}
        <Footer />
        </>
    );
}