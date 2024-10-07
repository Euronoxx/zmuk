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
import Head from "next/head";

export default function Home() {

  return (
    <>
    <Head>
      <title>Zoiko Mobile | Home</title>
      <meta name="description" content="Zoiko Mobile UK | Powered by Euronoxx Group" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
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
