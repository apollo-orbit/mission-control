"use client"

import Link from "next/link"
import { useState } from "react"

export default function RegisterPage() {
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1400))
    setLoading(false)
  }

  return (
    <>
      {/* ── Left: form ── */}
      <div className="auth-left">
        <Link href="/" className="auth-logo">Mission Control</Link>

        <div className="auth-form-wrap">
          <h1 className="auth-heading">Get<br />started.</h1>
          <p className="auth-subheading">Create your account in seconds.</p>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="auth-field">
              <label htmlFor="email" className="auth-label">Email</label>
              <input
                id="email"
                type="email"
                className="auth-input"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="auth-field">
              <label htmlFor="password" className="auth-label">Password</label>
              <input
                id="password"
                type="password"
                className="auth-input"
                placeholder="Min. 8 characters"
                autoComplete="new-password"
                minLength={8}
                required
              />
            </div>

            <button type="submit" className="auth-btn" disabled={loading}>
              {loading ? "Creating account…" : "Create account"}
            </button>
          </form>

          <p className="auth-footnote">
            Already have an account?{" "}
            <Link href="/login" className="auth-link">Sign in</Link>
          </p>
        </div>
      </div>

      {/* ── Right: placeholder ── */}
      <div className="auth-right">
        <div className="auth-placeholder">
          <div className="auth-placeholder-box" />
          <span className="auth-placeholder-text">Placeholder</span>
        </div>
      </div>
    </>
  )
}
