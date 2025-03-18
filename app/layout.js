import { Inter, Duru_Sans } from "next/font/google";
import Header from "../components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const duruSans = Duru_Sans({
  variable: "--font-duru-sans",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: {
    template: '%s | Oneiro Solutions',
    default: 'Oneiro Solutions',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${duruSans.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
