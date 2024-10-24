import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

const plansection = () => {
    return (
        <Container className="mt-4 py-4 bannerheader">
            <h2 className="firstheader text-center">Join Zoiko Mobile Today And Start Something New!</h2>
            <p>Get super-fast Broadband | Reliable Network Coverage at Low Prices | Free International Calls | Free High Speed 5G Data</p>
            <Row className="text-center mt-4 plansec">
                <Col>
                    <Link href='/plans'>
                        <Image src='/img/homeicon-1.png' className="my-2" width={100} height={100} alt="View Plans" />
                        <p>View Plans</p>
                    </Link>
                </Col>
                <Col>
                    <Link href="/activate">
                        <Image src='/img/homeicon-2.png' className="my-2"width={100} height={100} alt="Activate Your SIM" />
                        <p>Activate Your SIM</p>
                    </Link>
                </Col>
                <Col>
                    <Link href='/zoiko-mobile-switch-save-form'>
                        <Image src='/img/homeicon-3.png' className="my-2"width={100} height={100} alt="Switch &amp; Save" />
                        <p>Switch &amp; Save</p>
                    </Link>
                </Col>
                <Col>
                    <Link href='offer-plans'>
                        <Image src='/img/homeicon-4.png' className="my-2"width={100} height={100} alt="Special Deals" />
                        <p>Special Deals</p>
                    </Link>
                </Col>
                <Col>
                    <Link href="#">
                        <Image src='/img/homeicon-5.png' className="my-2"width={100} height={100} alt="Redeem Cashback" />
                        <p>Redeem Cashback</p>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};
export default plansection;