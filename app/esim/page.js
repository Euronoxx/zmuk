"use client"
import Header from "../components/Header";
import HeadBar from "../components/HeadBar";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

export default function Esim () {
    return (
        <>
        <Header />
        <HeadBar text="eSIM: The Future of Mobile Connectivity" />
        <Container className="redbordercontainer my-5 p-5">
            <div className="p-2 body22">
                Step into the future with our eSIM technology a slick, streamlined way to activate your mobile service without the need for a physical SIM card. It&apos;s all digital, and it&apos;s all about making your mobile experience smoother and more flexible than ever.
            </div>
            <div className="p-2 body22">
                With an eSIM, you can switch between networks or plans without swapping out a physical card. This means you can manage multiple numbers on a single device—ideal for keeping work and personal life separate, or for adding local data plans when travelling abroad.
            </div>
            <div className="p-2 body22">
                Setting up your eSIM is a breeze. Just a few taps on your device and you&apos;re connected, no more waiting for a SIM card to arrive in the post or fumbling with tiny plastic cards. It&apos;s instant, it&apos;s on-demand, and it&apos;s incredibly convenient.
            </div>
            <div className="p-2 body22">
                Our <span style={{color:'#FECC00'}}>eSIM technology</span> not only simplifies your setup but also opens up a world of possibilities for connected devices. From smartphones to smartwatches, tablets to laptops, eSIMs help keep all your gadgets connected without the extra bulk.
            </div>
            <div className="p-2 body22">
                Embrace the simplicity and versatility of eSIM with <span style={{color:'#FECC00'}}>Zoiko Mobile</span> and enjoy the ultimate in cutting-edge connectivity. Whether you&apos;re a tech enthusiast, a frequent traveller, or someone who enjoys a minimalist setup, our eSIM solution is designed to adapt to your lifestyle and keep you connected effortlessly.
            </div>
        </Container>
        <Footer />
        </>
    );
}