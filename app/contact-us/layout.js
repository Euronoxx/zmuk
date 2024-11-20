export const metadata = {
    title: "Contact Zoiko Mobile for the Best Pay-As-You-Go SIM Deals",
    description: "Need help with our SIM deals? Contact Zoiko Mobile for all the information you need or fill out our contact form for a quick response.",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/contact-us",
    },
    openGraph: {
        title: "Contact Zoiko Mobile for the Best Pay-As-You-Go SIM Deals",
        description: "Need help with our SIM deals? Contact Zoiko Mobile for all the information you need or fill out our contact form for a quick response.",
        url: "/contact-us",
        images: "/img/zoikomobile_logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}