"use client"
import Header from "../components/Header";
import HeadBar from "../components/HeadBar";
import Footer from "../components/Footer";
import { Container, Button } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";

export default function BusinessResources () {

    const [isToggled, setIsToggled] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const toggleView = () => {
        setOpen(!isOpen);
        setIsToggled(!isToggled);
    }

    return (
        <>
        <Header />
        <HeadBar text="UK Business Unlocked: Useful Resources to Skyrocket Your Journey!" />
        <Container className="redborderbox p-4 my-5">
            <p className="body22">A comprehensive list of resources for businesses in the UK, featuring govenment support, financial assistance, and advisory services. Each entry includes a brief description and a link to the website for more information</p>
            <p className="bigred">Government Resources</p>
            <p className="body22"><span className="txtred">GVK.UK:</span> The official website of the UK government, offering a wealth of information for businesses on starting, running, financing and expanding operations domestically and abroad.</p>
            <p><Link href="https://www.gov.uk/" className="body22">https://www.gov.uk/</Link></p>
            <p className="body22"><span className="txtred">Business and Self-Employed:</span> A dedicated section on GOV.UK that provides specific guidance for businesses and self-employed individuals on registering a business, tax obligations, and employment.</p>
            <p><Link href="https://www.gov.uk/working-for-yourself" className="body22">https://www.gov.uk/working-for-yourself</Link></p>
            {isOpen && (
                <>
                <p className="body22"><span className="txtred">Start Up UK:</span> A government-backed initiative that offers free resources and support to startups, including workshops, events, and mentorship opportunities.</p>
                <p><Link href="https://www.ukstartups.org/" className="body22">https://www.ukstartups.org/</Link></p>
                <p className="body22"><span className="txtred">UK Export Support for Businesses:</span> This dedicated website helps businesses export their goods and services overseas, providing necessary information and resources.</p>
                <p><Link href="https://www.gov.uk/browse/business/exports" className="body22">https://www.gov.uk/browse/business/exports</Link></p>
                <p className="bigred mt-4">Finance and Funding</p>
                <p className="body22"><span className="txtred">British Business Bank:</span> A government-owned bank that supports UK businesses through loans, investments, and guarantees.</p>
                <p><Link href="https://www.british-business-bank.co.uk" className="body22">https://www.british-business-bank.co.uk</Link></p>
                <p className="body22"><span className="txtred">Innovate UK:</span> A government-funded agency offering funding and support for innovative products and services.</p>
                <p><Link href="https://www.ukri.org/councils/innovate-uk/" className="body22">https://www.ukri.org/councils/innovate-uk/</Link></p>
                <p className="body22"><span className="txtred">NatWest Business Accelerator:</span> This programme provides mentoring, networking, and funding opportunities to help businesses grow.</p>
                <p><Link href="https://www.natwest.com/business/business-services/entrepreneur-accelerator.html" className="body22">https://www.natwest.com/business/business-services/entrepreneur-accelerator.html</Link></p>
                <p className="body22"><span className="txtred">Start-Up Loans:</span> A government-backed scheme offering loans up to £25,000 for new businesses.</p>
                <p><Link href="https://www.gov.uk/apply-start-up-loan" className="body22">https://www.gov.uk/apply-start-up-loan</Link></p>
                <p className="bigred mt-4">Business Advice and Support</p>
                <p className="body22"><span className="txtred">Enterprise Nation:</span> A non-profit organisation offering training, mentoring, and networking opportunities to businesses.</p>
                <p><Link href="https://www.enterprisenation.com/" className="body22">https://www.enterprisenation.com/</Link></p>
                <p className="body22"><span className="txtred">Federation of Small Businesses (FSB):</span> This membership organisation advocates for small businesses in the UK, providing advice, support, and advocacy.</p>
                <p><Link href="https://www.fsb.org.uk/" className="body22">https://www.fsb.org.uk/</Link></p>
                <p className="body22"><span className="txtred">Local Enterprise Partnership (LEP) Networks:</span> Local government-led organisations offering business advice, support, and funding regionally.</p>
                <p><Link href="https://www.instituteforgovernment.org.uk/article/explainer/local-enterprise-partnerships" className="body22">https://www.instituteforgovernment.org.uk/article/explainer/local-enterprise-partnerships</Link></p>
                <p className="body22"><span className="txtred">Chambers of Commerce:</span> Local organisations representing business interests, providing networking, advice, and support.</p>
                <p><Link href="https://www.britishchambers.org.uk/" className="body22">https://www.britishchambers.org.uk/</Link></p>
                </>
            )}
            <div className="text-center py-4"><Button variant="outline-danger" onClick={toggleView}>{isToggled ? 'Read Less' : 'Read More'}</Button></div>
        </Container>
        <Footer />
        </>
    );
}