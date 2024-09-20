import Link from "next/link";
import React, { useState } from "react";
import { Container, Row, Form, Card, CardBody } from "react-bootstrap";

function StudentDiscountForm () {
    const [errors, setErrors] = useState({});
    const [selectedValue, setSelectedValue] = useState('');
    const [formData, setFormData] = useState({
        fname: "",
        dob: "",
        email: "",
        mobile: "",
        instname: "",
        studid: "",
        enrlstatus: "",
        graddt: "",
        plantype: "",
        plandetail: "",
        roamdata: false,
        wificall: false,
        esim: false,
        file: "",
        consent: false,
        declare: false,
        discount: false,
        validprf: false,
        duration: false,
        expiration: false,
        accurateinfo: false,
        signat: "",
        sigdt: ""
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
    
        if (!formData.fname) formErrors.name = "Name is required"
        if (!formData.dob) formErrors.dob = "DOB is required"
        if (!formData.mobile) formErrors.mobile = "Mobile is required"
        if (!formData.declare) formErrors.declare = "Agreement is required"
        if (!formData.plantype) formErrors.plantype = "Please select plan type"
        if (!formData.plandetail) formErrors.plandetail = "Please select package type"
        if (!formData.email) {
          formErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          formErrors.email = "Email address is invalid"
        }
        if (!formData.consent) formErrors.consent = "Consent is required"
    
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
        <Container className="p-5">
            <Card>
                <CardBody>
                    <div className="bigred text-center pb-4">Personal Information</div>
                    <Form onSubmit={onSubmit}>
                        <Row>
                            <div className="col-md-6 col-sm-12">
                                <label htmlFor="fname">Full Name</label>
                                <input type="text" name="fname" className="form-control" onChange={handleChange} value={formData.fname} />
                                {errors.name && <p className="txtred">{errors.name}</p>}
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <label htmlFor="dob">Date of Birth</label>
                                <input type="date" name="dob" className="form-control" onChange={handleChange} value={formData.dob} />
                                {errors.dob && <p className="txtred">{errors.dob}</p>}
                            </div>
                        </Row>
                        <br />
                        <Row>
                            <div className="col-md-6 col-sm-12">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" className="form-control" onChange={handleChange} value={formData.email} />
                                {errors.email && <p className="txtred">{errors.email}</p>}
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <label htmlFor="mobile">Contact Number</label>
                                <input type="text" name="mobile" className="form-control" onChange={handleChange} value={formData.mobile} />
                                {errors.mobile && <p className="txtred">{errors.mobile}</p>}
                            </div>
                        </Row>
                        <br />
                        <div className="bigred text-center py-4">Education Details</div>
                        <Row>
                            <div className="col-md-6 col-sm-12">
                                <label htmlFor="instname">Name of Educational Institution</label>
                                <input type="text" name="instname" className="form-control" onChange={handleChange} value={formData.instname} />
                                {errors.instname && <p className="txtred">{errors.instname}</p>}
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <label htmlFor="studid">Student ID</label>
                                <input type="text" name="studid" className="form-control" onChange={handleChange} value={formData.studid} />
                                {errors.studid && <p className="txtred">{errors.studid}</p>}
                            </div>
                        </Row>
                        <br />
                        <Row>
                            <div className="col-md-6 col-sm-12">
                                <label htmlFor="enrlstatus">Enrolment Status</label>
                                <input type="text" name="enrlstatus" className="form-control" onChange={handleChange} value={formData.enrlstatus} />
                                {errors.enrlstatus && <p className="txtred">{errors.enrlstatus}</p>}
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <label htmlFor="graddt">Expected Graduation Date</label>
                                <input type="date" name="graddt" className="form-control" onChange={handleChange} value={formData.graddt} />
                                {errors.graddt && <p className="txtred">{errors.graddt}</p>}
                            </div>
                        </Row>
                        <br />
                        <Row>
                            <div className="col-md-6 col-sm-12">
                                <small>Please select the desired Zoiko Mobile monthly plan</small>
                                <select name="plantype" className="form-select" onChange={handleChange}>
                                    <option value={''}>Select Plan</option>
                                    <option value={'jetsetter'}>Junior Jetsetter</option>
                                    <option value={'scholer'}>Smart Scholer</option>
                                </select>
                                {errors.plantype && <p className="txtred">{errors.plantype}</p>}
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <small>Select your preferred contract duration for the selected plan</small>
                                <select name="plandetail" className="form-select" onChange={handleChange}>
                                    <option value={''}>Select Package</option>
                                    <option value={'rollingplan'}>Monthly Rolling Plan</option>
                                    <option value={'6mncontract'}>6 Month Contract Plan</option>
                                    <option value={'12mncontract'}>12 Month Contract Plan</option>
                                    <option value={'18mncontract'}>18 Month Contract Plan</option>
                                    <option value={'24mncontract'}>24 Month Contract Plan</option>
                                </select>
                                {errors.plandetail && <p className="txtred">{errors.plandetail}</p>}
                            </div>
                        </Row>
                        <br />
                        <Row>
                            <div className="col-md-6 col-sm-12">
                                <small>Please indicate if you would like to include any additional features *</small>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="roamdata" onChange={handleChange} value={formData.roamdata} />
                                    <label className="form-check-label" htmlFor="roamdata">
                                    Roaming Data (If available)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="wificall" onChange={handleChange} value={formData.wificall} />
                                    <label className="form-check-label" htmlFor="wificall">
                                    WiFi Calling
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="esim" onChange={handleChange} value={formData.esim} />
                                    <label className="form-check-label" htmlFor="esim">
                                    E-SIM (If available)
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <small>Please upload a scanned or clear photo of your student ID card *</small>
                                <input type="file" name="file" className="form-control" onChange={handleChange} value={formData.file} />
                            </div>
                        </Row>
                        <br />
                        <div className="bigred">I understand and agree to the following terms and conditions</div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="consent" onChange={handleChange} value={formData.consent} />
                            <label className="form-check-label" htmlFor="consent">
                            The student discount is available only to registered students age 16 and over at recognized educational institutions in the UK.
                            </label>
                            {errors.consent && <p className="txtred">{errors.consent}</p>}
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="declare" onChange={handleChange} value={formData.declare} />
                            <label className="form-check-label" htmlFor="declare">
                            I hereby declare that the information provided in this form is accurate and complete to the best of my knowledge.
                            </label>
                            {errors.declare && <p className="txtred">{errors.declare}</p>}
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="discount" onChange={handleChange} value={formData.discount} />
                            <label className="form-check-label" htmlFor="discount">
                            The discount is applicable to the specified monthly plans and contract durations.
                            </label>
                            {errors.discount && <p className="txtred">{errors.discount}</p>}
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="validprf" onChange={handleChange} value={formData.validprf} />
                            <label className="form-check-label" htmlFor="validprf">
                            I will provide valid proof of enrolment or a student ID when requested.
                            </label>
                            {errors.validprf && <p className="txtred">{errors.validprf}</p>}
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="duration" onChange={handleChange} value={formData.duration} />
                            <label className="form-check-label" htmlFor="duration">
                            The discount will be applied for the duration of the selected contract.
                            </label>
                            {errors.duration && <p className="txtred">{errors.duration}</p>}
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="expiration" onChange={handleChange} value={formData.expiration} />
                            <label className="form-check-label" htmlFor="expiration">
                            I can renew the student discount with updated proof of enrolment upon contract expiration.
                            </label>
                            {errors.expiration && <p className="txtred">{errors.expiration}</p>}
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="accurateinfo" onChange={handleChange} value={formData.accurateinfo} />
                            <label className="form-check-label" htmlFor="accurateinfo">
                            I hereby declare that the information provided in this form is accurate and complete to the best of my knowledge.
                            </label>
                            {errors.accurateinfo && <p className="txtred">{errors.accurateinfo}</p>}
                        </div>
                        <br />
                        <Row>
                            <div className="col-md-6 col-sm-12">
                                <label htmlFor="signat">Signature</label>
                                <input type="text" name="signat" className="form-control" onChange={handleChange} value={formData.signat} />
                                {errors.signat && <p className="txtred">{errors.signat}</p>}
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <label htmlFor="sigdt">Date</label>
                                <input type="date" name="sigdt" className="form-control" onChange={handleChange} value={formData.sigdt} />
                                {errors.sigdt && <p className="txtred">{errors.sigdt}</p>}
                            </div>
                        </Row>
                        <br />
                        <input type="submit" name="submit" value={'Submit'} className="btn btn-outline-danger" />
                    </Form>
                    <p className="py-4">Please submit this form, including your uploaded student ID, for verification. If you have any questions or require further assistance, please contact our customer support at <Link href={'mailto:support@zoikomobile.co.uk'} className="txtred">support@zoikomobile.co.uk</Link>. Thank you for choosing ZoikoMobile.</p>
                </CardBody>
            </Card>
        </Container>
        </>
    );
}
export default StudentDiscountForm;