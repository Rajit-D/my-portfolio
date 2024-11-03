import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import Loading from "./(home)/loading";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://my-portfolio-xi-beryl-71.vercel.app/"),
  keywords: [
    "Rajit",
    "Rajit D",
    "Rajit Dutta",
    "Dutta",
    "R Dutta",
    "Rajit Dutta portfolio",
    "Rajit Portfolio",
    "Portfolio",
    "Developer Portfolio",
    "Rajit Dutta projects",
    "Rajit Dutta website",
    "Rajit Dutta developer",
    "Rajit Dutta contact information",
    "Hire Rajit Dutta",
  ],
  title: {
    default: "Rajit Dutta",
    template: "%s | My portfolio",
  },
  description: "My portfolio",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="google-site-verification"
          content="RNTsYwOBbb7ckRqHMxXP5YA7eOPobi-fxGUFdnm4igk"
        />
      </head>
      <body className="font-spartan">
        <Suspense fallback={<Loading />}>
          <Navbar />
          {children}
        </Suspense>
      </body>
    </html>
  );
}
