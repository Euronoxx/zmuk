export const metadata = {
    title: "Zoiko Mobile | UK Retirement Resources",
    description: "Zoiko Mobile UK Retirement Resources",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/uk-retirement-resources",
    },
    openGraph: {
        title: "Zoiko Mobile | UK Retirement Resources",
        description: "Zoiko Mobile UK Retirement Resources",
        url: "/uk-retirement-resources",
        images: "/img/zoikomobile_logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}