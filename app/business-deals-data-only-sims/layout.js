export const metadata = {
    title: "Business Sim Only Deals UK | Zoiko Mobile",
    description: "Explore the best business SIM-only deals in the UK with Zoiko Mobile. Enjoy unlimited data, flexible 30-day plans, and more. Switch today and save on your mobile costs.",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/business-deals-data-only-sims",
    },
    openGraph: {
        title: "Business Sim Only Deals UK | Zoiko Mobile",
        description: "Explore the best business SIM-only deals in the UK with Zoiko Mobile. Enjoy unlimited data, flexible 30-day plans, and more. Switch today and save on your mobile costs.",
        url: "/business-deals-data-only-sims",
        images: "/img/zoikomobile_logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}