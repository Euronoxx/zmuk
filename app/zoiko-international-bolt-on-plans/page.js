"use client"
import React, { useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";
import countries from '../products/countries.json';
import plans from '../products/boltonplans.json';
import HeadBarSmall from "../components/HeadBarSmall";
import Image from "next/image";

const InternationalBoltOnPlans = () => {

    const [selectedValue, setSelectedValue] = useState('');
    const [formData, setFormData] = useState({
        country: " - ",
        plan: " - "
    });

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
        const { name, value, type, checked } = e.target
        setFormData({
          ...formData,
          [name]: type === "checkbox" ? checked : value,
        });
        console.log(formData.country)
    };

    return (
        <>
        <Header />
        <HeadBar text={<>International Calling Plans to <span className="txtred">229</span> Countries</>} />
        <Container className="pb-3">
            <h4 className="my-4 bigred text-center">Zoiko International bolt-on Call Plans UK</h4>
            <Row className="justify-content-md-center">
                <Col md={3} className="text-center">
                    <label className="green18">Choose Your Country</label>
                    <select className="form-select text-center" name="country" onChange={handleChange} value={formData.country}>
                        <option>Select Country</option>
                        {countries.map((country) => (
                            <option key={country.id} value={country.name}>{country.name}</option>
                        ))}
                    </select>
                </Col>
                <Col md={3} className="text-center">
                    <label className="green18">Choose Your Bolt-On Plan</label>
                    <select className="form-select text-center" name="plan" onChange={handleChange} value={formData.plan}>
                        <option>Select Bolt-On Plan</option>
                        {plans.map((plan) => (
                            <option key={plan.id} value={plan.name}>{plan.name}</option>
                        ))}
                    </select>
                </Col>
            </Row>
        </Container>
        <Container className="py-4 my-4 greenborderbox">
            <div className="bigred text-center mb-4">
                {formData.plan}
            </div>
            <Table striped bordered hover responsive className="text-center">
                <thead>
                    <tr>
                        <td><span className="green18 text-center">Selected Country</span></td>
                        <td><span className="green18 text-center">Selected Bolt-On Plan</span></td>
                        <td><span className="green18 text-center">Cost (£)</span></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span className="green18 text-center">{formData.country}</span></td>
                        <td><span className="green18 text-center">{formData.plan}</span></td>
                        <td><span className="green18 text-center"></span></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
        <HeadBarSmall text="--" />
        <Container className="redborderbox mb-5 p-4" style={{marginTop:"-36px"}}>
            <div className="d-flex flex-md-row flex-column">
                <Image src={"/img/bolton-plans-rabit.png"} width={320} height={260} alt="I am Zoiko" style={{height:'auto'}} />
                <div>
                    <h3 className="bigred">Spin Your Way To International Savings With Our Bolt-On Plans!</h3>
                    <p className="green18 my-4">Our Tiny But Mighty Hamster, Whiskers, Has Scurried In With Some Fantastic Offers:</p>
                    <ul className="txtgreen body22 musicicon">
                        <li>Add International Calls And Texts To Your Existing Plan</li>
                        <li>Flexible Bolt-Ons To Suit Your Global Communication Needs</li>
                        <li>Affordable Rates For Calls And Texts To Destinations Worldwide</li>
                        <li>Easy to Add And Manage Through Your Online Account</li>
                    </ul>
                    <a href="/login" className="txtred body22 mt-4">Don&apos;t Be Stuck In A Wheel, Upgrade Your Plan With Zoiko Mobile&apos;s International Bolt-Ons Today And Start Spinning Your Way To Savings!</a>
                </div>
            </div>
        </Container>
        <Footer />
        </>
    );
};
export default InternationalBoltOnPlans;