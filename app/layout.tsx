import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://brantly.com"),
  title: "Brantly Millegan — Resume & Personal Site",
  description:
    "The work, education, and personal story of Brantly Millegan.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Brantly Millegan — Resume & Personal Site",
    description:
      "The work, education, and personal story of Brantly Millegan.",
    images: [
      {
        url: "/og.png",
        width: 1730,
        height: 909,
        alt: "Brantly Millegan — Resume, work, and a little bit of life.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brantly Millegan — Resume & Personal Site",
    description:
      "The work, education, and personal story of Brantly Millegan.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
