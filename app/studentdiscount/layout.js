export const metadata = {
    title: "Zoiko Mobile | Student Discount Programme",
    description: "Zoiko Mobile Student Discount Programme",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/studentdiscount",
    },
    openGraph: {
        title: "Zoiko Mobile | Student Discount Programme",
        description: "Zoiko Mobile Student Discount Programme",
        url: "/studentdiscount",
        images: "/img/zoikomobile_logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}