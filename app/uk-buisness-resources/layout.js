export const metadata = {
    title: "Zoiko Mobile | UK Buisness resources",
    description: "Zoiko Mobile UK Buisness resources",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/uk-buisness-resources",
    },
    openGraph: {
        title: "Zoiko Mobile | UK Buisness resources",
        description: "Zoiko Mobile UK Buisness resources",
        url: "/uk-buisness-resources",
        images: "/img/zoikomobile_logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}