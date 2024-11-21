export const metadata = {
    title: "Zoiko Mobile | Public Sector Workers-Form",
    description: "Zoiko Mobile Public Sector Worker's Registration Form",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/public-sector-workers-form",
    },
    openGraph: {
        title: "Zoiko Mobile | Public Sector Workers-Form",
        description: "Zoiko Mobile Public Sector Worker's Registration Form",
        url: "/public-sector-workers-form",
        images: "/img/zoikomobile_logo.png",
    },
};

export default function RootLayout({ children }) {
    return <>{children}</>;
}