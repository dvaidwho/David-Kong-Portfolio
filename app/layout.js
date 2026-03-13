import "./globals.css"
import Navbar from "../components/Navbar"
import ThemeProvider from "../components/ThemeProvider"
import GridBackground from "../components/GridBackground"

export const metadata = {
  title: "David Kong",
  description: "David Kong - CS student at UMass Lowell",
  openGraph: {
    title: "David Kong",
    description: "David Kong - CS student at UMass Lowell",
    images: ["/favicon-32x32.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-zinc-900 dark:text-white">
        <ThemeProvider>
          <GridBackground />
          <Navbar />
          <main className="max-w-4xl mx-auto px-6 pt-24 relative z-10">
            {children}
          </main>
          <footer className="relative z-10 mb-3">
            <div className="max-w-4xl mx-auto px-6 py-5 border-t border-gray-200 dark:border-gray-800">
              <p className="text-xs text-gray-400 dark:text-gray-600">
                <span className="umass">&gt;_</span> David Kong © 2026 — Built with React & Tailwind CSS
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}