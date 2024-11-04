"use client"
import Header from "../components/Header";
import HeadBar from "../components/HeadBar";
import Footer from "../components/Footer";
import { Container, Button } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";

export default function UkFamilyResources () {

    const [isToggled, setIsToggled] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const toggleView = () => {
        setOpen(!isOpen);
        setIsToggled(!isToggled);
    }

    return (
        <>
        <Header />
        <HeadBar text="UK Family Vibes: Useful Resources for Tot to Teens!" />
        <Container className="redborderbox p-4 my-5">
            <p className="bigred">Family Lives (Parentline Plus):</p>
            <p className="body22">Provides confidential help and support to parents and families in the UK. They offer a helpline, online information, and local services.</p>
            <p className="body22">Website: <Link href="https://www.familylives.org.uk/" className="body22">https://www.familylives.org.uk/</Link></p>
            <p className="bigred">Citizens Advice:</p>
            <p className="body22">Offers free, confidential advice to people in the UK on a wide range of issues, including family law, benefits, debt, and housing.</p>
            <p className="bigred">Action for Children:</p>
            <p className="body22">Website: <Link href="https://www.citizensadvice.org.uk/" className="body22">https://www.citizensadvice.org.uk/</Link></p>
            {isOpen && (
                <>
                <p className="body22">Supports children and families through a range of services, including parenting support, children&apos;s services, and young people&apos;s services. Website:</p>
                <p className="body22">Website: <Link href="https://www.actionforchildren.org.uk/" className="body22">https://www.actionforchildren.org.uk/</Link></p>
                <p className="bigred">National Family Association:</p>
                <p className="body22">Provides support and information to families with children and young people. They offer a helpline, online information, and local services.</p>
                <p><Link href="http://www.aft.org.uk/index.asp" className="body22">http://www.aft.org.uk/index.asp</Link></p>
                <p className="bigred">Gingerbread:</p>
                <p className="body22">Supports single-parent families in the UK. They offer a helpline, online information, and local services.</p>
                <p><Link href="https://www.gingerbread.org.uk/" className="body22">https://www.gingerbread.org.uk/</Link></p>
                <p className="bigred">Home-Start UK:</p>
                <p className="body22">Provides home-based support to families with young children. They offer a range of services, including parenting support, early learning, and family support.</p>
                <p><Link href="https://www.home-start.org.uk/" className="body22">https://www.home-start.org.uk/</Link></p>
                </>
            )}
            <div className="text-center py-4"><Button variant="outline-danger" onClick={toggleView}>{isToggled ? 'Read Less' : 'Read More'}</Button></div>
        </Container>
        <Footer />
        </>
    );
}