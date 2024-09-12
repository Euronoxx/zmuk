import Image from "next/image";
import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

class CustomerCare extends Component {
    render () {
        return (
            <>
            <Container className="my-5">
                <h2 className="green32bold text-center">Zoiko Customer Care</h2>
                <p className="text-center body22 px-5">We understand the importance of having great customer service. Which is why some of the best people in the biz are ready to help you out with all things.</p>
                <Row>
                    <div className="col-md-4 col-sm-6 col-xs-6">
                        <div className="card text-center">
                            <div className="card-body">
                                <Image src={'/img/attach_email.png'} width={80} height={90} alt="Email Icon" className="pb-3" />
                                <h3 className="card-title green18">Email Support</h3>
                                <p className="card-text body22">Reach us via email for Personalised assistance and queries.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-6">
                        <div className="card text-center">
                            <div className="card-body">
                                <Image src={'/img/livechat.png'} width={80} height={90} alt="Live Chat" className="pb-3" />
                                <h3 className="card-title green18">Card Title</h3>
                                <p className="card-text body22">Get instant help through our 24/7 live chat support.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-6">
                        <div className="card text-center">
                            <div className="card-body">
                                <Image src={'/img/support_agent.png'} width={80} height={90} alt="Support Agent" className="pb-3" />
                                <h3 className="card-title green18">Contact Support</h3>
                                <p className="card-text body22">Call our customer service for immediate assistance and solutions.</p>
                            </div>
                        </div>
                    </div>
                </Row>
                <Row className="my-4">
                    <div className="col-md-4 col-sm-6 col-xs-6">
                        <div className="card text-center">
                            <div className="card-body">
                                <Image src={'/img/quiz.png'} width={80} height={90} alt="FAQs" className="pb-3" />
                                <h3 className="card-title green18">FAQs</h3>
                                <p className="card-text body22">Find quick answers in our comprehensive FAQ section.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-6">
                        <div className="card text-center">
                            <div className="card-body">
                                <Image src={'/img/forum.png'} width={80} height={90} alt="Forum" className="pb-3" />
                                <h3 className="card-title green18">Ask The Community</h3>
                                <p className="card-text body22">Engage with our community for shared experiences and solutions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-6">
                        <div className="card text-center">
                            <div className="card-body">
                                <Image src={'/img/headset_mic.png'} width={80} height={90} alt="Sales Agent" className="pb-3" />
                                <h3 className="card-title green18">Contact Sales</h3>
                                <p className="card-text body22">Speak with our sales team for plan details and special offers.</p>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
            </>
            
        );
    }
}
export default CustomerCare;