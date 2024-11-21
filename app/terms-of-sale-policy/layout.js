export const metadata = {
    title: "Terms of Sale Policy | Zoiko Mobile",
    description: "Read our Sale Policy to learn about purchase terms, returns, and more. Ensure a seamless shopping experience with clear guidelines!",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/terms-of-sale-policy",
    },
    openGraph: {
        title: "Terms of Sale Policy | Zoiko Mobile",
        description: "Read our Sale Policy to learn about purchase terms, returns, and more. Ensure a seamless shopping experience with clear guidelines!",
        url: "/terms-of-sale-policy",
        images: "/img/zoikomobile_logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}