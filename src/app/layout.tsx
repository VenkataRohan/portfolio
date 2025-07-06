import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
// // import "leaflet/dist/leaflet.css";
import "./globals.css";
import { Providers } from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className="overflow-x-hidden">
        <Providers>
          <Header />
          <main className="overflow-x-hidden">
            {children}
          </main>
          <Footer/>
        </Providers>
      </body>
    </html>
  )
}