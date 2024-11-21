export const metadata = {
    title: "Wi-Fi Calling feature | Zoiko Mobile",
    description: "Wi-Fi Calling feature Zoiko Mobile",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/wi-fi-calling",
    },
    openGraph: {
        title: "Wi-Fi Calling feature | Zoiko Mobile",
        description: "Wi-Fi Calling feature Zoiko Mobile",
        url: "/wi-fi-calling",
        images: "/img/zoikomobile_logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}