"use client"
import { Container, Card, CardBody, Form, Row } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";
import React, { useState } from "react";

function PublicSectorForm () {
    const [selectedValue, setSelectedValue] = useState('');
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phno: "",
        dob: "",
        emplname: "",
        jobtitle: "",
        wemail: "",
        dept: "",
        emailno: "",
        empaddr: "",
        title: "",
        fname: "",
        nphno: "",
        relationship: "",
        consent: false,
        consector: false,
        confrm: false
    })

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
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
        <HeadBar text='Zoiko Mobile Public Sector Worker&apos;s Registration Form' />
        <Container className="py-5">
            <Card>
                <CardBody>
                    <Form onSubmit={onSubmit}>
                    <h3 className="green18 text-center">Personal Details</h3>
                    <Row className="py-2">
                        <div className="col-md-5 offset-md-1">
                            <label>Full Name</label>
                            <input type="text" name="name" className="form-control" onChange={handleChange} value={formData.name} />
                        </div>
                        <div className="col-md-5">
                            <label>Email Address</label>
                            <input type="email" name="email" className="form-control" onChange={handleChange} value={formData.email} />
                        </div>
                    </Row>
                    <Row className="py-2">
                        <div className="col-md-5 offset-md-1">
                            <label>Phone Number</label>
                            <input type="text" name="phno" className="form-control" onChange={handleChange} value={formData.phno} />
                        </div>
                        <div className="col-md-5">
                            <label>Date of Birth</label>
                            <input type="date" name="dob" className="form-control" onChange={handleChange} value={formData.dob} />
                        </div>
                    </Row>
                    <h3 className="green18 text-center mt-4">Your Employment Details</h3>
                    <Row className="py-2">
                        <div className="col-md-5 offset-md-1">
                            <label>Employer&apos;s Name</label>
                            <input type="text" name="emplname" className="form-control" onChange={handleChange} value={formData.emplname} />
                        </div>
                        <div className="col-md-5">
                            <label>Job Title</label>
                            <input type="text" name="jobtitle" className="form-control" onChange={handleChange} value={formData.jobtitle} />
                        </div>
                    </Row>
                    <Row className="py-2">
                        <div className="col-md-5 offset-md-1">
                            <label>Work Email</label>
                            <input type="email" name="wemail" className="form-control" onChange={handleChange} value={formData.wemail} />
                        </div>
                        <div className="col-md-5">
                            <label>Name of Department</label>
                            <input type="text" name="dept" className="form-control" onChange={handleChange} value={formData.dept} />
                        </div>
                    </Row>
                    <Row className="py-2">
                        <div className="col-md-5 offset-md-1">
                            <label>Email ID Number</label>
                            <input type="text" name="emailno" className="form-control" onChange={handleChange} value={formData.emailno} />
                        </div>
                        <div className="col-md-5">
                            <label>Employer&apos;s Address</label>
                            <input type="text" name="empaddr" className="form-control" onChange={handleChange} value={formData.empaddr} />
                        </div>
                    </Row>
                    <h3 className="green18 text-center mt-4">Nominated Family and Friends (up to 5)</h3>
                    <Row className="py-2">
                        <div className="col-md-5 offset-md-1">
                            <label>Full Name</label>
                            <Row>
                                <div className="col-md-3 col-sm-3">
                                    <select name="title" className="form-select" onChange={handleChange}>
                                        <option value={'Mr'}>Mr</option>
                                        <option value={'Mrs'}>Mrs</option>
                                        <option value={'Ms'}>Ms</option>
                                        <option value={'Sir'}>Sir</option>
                                        <option value={'Prof'}>Prof</option>
                                        <option value={'Dr'}>Dr</option>
                                    </select>
                                </div>
                                <div className="col-md-9 col-sm-9"><input type="text" name="fname" className="form-control" onChange={handleChange} value={formData.fname} /></div>
                            </Row>
                        </div>
                        <div className="col-md-5">
                            <label>Email Address</label>
                            <input type="email" name="femail" className="form-control" onChange={handleChange} value={formData.femail} />
                        </div>
                    </Row>
                    <Row className="py-2">
                        <div className="col-md-5 offset-md-1">
                            <label>Phone Number</label>
                            <input type="text" name="nphno" className="form-control" onChange={handleChange} value={formData.nphno} />
                        </div>
                        <div className="col-md-5">
                            <label>Relationship</label>
                            <input type="text" name="relationship" className="form-control" onChange={handleChange} value={formData.relationship} />
                        </div>
                    </Row>
                    <Row className="py-4">
                        <div className="col-md-11 offset-md-1">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="consent" onChange={handleChange} value={formData.consent} />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                I agree to the terms &amp; conditions of this offer.
                                </label>
                            </div>
                        </div>
                    </Row>
                    <Row className="py-4">
                        <div className="col-md-11 offset-md-1">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="consector" onChange={handleChange} value={formData.consector} />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                I confirm that I am a public sector worker.
                                </label>
                            </div>
                        </div>
                    </Row>
                    <Row className="py-4">
                        <div className="col-md-11 offset-md-1">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="confrm" onChange={handleChange} value={formData.confrm} />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                By submitting this form, I confirm that the information provided is accurate and I agree to the terms and conditions of this offer.
                                </label>
                            </div>
                        </div>
                    </Row>
                    <Row className="py-2">
                        <div className="col-md-11 offset-md-1">
                            <input type="submit" name="submit" className="btn btn-outline-danger btn-lg my-4" value={'Submit Your Registration'} />
                        </div>
                    </Row>
                    </Form>
                </CardBody>
            </Card>
        </Container>
        <Footer />
        </>
    );
}
export default PublicSectorForm;