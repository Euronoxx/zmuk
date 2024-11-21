export const metadata = {
    title: "Affordable SIM Only Deals | Best Pay-As-You-Go SIMs | Zoiko Mobile",
    description: "Searching for an affordable data plan? Zoiko Mobile provides the finest pay-as-you-go SIM-only deals. Secure the best value SIM deals in the UK and stay connected without hassle.",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/plans",
    },
    openGraph: {
        title: "Affordable SIM Only Deals | Best Pay-As-You-Go SIMs | Zoiko Mobile",
        description: "Searching for an affordable data plan? Zoiko Mobile provides the finest pay-as-you-go SIM-only deals. Secure the best value SIM deals in the UK and stay connected without hassle.",
        url: "/plans",
        images: "/img/zoikomobile_logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}