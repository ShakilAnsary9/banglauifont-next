import "./globals.css";

export const metadata = {
  title: "Bangla Font CDN - World's Largest Free Bangla Font CDN Library",
  description:
    "Explore the world's largest free Bangla font CDN library! Access a vast collection of Bangla fonts for your projects hassle-free.",
  icons: {
    icon: "/svg/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
