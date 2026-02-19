import { JetBrains_Mono, Syne } from "next/font/google"
import "./auth.css"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
  display: "swap",
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
})

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${syne.variable} ${mono.variable} auth-shell`}>
      {/* background layers */}
      <div className="auth-grid-bg" />
      <div className="auth-vignette" />

      {/* header bar */}
      <header className="auth-header">
        <span className="auth-status-dot" aria-hidden="true" />
        <span className="auth-brand">Mission Control</span>
        <span className="auth-tag">// SYS v2.4.1</span>
        <span className="auth-header-right">AUTH TERMINAL</span>
      </header>

      {/* main content */}
      <main className="auth-center">{children}</main>

      {/* footer bar */}
      <footer className="auth-footer">
        <span>SYS: NOMINAL</span>
        <span>LAT 19.4326°N · LNG 99.1332°W</span>
        <span>UTC {new Date().toISOString().split("T")[0].replace(/-/g, ".")}</span>
      </footer>
    </div>
  )
}
