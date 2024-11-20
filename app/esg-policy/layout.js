export const metadata = {
    title: "Zoiko Mobile | Esg Policy",
    description: "Learn about our ESG Policy that addressing environmental, social, and governance practices for a sustainable growth.",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/esg-policy",
    },
    openGraph: {
        title: "Zoiko Mobile | Esg Policy",
        description: "Learn about our ESG Policy that addressing environmental, social, and governance practices for a sustainable growth.",
        url: "/esg-policy",
        images: "/img/zoikomobile_logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}