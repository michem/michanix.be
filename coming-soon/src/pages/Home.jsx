import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
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

  return (
    <div className="home">
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
        <div className="grid-overlay" />
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span>Strategic Consulting in</span>
            <span className="highlight">AI, Data & Analytics</span>
          </h1>
          <p className="hero-subtitle">
            Bridging business strategy with technology architecture.
            MBA-backed insights meet hands-on technical expertise.
          </p>
          <div className="hero-cta">
            <Link to="/book" className="btn btn-primary">Book a Discovery Call</Link>
            <Link to="/frameworks" className="btn btn-secondary">Our Approach</Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="section-container">
          <h2 className="section-title">What We Do</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>AI Strategy</h3>
              <p>Navigate the AI landscape with purpose. We help identify high-impact opportunities and build roadmaps that deliver real business value.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h3>Data & Analytics</h3>
              <p>Transform data into decisions. From architecture design to dashboard delivery, we build analytics capabilities that scale.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <line x1="3" y1="9" x2="21" y2="9"/>
                  <line x1="9" y1="21" x2="9" y2="9"/>
                </svg>
              </div>
              <h3>Enterprise Architecture</h3>
              <p>Build systems that last. We design technology landscapes that work together, scale gracefully, and serve your business purpose.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Teaser */}
      <section className="philosophy-teaser">
        <div className="section-container">
          <div className="philosophy-content">
            <h2>The MichaniX Framework</h2>
            <p className="philosophy-lead">
              <strong>Doing the right things</strong> meets <strong>doing things right</strong>.
            </p>
            <p>
              With AI tools, you can spin up a proof of concept in hours. But without business acumen,
              you might solve the wrong problem. Without architectural thinking, your solution won't scale.
              We bring both perspectives to every engagement.
            </p>
            <Link to="/frameworks" className="link-arrow">
              Explore our framework
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta">
        <div className="section-container">
          <h2>Ready to discuss your challenge?</h2>
          <p>Let's explore how MichaniX can help you navigate AI and data strategy.</p>
          <Link to="/book" className="btn btn-primary btn-large">Schedule a Call</Link>
        </div>
      </section>

      {/* Animated gears */}
      <div className="gear gear-1">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M97.6,55.7V44.3l-13.6-2.9c-0.8-3.4-2.1-6.6-3.8-9.5l8.1-11.4l-8-8l-11.4,8.1c-2.9-1.7-6.1-3-9.5-3.8L56.5,3.2H45.1 l-2.9,13.6c-3.4,0.8-6.6,2.1-9.5,3.8l-11.4-8.1l-8,8l8.1,11.4c-1.7,2.9-3,6.1-3.8,9.5L3.8,44.3v11.4l13.6,2.9 c0.8,3.4,2.1,6.6,3.8,9.5l-8.1,11.4l8,8l11.4-8.1c2.9,1.7,6.1,3,9.5,3.8l2.9,13.6h11.4l2.9-13.6c3.4-0.8,6.6-2.1,9.5-3.8l11.4,8.1 l8-8l-8.1-11.4c1.7-2.9,3-6.1,3.8-9.5L97.6,55.7z M50.8,65.4c-8.5,0-15.4-6.9-15.4-15.4s6.9-15.4,15.4-15.4S66.2,41.5,66.2,50 S59.3,65.4,50.8,65.4z"/>
        </svg>
      </div>
    </div>
  )
}

export default Home
