"use client"
import Header from "../components/Header";
import HeadBar from "../components/HeadBar";
import Footer from "../components/Footer";
import { Container, Row, Col, Form } from "react-bootstrap";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function CustomerCompliant () {

    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        mobile: '',
        product: '',
        purdt: '',
        invoiceno: '',
        enquiry: '',
        desc: '',
        issdt: '',
        issdtl: '',
        outcome: '',
        docfile: '',
        consent: ''
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
    
        if (!formData.fname) formErrors.fname = "First name is required"
        if (!formData.lname) formErrors.lname = "Last name is required"
        if (!formData.email) formErrors.email = "Email is required"
        if (!formData.mobile) formErrors.mobile = "Mobile is required"
    
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
        <HeadBar text="Zoiko Mobile Customer Complaint Form" />
        <Container className="greybox my-4">
            <Row>
                <Col md={6} sm={12} xs={12}>
                    <p className="green24bold">Please complete the form below to register your complaint. We value your feedback and will strive to address your concerns promptly.</p>
                    <div className="text-center"><Image src={"/img/Zoiko-Z.png"} height={300} width={300} alt="Zoiko Logo" style={{width:'55%', height:'auto'}} /></div>
                </Col>
                <Col md={6} sm={12} xs={12}>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <label htmlFor="fname">First Name</label>
                                <input type="text" name="fname" className="form-control" onChange={handleChange} value={formData.fname} />
                                {errors.fname && <small className="txtred">{errors.fname}</small>}
                            </Col>
                            <Col>
                                <label htmlFor="lname">Last Name</label>
                                <input type="text" name="lname" className="form-control" onChange={handleChange} value={formData.lname} />
                                {errors.lname && <small className="txtred">{errors.lname}</small>}
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" className="form-control" onChange={handleChange} value={formData.email} />
                                {errors.email && <small className="txtred">{errors.email}</small>}
                            </Col>
                            <Col>
                                <label htmlFor="mobile">Mobile</label>
                                <input type="text" name="mobile" className="form-control" onChange={handleChange} value={formData.mobile} />
                                {errors.mobile && <small className="txtred">{errors.mobile}</small>}
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <label htmlFor="product">Product/Service Name</label>
                                <input type="text" name="product" className="form-control" onChange={handleChange} value={formData.product} />
                                {errors.product && <small className="txtred">{errors.product}</small>}
                            </Col>
                            <Col>
                                <label htmlFor="purdt">Purchase Date</label>
                                <input type="date" name="purdt" className="form-control" onChange={handleChange} value={formData.purdt} />
                                {errors.purdt && <small className="txtred">{errors.purdt}</small>}
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <label htmlFor="invoiceno">Invoice/Transaction Number</label>
                                <input type="text" name="invoiceno" className="form-control" onChange={handleChange} value={formData.invoiceno} />
                                {errors.invoiceno && <small className="txtred">{errors.invoiceno}</small>}
                            </Col>
                            <Col>
                                <label htmlFor="enquiry">Select Enquiry</label>
                                <select name="enquiry" className="form-select">
                                    <option value="general">General Enquiry</option>
                                    <option value="payment">Payment Enquiry</option>
                                </select>
                                {errors.enquiry && <small className="txtred">{errors.enquiry}</small>}
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <label htmlFor="desc">Brief Description</label>
                                <input type="text" name="desc" className="form-control" onChange={handleChange} value={formData.desc} />
                                {errors.desc && <small className="txtred">{errors.desc}</small>}
                            </Col>
                            <Col>
                                <label htmlFor="issdt">Date Issue Occurred</label>
                                <input type="text" name="issdt" className="form-control" onChange={handleChange} value={formData.issdt} />
                                {errors.issdt && <small className="txtred">{errors.issdt}</small>}
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <label htmlFor="isdtl">Detailed Description of the Issue</label>
                                <input type="text" name="issdtl" className="form-control" onChange={handleChange} value={formData.issdtl} />
                                {errors.issdtl && <small className="txtred">{errors.issdtl}</small>}
                            </Col>
                            <Col>
                                <label htmlFor="outcome">Desired Outcome/Resolution</label>
                                <input type="text" name="outcome" className="form-control" onChange={handleChange} value={formData.outcome} />
                                {errors.outcome && <small className="txtred">{errors.outcome}</small>}
                            </Col>
                        </Row>
                        <br />
                        <label htmlFor="docfile">Attach any relevant documents or images supporting your complaint</label>
                        <input type="file" name="docfile" className="form-control" onChange={handleChange} value={formData.docfile} />
                        <br />
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="consent" onChange={handleChange} value={formData.consent} />
                            <label className="form-check-label" htmlFor="consent">
                            By submitting this form, I acknowledge that the information provided is accurate to the best of my knowledge
                            </label>
                            {errors.consent && <p className="txtred">{errors.consent}</p>}
                        </div>
                        <input type="submit" name="submit" value={'Submit'} className="btn btn-outline-danger mt-4" />
                    </Form>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    );
}