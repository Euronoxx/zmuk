"use client"
import { Card, Container, Form, Row } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        msg: ""
    })
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData({
          ...formData,
          [name]: type === "checkbox" ? checked : value,
        })
    }

    const onSubmit  = async (e) => {
        e.preventDefault()
        console.log(formData)
    }
    return (
        <>
        <Header />
        <HeadBar text={<>Have You got Any Questions<span className="txtred">?</span> At Zoiko Mobile We Offer Solutions<span className="txtred">!</span></>} />
        <Container className="py-5">
            <Row>
                <div className="col-md-6 col-sm-12">
                    <Image src={'/img/quawk.png'} alt="Bird" width={600} height={400} style={{width:'100%', height:'auto'}} />
                </div>
                <div className="col-md-6 col-sm-12">
                    <h3 className="green18 mb-4">If you have any questions, at Zoiko Mobile we pride ourselves in providing tailored solutions within the shortest possible time.</h3>
                    <Form onSubmit={onSubmit}>
                        <input type="text" name="name" className="form-control" onChange={handleChange} value={formData.name} placeholder="Name" />
                        <br />
                        <input type="email" name="email" className="form-control" onChange={handleChange} value={formData.email} placeholder="Email" />
                        <br />
                        <input type="text" name="mobile" className="form-control" onChange={handleChange} value={formData.mobile} placeholder="Mobile no" />
                        <br />
                        <textarea name="msg" className="form-control" onChange={handleChange} value={formData.msg}></textarea>
                        <br />
                        <input type="submit" name="submit" value="Send Message" className="btn btn-outline-success btn-lg" />
                    </Form>
                </div>
            </Row>
        </Container>
        <Container fluid className="p-0 contactmapbg">
            <Container className="py-4 px-5">
                <Row className="gx-3">
                    <div className="col-md-3 col-sm-12 offset-md-1">
                        <Card className="p-2">
                            <Image src={'/img/Rectangle.png'} width={300} height={140} alt="Tower" style={{width:'100%'}} />
                            <Card.Body>
                                <Card.Title className="txtred text-center">Head Office</Card.Title>
                                <Card.Text>35 Berkeley Square, Mayfair London W1J 5BF Hotline : +44 (0) 2071 646 399 info@zoikomobile.co.uk</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <Card className="p-2">
                            <Image src={'/img/glasgow.png'} width={300} height={140} alt="Tower" style={{width:'100%'}} />
                            <Card.Body>
                                <Card.Title className="txtred text-center">Glasgow</Card.Title>
                                <Card.Text>Suite 2/3, 2nd Floor 48 West George Street, Glasgow G2 1BP. Hotline : +44 141 530 1560 glasgow@zoikomobile.co.uk</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <Card className="p-2">
                            <Image src={'/img/cardiff.png'} width={300} height={140} alt="Tower" style={{width:'100%'}} />
                            <Card.Body>
                                <Card.Title className="txtred text-center">Cardiff</Card.Title>
                                <Card.Text>Portland House, 113-116 Blue Street, Cardiff CF10 5EQ. Hotline : +44 292 000 1374 cardiff@zoikomobile.co.uk</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </Container>
        </Container>
        <Container className="py-5">
            <h3 className="bigred text-center">Most Asked Questions</h3>
            <Row className="py-4">
                <div className="col-md-3 col-sm-6">
                    <Link href={"/how-to-billing-works-with-zoiko"}>
                    <Card className="p-3">
                        <Card.Title className="green18 text-center">Account &amp;<br />Billing</Card.Title>
                    </Card>
                    </Link>
                </div>
                <div className="col-md-3 col-sm-6">
                    <Link href={"/why-you-need-to-know-about-keeping-your-number"}>
                    <Card className="p-3">
                        <Card.Title className="green18 text-center">Network<br />Switch</Card.Title>
                    </Card>
                    </Link>
                </div>
                <div className="col-md-3 col-sm-6">
                    <Link href={"/preparing-your-phone-for-roaming"}>
                    <Card className="p-3">
                        <Card.Title className="green18 text-center">Roaming Setup<br />for IOS</Card.Title>
                    </Card>
                    </Link>
                </div>
                <div className="col-md-3 col-sm-6">
                    <Link href={"#"}>
                    <Card className="p-3">
                        <Card.Title className="green18 text-center">SIM<br />Activation</Card.Title>
                    </Card>
                    </Link>
                </div>
            </Row>
            <Row className="py-4">
                <div className="col-md-3 col-sm-6">
                    <Link href={"#"}>
                    <Card className="p-3">
                        <Card.Title className="green18 text-center">International Call<br />Charges</Card.Title>
                    </Card>
                    </Link>
                </div>
                <div className="col-md-3 col-sm-6">
                    <Link href={"#"}>
                    <Card className="p-3">
                        <Card.Title className="green18 text-center">Roaming Setup<br />for Android</Card.Title>
                    </Card>
                    </Link>
                </div>
                <div className="col-md-3 col-sm-6">
                    <Link href={"#"}>
                    <Card className="p-3">
                        <Card.Title className="green18 text-center">National Call &amp;<br />Data Charges</Card.Title>
                    </Card>
                    </Link>
                </div>
                <div className="col-md-3 col-sm-6">
                    <Link href={"#"}>
                    <Card className="p-3">
                        <Card.Title className="green18 text-center">Day Pass<br />Roaming Plans</Card.Title>
                    </Card>
                    </Link>
                </div>
            </Row>
        </Container>
        <Footer />
        </>
    );
};
export default Contact;