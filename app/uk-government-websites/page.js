"use client"
import Header from "../components/Header";
import HeadBar from "../components/HeadBar";
import Footer from "../components/Footer";
import { Container, Button } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";

export default function UkGovernmentWebsite () {

    const [isToggled, setIsToggled] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const toggleView = () => {
        setOpen(!isOpen);
        setIsToggled(!isToggled);
    }

    return (
        <>
        <Header />
        <HeadBar text="Senior Circle: Zoiko&apos;s Connecting You to Your Golden Opportunities" />
        <Container className="redborderbox p-4 my-5">
            <p className="bigred">Government websites</p>
            <p className="body22"><span className="txtred">GVK.UK:</span> The official website of the UK government, with information on a wide range of topics, including retirement planning, pensions, and benefits.</p>
            <p><Link href="https://www.gov.uk/browse/working/state-pension" className="body22">https://www.gov.uk/browse/working/state-pension</Link></p>
            <p className="body22"><span className="txtred">MoneyHelper:</span> A government-funded organization that provides free and impartial advice on money and pensions.</p>
            <p><Link href="https://www.moneyhelper.org.uk/en" className="body22">https://www.moneyhelper.org.uk/en</Link></p>
            {isOpen && (
                <>
                <p className="body22"><span className="txtred">The Pension Tracing Service: </span>A free service that helps people find lost pensions.</p>
                <p><Link href="https://www.gov.uk/find-pension-contact-details" className="body22">https://www.gov.uk/find-pension-contact-details</Link></p>
                <p className="bigred">Independent organizations</p>
                <p className="body22"><span className="txtred">Age UK: </span>A charity that provides information and advice to older people, including on retirement planning and Care.</p>
                <p><Link href="https://www.ageuk.org.uk/information-advice/" className="body22">https://www.ageuk.org.uk/information-advice/</Link></p>
                <p className="body22"><span className="txtred">Citizens Advice: </span>A charity that provides free legal advice to everyone in England and Wales, including on pensions and benefits.</p>
                <p><Link href="https://www.citizensadvice.org.uk/debt-and-money/pensions/" className="body22">https://www.citizensadvice.org.uk/debt-and-money/pensions/</Link></p>
                <p className="body22"><span className="txtred">Which?: </span>An independent consumer organization that provides advice on a wide range of topics, including pensions and retirement</p>
                <p><Link href="https://hostingdata.co.uk/best-pension-providers/" className="body22">https://hostingdata.co.uk/best-pension-providers/</Link></p>
                <p className="bigred">Financial services companies</p>
                <p className="body22"><span className="txtred">NEST: </span>A workplace pension provider that is also open to individuals.</p>
                <p><Link href="/https://www.nestpensions.org.uk/schemeweb/Nest Web/faces/public/MUA/pages/loginPage.xhtml/" className="body22">https://www.nestpensions.org.uk/schemeweb/Nest Web/faces/public/MUA/pages/loginPage.xhtml/</Link></p>
                <p className="body22"><span className="txtred">The Pensions Regulator: </span>The regulator of the UK pensions industry.</p>
                <p><Link href="https://www.thepensionsregulator.gov.uk/" className="body22">https://www.thepensionsregulator.gov.uk/</Link></p>
                <p className="bigred">Additional Resources</p>
                <p className="body22"><span className="txtred">The Money and Pensions Service: </span>A government-funded organization that provides information and advice on money and pensions.</p>
                <p><Link href="https://www.gov.uk/government/organisations/single-financial-guidance-body" className="body22">https://www.gov.uk/government/organisations/single-financial-guidance-body</Link></p>
                <p className="body22"><span className="txtred">The State Pension Forecast: </span>A tool that allows people to estimate how much State Pension they will receive.</p>
                <p><Link href="https://www.gov.uk/check-state-pension" className="body22">https://www.gov.uk/check-state-pension</Link></p>
                <p className="body22"><span className="txtred">The Pension Wise service: </span>A free service that provides guidance on how to take money from a pension.</p>
                <p><Link href="https://www.moneyhelper.org.uk/en/pensions-and-retirement/pension-wise" className="body22">https://www.moneyhelper.org.uk/en/pensions-and-retirement/pension-wise</Link></p>
                </>
            )}
            <div className="text-center py-4"><Button variant="outline-danger" onClick={toggleView}>{isToggled ? 'Read Less' : 'Read More'}</Button></div>
        </Container>
        <Footer />
        </>
    );
}