import { Bricolage_Grotesque, Fraunces } from "next/font/google"
import "./auth.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["900"],
  display: "swap",
})

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["400", "500", "600"],
  display: "swap",
})

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${fraunces.variable} ${bricolage.variable} auth-shell`}>
      {children}
    </div>
  )
}
