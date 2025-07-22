import "@fortawesome/fontawesome-free/css/all.min.css";
import "@icon/themify-icons/themify-icons.css";
import { Cormorant_Garamond, Roboto, Source_Sans_3 } from "next/font/google";

import ImportJs from "@/components/ltr/import-js/import-js";
import Providers from "./theme-providers";
import StyleSelectors from "@/components/rtl/style-selector/style-selector";
import ApolloWrapper from "@/lib/apollo-provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "@/context/AuthContext";

{
  /* *** START FONT DECLARATION *** */
}
export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant-garamond",
});
export const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});
export const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-source-sans",
});
export const metadata = {
  title: "Outline Kerala - Breaking Malayalam News, Local & National Updates",
  description:
    "Stay informed with Outline Kerala – your trusted Malayalam news website for breaking updates, Kerala politics, local news, cinema, sports, and more.",
  icons: {
    icon: ["/favicon_io/favicon-32x32.png"],
    apple: ["/favicon_io/apple-touch-icon.png"],
    shortcut: ["/favicon_io/apple-touch-icon.png"],
  },
  keywords: [
    "Malayalam News",
    "Kerala News",
    "Outline Kerala",
    "Breaking News",
    "Kerala Politics",
    "Cinema News",
    "Sports News",
    "Local Kerala News",
  ],
  openGraph: {
    title: "Outline Kerala - Trusted Malayalam News Website",
    description:
      "Read the latest Malayalam news from Kerala and across India. Fast, accurate, and reliable news coverage, updated 24/7.",
    url: "https://outlinekerala.com",
    siteName: "Outline Kerala",
    images: [
      {
        url: "https://outlinekerala.com/og-image.jpg", // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Outline Kerala Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Outline Kerala - Malayalam News App & Website",
    description:
      "Follow the top Malayalam news from Kerala. Outline Kerala delivers breaking headlines, verified reports, and more.",
    images: ["https://outlinekerala.com/twitter-image.jpg"], // Replace with actual Twitter image
  },
};

{
  /*  END OF /. FONT DECLARATION */
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ImportJs />
      <body
        className={`${cormorant.variable} ${roboto.variable} ${sourceSans.variable}`}
      >
        <ApolloWrapper>
          <AuthProvider>
            <Providers>
              {children}
              <StyleSelectors />
              <ToastContainer />
            </Providers>
          </AuthProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
