"use client"
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";

const switchsave = () => {
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        mobile: "",
        provider: "",
        cost: "",
        data: "",
        keepnum: "",
        paccode: "",
        newnumber: "",
        staccode: "",
        consent: "",
        transfer: ""
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
        <HeadBar text={<>Switch to Simplicity <span className="msicon"><i className="bi bi-music-note-beamed"></i></span> More Data <span className="msicon"><i className="bi bi-music-note-beamed"></i></span> More Saving <span className="msicon"><i className="bi bi-music-note-beamed"></i></span> Less Hassle</>} />

        <Container className="greybox">
            <Row>
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <h4>Speed up your savings with Zoiko Mobile&apos;s Switch &amp; Save deal!</h4>
                    <p>Our speedy Cheetah, Finn, knows a thing or two about fast tracking your finances. Switch to Zoiko Mobile today and enjoy fantastic saving on your mobile plan, plus free 5G speed!</p>
                    <Image src='/img/cheetah.png' className="w-100" width={300} height={600} style={{height:'auto'}} alt="Speed of Cheetah" />
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="redborderbox">
                        <form onSubmit={onSubmit}>
                            <h5>Personal Information</h5>
                            <Row>
                                <Col>
                                    <label for="fname">First name</label>
                                    <input type="text" name="fname" className="form-control" placeholder="First name" onChange={handleChange} value={formData.fname} required />
                                </Col>
                                <Col>
                                    <label for="lname">Last name</label>
                                    <input type="text" name="lname" className="form-control" placeholder="Last name" onChange={handleChange} value={formData.lname} required />
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col>
                                    <label for="email">Email</label>
                                    <input type="email" name="email" className="form-control" placeholder="Email" onChange={handleChange} value={formData.email} required />
                                </Col>
                                <Col>
                                    <label for="mobile">Mobile</label>
                                    <input type="text" name="mobile" className="form-control" placeholder="Mobile" onChange={handleChange} value={formData.mobile} required />
                                </Col>
                            </Row>
                            <h5 className="mt-4">Current Mobile Service Details</h5>
                            <Row>
                                <Col>
                                    <label for="provider">Current Provider</label>
                                    <input type="text" name="provider" className="form-control" placeholder="Current provider" onChange={handleChange} value={formData.provider} />
                                </Col>
                                <Col>
                                    <label for="cost">Current Provider Cost(£)</label>
                                    <input type="text" name="cost" className="form-control" placeholder="Cost" onChange={handleChange} value={formData.cost} />
                                </Col>
                            </Row>
                            <br />
                            <label for="data">Data Allowance(GB)</label>
                            <input type="text" name="data" className="form-control" placeholder="Current provider" onChange={handleChange} value={formData.data} />
                            <br />
                            <h5>Select Your New Zoiko Mobile Plan</h5>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="keepnum" onChange={handleChange} value={formData.keepnum} />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Yes, I want to keep my current mobile number
                                </label>
                            </div>
                            <Row>
                                <Col>
                                    <label for="fname">PAC Code: *</label>
                                    <input type="text" name="paccode" className="form-control" onChange={handleChange} value={formData.paccode} /><small>(required if keeping your number)</small>
                                </Col>
                                <Col></Col>
                            </Row>
                            <br />
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="newnumber" onChange={handleChange} value={formData.newnumber} />
                                <label className="form-check-label" for="flexCheckDefault">
                                    No, I would like a new number and to cancel my current. (Please provide your STAC below)
                                </label>
                            </div>
                            <Row>
                                <div className="col">
                                    <label for="fname">STAC Code: *</label>
                                    <input type="text" name="staccode" className="form-control" onChange={handleChange} value={formData.staccode} /><small>(required if cancelling your current service without porting your numbe)</small>
                                </div>
                                <div className="col"></div>
                            </Row>
                            <br />
                            <div className="form-check">
                                <input className="form-check-input"name="consent" type="checkbox"onChange={handleChange} value={formData.consent} />
                                <label className="form-check-label" for="flexCheckDefault">
                                I agree to the terms and conditions of Zoiko Mobile.
                                </label>
                            </div>
                            <br />
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="transfer" onChange={handleChange} value={formData.transfer} />
                                <label className="form-check-label" for="flexCheckDefault">
                                I consent to the transfer of my service to Zoiko Mobile and understand that my current services will be terminated once the switch is complete.
                                </label>
                            </div>
                            <br />
                            <input type="submit" value="Submit" name="submit" className="btn btn-outline-danger" />
                        </form>
                    </div>
                </div>
            </Row>
        </Container>
        <Footer />
        </>
    );
};
export default switchsave;