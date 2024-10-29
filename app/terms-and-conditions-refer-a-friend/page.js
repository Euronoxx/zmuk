"use client"
import Header from "../components/Header";
import HeadBar from "../components/HeadBar";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import Link from "next/link";

export default function ReferFreindTerms () {

    return (
        <>
        <Header />
        <HeadBar text="Terms and Conditions" />
        <Container className="redborderbox p-4 my-5">
            <p className="bigred">1. Eligibility</p>
            <ul className="body22">
                <li>The Refer A Friend Programme is open to all Zoiko Mobile customers. Customers can refer up to 100 friends through the programme, exclusively accessible on the Zoiko Mobile website. Sign up at:</li>
                <li><Link href="https://zoikomobile.co.uk/refer-a-friend-programme/">https://zoikomobile.co.uk/refer-a-friend-programme/</Link></li>
            </ul>
            <p className="bigred">2. Referrer&apos;s Responsibilities:</p>
            <ul className="body22">
                <li>Referrers must have an active Zoiko Mobile account and be in good standing.</li>
            </ul>
            <p className="bigred">3. Referee&apos;s Responsibilities:</p>
            <ul className="body22">
                <li>Referred friends must be new Zoiko Mobile customers without an existing account</li>
            </ul>
            <p className="bigred">4. Referral Process:</p>
            <ul className="body22">
                <li>Referrers can refer friends via the Zoiko Mobile website, receiving a unique referral link for tracking.</li>
            </ul>
            <p className="bigred">5. Rewards:</p>
            <ul className="body22">
                <li>Referrers and their referred friends will each receive a £20 credit when the friend activates their Zoiko Mobile plan.</li>
            </ul>
            <p className="bigred">6. Bonus Redemption:</p>
            <ul className="body22">
                <li>Referrers can redeem credits for Zoiko Mobile bill discounts via customer support or online account.</li>
            </ul>
            <p className="bigred">7. Timeline for Receiving Rewards:</p>
            <ul className="body22">
                <li>Referral rewards credited to the referrer&apos;s account within 30 days of the friend activating their Zoiko Mobile plan.</li>
            </ul>
            <p className="bigred">8. Additional Information:</p>
            <ul className="body22">
                <li>VAT not included in credit value. Zoiko Mobile reserves the right to modify or terminate the programme without prior notice. By participating, you acknowledge and agree to these terms and conditions, subject to modification.</li>
            </ul>
            <p className="body22">Start spreading the word and get rewarded today! Share your unique referral link and enjoy the benefits of referring your friends to Zoiko Mobile!</p>
        </Container>
        <Footer />
        </>
    );
}