export const metadata = {
    title: "Zoiko Mobile | Customer Complaint",
    description: "Zoiko Mobile Customer Complaint Form Please complete the form below to register your complaint. We value your feedback and will strive to address your concerns promptly.",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/customer-complaint",
    },
    openGraph: {
        title: "Zoiko Mobile | Customer Complaint",
        description: "Zoiko Mobile Customer Complaint Form Please complete the form below to register your complaint. We value your feedback and will strive to address your concerns promptly.",
        url: "/customer-complaint",
        images: "/img/zoikomobile_logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}