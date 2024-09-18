"use client"
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadBar from "../components/HeadBar";

function PrepareForRoaming () {
    return (
        <>
        <Header />
        <HeadBar text="Preparing Your iOS Device for Roaming" />
        <Container className="py-4 redborderbox my-5">
            <p className="bigred">Preparing Your iOS Device for Roaming with ZOIKO</p>
            <p>To use your ZOIKO SIM card abroad, it&apos;s vital to configure your iOS device settings for international roaming. We&apos;ve created a step-by-step guide, complete with diagrams, to help you easily set up your iPhone or iPad for international use.</p>
            <p className="bigred">Step 1 : Access &apos;Setting&apos;</p>
            <p>Settings</p>
            <p>Open your iOS device&apos;s &apos;Settings&apos; app. You can typically find this on your home screen or within your device&apos;s system settings.</p>
            <p className="bigred">Step 2 : Navigate to &apos;Mobile Data&apos;</p>
            <p>Mobile Data</p>
            <p>Locate and select &apos;Mobile Data&apos; within the &apos;Settings&apos; menu. This is where you&apos;ll configure your mobile data settings for international roaming.</p>
            <p className="bigred">Step 3 : Access &apos;Mobile Data Options&apos;</p>
            <p>Mobile Data Options</p>
            <p>In the &apos;Mobile Data&apos; section, find and tap &apos;Mobile Data Options.&apos; This is where you can manage your data settings.</p>
            <p className="bigred">Step 4: Open &apos;Mobile Data Network&apos;</p>
            <p>Mobile Data Network</p>
            <p>Within &apos;Mobile Data Options,&apos; you&apos;ll find the &apos;Mobile Data Network&apos; section. Tap on this option to access your data network settings for roaming.</p>
            <p className="bigred">Step 5: Update Mobile Data and MMS APN</p>
            <p>Mobile Data: mob.asm.net</p>
            <p>MMS: mob.asm.net</p>
            <p>In the &apos;Mobile Data Network&apos; section, you&apos;ll need to make specific changes to the &apos;Mobile Data&apos; and &apos;MMS&apos; fields. Set both of these to mob.asm.net. This setting ensures your data and multimedia messaging work seamlessly while you&apos;re abroad.</p>
            <p className="bigred">Step 6: Save Your Settings</p>
            <p>After updating the APN settings, make sure to save your changes in the &apos;Mobile Data Network&apos; section.</p>
            <p className="bigred">Step 7: Leave Other Fields as They Are</p>
            <p>You don&apos;t need to modify any other fields in your data settings. If there&apos;s existing information in those fields, simply leave it as it is.</p>
            <strong>Sample Settings</strong>
            <p>By following these steps along with the provided diagrams, you can ensure that your ZOIKO SIM works flawlessly while roaming abroad on your iOS device. This simple configuration will keep you connected and enable you to use data and send MMS messages without any hassles during your international travels.</p>
        </Container>
        <Footer />
        </>
    );
}
export default PrepareForRoaming;