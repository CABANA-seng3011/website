import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "CABANA Finance",
  description: "A web application dedicated to providing mindful investors with relevant ESG data.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
    </html>
  );
}
