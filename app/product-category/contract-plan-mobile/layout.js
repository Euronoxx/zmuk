export const metadata = {
    title: "Contract Phone Deals | Affordable SIM Only Contracts | Zoiko Mobile",
    description: "Benefit from extended contracts and exclusive phone deals at Zoiko Mobile. Secure a new phone today and enjoy our competitive SIM only deals across the UK's leading network.",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/product-category/contract-plan-mobile",
    },
    openGraph: {
        title: "Contract Phone Deals | Affordable SIM Only Contracts | Zoiko Mobile",
        description: "Benefit from extended contracts and exclusive phone deals at Zoiko Mobile. Secure a new phone today and enjoy our competitive SIM only deals across the UK's leading network.",
        url: "/product-category/contract-plan-mobile",
        images: "/img/zoikomobile_logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}