export const metadata = {
    title: "Zoiko Mobile | Refund Policy",
    description: "Zoiko Mobile Refund Policy",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/refund-policy",
    },
    openGraph: {
        title: "Zoiko Mobile | Refund Policy",
        description: "Zoiko Mobile Refund Policy",
        url: "/refund-policy",
        images: "/img/zoikomobile_logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}