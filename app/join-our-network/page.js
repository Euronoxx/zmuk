"use client"
import Header from "../components/Header";
import HeadBar from "../components/HeadBar";
import Footer from "../components/Footer";
import { Col, Container, Form, Row } from "react-bootstrap";
import React, { useState } from "react";

export default function JoinOurNetwork () {

    const [errors, setErrors] = useState({});
    const [selectedValue, setSelectedValue] = useState('');
    const [formData, setFormData] = useState({
        insttn: "",
        country: ""
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
    
        if (!formData.insttn) formErrors.insttn = "Educational Institution is required"
        if (!formData.country) formErrors.country = "Country is required"
    
        setErrors(formErrors)
        return Object.keys(formErrors).length === 0
    }

    const handleSubmit  = async (e) => {
        e.preventDefault()
        if (!validate()) return
        console.log(formData)
    }

    return (
        <>
        <Header />
        <HeadBar text="Partner with Zoiko Mobile to Empower Travellers and Students in the UK" />
        <Container className="p-5">
            <h3 className="txtred text-center pb-3">Welcome to the UK Partner Application!</h3>
            <p className="body22 pb-4">Thank you for your interest in becoming a partner with Zoiko Mobile. We&apos;re excited about the opportunity to collaborate with organisations like yours to help individuals from around the world have a smooth and enjoyable experience in the UK.</p>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6} sm={12} xs={12}>
                        <label htmlFor="insttn">Please select the option that best describes your status</label>
                        <select name="insttn" onChange={handleChange} className="form-select" value={formData.insttn}>
                            <option>Select Option</option>
                            <option value={"eduinst"}>Educational Institution</option>
                            <option value={"tragnc"}>Travel Agency</option>
                            <option value={"other"}>Other</option>
                        </select>
                        {errors.insttn && <p className="txtred">{errors.insttn}</p>}
                    </Col>
                    <Col md={6} sm={12} xs={12}>
                        <label htmlFor="country">What country are you based in?</label>
                        <select name="country" onChange={handleChange} className="form-select" value={formData.country}>
                            <option>Select Option</option>
                            <option value={"australia"}>Australia</option>
                            <option value={"brazil"}>Brazil</option>
                            <option value={"ghana"}>Ghana</option>
                            <option value={"india"}>India</option>
                            <option value={"kenya"}>Kenya</option>
                            <option value={"newzealand"}>New Zealand</option>
                            <option value={"nigeria"}>Nigeria</option>
                            <option value={"caribbean"}>The Caribbean Islands</option>
                            <option value={"other"}>Other (Please Specify)</option>
                        </select>
                        {errors.country && <p className="txtred">{errors.country}</p>}
                    </Col>
                </Row>
                <br />
                <p className="body22 pt-4">Which of the following best describes your main services?</p>
                <Row>
                    <Col md={6} sm={12} xs={12}>
                        <label htmlFor="insttn">For Educational Institutions:</label>
                        <select name="insttn" onChange={handleChange} className="form-select" value={formData.insttn}>
                            <option>Select Option</option>
                            <option value={"studyjrny"}>We support students embarking on UK study journeys (e.g., undergraduate degrees, exchange programmes, summer courses).</option>
                            <option value={"predep"}>We provide pre-departure or arrival support services for students (e.g., visa guidance, airport pick-up, accommodation assistance).</option>
                            <option value={"all"}>All of the above</option>
                            <option value={"none"}>None of the above (please state your services)</option>
                        </select>
                    </Col>
                    <Col md={6} sm={12} xs={12}>
                        <label htmlFor="travel">For Travel Agencies:</label>
                        <select name="travel" onChange={handleChange} className="form-select" value={formData.travel}>
                            <option>Select Option</option>
                            <option value={"travelpkg"}>We offer travel packages or services for individuals visiting the UK (e.g., sightseeing tours, theatre tickets, airport transfers).</option>
                            <option value={"sptravl"}>We cater to specific types of travellers, such as families, business professionals, or luxury vacationers.</option>
                            <option value={"all"}>All of the above</option>
                            <option value={"none"}>None of the above (please state your services)</option>
                        </select>
                    </Col>
                </Row>
                <br />
                <label htmlFor="otherorg">For Other Organisations:</label>
                <textarea name="otherorg" className="form-control" rows={8} onChange={handleChange} value={formData.otherorg} placeholder="Please briefly describe your services related to travel or study in the UK."></textarea>
                <br />
                <p className="body22">How would you like to partner with Zoiko Mobile? (Select all that apply):</p>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="cobrand" onChange={handleChange} value={formData.cobrand} />
                    <label className="form-check-label" htmlFor="cobrand">
                    Co-branded brochures or marketing materials.
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="welcomeevnt" onChange={handleChange} value={formData.welcomeevnt} />
                    <label className="form-check-label" htmlFor="welcomeevnt">
                    Student welcome events or information sessions.
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="jntworkshp" onChange={handleChange} value={formData.jntworkshp} />
                    <label className="form-check-label" htmlFor="jntworkshp">
                    Joint workshops or webinars on travel/study in the UK.
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="discontofr" onChange={handleChange} value={formData.discontofr} />
                    <label className="form-check-label" htmlFor="discontofr">
                    Exclusive discounts or offers for your clients/students.
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="otheropn" onChange={handleChange} value={formData.otheropn} />
                    <label className="form-check-label" htmlFor="otheropn">
                    Other (Please specify)
                    </label>
                </div>
                <p className="body22 mt-4">What best describes your customers&apos; mobile needs? (you may select more than one option)</p>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="lightuesr" onChange={handleChange} value={formData.lightuesr} />
                    <label className="form-check-label" htmlFor="lightuesr">
                    Light Users: Mainly need calls, texts, and occasional light browsing (less than 2GB)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="streamers" onChange={handleChange} value={formData.streamers} />
                    <label className="form-check-label" htmlFor="streamers">
                    Streamers &amp; Sociaholics: Love music, videos, and sharing (2GB to 5GB)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="datadev" onChange={handleChange} value={formData.datadev} />
                    <label className="form-check-label" htmlFor="datadev">
                    Data Devourers: Can&apos;t live without endless entertainment (Unlimited data)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="busnvyg" onChange={handleChange} value={formData.busnvyg} />
                    <label className="form-check-label" htmlFor="busnvyg">
                    Business Voyagers: Global calls, data, and roaming are essential
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="wanders" onChange={handleChange} value={formData.wanders} />
                    <label className="form-check-label" htmlFor="wanders">
                    Flexible Wanderers: Prefer top-ups but occasionally crave extra data
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="allabove" onChange={handleChange} value={formData.allabove} />
                    <label className="form-check-label" htmlFor="allabove">
                    All of the above
                    </label>
                </div>
                <p className="body22 pt-4">Do you have any existing partnerships with similar organisations in the UK?</p>
                <Form.Check type="switch" name="extpartner" label="Yes I have" onChange={handleChange} value={formData.extpartner} />
                <br />
                <label htmlFor="ukpartner">If yes, please briefly describe your existing UK partnerships.</label>
                <textarea name="ukpartner" className="form-control" rows={8} onChange={handleChange} value={formData.ukpartner}></textarea>
                <br />
                <label htmlFor="potnpartner">Would you like to share any additional information about your organisation or potential partnership?</label>
                <textarea name="potnpartner" className="form-control" rows={8} onChange={handleChange} value={formData.potnpartner}></textarea>
                <input type="submit" name="submit" value={'Submit'} className="btn btn-outline-danger mt-4" />
            </Form>
        </Container>
        <Footer />
        </>
    );
}