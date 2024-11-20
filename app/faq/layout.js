export const metadata = {
    title: "Zoiko Mobile's Frequently Questions & Answers",
    description: "Got Questions? Zoiko’s Got Answers! How Zoiko Mobile Help and Support Team helps? Welcome to our Zoiko Mobile Help and Support hub, where we're here to assist you with a wide range of services. Whether you have questions about your plan, need technical support, or require help with billing and account management, our dedicated customer",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/faq",
    },
    openGraph: {
        title: "Zoiko Mobile's Frequently Questions & Answers",
        description: "Got Questions? Zoiko's Got Answers! How Zoiko Mobile Help and Support Team helps? Welcome to our Zoiko Mobile Help and Support hub, where we're here to assist you with a wide range of services. Whether you have questions about your plan, need technical support, or require help with billing and account management, our dedicated customer",
        url: "/faq",
        images: "/img/zoikomobile_logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}