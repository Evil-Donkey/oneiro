import { Inter, Duru_Sans } from "next/font/google";
import fetchAPI from '../lib/api'
import Script from 'next/script'
import GoogleAnalytics from '../lib/googleAnalytics'
import Overlay from "../components/Overlay";
import Footer from "../components/Footer";
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
    template: '%s',
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
const COOKIE_YES_ID = process.env.COOKIE_YES_ID

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${duruSans.variable}`}>
        <Overlay />
        {children}
        <Footer themeSettings={themeSettings} />
        <GoogleAnalytics GA_TRACKING_ID={GA_TRACKING_ID} />
        <Script src='https://cdn-cookieyes.com/client_data/5a5b8dc6bc1903b2ec2cec59/script.js' strategy='beforeInteractive' />
        <Script
          id='sopro-outbase'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `(function (o, u, t, b, a, s, e, p) {
              window[b] = window[b] || {}; (e = e || [])['key'] = o; e['__obr'] = u.location.href; e['__obrf'] = u.referrer || 0; a = [];
              u.location.search.replace('?', '').split('&').forEach(function (q) { if (q.startsWith(b) || q.startsWith('_obid')) e[q.split('=')[0]] = q.split('=')[1]; });
              e['_obid'] = e['_obid'] || (u.cookie.match(/(^|;)\\s*_obid\\s*=\\s*([^;]+)/) || []).pop() || 0;
              for (k in e) { if (e.hasOwnProperty(k)) a.push(encodeURIComponent(k) + '=' + encodeURIComponent(e[k])); }
              s = u.createElement('script'); s.async = true; s.src = t + '?' + a.join('&'); p = u.getElementsByTagName('script')[0]; p.parentNode.insertBefore(s, p);
            })('a71f4dc9-cfa4-4fd8-b129-b3126d0278be', document, 'https://plugin.sopro.io/hq.js', 'outbase')`,
          }}
        />
      </body>
    </html>
  );
}
