import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const choosezoiko = () => {
    return (
        <Container fluid className="choosezoiko">
            <Container className="py-4">
                <h2 className="py-4">Why Choose Zoiko Mobile?</h2>
                <Row>
                    <Col className="zoikoflex">
                        <div><Image src='/img/sim_card.png' width={100} height={100} alt="" /></div>
                        <div><p>Free 5G<br />SIM Card</p></div>
                    </Col>
                    <Col className="zoikoflex">
                        <div><Image src='/img/icon-delivery.png' width={100} height={100} alt="" /></div>
                        <div><p>Free UK<br />Delivery</p></div>
                    </Col>
                    <Col className="zoikoflex">
                        <div><Image src='/img/5g-speed.png' width={100} height={100} alt="" /></div>
                        <div><p>Free 5G<br />Data Speed</p></div>
                    </Col>
                </Row>
                <br />
                <Row className="mt-4">
                    <div className="col zoikoflex">
                        <div><Image src='/img/service-call.png' width={100} height={100} alt="" /></div>
                        <div><p>Free Customer<br />Service Call</p></div>
                    </div>
                    <div className="col zoikoflex">
                        <div><Image src='/img/customer-support.png' width={100} height={100} alt="" /></div>
                        <div><p>Free 24X7<br />Customer Support</p></div>
                    </div>
                    <div className="col zoikoflex">
                        <div><Image src='/img/homeicon-3.png' width={100} height={100} alt="" /></div>
                        <div><p>Free Switching<br />To Zoiko Mobile</p></div>
                    </div>
                </Row>
            </Container>
        </Container>
    );
};

export default choosezoiko;