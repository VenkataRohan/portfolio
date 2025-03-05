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
      <body>
        <Header />
        <Providers>{children}</Providers>
        <Footer/>
      </body>
    </html>
  )
}