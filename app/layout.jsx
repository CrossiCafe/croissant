import { Courier_Prime, Anton } from 'next/font/google';
import './globals.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const courier = Courier_Prime({ 
  subsets: ['latin'],
  variable: '--font-courier',
  weight: ['400', '700']
})
const anton = Anton({ 
  subsets: ['latin'],
  variable: '--font-anton',
  weight: ['400']
})

export const metadata = {
  title: 'Croissant Café',
  description: 'Café que te inspira, con las mejores medialunas de Mar del Plata',
  openGraph: {
    title: 'Croissant Café',
    description: 'Café que te inspira, con las mejores medialunas de Mar del Plata',
    url: 'https://www.croissant.com.ar/',
    siteName: 'Croissant Café',
    locale: 'es_AR',
    type: 'website',
  },
  keywords: ['croissant cafe', 'croissant cafe mar del plata', 'cafe croissant', 'croissant mar del plata','cafe croissant mar del plata','cafe mar del plata', 'cafeteria mar del plata', 'cafe mdq', 'mejores medialunas mdq', 'mejores medialunas mar del plata','catering mar del plata', 'crossifans', 'crossi mar del plata', 'crossi cafe','franquisias croissant'],
  robots: 'index, follow', 
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#d4a373',
  category: 'Cafe, Cafeteria ,Café , Cafetería, Catering, Franquisias, Medialunas, Mar del Plata '
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={courier.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
      {/* Script de Metricool */}
      <Script
        id="metricool-tracker"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}
            loadScript(function(){beTracker.t({hash:"bd2713b53b423865476c61e6b4762b92"})});
          `,
        }}
      />
      {/* Script de Google Analytics */}
      <GoogleTagManager gtmId="G-1L01SLY277" />
    </html>
  )
}
