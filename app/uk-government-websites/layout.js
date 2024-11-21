export const metadata = {
    title: "Zoiko Mobile | UK Government Websites",
    description: "Zoiko Mobile UK Government Websites",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/uk-government-websites",
    },
    openGraph: {
        title: "Zoiko Mobile | UK Government Websites",
        description: "Zoiko Mobile UK Government Websites",
        url: "/uk-government-websites",
        images: "/img/zoikomobile_logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}