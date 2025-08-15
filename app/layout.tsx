import type React from "react"
import type { Metadata } from "next"
import { GeistSans, GeistMono } from "geist/font"
import { Nunito } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
  title: "Monyet AI",
  description: "Created with v0",
  generator: "v0.app",
}

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${nunito.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
