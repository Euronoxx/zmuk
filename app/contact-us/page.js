"use client"
import { Card, Container, Form, Row } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";
import Image from "next/image";
import React, { useState } from "react";

const contact = () => {
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
                    <Image src={'/img/quawk.png'} alt="Bird" width={600} height={400} />
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
            <Container className="py-4">
                <Row>
                    <div className="col-md-4 col-sm-12">
                        <Card>
                            <Image src={'/img/Rectangle.png'} width={400} height={140} alt="Tower" />
                            <Card.Body>
                                <Card.Title>Head Office</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 col-sm-12"></div>
                    <div className="col-md-4 col-sm-12"></div>
                </Row>  
            </Container>
            
        </Container>
        <Footer />
        </>
    );
};
export default contact;