"use client"
import Header from "../components/Header";
import HeadBar from "../components/HeadBar";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import Link from "next/link";

export default function RetirementResources () {
    return (
        <>
        <Header />
        <HeadBar text="Comprehensive UK Retirement Planning Resources" />
        <Container className="p-4 redborderbox my-4">
            <h3 className="bigred">Government Resources</h3>
            <p className="body22"><span className="txtred">GVK.UK:</span> The official website of the UK government, with information on a wide range of topics, including retirement planning, pensions, and benefits.</p>
            <p><Link href="https://www.gov.uk/browse/working/state-pension" className="body22">https://www.gov.uk/browse/working/state-pension</Link></p>
            <p className="body22"><span className="txtred">MoneyHelper:</span> A government-funded organisation that provides free and impartial advice on money and pensions.</p>
            <p className="body22"><Link href="https://www.moneyhelper.org.uk/en">https://www.moneyhelper.org.uk/en</Link></p>
            <p className="body22"><span className="txtred">The Pension Tracing Service:</span> A free service that helps people find lost pensions.</p>
            <p className="body22"><Link href="https://www.gov.uk/find-pension-contact-details">https://www.gov.uk/find-pension-contact-details</Link></p>
            <p className="body22"><span className="txtred">The Pension Service:</span> The government department responsible for administering the State Pension.</p>
            <p className="body22"><Link href="https://www.gov.uk/contact-pension-service">https://www.gov.uk/contact-pension-service</Link></p>
            <h3 className="bigred pt-4">Independent organisations</h3>
            <p className="body22"><span className="txtred">Age UK:</span> A charity that provides information and advice to older people, including on retirement planning and care.</p>
            <p className="body22"><Link href="https://www.ageuk.org.uk/information-advice/">https://www.ageuk.org.uk/information-advice/</Link></p>
            <p className="body22"><span className="txtred">Citizens Advice:</span> A charity that provides free legal advice to everyone in England and Wales, including on pensions and benefits.</p>
            <p className="body22"><Link href="https://www.citizensadvice.org.uk/debt-and-money/pensions/">https://www.citizensadvice.org.uk/debt-and-money/pensions/</Link></p>
            <p className="body22"><span className="txtred">Which?:</span> An independent consumer organisation that provides advice on a wide range of topics, including pensions and retirement planning. The provided link seems incorrect. Typically, Which? would be expected to have a direct website link like.</p>
            <p className="body22"><Link href="https://www.which.co.uk/money/pensions-and-retirement">https://www.which.co.uk/money/pensions-and-retirement</Link></p>
            <h3 className="bigred pt-4">Financial services companies</h3>
            <p className="body22"><span className="txtred">NEST:</span> A workplace pension provider that is also open to individuals.</p>
            <p className="body22"><Link href="https://www.nestpensions.org.uk/schemeweb/ NestWeb/faces/public/MUA/pages/loginPage.xhtml">https://www.nestpensions.org.uk/schemeweb/ NestWeb/faces/public/MUA/pages/loginPage.xhtml</Link></p>
            <p className="body22"><span className="txtred">The Pensions Regulator:</span> The regulator of the UK pensions industry.</p>
            <p className="body22"><Link href="https://www.thepensionsregulator.gov.uk/">https://www.thepensionsregulator.gov.uk/</Link></p>
            <h3 className="bigred pt-4">Additional Resources</h3>
            <p className="body22"><span className="txtred">The Money and Pensions Service:</span> A government-funded organisation that provides information and advice on money and pensions.</p>
            <p className="body22"><Link href="https://www.gov.uk/government/organisations/single-financial-guidance-body">https://www.gov.uk/government/organisations/single-financial-guidance-body</Link></p>
            <p className="body22"><span className="txtred">The State Pension Forecast:</span> A tool that allows people to estimate how much State Pension they will receive.</p>
            <p className="body22"><Link href="https://www.gov.uk/check-state-pension">https://www.gov.uk/check-state-pension</Link></p>
            <p className="body22"><span className="txtred">The Pension Wise service:</span> A free service that provides guidance on how to take money from a pension.</p>
            <p className="body22"><Link href="https://www.moneyhelper.org.uk/en/pensions-and-retirement/pension-wise">https://www.moneyhelper.org.uk/en/pensions-and-retirement/pension-wise</Link></p>
        </Container>
        <Footer />
        </>
    );
}