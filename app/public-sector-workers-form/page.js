"use client"
import { Container, Card, CardBody, Form, Row } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";

function PublicSectorForm () {
    return (
        <>
        <Header />
        <HeadBar text='Zoiko Mobile Public Sector Worker&apos;s Registration Form' />
        <Container className="py-5">
            <Card>
                <CardBody>
                    <Form method="post" action={"#"}>
                    <h3 className="green18 text-center">Personal Details</h3>
                    <Row className="py-2">
                        <div className="col-md-5 offset-md-1">
                            <label>Full Name</label>
                            <input type="text" name="name" className="form-control" />
                        </div>
                        <div className="col-md-5">
                            <label>Email Address</label>
                            <input type="email" name="email" className="form-control" />
                        </div>
                    </Row>
                    <Row className="py-2">
                        <div className="col-md-5 offset-md-1">
                            <label>Phone Number</label>
                            <input type="text" name="phno" className="form-control" />
                        </div>
                        <div className="col-md-5">
                            <label>Date of Birth</label>
                            <input type="date" name="dob" className="form-control" />
                        </div>
                    </Row>
                    <h3 className="green18 text-center mt-4">Your Employment Details</h3>
                    <Row className="py-2">
                        <div className="col-md-5 offset-md-1">
                            <label>Employer&apos;s Name</label>
                            <input type="text" name="emplname" className="form-control" />
                        </div>
                        <div className="col-md-5">
                            <label>Job Title</label>
                            <input type="text" name="jobtitle" className="form-control" />
                        </div>
                    </Row>
                    <Row className="py-2">
                        <div className="col-md-5 offset-md-1">
                            <label>Work Email</label>
                            <input type="email" name="wemail" className="form-control" />
                        </div>
                        <div className="col-md-5">
                            <label>Name of Department</label>
                            <input type="text" name="dept" className="form-control" />
                        </div>
                    </Row>
                    <Row className="py-2">
                        <div className="col-md-5 offset-md-1">
                            <label>Email ID Number</label>
                            <input type="text" name="emailno" className="form-control" />
                        </div>
                        <div className="col-md-5">
                            <label>Employer&apos;s Address</label>
                            <input type="tet" name="empaddr" className="form-control" />
                        </div>
                    </Row>
                    <h3 className="green18 text-center mt-4">Nominated Family and Friends (up to 5)</h3>
                    <Row className="py-2">
                        <div className="col-md-5 offset-md-1">
                            <label>Full Name</label>
                            <Row>
                                <div className="col-md-3 col-sm-3">
                                    <select name="title" className="form-select">
                                        <option value={'Mr'}>Mr</option>
                                        <option value={'Mrs'}>Mrs</option>
                                        <option value={'Ms'}>Ms</option>
                                        <option value={'Sir'}>Sir</option>
                                        <option value={'Prof'}>Prof</option>
                                        <option value={'Dr'}>Dr</option>
                                    </select>
                                </div>
                                <div className="col-md-9 col-sm-9"><input type="text" name="name" className="form-control" /></div>
                            </Row>
                        </div>
                        <div className="col-md-5">
                            <label>Email Address</label>
                            <input type="email" name="email" className="form-control" />
                        </div>
                    </Row>
                    <Row className="py-2">
                        <div className="col-md-5 offset-md-1">
                            <label>Phone Number</label>
                            <input type="text" name="phno" className="form-control" />
                        </div>
                        <div className="col-md-5">
                            <label>Relationship</label>
                            <input type="text" name="relationship" className="form-control" />
                        </div>
                    </Row>
                    <Row className="py-4">
                        <div className="col-md-11 offset-md-1">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                I agree to the terms &amp; conditions of this offer.
                                </label>
                            </div>
                        </div>
                    </Row>
                    <Row className="py-4">
                        <div className="col-md-11 offset-md-1">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                I confirm that I am a public sector worker.
                                </label>
                            </div>
                        </div>
                    </Row>
                    <Row className="py-4">
                        <div className="col-md-11 offset-md-1">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
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