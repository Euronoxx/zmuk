"use client"
import Header from "../components/Header";
import HeadBar from "../components/HeadBar";
import Footer from "../components/Footer";
import { Col, Container, Form, Row } from "react-bootstrap";
import React, { useState } from "react";

export default function AmbassadorsProgramme () {

    const [errors, setErrors] = useState({});
    const [selectedValue, setSelectedValue] = useState('');
    const [formData, setFormData] = useState({
        fullname: "",
        dob: "",
        email: "",
        mobile: "",
        instn: "",
        course: "",
        enrolmnt: "",
        gradyear: "",
        fileid: "",
        linkedin: "",
        instgrm: "",
        instfollow: "",
        twitter: "",
        twitfollow: "",
        othermedia: "",
        otherfollow: "",
        reasonfor: "",
        exprnce: "",
        hereabout: ""
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
    
        if (!formData.fname) formErrors.fullname = "Name is required"
        if (!formData.dob) formErrors.dob = "DOB is required"
        if (!formData.mobile) formErrors.mobile = "Mobile is required"
        if (!formData.email) {
          formErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          formErrors.email = "Email address is invalid"
        }
        if (!formData.instn) formErrors.instn = "Educational Institution is required"
        if (!formData.course) formErrors.course = "Course is required"
    
        setErrors(formErrors)
        return Object.keys(formErrors).length === 0
    }

    const handleForm  = async (e) => {
        e.preventDefault()
        if (!validate()) return
        console.log(formData)
    }
    return (
        <>
        <Header />
        <HeadBar text="Smart Scholar Ambassadors Programme Application Form" />
        <Container className="p-5">
            <h3 className="text-center mb-5">Thank you for expressing your interest in the Smart Scholar Ambassadors Programme at Zoiko Mobile. Please complete the form below to apply.</h3>
            <Form onSubmit={handleForm}>
                <Row>
                    <h4 className="bigred">Personal Information</h4>
                    <Col md={6} sm={12} xs={12}>
                        <label htmlFor="fullname">Full name</label>
                        <input type="text" name="fullname" className="form-control" onChange={handleChange} value={formData.fullname} />
                        {errors.fullname && <p className="txtred">{errors.fullname}</p>}
                    </Col>
                    <Col md={6} sm={12} xs={12}>
                        <label htmlFor="dob">DOB</label>
                        <input type="date" name="dob" className="form-control" onChange={handleChange} value={formData.dob} />
                        {errors.dob && <p className="txtred">{errors.dob}</p>}
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={6} sm={12} xs={12}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" className="form-control" onChange={handleChange} value={formData.email} />
                        {errors.email && <p className="txtred">{errors.email}</p>}
                    </Col>
                    <Col md={6} sm={12} xs={12}>
                        <label htmlFor="mobile">Mobile</label>
                        <input type="text" name="mobile" className="form-control" onChange={handleChange} value={formData.mobile} />
                        {errors.mobile && <p className="txtred">{errors.mobile}</p>}
                    </Col>
                </Row>
                <Row>
                    <h4 className="bigred mt-5">Education Details</h4>
                    <Col md={6} sm={12} xs={12}>
                        <label htmlFor="instn">Current Educational Institution</label>
                        <input type="text" name="instn" className="form-control" onChange={handleChange} value={formData.instn} />
                        {errors.instn && <p className="txtred">{errors.instn}</p>}
                    </Col>
                    <Col md={6} sm={12} xs={12}>
                        <label htmlFor="course">Course of Study</label>
                        <input type="text" name="course" className="form-control" onChange={handleChange} value={formData.course} />
                        {errors.course && <p className="txtred">{errors.course}</p>}
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={6} sm={12} xs={12}>
                        <label htmlFor="enrolmnt">Enrolment Status</label>
                        <input type="text" name="enrolmnt" className="form-control" onChange={handleChange} value={formData.enrolmnt} />
                    </Col>
                    <Col md={6} sm={12} xs={12}>
                        <label htmlFor="gradyear">Expected Graduation Year</label>
                        <input type="text" name="gradyear" className="form-control" onChange={handleChange} value={formData.gradyear} />
                    </Col>
                </Row>
                <h4 className="bigred mt-5">Upload Student ID</h4>
                <label htmlFor="fileid">Please upload a scanned or clear photo of your student ID card</label>
                <input type="fileid" name="fileid" className="form-control" value={formData.fileid} onChange={handleChange} />
                <h4 className="bigred mt-5">Social Media Presence:</h4>
                <label htmlFor="linkedin">LinkedIn Profile (if applicable)</label>
                <input type="text" name="linkedin" className="form-control" value={formData.linkedin} onChange={handleChange} />
                <br />
                <Row>
                    <Col md={6} sm={12} xs={12}>
                        <label htmlFor="instgrm">Instagram Handle (if applicable)</label>
                        <input type="text" name="instgrm" className="form-control" onChange={handleChange} value={formData.instgrm} />
                    </Col>
                    <Col md={6} sm={12} xs={12}>
                        <label htmlFor="instfollow">Number of Followers</label>
                        <input type="text" name="instfollow" className="form-control" onChange={handleChange} value={formData.instfollow} />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={6} sm={12} xs={12}>
                        <label htmlFor="twitter">Twitter Handle (if applicable)</label>
                        <input type="text" name="twitter" className="form-control" onChange={handleChange} value={formData.twitter} />
                    </Col>
                    <Col md={6} sm={12} xs={12}>
                        <label htmlFor="twitfollow">Number of Followers</label>
                        <input type="text" name="twitfollow" className="form-control" onChange={handleChange} value={formData.twitfollow} />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={6} sm={12} xs={12}>
                        <label htmlFor="othermedia">Other Relevant Social Media (if applicable)</label>
                        <input type="text" name="othermedia" className="form-control" onChange={handleChange} value={formData.othermedia} />
                    </Col>
                    <Col md={6} sm={12} xs={12}>
                        <label htmlFor="otherfollow">Number of Followers</label>
                        <input type="text" name="otherfollow" className="form-control" onChange={handleChange} value={formData.otherfollow} />
                    </Col>
                </Row>
                <br />
                <textarea name="reasonfor" className="form-control" rows={8} onChange={handleChange} value={formData.reasonfor} placeholder="Why do you want to be a Smart Scholar Ambassador? (max 200 words)"></textarea>
                <br />
                <textarea name="exprnce" className="form-control" rows={8} onChange={handleChange} value={formData.exprnce} placeholder="What skills or experiences make you a suitable candidate for this programme? (max 150 words)"></textarea>
                <h4 className="bigred mt-5">How did you hear about the Smart Scholar Ambassadors Programme?</h4>
                <label htmlFor="hereabout">Select</label>
                <select name="hereabout" className="form-select" onChange={handleChange} value={formData.hereabout}>
                    <option></option>
                    <option value={"socialmedia"}>Social Media</option>
                    <option value={"zoiko"}>Zoiko Mobile Website</option>
                    <option value={"referral"}>Referral</option>
                    <option value={"Other"}>Other</option>
                </select>
                <h4 className="bigred mt-5">Declaration</h4>
                <p className="body22">By submitting this form, I confirm that the information provided is accurate, and I agree to comply with the terms and conditions of the Smart Scholar Ambassadors Programme.</p>
                <input type="submit" name="submit" value={'Submit'} className="btn btn-outline-danger mt-4" />
            </Form>
        </Container>
        <Footer />
        </>
    );
}