export const metadata = {
    title: "MyZoiko Login | Securely Access Your MyZoiko Account",
    description: "Log in to your MyZoiko account today. Create your MyZoiko account, manage your profile, buy SIM Only plans, data only SIM plans, and get Zoiko Mobile updates",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/register",
    },
    openGraph: {
        title: "MyZoiko Login | Securely Access Your MyZoiko Account",
        description: "Log in to your MyZoiko account today. Create your MyZoiko account, manage your profile, buy SIM Only plans, data only SIM plans, and get Zoiko Mobile updates",
        url: "/register",
        images: "/img/zoikomobile_logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}