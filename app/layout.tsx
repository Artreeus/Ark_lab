import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ReduxProvider } from "@/components/providers/redux-provider"
import { SimpleAuthProvider } from "@/components/providers/simple-auth-provider"
import { ThemeProvider } from "@/components/theme-provider"
import { SimpleHeader } from "@/components/header-simple"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ArkLab AI Agent Catalog - Discover AI Solutions",
  description:
    "Explore our comprehensive catalog of AI agents for customer service, marketing, development, and more. Find the perfect AI solution for your business needs.",
  keywords: "AI agents, artificial intelligence, automation, chatbots, AI solutions, machine learning",
  authors: [{ name: "ArkLab" }],
  openGraph: {
    title: "ArkLab AI Agent Catalog",
    description: "Discover and explore our collection of AI agents for various business needs",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArkLab AI Agent Catalog",
    description: "Discover and explore our collection of AI agents for various business needs",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ReduxProvider>
            <SimpleAuthProvider>
              <div className="min-h-screen bg-background">
                <SimpleHeader />
                <main>{children}</main>
              </div>
            </SimpleAuthProvider>
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
