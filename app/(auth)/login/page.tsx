"use client"

import Link from "next/link"
import { useState } from "react"

export default function LoginPage() {
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
          <h1 className="auth-heading">Welcome<br />back.</h1>
          <p className="auth-subheading">Sign in to continue to your workspace.</p>

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
              <div className="auth-label-row">
                <label htmlFor="password" className="auth-label">Password</label>
                <Link href="/forgot-password" className="auth-link-sm">Forgot password?</Link>
              </div>
              <input
                id="password"
                type="password"
                className="auth-input"
                placeholder="••••••••"
                autoComplete="current-password"
                required
              />
            </div>

            <button type="submit" className="auth-btn" disabled={loading}>
              {loading ? "Signing in…" : "Continue"}
            </button>
          </form>

          <p className="auth-footnote">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="auth-link">Sign up</Link>
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
