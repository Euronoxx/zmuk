"use client"
import Header from "../components/Header";
import HeadBar from "../components/HeadBar";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import Image from "next/image";

export default function Wificalling () {
    return (
        <>
        <Header />
        <HeadBar text="Stay Connected Anywhere with Wi-Fi Calling" />
        <Container className="redbordercontainer my-5 p-0">
            <div className="p-4 body22 text-center">
                Unlock seamless connectivity with our Wi-Fi Calling feature, where your phone conversations and texts flow unhindered, even in the nooks and crannies that mobile signals can&apos;t reach. Whether you find yourself in the basement of a bustling café or in the cosy, but signal-shy corners of your home, Wi-Fi Calling ensures you stay connected.
            </div>
            <div className="text-center">
                <Image src={"/img/wificalling.png"} width={500} height={200} alt="Wifi Calling" style={{width:'100%',height:'auto'}} />
            </div>
            
            <div className="p-4 body22 text-center">
                Imagine making crystal-clear calls and sending messages while connected to any Wi-Fi network, without any extra app or service needed. It&apos;s all about keeping you connected effortlessly. This feature is a game-changer for those living in areas with tricky mobile reception or for those moments when you&apos;re somewhere the signal fears to tread.
            </div>
            <div className="p-4 body22 text-center">
                With Wi-Fi Calling, your device automatically switches to available Wi-Fi connections to maintain your communications without interruption. This means continuous conversations, uninterrupted streaming of voicemails, and reliable text messaging anytime you&apos;re connected to Wi-Fi.
            </div>
            <div className="p-4 body22 text-center">
                Perfect for travellers too—avoid costly roaming charges and enjoy the comforts of home connectivity, no matter where you are in the world. Just hop on a Wi-Fi network and use your mobile phone as if you were back in the UK.
            </div>
            <div className="p-4 body22 text-center">
                Step into the future of communication with Wi-Fi Calling: no extra costs, no new numbers, just your mobile taking connectivity to the next level. Wherever there&apos;s Wi-Fi, you&apos;re ready to talk. Stay connected, effortlessly and always.
            </div>
        </Container>
        <Footer />
        </>
    );
}