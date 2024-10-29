"use client"
import { Button, Card, CardBody, Container, Form, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

export default function Friend () {

    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        yourname: '',
        yourlastname: '',
        youremail: '',
        yourmobile: '',
        friendname: '',
        friendlastname: '',
        friendemail: '',
        friendmobile: '',
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
    
        if (!formData.yourname) formErrors.yourname = "Your name is required"
        if (!formData.yourlastname) formErrors.yourlastname = "Your last name is required"
        if (!formData.youremail) formErrors.youremail = "Your email is required"
        if (!formData.yourmobile) formErrors.yourmobile = "Your mobile is required"

        if (!formData.friendname) formErrors.friendname = "Friend name is required"
        if (!formData.friendlastname) formErrors.friendlastname = "Friend last name is required"
        if (!formData.friendemail) formErrors.friendemail = "Friend email is required"
        if (!formData.friendmobile) formErrors.friendmobile = "Friend mobile is required"
    
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
        <HeadBar text='Zoiko Mobile: Refer A Friend Programme' />
        <Container className="py-5 px-5">
            <Card>
                <CardBody>
                     <Row className="gx-5">
                        <div className="col-md-5 d-none d-md-block d-lg-block">
                            <Image src={"/img/friend.webp"} width={300} height={300} alt="User Login" style={{width:'100%', height:'auto'}} />
                            <p className="body22">Refer a friend to Zoiko Mobile and share the benefits! Our cheerful budgie, Buster, is excited to thank you for spreading the love. Here&apos;s how it works:</p>
                            <ul className="body22">
                                <li>Refer a friend to Zoiko Mobile</li>
                                <li>Your friend activates a plan</li>
                                <li>You both receive a £20 credit!</li>
                            </ul>
                        </div>
                        <div className="col-md-7 col-sm-12">
                            <p className="txtred body22">Fill out this form to refer a friend</p>
                            <Form onSubmit={handleSubmit}>
                                <h3 className="green18">Your Information:</h3>
                                <Row>
                                    <Col>
                                        <label htmlFor="yourname">Your Name</label>
                                        <input type="text" name="yourname" className="form-control" onChange={handleChange} value={formData.yourname} />
                                        {errors.yourname && <small className="txtred">{errors.yourname}</small>}
                                    </Col>
                                    <Col>
                                        <label htmlFor="yourlastname">Your Last Name</label>
                                        <input type="text" name="yourlastname" className="form-control" onChange={handleChange} value={formData.yourlastname} />
                                        {errors.yourlastname && <small className="txtred">{errors.yourlastname}</small>}
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col>
                                        <label htmlFor="youremail">Your Email</label>
                                        <input type="email" name="youremail" className="form-control" onChange={handleChange} value={formData.youremail} />
                                        {errors.youremail && <small className="txtred">{errors.youremail}</small>}
                                    </Col>
                                    <Col>
                                        <label htmlFor="yourmobile">Your Mobile</label>
                                        <input type="text" name="yourmobile" className="form-control" onChange={handleChange} value={formData.yourmobile} />
                                        {errors.yourmobile && <small className="txtred">{errors.yourmobile}</small>}
                                    </Col>
                                </Row>
                                <br />
                                <h3 className="green18">Friend&apos;s Information:</h3>
                                <Row>
                                    <Col>
                                        <label htmlFor="friendname">Friend&apos;s Name</label>
                                        <input type="text" name="friendname" className="form-control" onChange={handleChange} value={formData.friendname} />
                                        {errors.friendname && <small className="txtred">{errors.friendname}</small>}
                                    </Col>
                                    <Col>
                                        <label htmlFor="friendlastname">Friend&apos;s Last Name</label>
                                        <input type="text" name="friendlastname" className="form-control" onChange={handleChange} value={formData.friendlastname} />
                                        {errors.friendlastname && <small className="txtred">{errors.friendlastname}</small>}
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col>
                                        <label htmlFor="friendemail">Friend&apos;s Email</label>
                                        <input type="email" name="friendemail" className="form-control" onChange={handleChange} value={formData.friendemail} />
                                        {errors.friendemail && <small className="txtred">{errors.friendemail}</small>}
                                    </Col>
                                    <Col>
                                        <label htmlFor="friendmobile">Friend&apos;s Mobile</label>
                                        <input type="text" name="friendmobile" className="form-control" onChange={handleChange} value={formData.friendmobile} />
                                        {errors.friendmobile && <small className="txtred">{errors.friendmobile}</small>}
                                    </Col>
                                </Row>
                                <p className="green18">By submitting this form, you acknowledge and agree to the Zoiko Mobile Refer A Friend Programme&apos;s <Link href="/terms-and-conditions-refer-a-friend">Terms and Conditions</Link>.</p>
                                <input type="submit" name="submit" value={'Submit Form'} className="btn btn-outline-danger" />
                            </Form>
                        </div>
                    </Row>
                </CardBody>
            </Card>
            <p className="green24bold">It&apos;s a fantastic deal, if we do say so ourselves! So, don&apos;t be shy - start sharing the love and get rewarded today! Remember, when you refer a friend, you&apos;ll both be flying high with Zoiko Mobile!</p>
        </Container>
        <Footer />
        </>
    );
}