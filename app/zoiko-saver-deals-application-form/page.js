"use client"
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";
import SaverDealApplicationForm from "../components/SaverDealApplicationForm";

function SaverDealForm () {
    return (
        <>
        <Header />
        <HeadBar text="Zoiko Saver Deals Application Form" />
        <SaverDealApplicationForm />
        <Footer />
        </>
    );
}
export default SaverDealForm;