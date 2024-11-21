export const metadata = {
    title: "Zoiko Mobile's Latest News and Updates",
    description: "Stay updated yourself with Zoiko's latest tech news and trends. Dive into the latest in digital technology Blog today!",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/news",
    },
    openGraph: {
        title: "Zoiko Mobile's Latest News and Updates",
        description: "Stay updated yourself with Zoiko's latest tech news and trends. Dive into the latest in digital technology Blog today!",
        url: "/news",
        images: "/img/zoikomobile_logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}