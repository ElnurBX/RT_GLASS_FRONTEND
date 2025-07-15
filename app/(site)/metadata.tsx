// app/metadata.ts

export const metadata = {
  metadataBase: new URL("https://yourwebsite.com"), // domenini yaz
  title: "Your Site Title",
  description: "Your site description here",
  keywords: "Next.js, UI, Design, Web Development",
  authors: [{ name: "Your Name", url: "https://yourwebsite.com" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Your OG Title",
    description: "Your OG Description",
    url: "https://yourwebsite.com",
    siteName: "YourSite",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Twitter Title",
    description: "Your Twitter Description",
    images: ["/twitter-image.png"],
  },
};
