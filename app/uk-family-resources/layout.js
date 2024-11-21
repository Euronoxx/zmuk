export const metadata = {
    title: "Zoiko Mobile | UK Family resources",
    description: "Zoiko Mobile UK Family resources",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/uk-family-resources",
    },
    openGraph: {
        title: "Zoiko Mobile | UK Family resources",
        description: "Zoiko Mobile UK Family resources",
        url: "/uk-family-resources",
        images: "/img/zoikomobile_logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}