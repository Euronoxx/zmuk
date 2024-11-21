export const metadata = {
    title: "Zoiko Mobile Help & Support | Always Ready to Assist | FAQ",
    description: "Need instant support? Our team is ready to help online or via phone call 24/7. Visit our FAQ for quick answers or contact us for help.",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/support",
    },
    openGraph: {
        title: "Zoiko Mobile Help & Support | Always Ready to Assist | FAQ",
        description: "Need instant support? Our team is ready to help online or via phone call 24/7. Visit our FAQ for quick answers or contact us for help.",
        url: "/support",
        images: "/img/zoikomobile_logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}