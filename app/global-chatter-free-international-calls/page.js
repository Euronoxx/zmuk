"use client"
import Header from "../components/Header";
import HeadBar from "../components/HeadBar";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

export default function InternationalCalls () {
    return (
        <>
        <Header />
        <HeadBar text="Global Chatter: Free International Calls" />
        <Container className="redbordercontainer my-5 p-5">
            <div className="p-2 body22">
                Go global with your gossip using our International Calls feature! We&apos;re not just breaking down borders; we&apos;re demolishing them. With FREE international calls to over 80 countries on selected plans, staying in touch with friends, family, and colleagues around the world has never been easier or cheaper!
            </div>
            <div className="p-2 body22">
                Whether you&apos;re sharing news with a mate in Melbourne, planning adventures with pals in Paris, or catching up with your cousin in <strong>Canada</strong>, our International Calls feature ensures your conversations keep flowing as freely as your travel plans. No more watching the clock or counting minutes; just unlimited chit-chat across the globe.
            </div>
            <div className="p-2 body22">
                Select plans come with this fantastic feature, making international communication as simple as a local call. So, why limit your words when you can speak your heart out to over 80 countries without fretting over the fees?
            </div>
            <div className="p-2 body22">
                With <strong>Zoiko Mobile</strong>, the world really is your oyster—or your local café! Dial into the diversity of the globe from the comfort of your couch and bring distant delights right to your doorstep.
            </div>
        </Container>
        <Footer />
        </>
    );
}