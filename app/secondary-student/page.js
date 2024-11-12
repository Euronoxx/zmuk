"use client"
import Header from "../components/Header";
import HeadBar from "../components/HeadBar";
import Footer from "../components/Footer";
import { Container, Button } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";

export default function SecondaryStudent () {

    const [isToggled, setIsToggled] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const toggleView = () => {
        setOpen(!isOpen);
        setIsToggled(!isToggled);
    }

    return (
        <>
        <Header />
        <HeadBar text="Learn to be Cyber Savvy: Stay Safe in the Digital World!" />
        <Container className="redborderbox p-3 my-5">
            <p className="bigred">Online Safety</p>
            <p className="txtred body22">Thinkuknow</p>
            <p className="body22">is a website from the National Society for the Prevention of Cruelty to Children (NSPCC) that provides information and advice about online safety for children and young people.</p>
            <p className="body22"><Link href={"https://www.thinkuknow.co.uk/"}>https://www.thinkuknow.co.uk/</Link></p>
            <p className="txtred body22">Childnet International</p>
            <p className="body22">is a charity that provides practical advice and resources to help children stay safe online.</p>
            {isOpen && (
                <>
                <p className="body22"><Link href={"https://www.childnet.com/"}>https://www.childnet.com/</Link></p>
                <p className="txtred body22">UK Safer Internet Centre</p>
                <p className="body22">is a national centre that works to promote safe and responsible online use among children and young people.</p>
                <p className="body22"><Link href={"https://saferinternet.org.uk/"}>https://saferinternet.org.uk/</Link></p>
                <p className="bigred mt-4">Homework Assistance</p>
                <p className="body22"><span className="txtred">BBC Bitesize:</span> is a website from the BBC that provides a range of online learning resources for students of all ages.</p>
                <p className="body22"><Link href={"https://www.bbc.com/bitesize"}>https://www.bbc.com/bitesize</Link></p>
                <p className="body22"><span className="txtred">Scool:</span> is a website that provides online homework help and revision resources for students of all ages.</p>
                <p className="body22"><Link href={"https://www.facebook.com/Scoolrevision/"}>https://www.facebook.com/Scoolrevision/</Link></p>
                <p className="body22"><span className="txtred">The Student Room:</span> The Open University is a leading UK university that offers a wide range of distance learning courses.</p>
                <p className="body22"><Link href={"https://www.thestudentroom.co.uk/"}>https://www.thestudentroom.co.uk/</Link></p>
                <p className="bigred mt-4">Research</p>
                <p className="body22"><span className="txtred">Google Scholar:</span>  is a search engine that allows you to search for academic papers, books, and other scholarly literature.</p>
                <p className="body22"><Link href={"https://scholar.google.com/"}>https://scholar.google.com/</Link></p>
                <p className="body22"><span className="txtred">JSTOR:</span> is a digital library that provides access to a wide range of academic journals and books.</p>
                <p className="body22"><Link href={"https://www.jstor.org/publishers/"}>https://www.jstor.org/publishers/</Link></p>
                <p className="body22"><span className="txtred">The British Library:</span> EBSCOhost is a research database that provides access to a wide range of academic journals, books, and other scholarly resources.</p>
                <p className="body22"><Link href={"https://en.wikipedia.org/wiki/British_Library"}>https://en.wikipedia.org/wiki/British_Library</Link></p>
                <p className="bigred mt-4">University Applications</p>
                <p className="body22"><span className="txtred">UCAS:</span> is the university admissions service for England, Wales, and Northern Ireland.</p>
                <p className="body22"><Link href={"https://www.ucas.com/undergraduate/applying-to-university"}>https://www.ucas.com/undergraduate/applying-to-university</Link></p>
                <p className="body22"><span className="txtred">Apply to University:</span> is a website where students can ask and answer questions, and share resources with other students about the university application process.</p>
                <p className="body22"><Link href={"https://www.applytouni.com/"}>https://www.applytouni.com/</Link></p>
                </>
            )}
            <div className="text-center py-4"><Button variant="outline-danger" onClick={toggleView}>{isToggled ? 'Read Less' : 'Read More'}</Button></div>
        </Container>
        <Footer />
        </>
    );
}