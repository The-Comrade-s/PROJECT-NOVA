import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { StructuredData } from "@/components/layout/StructuredData";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NOVA — Engineered for Impact",
    template: "%s · NOVA",
  },
  description:
    "NOVA is an immersive, futuristic digital experience showcasing premium interaction design, real-time 3D graphics, and production-grade frontend engineering.",
  keywords: [
    "NOVA",
    "Next.js",
    "Three.js",
    "React Three Fiber",
    "interactive landing page",
    "WebGL",
    "frontend engineering",
  ],
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "NOVA — Engineered for Impact",
    description:
      "An immersive, futuristic digital experience built with real-time 3D graphics and cinematic motion design.",
    url: siteUrl,
    siteName: "NOVA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOVA — Engineered for Impact",
    description:
      "An immersive, futuristic digital experience built with real-time 3D graphics and cinematic motion design.",
  },
  icons: {
    icon: "/icons/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>
        <StructuredData />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200]
            focus:rounded-sm focus:bg-accent-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <LoadingScreen />
        <SmoothScrollProvider>
          <Navbar />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
