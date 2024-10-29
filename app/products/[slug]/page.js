"use client"
import Header from "../../components/Header";
import HeadBar from "../../components/HeadBar";
import Footer from "../../components/Footer";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
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
                <Container key={item.id}>
                    <Row>
                        <Col md={6} sm={12} xs={12} className="p-4 text-center">
                            <Image src={item.image} alt={item.name} width={300} height={400} style={{width:'70%',height:'auto'}} />
                        </Col>
                        <Col md={6} sm={12} xs={12} className="p-4">
                            <h2 className="green24bold">{item.name}</h2>
                            <div className="midbigred">{item.price}</div>
                            <hr />
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

        <Container className="p-5">
            <h3 className="green24bold">You may also like</h3>
            <Row>
                {data.phones.map((item) => (
                    <Col key={item.id} md={4}>
                        <Card className="p-4 mb-4" style={{height:'400px'}}>
                            <h3 dangerouslySetInnerHTML={{ __html: item.name }} className="green24bold" />
                            <Row>
                                <Col md={6} sm={6} xs={6}>
                                    Starting From:<p dangerouslySetInnerHTML={{ __html: item.price }} className="txtred" style={{fontSize:'14px'}} />
                                </Col>
                                <Col md={6} sm={6} xs={6}>
                                    Device condition:<p dangerouslySetInnerHTML={{ __html: item.condition }} style={{fontSize:'14px'}} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} sm={6} xs={6}>
                                    <Image src={item.image} alt={item.name} width={130} height={180} />
                                </Col>
                                <Col md={6} sm={6} xs={6}>
                                    Available colors:<p dangerouslySetInnerHTML={{ __html: item.color }} style={{fontSize:'14px'}} />
                                    Internal Storage:<p dangerouslySetInnerHTML={{ __html: item.storage }} style={{fontSize:'14px'}} />
                                    <p dangerouslySetInnerHTML={{ __html: item.quality }} style={{fontSize:'14px'}} />
                                </Col>
                            </Row>
                            <div className="mt-4">
                                <Button variant="outline-danger" href={`/products/${item.slug}`}>View Details</Button>&nbsp;<Button variant="outline-danger" href={`/products/${item.slug}`}>Buy Now</Button>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
        <Footer />
        </>
        
    );
}