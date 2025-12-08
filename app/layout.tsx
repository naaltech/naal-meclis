import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Meclis Simülasyonu | Nevzat Ayaz Anadolu Lisesi",
  description:
    "Gençlerin demokratik katılımını teşvik eden eğitici bir etkinlik. 15-16 Haziran 2025 tarihlerinde gerçekleşecek.",
  keywords: [
    "meclis simülasyonu",
    "NAAL",
    "Nevzat Ayaz Anadolu Lisesi",
    "model parliament",
    "öğrenci meclisi",
    "demokratik katılım",
    "lise etkinliği",
    "İstanbul",
    "Ümraniye",
  ],
  authors: [{ name: "Nevzat Ayaz Anadolu Lisesi" }],
  creator: "Nevzat Ayaz Anadolu Lisesi",
  publisher: "Nevzat Ayaz Anadolu Lisesi",
  icons: {
    icon: "/meclis-logo.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Meclis Simülasyonu | Nevzat Ayaz Anadolu Lisesi",
    description:
      "Gençlerin demokratik katılımını teşvik eden eğitici bir etkinlik. 15-16 Haziran 2025 tarihlerinde gerçekleşecek.",
    url: "https://meclis.naal.org.tr",
    siteName: "Meclis Simülasyonu | Nevzat Ayaz Anadolu Lisesi",
    locale: "tr_TR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Meclis Simülasyonu | Nevzat Ayaz Anadolu Lisesi",
    description:
      "Gençlerin demokratik katılımını teşvik eden eğitici bir etkinlik. 15-16 Haziran 2025.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={`font-sans antialiased`}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
