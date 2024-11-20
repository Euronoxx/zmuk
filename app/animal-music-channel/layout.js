export const metadata = {
    title: "Zoiko Mobile | Animal & Music Channel!",
    description: "Uncover the special bond between animals and music. Learn how rhythms enhance bonds. Stay updated with latest news about animals & music.",
    metadataBase: new URL("https://zoikomobile.co.uk"),
    alternates: {
        canonical: "/animal-music-channel",
    },
    openGraph: {
        title: "Zoiko Mobile | Animal & Music Channel!",
        description: "Uncover the special bond between animals and music. Learn how rhythms enhance bonds. Stay updated with latest news about animals & music.",
        url: "/animal-music-channel",
        images: "/img/zoikomobile_logo.png",
    },
};
  
export default function RootLayout({ children }) {
    return <>{children}</>;
}