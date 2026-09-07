import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kriate — Technology × Marketing × Creativity",
  description:
    "Kriate builds digital experiences, brands and growth through technology, marketing and creativity.",
  metadataBase: new URL("https://kriate.org"),
  openGraph: {
    title: "Kriate — Technology × Marketing × Creativity",
    description:
      "Kriate builds digital experiences, brands and growth through technology, marketing and creativity.",
    url: "https://kriate.org",
    siteName: "Kriate",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} antialiased`}>
        {/* If JS is disabled, reveal elements must not stay hidden and the
            loader must not cover the page forever. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}#kriate-loader{display:none !important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
