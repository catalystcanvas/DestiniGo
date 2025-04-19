import "./globals.css";
import { Manrope } from "next/font/google";

// Load Google font with static compatibility
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "DestiniGo",
  description:
    "DestiniGo is a trusted overseas education consultancy helping students achieve their dream of studying abroad in top countries like the USA, UK, Canada, and Australia. We offer expert career counseling, university selection, admission assistance, and visa support for undergraduate and postgraduate programs. Our personalized approach ensures every student receives tailored guidance to unlock global opportunities and build a successful international career. Choose DestiniGo to start your journey towards world-class education and a brighter future overseas.",
  icons: {
    icon: "/images/logo/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Metadata can be handled via <head> for static HTML compatibility */}
        <link rel="icon" href="/images/logo/favicon.ico" />
        <title>DestiniGo</title>
        <meta
          name="description"
          content="DestiniGo is a trusted overseas education consultancy helping students achieve their dream of studying abroad in top countries like the USA, UK, Canada, and Australia. We offer expert career counseling, university selection, admission assistance, and visa support for undergraduate and postgraduate programs. Our personalized approach ensures every student receives tailored guidance to unlock global opportunities and build a successful international career. Choose DestiniGo to start your journey towards world-class education and a brighter future overseas."
        />
      </head>
      <body className={`${manrope.variable} font-manrope antialiased`}>
        {children}
        <footer />
      </body>
    </html>
  );
}
