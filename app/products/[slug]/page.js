"use client"
import Header from "../../components/Header";
import HeadBar from "../../components/HeadBar";
import Footer from "../../components/Footer";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/navigation";
import data from "../../products/mobiledata.json";
import Image from "next/image";

export default function ProductDetail ({ params }) {
    const router = useRouter();
    const paramUrl = params.slug;

    return (
        <>
        <Header />
        <HeadBar text={<>Discover Premium Quality Refurbished Smartphones <span style={{color:'#DF1E5A'}}>@</span> Zoiko Mobile</>} />
        {data.phones.filter(item => item.slug === paramUrl).map((item) => {
            return(
                <Container>
                    <Row key={item.id}>
                        <Col md={6} sm={12} xs={12} className="p-4 text-center">
                            <Image src={item.image} alt={item.name} width={300} height={400} style={{width:'70%',height:'auto'}} />
                        </Col>
                        <Col md={6} sm={12} xs={12} className="p-4">
                            <h2 className="green24bold">{item.name}</h2>
                            <div className="midbigred">{item.price}</div>
                            <h4 className="pt-3">Color</h4>
                            <div>{item.color.map((name, index) => (
                                <li className="checkoutlistcolor" key={index}>{name}</li>
                            ))}</div>
                            <h4 className="pt-3">Storage</h4>
                            <div className="pb-3">{item.storage.map((name, index) => (
                                <li className="checkoutliststorage" key={index}>{name}</li>
                            ))}</div>
                            <h4 className="pt-3">Condition</h4>
                            <div className="pb-4">{item.condition.map((name, index) => (
                                <li className="checkoutliststorage" key={index}>{name}</li>
                            ))}</div>
                            <Button variant="outline-danger" href="#" size="lg">Go To Checkout</Button>
                        </Col>
                    </Row>
                </Container>
            );
        })}
        <Footer />
        </>
        
    );
}