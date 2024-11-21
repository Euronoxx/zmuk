export const metadata = {
    title: "Buy Refurbished Smartphones | Top Deals in the UK | Zoiko Mobile",
    description: "Acquire a certified refurbished smartphone with a full warranty from Zoiko Mobile. Zero risks. Save money and connect with confidence. Order your refurbished phone today.",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/product-category/refurbished",
    },
    openGraph: {
        title: "Buy Refurbished Smartphones | Top Deals in the UK | Zoiko Mobile",
        description: "Acquire a certified refurbished smartphone with a full warranty from Zoiko Mobile. Zero risks. Save money and connect with confidence. Order your refurbished phone today.",
        url: "/product-category/refurbished",
        images: "/img/zoikomobile_logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}