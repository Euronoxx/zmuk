export const metadata = {
    title: "Zoiko Mobile | Offer Plans!",
    description: "Zoiko Mobile Offer Plans",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/offer-plans",
    },
    openGraph: {
        title: "Zoiko Mobile | Offer Plans!",
        description: "Zoiko Mobile Offer Plans",
        url: "/offer-plans",
        images: "/img/zoikomobile_logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}