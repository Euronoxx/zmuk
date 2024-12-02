"use client"
import React, { useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";
import plans from '../products/freeintlminutes.json';

const FreeInternationalCalling = () => {

    const [isSelected, setIsSelected] = useState('silversurfer');
    
    const handleChange = (e) => {
        setIsSelected(e.target.value);
    };

    return (
        <>
        <Header />
        <HeadBar text={<>Up to <span className="txtred">250</span> Minutes of Free International Calls to Over <span className="txtred">80</span> Countries</>} />
        <Container className="pb-3">
            <h4 className="my-4 bigred text-center">Free International Minutes</h4>
            <h4 className="my-4 green18 text-center">Select Your Plan</h4>
            <Row className="justify-content-md-center">
                <Col md={3}>
                    <select className="form-select text-center" value={isSelected} onChange={handleChange}>
                        <option value={'silversurfer'}>Silver Surfer</option>
                        <option value={'roamstudymax'}>Roam &amp; Study Max</option>
                        <option value={'zoikoelite'}>Zoiko Elite</option>
                        <option value={'unlimitedbundle'}>Unlimited Bundle</option>
                        <option value={'bblite'}>Business Booster Lite</option>
                        <option value={'bbpremium'}>Business Booster Premium</option>
                        <option value={'bbpro'}>Business Booster Pro</option>
                    </select>
                </Col>
            </Row>
        </Container>
        <Container className="redbordercontainer py-4 mb-5">
            {plans.filter(item => item.name === isSelected).map((item) => {
                return (
                    <div key={item.id}>
                    <h4 className="green24bold text-center">Free International Minutes included with the <span className="txtred">{item.data}</span> Plan as shown below</h4>
                    <Table striped bordered hover responsive className="text-center">
                        <thead>
                            <tr>
                                <td><span className="txtred">Free 250 Minutes</span></td>
                                <td><span className="txtgreen">Free 200 Minutes</span></td>
                                <td><span className="txtred">Free 150 Minutes</span></td>
                                <td><span className="txtgreen">Free 100 Minutes</span></td>
                                <td><span className="txtred">Free 50 Minutes</span></td>
                                <td><span className="txtgreen">Free 30 Minutes</span></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{item.twofifty.map((item) => (
                                    <p key={item.id}>{item}</p>
                                ))}</td>
                                <td>{item.twohundred.map((item) => (
                                    <p key={item.id}>{item}</p>
                                ))}</td>
                                <td>{item.onefifty.map((item) => (
                                    <p key={item.id}>{item}</p>
                                ))}</td>
                                <td>{item.hundred.map((item) => (
                                    <p key={item.id}>{item}</p>
                                ))}</td>
                                <td>{item.fifty.map((item) => (
                                    <p key={item.id}>{item}</p>
                                ))}</td>
                                <td>{item.thirty.map((item) => (
                                    <p key={item.id}>{item}</p>
                                ))}</td>
                            </tr>
                        </tbody>
                    </Table>
                    </div>
                );
            })}
        </Container>
        <Footer />
        </>
    );
};
export default FreeInternationalCalling;