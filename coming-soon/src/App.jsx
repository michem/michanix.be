import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <div className="app">
      {/* Animated background */}
      <div className="background">
        <div
          className="gradient-orb orb-1"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div
          className="gradient-orb orb-2"
          style={{
            transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`
          }}
        />
        <div
          className="gradient-orb orb-3"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`
          }}
        />
        <div className="grid-overlay" />
      </div>

      {/* Floating particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }} />
        ))}
      </div>

      {/* Main content */}
      <main className="content">
        <div className="logo-container">
          <img src="/images/michanix.jpg" alt="MichaniX Logo" className="logo" />
        </div>

        <div className="text-content">
          <h1 className="title">
            <span className="title-line">Something</span>
            <span className="title-line highlight">Amazing</span>
            <span className="title-line">Is Coming</span>
          </h1>

          <p className="tagline">Learn It Forward</p>

          <p className="description">
            We're crafting a new experience to help you master data analytics,
            R programming, and business intelligence. Stay tuned.
          </p>

          <div className="cta-section">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="notify-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="email-input"
                  required
                />
                <button type="submit" className="notify-btn">
                  <span>Notify Me</span>
                  <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </form>
            ) : (
              <div className="success-message">
                <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span>Thanks! We'll keep you posted.</span>
              </div>
            )}
          </div>
        </div>

        {/* Social links */}
        <div className="social-links">
          <a href="https://linkedin.com/in/thomas-michem-2792656/" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://twitter.com/michemt" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://github.com/michem" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="mailto:thomas.michem@michanix.be" className="social-link">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
            </svg>
          </a>
        </div>
      </main>

      {/* Animated gears */}
      <div className="gear gear-1">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M97.6,55.7V44.3l-13.6-2.9c-0.8-3.4-2.1-6.6-3.8-9.5l8.1-11.4l-8-8l-11.4,8.1c-2.9-1.7-6.1-3-9.5-3.8L56.5,3.2H45.1 l-2.9,13.6c-3.4,0.8-6.6,2.1-9.5,3.8l-11.4-8.1l-8,8l8.1,11.4c-1.7,2.9-3,6.1-3.8,9.5L3.8,44.3v11.4l13.6,2.9 c0.8,3.4,2.1,6.6,3.8,9.5l-8.1,11.4l8,8l11.4-8.1c2.9,1.7,6.1,3,9.5,3.8l2.9,13.6h11.4l2.9-13.6c3.4-0.8,6.6-2.1,9.5-3.8l11.4,8.1 l8-8l-8.1-11.4c1.7-2.9,3-6.1,3.8-9.5L97.6,55.7z M50.8,65.4c-8.5,0-15.4-6.9-15.4-15.4s6.9-15.4,15.4-15.4S66.2,41.5,66.2,50 S59.3,65.4,50.8,65.4z"/>
        </svg>
      </div>
      <div className="gear gear-2">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M97.6,55.7V44.3l-13.6-2.9c-0.8-3.4-2.1-6.6-3.8-9.5l8.1-11.4l-8-8l-11.4,8.1c-2.9-1.7-6.1-3-9.5-3.8L56.5,3.2H45.1 l-2.9,13.6c-3.4,0.8-6.6,2.1-9.5,3.8l-11.4-8.1l-8,8l8.1,11.4c-1.7,2.9-3,6.1-3.8,9.5L3.8,44.3v11.4l13.6,2.9 c0.8,3.4,2.1,6.6,3.8,9.5l-8.1,11.4l8,8l11.4-8.1c2.9,1.7,6.1,3,9.5,3.8l2.9,13.6h11.4l2.9-13.6c3.4-0.8,6.6-2.1,9.5-3.8l11.4,8.1 l8-8l-8.1-11.4c1.7-2.9,3-6.1,3.8-9.5L97.6,55.7z M50.8,65.4c-8.5,0-15.4-6.9-15.4-15.4s6.9-15.4,15.4-15.4S66.2,41.5,66.2,50 S59.3,65.4,50.8,65.4z"/>
        </svg>
      </div>
    </div>
  )
}

export default App
