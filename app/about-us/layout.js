export const metadata = {
    title: "About SIM only deals UK | Free SIM Card Deals Provider | Zoiko",
    description: "Learn about our mission and find free SIM cards and cheap SIM only deals with unlimited data in UK. Stay connected!",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About SIM only deals UK | Free SIM Card Deals Provider | Zoiko",
        description: "Learn about our mission and find free SIM cards and cheap SIM only deals with unlimited data in UK. Stay connected!",
        url: "/about",
        images: "/img/zoikomobile_logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}