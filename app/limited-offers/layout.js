export const metadata = {
    title: "Zoiko Mobile | Limited offers",
    description: "Zoiko Mobile Limited Offers",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/limited-offers",
    },
    openGraph: {
        title: "Zoiko Mobile | Limited offers",
        description: "Zoiko Mobile Limited Offers",
        url: "/limited-offers",
        images: "/img/zoikomobile_logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}