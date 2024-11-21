export const metadata = {
    title: "Zoiko Saver Deals | Zoiko Mobile",
    description: "Zoiko Saver Deals Zoiko Mobile",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/zoiko-saver-deals",
    },
    openGraph: {
        title: "Zoiko Saver Deals | Zoiko Mobile",
        description: "Zoiko Saver Deals Zoiko Mobile",
        url: "/zoiko-saver-deals",
        images: "/img/zoikomobile_logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}