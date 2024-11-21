export const metadata = {
    title: "Zoiko Mobile Switch & Save Form",
    description: "Zoiko Mobile Switch & Save Form",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/switch",
    },
    openGraph: {
        title: "Zoiko Mobile Switch & Save Form",
        description: "Zoiko Mobile Switch & Save Form",
        url: "/switch",
        images: "/img/zoikomobile_logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}