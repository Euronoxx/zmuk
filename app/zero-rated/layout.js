export const metadata = {
    title: "Zero-Rated Plans by ZoiKo Mobile",
    description: "Zero-Rated Plans by ZoiKo Mobile",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/zero-rated",
    },
    openGraph: {
        title: "Zero-Rated Plans by ZoiKo Mobile",
        description: "Zero-Rated Plans by ZoiKo Mobile",
        url: "/zero-rated",
        images: "/img/zoikomobile_logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}