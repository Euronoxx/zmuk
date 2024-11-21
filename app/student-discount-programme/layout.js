export const metadata = {
    title: "Student Sim Only Deals UK With Discounts | SIM Only Deals | Zoiko Mobile",
    description: "Get exclusive student SIM-only deals in the UK with Zoiko Mobile. Save on your mobile plan with discounts tailored for students. Join now and start saving.",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/student-discount-programme",
    },
    openGraph: {
        title: "Student Sim Only Deals UK With Discounts | SIM Only Deals | Zoiko Mobile",
        description: "Get exclusive student SIM-only deals in the UK with Zoiko Mobile. Save on your mobile plan with discounts tailored for students. Join now and start saving.",
        url: "/student-discount-programme",
        images: "/img/zoikomobile_logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}