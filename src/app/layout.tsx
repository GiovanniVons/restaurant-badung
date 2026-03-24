import type { Metadata } from "next";
import { Suspense } from "react";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { RestaurantJsonLd } from "@/components/JsonLd";
import { CartDrawer } from "@/components/CartDrawer";
import { CartFab } from "@/components/CartFab";

const bandoeng = localFont({
  src: "../../public/fonts/Bandoeng.woff2",
  weight: "400",
  variable: "--font-bandoeng",
  display: "swap",
  adjustFontFallback: false,
});

const fraunces = localFont({
  src: [
    { path: "../../public/fonts/Fraunces.woff2", weight: "100 900", style: "normal" },
    { path: "../../public/fonts/Fraunces-Italic.woff2", weight: "100 900", style: "italic" },
  ],
  variable: "--font-fraunces",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

const plusJakartaSans = localFont({
  src: "../../public/fonts/PlusJakartaSans.woff2",
  weight: "200 800",
  variable: "--font-plus-jakarta",
  display: "swap",
  adjustFontFallback: "Arial",
});

const josefinSans = localFont({
  src: "../../public/fonts/JosefinSans.woff2",
  weight: "100 700",
  variable: "--font-josefin",
  display: "swap",
  adjustFontFallback: "Arial",
});

export const metadata: Metadata = {
  title: {
    default: "Restaurant Indonesia Bandung | Indonesisch Restaurant Den Bosch",
    template: "%s | Restaurant Indonesia Bandung",
  },
  description:
    "Authentiek West-Javaans restaurant in het hart van Den Bosch. Vijf rijsttafels, verse ingredienten, huisgemaakt met liefde. Reserveer nu.",
  metadataBase: new URL("https://restaurantbandung.nl"),
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Restaurant Indonesia Bandung",
    images: [{ url: "/images/rijsttafel-overhead.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${bandoeng.variable} ${fraunces.variable} ${plusJakartaSans.variable} ${josefinSans.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <RestaurantJsonLd />
        <LanguageProvider>
          <CartProvider>
            <AnnouncementBanner />
            <Navbar />
            <main id="main-content" className="flex-1">{children}</main>
            <Footer />
            <Suspense><MobileBottomBar /></Suspense>
            <CartDrawer />
            <CartFab />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
