import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://brantly.com"),
  title: "Brantly Millegan",
  description: "Projects, education, and about Brantly Millegan.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Brantly Millegan",
    description: "Projects, education, and about Brantly Millegan.",
    images: [
      {
        url: "/og.png",
        width: 1729,
        height: 910,
        alt: "Brantly Millegan — Projects, education, and about me.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brantly Millegan",
    description: "Projects, education, and about Brantly Millegan.",
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
