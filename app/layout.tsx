import type { Metadata } from "next";
import { Big_Shoulders, Inter, JetBrains_Mono } from "next/font/google";
import "./vincburada.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-jakarta",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Vinç Burada — Vinç, Manlift, Forklift, Platform ve İş Makinesi Kiralama",
  description:
    "Vinç, manlift, forklift, platform, iş makinesi ve istif makinesi kiralama. Türkiye genelinde 7/24 saha hizmeti, sertifikalı operatörler ve tam sigorta kapsamı.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${bigShoulders.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
