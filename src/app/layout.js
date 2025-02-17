import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Archana Joshi",
  description: "Hi, I am Archana and you are seeing my porfolio!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
