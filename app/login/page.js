"use client"
import { Card, CardBody, Container, Form, Row } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";
import Image from "next/image";
import React, { useState } from "react";

export default function Login () {

    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        username: '',
        passwd: '',
        remember: false
    });
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData({
          ...formData,
          [name]: type === "checkbox" ? checked : value,
        })
    }
    const validate = () => {
        let formErrors = {}
    
        if (!formData.username) formErrors.username = "Username is required"
        if (!formData.passwd) formErrors.passwd = "Password is required"
    
        setErrors(formErrors)
        return Object.keys(formErrors).length === 0
    }
    const handleSubmit  = async (e) => {
        e.preventDefault()
        if (!validate()) return
        console.log(formData);
    }

    return (
        <>
        <Header />
        <HeadBar text='Join us today and enjoy our fantastic mobile services, all while supporting animal welfare and music initiatives!' />
        <Container className="py-5 px-5">
            <Card>
                <CardBody>
                     <Row className="gx-5">
                        <div className="col-md-5 d-none d-md-block d-lg-block">
                            <Image src={"/img/loginimg.png"} width={300} height={300} alt="User Login" style={{width:'100%', height:'auto'}} />
                            <p className="green18 text-center">Our cheerful Budgie, Buster, is excited to welcome you to our animal-friendly network!</p>
                        </div>
                        <div className="col-md-7 col-sm-12">
                            <p className="txtred body22 pt-5">Simply fill in the form below to get started.<br />We promise it's quicker than a Budgie flying to its nest!</p>
                            <Form onSubmit={handleSubmit}>
                                <label htmlFor="username">Username or Email</label>
                                <input type="text" name="username" className="form-control" onChange={handleChange} value={formData.username} />
                                {errors.username && <p className="txtred">{errors.username}</p>}
                                <br />
                                <label htmlFor="passwd">Password</label>
                                <input type="password" name="passwd" className="form-control" onChange={handleChange} value={formData.passwd} />
                                {errors.passwd && <p className="txtred">{errors.passwd}</p>}
                                <br />
                                <input className="form-check-input" type="checkbox" name="remember" onChange={handleChange} value={formData.remember} />&nbsp;
                                <label className="form-check-label" htmlFor="remember">
                                Remember me
                                </label>
                                <br />
                                <input type="submit" name="submit" value={'Login'} className="btn btn-outline-danger mt-4" />
                            </Form>
                        </div>
                    </Row>
                </CardBody>
            </Card>
            <h4 className="bigred text-center pt-5">Flock together and share the benefits!</h4>
            <p className="text-center body22">Our cheerful Budgie, Buster, wants to thank you for sharing the love! Refer a friend to Zoiko Mobile and get a £20 credit for both you and your friend. You'll be singing a happy tune with our fantastic entertainment benefits, including Spotify, Netflix, and Amazon Prime!</p>
        </Container>
        <Footer />
        </>
    );
}