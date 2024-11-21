export const metadata = {
    title: "Zoiko Mobile | Privacy Policy",
    description: "Zoiko Mobile Privacy Policy",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/privacy-policy",
    },
    openGraph: {
        title: "Zoiko Mobile | Privacy Policy",
        description: "Zoiko Mobile Privacy Policy",
        url: "/privacy-policy",
        images: "/img/zoikomobile_logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}