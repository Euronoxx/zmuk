import React, { useState } from "react";
import { Container, Row, Form, Card, CardBody } from "react-bootstrap";

function SaverDealApplicationForm () {
    const [errors, setErrors] = useState({});
    const [selectedValue, setSelectedValue] = useState('');
    const [formData, setFormData] = useState({
        fname: "",
        dob: "",
        addr: "",
        city: "",
        email: "",
        mobile: "",
        universalcredit: false,
        jobseekerallowence: false,
        incomesupport: false,
        housingbenefit: false,
        childtaxcredit: false,
        pensioncredit: false,
        supportallowance: false,
        file: "",
        plantype: "",
        plandetail: "",
        consent: false,
        terms: false
    })
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
        if (!formData.addr) formErrors.addr = "Address is required"
        if (!formData.city) formErrors.city = "City is required"
        if (!formData.mobile) formErrors.mobile = "City is required"
        if (!formData.terms) formErrors.terms = "Agreement is required"
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
                    <div className="green18 text-center pb-4">Personal Details</div>
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
                                <label htmlFor="arrd">Street Address</label>
                                <input type="text" name="addr" className="form-control" onChange={handleChange} value={formData.addr} />
                                {errors.addr && <p className="txtred">{errors.addr}</p>}
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <label htmlFor="city">City</label>
                                <input type="text" name="city" className="form-control" onChange={handleChange} value={formData.city} />
                                {errors.city && <p className="txtred">{errors.city}</p>}
                            </div>
                        </Row>
                        <br />
                        <Row>
                            <div className="col-md-6 col-sm-12">
                                <label htmlFor="mobile">Contact Number</label>
                                <input type="text" name="mobile" className="form-control" onChange={handleChange} value={formData.mobile} />
                                {errors.mobile && <p className="txtred">{errors.mobile}</p>}
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" className="form-control" onChange={handleChange} value={formData.email} />
                                {errors.email && <p className="txtred">{errors.email}</p>}
                            </div>
                        </Row>
                        <br />
                        <div className="green18 text-center py-4">Personal Benefits</div>
                        <p>Please provide proof of receiving one or more of the following benefits (dated within the last three months):</p>
                        <small>Type of Benefit(s) (tick all that apply):</small>
                        <Row>
                            <div className="col-md-3 col-sm-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="universalcredit" onChange={handleChange} value={formData.universalcredit} />
                                    <label className="form-check-label" htmlFor="universalcredit">
                                    Universal Credit
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="jobseekerallowence" onChange={handleChange} value={formData.jobseekerallowence} />
                                    <label className="form-check-label" htmlFor="jobseekerallowence">
                                    Jobseeker&apos;s Allowance
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="incomesupport" onChange={handleChange} value={formData.incomesupport} />
                                    <label className="form-check-label" htmlFor="incomesupport">
                                    Income Support
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="housingbenefit" onChange={handleChange} value={formData.housingbenefit} />
                                    <label className="form-check-label" htmlFor="housingbenefit">
                                    Housing Benefit
                                    </label>
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <div className="col-md-3 col-sm-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="childtaxcredit" onChange={handleChange} value={formData.childtaxcredit} />
                                    <label className="form-check-label" htmlFor="childtaxcredit">
                                    Child Tax Credit
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="pensioncredit" onChange={handleChange} value={formData.pensioncredit} />
                                    <label className="form-check-label" htmlFor="pensioncredit">
                                    Pension Credit
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="supportallowance" onChange={handleChange} value={formData.supportallowance} />
                                    <label className="form-check-label" htmlFor="supportallowance">
                                    Employment &amp; Support Allowance
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="form-check">
                                    
                                </div>
                            </div>
                        </Row>
                        <br />
                        <Row>
                            <div className="col-md-4 col-sm-12">
                                <small>Upload Proof of Benefits/HMRC Tax Credits etc:</small>
                                <input type="file" name="file" className="form-control" onChange={handleChange} value={formData.file} />
                            </div>
                        </Row>
                        <br />
                        <div className="green18 text-center py-4">Preferred Plan</div>
                        <Row>
                            <div className="col-md-6 col-sm-12">
                                <small>Select the plan you wish to apply for:</small>
                                <select name="plantype" className="form-select" onChange={handleChange}>
                                    <option value={''}>Select Plan</option>
                                    <option value={'mobileplans'}>Mobile Plans</option>
                                    <option value={'broadplans'}>Broad Plans</option>
                                    <option value={'phoneplans'}>Phone Plans</option>
                                    <option value={'comboplans'}>Combo Plans</option>
                                </select>
                                {errors.plantype && <p className="txtred">{errors.plantype}</p>}
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <small>Plan Detail</small>
                                <select name="plandetail" className="form-select" onChange={handleChange}>
                                    <option value={''}>Select Package</option>
                                    <option value={'saverbasic'}>Zoiko Saver Basic (£5/month)</option>
                                    <option value={'saverplus'}>Zoiko Saver Plus (£4.50/month)</option>
                                    <option value={'saverpro'}>Zoiko Saver Pro (£7.50/month)</option>
                                    <option value={'broadbasic'}>Zoiko Saver Broadband Basic (£18.00/month)</option>
                                    <option value={'broadplus'}>Zoiko Saver Broadband Plus (£28.50/month)</option>
                                    <option value={'phonebasic'}>Zoiko Saver Phone Basic (£8.50/month)</option>
                                    <option value={'phoneplus'}>Zoiko Saver Phone Plus (£11.50/month)</option>
                                    <option value={'combo1'}>Zoiko Saver Combo 1(£19.50/month)</option>
                                    <option value={'combo2'}>Zoiko Saver Combo 2(£30.00/month)</option>
                                    <option value={'complete'}>Zoiko Saver Complete(£19.50/month)</option>
                                </select>
                                {errors.plandetail && <p className="txtred">{errors.plandetail}</p>}
                            </div>
                        </Row>
                        <br />
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="consent" onChange={handleChange} value={formData.consent} />
                            <label className="form-check-label" htmlFor="consent">
                            I hereby declare that the information provided is accurate and complete to the best of my knowledge. I understand that providing false information may result in the termination of services.
                            </label>
                            {errors.consent && <p className="txtred">{errors.consent}</p>}
                        </div>
                        <br />
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="terms" onChange={handleChange} value={formData.terms} />
                            <label className="form-check-label" htmlFor="terms">
                            By submitting this form, you agree to Zoiko Saver Deals&apos; terms and conditions
                            </label>
                            {errors.terms && <p className="txtred">{errors.terms}</p>}
                        </div>
                        <br />
                        <input type="submit" name="submit" value={'Submit your registration'} className="btn btn-outline-danger" />
                    </Form>
                </CardBody>
            </Card>
        </Container>
        </>
    );
}
export default SaverDealApplicationForm;