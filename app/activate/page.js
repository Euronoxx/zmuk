"use client"
import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";

export default function activate () {

    const [errors, setErrors] = useState({});
    const [selectedValue, setSelectedValue] = useState('');
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        otpcode: "",
        serialno: "",
        title: "",
        lname: "",
        fname: "",
        dob: "",
        package: "",
        country: "",
        zipcode: "",
        city: "",
        addr: ""
    });
    const handleChange = (e) => {
        setSelectedValue(e.target.value);
        const { name, value, type, checked } = e.target
        setFormData({
          ...formData,
          [name]: type === "checkbox" ? checked : value,
        })
    }
    const validate = () => {
        let formErrors = {}
    
        if (!formData.username) formErrors.username = "Username is required"
        if (!formData.dob) formErrors.dob = "DOB is required"
        if (!formData.otpcode) formErrors.otpcode = "OTP Code is required"
        if (!formData.serialno) formErrors.serialno = "Serial no is required"
        if (!formData.lname) formErrors.lname = "Last name is required"
        if (!formData.fname) formErrors.fname = "First name is required"
        if (!formData.email) {
          formErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          formErrors.email = "Email address is invalid"
        }
    
        setErrors(formErrors)
        return Object.keys(formErrors).length === 0
    }

    const onSubmit  = async (e) => {
        e.preventDefault()
        if (!validate()) return
        console.log(formData);
    }

    return (
        <>
        <Header />
        <HeadBar text='Activate your SIM' />
        <Container>
            <h4 className="my-4 green18 text-center">Get started with our services! Initiate the activation process htmoFor your new SIM card here</h4>
            <Form onSubmit={onSubmit} className="my-5">
                <Row>
                    <Col>
                        <label htmoFor="username">Username</label>
                        <input type="text" name="username" className="form-control" onChange={handleChange} value={formData.username} />
                        {errors.username && <p className="txtred">{errors.username}</p>}
                    </Col>
                    <Col>
                        <label htmoFor="email">Email</label>
                        <input type="text" name="email" className="form-control" onChange={handleChange} value={formData.email} />
                        {errors.email && <p className="txtred">{errors.email}</p>}
                    </Col>
                    <Col>
                        <label htmoFor="otpcode">OTP Code</label>
                        <input type="text" name="otpcode" className="form-control" onChange={handleChange} value={formData.otpcode} />
                        {errors.otpcode && <p className="txtred">{errors.otpcode}</p>}
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <label htmoFor="serialno">SIM Serial Number</label>
                        <input type="text" name="serialno" className="form-control" onChange={handleChange} value={formData.serialno} />
                        {errors.serialno && <p className="txtred">{errors.serialno}</p>}
                    </Col>
                    <Col>
                        <label htmoFor="title">Title</label>
                        <select className="form-select" name="title" onChange={handleChange} value={formData.title}>
                            <option value={'Mr'}>Mr</option>
                            <option value={'Mrs'}>Mrs</option>
                            <option value={'Miss'}>Miss</option>
                            <option value={'Ms'}>Ms</option>
                            <option value={'Dr'}>Dr</option>
                            <option value={'Prof'}>Prof</option>
                        </select>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <label htmoFor="lname">Last Name</label>
                        <input type="text" name="lname" className="form-control" onChange={handleChange} value={formData.lname} />
                        {errors.lname && <p className="txtred">{errors.lname}</p>}
                    </Col>
                    <Col>
                        <label htmoFor="fname">First Name</label>
                        <input type="text" name="fname" className="form-control" onChange={handleChange} value={formData.fname} />
                        {errors.fname && <p className="txtred">{errors.fname}</p>}
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <label htmoFor="dob">Date of Birth</label>
                        <input type="date" name="dob" className="form-control" onChange={handleChange} value={formData.dob} />
                        {errors.dob && <p className="txtred">{errors.dob}</p>}
                    </Col>
                    <Col>
                        <label htmoFor="package">Your Zoiko Package</label>
                        <select className="form-select" name="package" onChange={handleChange} value={formData.package}>
                            <option value="77984">Zoiko Saver Basic</option>
                            <option value="38890">Business Booster Pro</option>
                            <option value="38872">Business Booster Premium</option>
                            <option value="37111">Silver Surfer</option>
                            <option value="37103">Roam &amp; Study Max</option>
                            <option value="34339">Unlimited Data Bundle</option>
                            <option value="34305">Zoiko Elite</option>
                            <option value="31089">Business Booster Lite</option>
                            <option value="31009">Junior Jetsetter</option>
                            <option value="30772">International plan</option>
                            <option value="16634">Day Pass Roaming Plan: Zones 4 &amp; 5</option>
                            <option value="16628">Daily Roaming Pass: Zones 2 &amp; 3</option>
                            <option value="16356">Thrifty Connect</option>
                            <option value="16003">Web Wanderer</option>
                            <option value="16000">Stream Seeker</option>
                            <option value="15997">Connect Compass</option>
                            <option value="15994">Gig Guru</option>
                            <option value="15991">Data Dash</option>
                        </select>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <label htmoFor="country">Country</label>
                        <input type="text" name="country" className="form-control" onChange={handleChange} value={formData.country} />
                    </Col>
                    <Col>
                        <label htmoFor="zipcode">Postalcode/ZIP code</label>
                        <input type="text" name="zipcode" className="form-control" onChange={handleChange} value={formData.zipcode} />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <label htmoFor="city">City</label>
                        <input type="text" name="city" className="form-control" onChange={handleChange} value={formData.city} />
                    </Col>
                    <Col>
                        <label htmoFor="addr">Address</label>
                        <input type="text" name="addr" className="form-control" onChange={handleChange} value={formData.addr} />
                    </Col>
                </Row>
                <br />
                <input type="submit" value="Submit" name="submit" className="btn btn-outline-danger btn-lg" />
            </Form>
        </Container>
        <Footer />
        </>
    );
}