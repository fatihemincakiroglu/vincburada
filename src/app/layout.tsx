import '@/styles/tailwind.css'
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import 'rc-slider/assets/index.css'
import FloatingContact from '@/components/FloatingContact'
import ThemeProvider from './theme-provider'

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const SITE_URL = 'https://vincburada.com.tr'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s | Vinç Burada',
    default: 'Kiralık Vinç Çeşitleri ve Vinç Kiralama | Vinç Burada',
  },
  description:
    "İhtiyacınıza uygun kiralık vinç çeşitlerini Vinç Burada'da keşfedin. Güvenilir, uygun fiyatlı ve hızlı vinç kiralama hizmeti için hemen teklif alın.",
  keywords: ['vinç kiralama', 'kiralık vinç', 'sepetli vinç', 'kule vinç', 'mobil vinç', 'Vinç Burada'],
  authors: [{ name: 'Fatih Emin Çakıroğlu' }],
  creator: 'Fatih Emin Çakıroğlu',
  publisher: 'Fatih Emin Çakıroğlu',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    // Göreli canonical: her sayfada o sayfanın kendi URL'ine çözümlenir.
    canonical: './',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: SITE_URL,
    siteName: 'Vinç Burada',
    title: 'Kiralık Vinç Çeşitleri ve Vinç Kiralama | Vinç Burada',
    description:
      "İhtiyacınıza uygun kiralık vinç çeşitlerini Vinç Burada'da keşfedin. Güvenilir, uygun fiyatlı ve hızlı vinç kiralama hizmeti için hemen teklif alın.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={poppins.className}>
      <body className="bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
        <ThemeProvider>
          <div>{children}</div>
          <FloatingContact />
        </ThemeProvider>
      </body>
    </html>
  )
}
