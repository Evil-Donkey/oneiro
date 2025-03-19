import { Inter, Duru_Sans } from "next/font/google";
import fetchAPI from '../lib/api'
import Overlay from "../components/Overlay";
import Footer from "../components/Footer";
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

const dataOptions = await fetchAPI(`
  query ThemeSettings {
    acfOptionsThemeSettings {
      themeSettings {
        email
        address
        linkedinUrl
        xUrl
      }
    }
  }
`);

const themeSettings = dataOptions?.acfOptionsThemeSettings?.themeSettings;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${duruSans.variable}`}>
        <Overlay />
        {children}
        <Footer themeSettings={themeSettings} />
      </body>
    </html>
  );
}
