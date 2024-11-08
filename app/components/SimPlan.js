"use client"
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import Carouselsimplan from "./carouselsimplans";

const simplan = () => {
    
    return (
        <>
        <Carouselsimplan />
        <div className="text-center my-5">
            <Link href='/plans' className="allplans">View All Plans <i className="bi bi-arrow-right"></i></Link>
        </div>
        <Container className="py-4 simplanbox">
            <h2 className="text-center py-4">Reasons to Love Zoiko Mobile</h2>
            <p>Zoiko Mobile offers unbeatable advantages <span style={{color:'#DF1E5A'}}>|</span> Free international calls <span style={{color:'#DF1E5A'}}>|</span> No credit check <span style={{color:'#DF1E5A'}}>|</span> Budget-friendly plans <span style={{color:'#DF1E5A'}}>|</span> Seamless connectivity with free EU roaming <span style={{color:'#DF1E5A'}}>|</span> Zoiko is the perfect choice for your mobile needs</p>
            <Row className="py-4 gx-6">
                <div className="col text-center">
                    <Image src='/img/mobile-round-icon.png' className="mb-4" width={100} height={100} alt="" />
                    <div className="text-center">
                        <h4>Free International Calls</h4>
                        <p>Connect with loved ones abroad without any extra charges.</p>
                    </div>
                </div>
                <div className="col text-center">
                    <Image src='/img/eye-icon.png' className="mb-4" width={100} height={100} alt="" />
                    <div className="text-center">
                        <h4>No Credit Check</h4>
                        <p>Get a mobile plan without worrying about credit checks.</p>
                    </div>
                </div>
                <div className="col text-center">
                    <Image src='/img/dot-icon.png' className="mb-4" width={100} height={100} alt="" />
                    <div className="text-center">
                        <h4>Pocket Friendly</h4>
                        <p>Choose from a range of affordable plans that suit your budget.</p>
                    </div>
                </div>
                <div className="col text-center">
                    <Image src='/img/search-icon.png' className="mb-4" width={100} height={100} alt="" />
                    <div className="text-center">
                        <h4>Free to Raom</h4>
                        <p>Enjoy free roaming in the EU with all our plans.</p>
                    </div>
                </div>
            </Row>
        </Container>
        <Container fluid className="refurbished">
            <Container className="py-4">
                <Row>
                    <div className="col-md-4 col-sm-12 py-4">
                        <h2>Peck Up A Fantastic Deal On Our Refurbished Smartphones!</h2>
                        <p>From Sleek Design to Lightning-Fast Processors, Our Refurbished Smartphones Have Got It All.</p>
                        <button type="button" className="btn btn-danger btn-lg">View Details</button>
                    </div>
                    <div className="col-md-8 col-sm-12 order-first order-md-1">
                        <img src='/img/mobile_group.png' className="w-100"  alt="" />
                    </div>
                </Row>
            </Container>
        </Container>
        </>
    );
};
export default simplan;