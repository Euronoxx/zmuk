"use client"
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";
import StudentDiscountForm from "../components/StudentDiscountForm";

function StudentDiscountApplication () {
    return (
        <>
        <Header />
        <HeadBar text="Zoiko Mobile Student Discount Application" />
        <StudentDiscountForm />
        <Footer />
        </>
    );
}
export default StudentDiscountApplication;