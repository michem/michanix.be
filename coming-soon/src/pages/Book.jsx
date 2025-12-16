import { useEffect } from 'react'
import './Book.css'

function Book() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="book-page">
      <div className="page-header">
        <div className="container">
          <h1>Book a Discovery Call</h1>
          <p className="page-intro">
            Let's discuss your challenges and explore how MichaniX can help.
          </p>
        </div>
      </div>

      <div className="book-content">
        <div className="container">
          <div className="book-layout">
            {/* Info Section */}
            <div className="book-info">
              <h2>What to Expect</h2>
              <p>
                A 30-minute conversation to understand your challenges and explore
                whether MichaniX is the right fit for your needs.
              </p>

              <div className="expect-list">
                <div className="expect-item">
                  <div className="expect-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <h4>30 Minutes</h4>
                    <p>Focused, no-fluff conversation</p>
                  </div>
                </div>

                <div className="expect-item">
                  <div className="expect-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Your Challenges</h4>
                    <p>We listen first, understand deeply</p>
                  </div>
                </div>

                <div className="expect-item">
                  <div className="expect-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Honest Assessment</h4>
                    <p>We'll tell you if we can help—or can't</p>
                  </div>
                </div>

                <div className="expect-item">
                  <div className="expect-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Next Steps</h4>
                    <p>Clear path forward, if there's a fit</p>
                  </div>
                </div>
              </div>

              <div className="topics-section">
                <h3>Topics We Can Discuss</h3>
                <ul>
                  <li>AI strategy and roadmap development</li>
                  <li>Data & analytics architecture</li>
                  <li>Enterprise architecture challenges</li>
                  <li>GenAI adoption and governance</li>
                  <li>Building business cases for technology investments</li>
                </ul>
              </div>
            </div>

            {/* Calendly Widget */}
            <div className="calendly-section">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/thomas-michem-michanix/discovery-call?hide_gdpr_banner=1&primary_color=3d9ba8"
                style={{ minWidth: '320px', height: '700px' }}
              />
              <p className="calendly-fallback">
                Can't see the calendar? <a href="https://calendly.com/thomas-michem-michanix/discovery-call" target="_blank" rel="noopener noreferrer">Click here to schedule directly</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Book
