export const metadata = {
    title: "Free Delivery Policy | Zoiko Mobile",
    description: "Discover Zoiko Mobile's Free Delivery Policy! Enjoy seamless shopping with fast delivery options on your favorite mobile devices.",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/free-delivery-policy",
    },
    openGraph: {
        title: "Free Delivery Policy | Zoiko Mobile",
        description: "Discover Zoiko Mobile's Free Delivery Policy! Enjoy seamless shopping with fast delivery options on your favorite mobile devices.",
        url: "/free-delivery-policy",
        images: "/img/zoikomobile_logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}