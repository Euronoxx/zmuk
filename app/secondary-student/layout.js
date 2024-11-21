export const metadata = {
    title: "Online Safety Platform for Secondary Students | Zoiko Mobile",
    description: "Online Safety Platform for Secondary Students Zoiko Mobile",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/secondary-student",
    },
    openGraph: {
        title: "Online Safety Platform for Secondary Students | Zoiko Mobile",
        description: "Online Safety Platform for Secondary Students Zoiko Mobile",
        url: "/secondary-student",
        images: "/img/zoikomobile_logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}