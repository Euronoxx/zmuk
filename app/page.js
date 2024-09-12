"use client"

import React from "react";
import Header from "./components/Header";
import Homebanner from "./components/Homebanner";
import Plansection from "./components/Plansection";
import Choosezoiko from "./components/Choosezoiko";
import Simplan from "./components/SimPlan";
import Footer from "./components/Footer";
import PhoneSlider from "./components/PhoneSlider";
import BusinessSims from "./components/BusinessSims";
import CustomerCare from "./components/CustomerCare";

export default function Home() {

  return (
    <>
    <Header />
    <Homebanner />
    <Plansection />
    <Choosezoiko />
    <Simplan />
    <PhoneSlider />
    <CustomerCare />
    <BusinessSims />
    <Footer />
    </>
  );
}
