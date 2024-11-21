export const metadata = {
    title: "Zoiko Mobile | Student Discount Application",
    description: "Zoiko Mobile Student Discount Application",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/student-discount-application",
    },
    openGraph: {
        title: "Zoiko Mobile | Student Discount Application",
        description: "Zoiko Mobile Student Discount Application",
        url: "/student-discount-application",
        images: "/img/zoikomobile_logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}