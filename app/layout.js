import { Inter, Duru_Sans } from "next/font/google";
import fetchAPI from '../lib/api'
import GoogleAnalytics from '../lib/googleAnalytics'
import Overlay from "../components/Overlay";
import Footer from "../components/Footer";
import "./styles/bootstrap.scss";
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
const GA_TRACKING_ID = process.env.GA_TRACKING_ID

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${duruSans.variable}`}>
        <Overlay />
        {children}
        <Footer themeSettings={themeSettings} />
        <GoogleAnalytics GA_TRACKING_ID={GA_TRACKING_ID} />
      </body>
    </html>
  );
}
