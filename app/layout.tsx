import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "HealthKita | Your Passport to Premium Healthcare",
  description: "HealthKita offers premium healthcare services, medical tourism, and consultations. Uniting wellness, education, and expert care for international patients.",
  keywords: "HealthKita, premium healthcare, medical tourism, wellness, consultations",
  openGraph: {
    title: "HealthKita | Premium Healthcare Services",
    description: "Your passport to premium healthcare. Discover medical tourism and expert consultations with HealthKita.",
    type: "website",
    url: "https://www.healthkita.com",
    images: [
      {
        url: "/healthkita.png",
        width: 1200,
        height: 630,
        alt: "HealthKita Premium Healthcare",
      },
    ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@healthkita",
  //   title: "HealthKita | Premium Healthcare Services",
  //   description: "Your passport to premium healthcare. Discover medical tourism and expert consultations with HealthKita.",
  //   images: ["/twitter-image.jpg"],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${lato.className} antialiased`}>
        <div className="min-h-screen w-full dark:bg-black bg-bgsecondary dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
          <div className="flex flex-col px-4 sm:px-6 md:px-8 lg:px-14 py-4 sm:py-6 md:py-8 w-full max-w-8xl mx-auto">
            <Navbar />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}