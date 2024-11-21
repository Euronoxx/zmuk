export const metadata = {
    title: "Zoiko Mobile | Terms and Conditions",
    description: "Zoiko Mobile Terms and Conditions",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/terms-and-conditions",
    },
    openGraph: {
        title: "Zoiko Mobile | Terms and Conditions",
        description: "Zoiko Mobile Terms and Conditions",
        url: "/terms-and-conditions",
        images: "/img/zoikomobile_logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}