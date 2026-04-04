import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "SHIFT — 30-Day Behavior Experiment",
  description:
    "You already know the answer. The problem is action. For 30 days, 5 minutes a day, just do one thing.",
  keywords: [
    "habit tracker",
    "behavior change",
    "30 day challenge",
    "personal growth",
    "micro habits",
    "daily experiment",
    "self improvement",
    "productivity",
  ],
  authors: [{ name: "SHIFT" }],
  creator: "SHIFT",
  metadataBase: new URL("https://shift-app.vercel.app"),
  openGraph: {
    title: "SHIFT — 30-Day Behavior Experiment",
    description:
      "Design your personal 30-day micro-behavior experiment. 5 minutes a day. Just one thing.",
    url: "https://shift-app.vercel.app",
    siteName: "SHIFT",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SHIFT — 30-Day Behavior Experiment",
    description:
      "Design your personal 30-day micro-behavior experiment. 5 minutes a day. Just one thing.",
    creator: "@shiftapp",
  },
  manifest: "/manifest.json",
  icons: {
    apple: "/icons/icon-192.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="SHIFT" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
      </head>
      <body>
        {children}
        
        {/* Mock Ad UI injected via layout for AdSense / AdManager fallback */}
        <div id="mock-ad-screen" className="mock-ad-overlay" style={{ display: "none" }}>
          <div className="mock-ad-container">
            <h3 id="ui-ad-playing">Playing Partner Message... 21s</h3>
            <iframe
              id="mock-ad-iframe"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/n4yB3sK6bO0?enablejsapi=1&autoplay=0&controls=0&mute=0&modestbranding=1"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </body>
    </html>
  );
}
