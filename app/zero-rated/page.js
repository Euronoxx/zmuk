"use client"
import { Container, Row, Col, Image, Table, Card } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";

export default function ZeroRated () {
    return (
        <>
        <Header />
        <HeadBar text="Enjoy Free SMS to Short Numbers with Zoiko Mobile!" />
        <Container className="py-5">
            <p className="bigred text-center">These include:</p>
            <p className="text-center green18 greenborderbox">The British Transport Police on: 61016</p>
            <Table striped bordered hover responsive className="text-center mb-3">
                <thead>
                    <tr className="body22">
                        <td style={{backgroundColor:'#DF1E5A',color:'white'}}>Shout</td>
                        <td style={{backgroundColor:'#DF1E5A',color:'white'}}>SPAM</td>
                        <td style={{backgroundColor:'#DF1E5A',color:'white'}}>PAC</td>
                        <td style={{backgroundColor:'#DF1E5A',color:'white'}}>STAC</td>
                        <td style={{backgroundColor:'#DF1E5A',color:'white'}}>INFO</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="body22">
                        <td className="p-3">85258</td>
                        <td className="p-3">7726</td>
                        <td className="p-3">65075</td>
                        <td className="p-3">75075</td>
                        <td className="p-3">85075</td>
                    </tr>
                </tbody>
            </Table>
            <p className="bigred text-center body22">If you receive a suspicious text:</p>
            <Row>
                <Col md={4} sm={12}>
                    <Card>
                        <Image src="/img/stop-1.png" alt="Stop" style={{width:'198px', height:'auto'}} className="mx-auto" />
                        <p className="body22 px-4 text-center">Stop! The text could be a scam. Read carefully and look for any details that don&apos;t seem right.</p>
                    </Card>
                </Col>
                <Col md={4} sm={12}>
                    <Card>
                        <Image src="/img/dontclick.png" alt="Dont Click" style={{width:'200px', height:'auto'}} className="mx-auto" />
                        <p className="body22 px-4 text-center">Don&apos;t click on any<br />links or give out any personal<br />or bank details.</p>
                    </Card>
                </Col>
                <Col md={4} sm={12}>
                    <Card>
                        <Image src="/img/report-1.png" alt="Report" style={{width:'220px', height:'auto'}} className="mx-auto" />
                        <p className="body22 px-4 text-center">Report any suspicious texts<br />to 2225 and make your friends<br />and family aware too.</p>
                    </Card>
                </Col>
            </Row>
            <br />
            <Row>
                <Col md={4} sm={12}>
                    <Card>
                        <Image src="/img/stop-2.png" alt="Stop" style={{width:'168px', height:'auto'}} className="mx-auto" />
                        <p className="body22 px-4 text-center">Stop! Do not give out any personal or bank details.</p>
                    </Card>
                </Col>
                <Col md={4} sm={12}>
                    <Card>
                        <Image src="/img/hangup.png" alt="Dont Click" style={{width:'198px', height:'auto'}} className="mx-auto" />
                        <p className="body22 px-4 text-center">Hang up and call the company they claim to be from to check if it is a scam</p>
                    </Card>
                </Col>
                <Col md={4} sm={12}>
                    <Card>
                        <Image src="/img/report-2.png" alt="Report" style={{width:'226px', height:'auto'}} className="mx-auto" />
                        <p className="body22 px-4 text-center">Report scam calls to Action Fraud and make your family aware too.</p>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    );
}