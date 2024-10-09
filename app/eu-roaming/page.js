"use client"
import Header from "../components/Header";
import HeadBar from "../components/HeadBar";
import Footer from "../components/Footer";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

export default function EuRoaming () {
    return (
        <>
        <Header />
        <HeadBar text="Roam Freely Within the EU with all our Plans" />
        <Container className="yellowbordercontainer my-5 px-4 pt-4">
            <Row>
                <Col md={8} sm={12} xs={12}>
                    <h3 className="bigred">Hey there, fellow adventurers! It&apos;s Benny the Badger here!</h3>
                    <p className="green18">Are you tired of worrying about roaming charges when exploring the EU? Well, worry no more! With Zoiko Mobile, you can enjoy EU roaming at no extra cost!</p>
                    <p className="green18">That&apos;s right, folks! With our EU roaming feature, you can stay connected and share your travels with friends and family without breaking the bank. And with our fast 5G speeds, you can upload your photos and videos in no time!</p>
                    <p className="txtred body22">So why wait? Join Zoiko Mobile today and start exploring the EU without any roaming worries! #ZoikoMobile #EURoaming #BadgerApproved</p>
                </Col>
                <Col md={4} sm={12} xs={12}>
                    <Image src={"/img/euroaming.png"} width={300} height={300} alt="EU Roaming" style={{width:'90%',height:'auto'}} />
                </Col>
            </Row>
        </Container>
        <Container className="redbordercontainer my-5 p-4">
            <div className="p-2 body22">
            Take your mobile life on the road with our hassle-free EU Roaming feature! Whether you&apos;re snapping selfies by the Seine, emailing on a tram in Amsterdam, or finding your way through Florence using GPS, stay connected without worrying about extra charges.
            </div>
            <div className="p-2 body22">
            Our EU Roaming feature allows you to use your existing plan&apos;s voice and text allowances across the EU just as you would at home, with no additional costs. It&apos;s perfect for travellers who want to enjoy seamless connectivity without the hassle of switching SIM cards or incurring unexpected roaming fees.
            </div>
            <div className="p-2 body22">
            Keep in mind that this easy roaming only covers Zone 1 countries within the EU, following RLAH (Roam Like At Home) regulations. So, while you can call and text back to the UK or within the country you&apos;re visiting, calls to international destinations, premium, or special numbers aren’t included.
            </div>
            <div className="p-2 body22">
            EU Roaming with us means you get to travel with confidence, knowing you can stay connected with friends, family, and work, all while using your mobile freely across Europe. Pack your bags and your phone - with EU Roaming, you&apos;re ready to explore!
            </div>
        </Container>
        <Footer />
        </>
    );
}