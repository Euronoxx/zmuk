"use client"
import { Button, Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";
import Link from "next/link";
import Image from "next/image";

export default function FreeDeliveryPolicy () {
    return (
        <>
        <Header />
        <HeadBar text="Zoiko Mobile Free Delivery Policy" />
        <Container className="py-5 body22 my-5" style={{border:'1px solid #DF1E5A', borderRadius:'8px'}}>
            <div className="d-flex flex-row p-5 justify-content-center">
                <Image src={"/img/flemingo.png"} width={330} height={300} alt="Flemingo" />
                <div>
                    <p className="verybigred" style={{lineHeight:'48px'}}>ALL FREE<br />DELIVERIES!</p>
                    <p className="green24bold">Another Reason to Love<br />Zoiko Mobile</p>
                </div>
            </div>
            <ol>
                <li>
                    <p className="bigred">Introduction</p>
                    <p>At Zoiko Mobile, we are pleased to offer free delivery on all our products, including SIM cards and devices, exclusively to our customers within the UK. This policy details the terms and conditions of our free delivery service to ensure you receive your products conveniently and at no additional cost.</p>
                </li>
                <li>
                    <p className="bigred">Eligibility</p>
                    <p>Free delivery is available for all orders placed on our website or through our customer service channels. This service covers all products, ranging from SIM cards to mobile devices.</p>
                </li>
                <li>
                    <p className="bigred">Delivery Areas</p>
                    <p>Free delivery is available to all addresses within the UK, encompassing mainland and non-mainland areas such as the Scottish Highlands, Northern Ireland, and other remote regions. Please note that delivery times may vary depending on the location.</p>
                </li>
                <li>
                    <p className="bigred">Delivery Times</p>
                    <p><span className="txtgreen">- 4.1 Standard Delivery:</span> Our standard delivery times are typically 3-5 working days for mainland UK. For non-mainland and remote areas, delivery times may extend to 5-7 working days.</p>
                    <p><span className="txtgreen">- 4.2 Expedited Delivery:</span> While our standard delivery service is free, expedited delivery options are available for an additional charge. Please contact our customer service for rates and availability.</p>
                </li>
                <li>
                    <p className="bigred">Processing Time</p>
                    <p>Orders are generally processed within 24 hours of order confirmation. Orders placed over weekends or public holidays will be processed on the next working day.</p>
                </li>
                <li>
                    <p className="bigred">Delivery Partners</p>
                    <p>We utilise reliable delivery services to ensure your products are delivered safely and on time. Our delivery partners are selected based on their proven track record of efficiency and quality service.</p>
                </li>
                <li>
                    <p className="bigred">Tracking Your Delivery</p>
                    <p>Upon dispatch of your order, you will receive a tracking number via email. This number allows you to track the status of your delivery via the courier&apos;s website.</p>
                </li>
                <li>
                    <p className="bigred">Missed Delivery</p>
                    <p>If you are unavailable to receive your delivery, our delivery partners will leave a card with instructions on how to rearrange delivery or collect your package from a local depot.</p>
                </li>
                <li>
                    <p className="bigred">Contact Us</p>
                    <p>For any queries regarding our free delivery service or for help with a delivery issue, please contact us at:</p>
                    <p>Zoiko Mobile<br />Berkeley Suite, 35 Berkeley Square,<br />Mayfair, London W1J 5BF<br />Email: info@zoikomobile.co.uk<br />Telephone: +44 2071 646 399<br />Email: <Link href={"mailto:accounts@zoikomobile.co.uk"}>accounts@zoikomobile.co.uk</Link></p>
                    <p>We are committed to providing our UK customers with efficient and cost-effective delivery solutions. Thank you for choosing Zoiko Mobile, where we strive to deliver not just your products but also exceptional service and support.</p>
                </li>
            </ol>
        </Container>
        <Footer />
        </>
    );
}