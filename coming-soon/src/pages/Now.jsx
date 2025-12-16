import { Link } from 'react-router-dom'
import './Now.css'

function Now() {
  return (
    <div className="now-page">
      <div className="page-header">
        <div className="container">
          <h1>What I'm Doing Now</h1>
          <p className="page-intro">
            A snapshot of my current focus and activities.
            <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer"> What's a "now" page?</a>
          </p>
          <p className="last-updated">Last updated: December 2024</p>
        </div>
      </div>

      <div className="now-content">
        <div className="container">
          {/* Primary Role */}
          <section className="now-section featured">
            <div className="section-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className="section-content">
              <span className="section-label">Primary Role</span>
              <h2>AI Strategy Lead at Lighthouse</h2>
              <p>
                Leading the AI strategy practice at Lighthouse, helping organizations navigate the
                rapidly evolving AI landscape. This involves evaluating emerging technologies,
                building AI roadmaps, and ensuring initiatives deliver genuine business value
                rather than just technical novelty.
              </p>
              <div className="focus-areas">
                <span className="tag">AI Strategy</span>
                <span className="tag">Enterprise AI</span>
                <span className="tag">GenAI Adoption</span>
                <span className="tag">AI Governance</span>
              </div>
            </div>
          </section>

          {/* MBA */}
          <section className="now-section">
            <div className="section-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            <div className="section-content">
              <span className="section-label">Learning</span>
              <h2>MBA at Vlerick Business School</h2>
              <p>
                Pursuing an MBA to deepen my business acumen and strategic thinking.
                The program provides frameworks for understanding business dynamics that
                complement my technical background—essential for bridging the gap between
                technology possibilities and business realities.
              </p>
              <div className="focus-areas">
                <span className="tag">Strategy</span>
                <span className="tag">Finance</span>
                <span className="tag">Leadership</span>
                <span className="tag">Business Transformation</span>
              </div>
            </div>
          </section>

          {/* Consulting */}
          <section className="now-section">
            <div className="section-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="3" y1="9" x2="21" y2="9"/>
                <line x1="9" y1="21" x2="9" y2="9"/>
              </svg>
            </div>
            <div className="section-content">
              <span className="section-label">Side Projects</span>
              <h2>Data & Analytics Consulting</h2>
              <p>
                Taking on select consulting engagements in data and analytics. These projects
                allow me to stay hands-on with the technical side while applying strategic
                thinking to help smaller organizations build their data capabilities.
              </p>
              <div className="focus-areas">
                <span className="tag">Data Strategy</span>
                <span className="tag">Analytics Architecture</span>
                <span className="tag">BI Implementation</span>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="now-cta">
            <h3>Interested in working together?</h3>
            <p>
              I'm selectively taking on consulting engagements that align with my expertise
              in AI strategy, data architecture, and business analytics.
            </p>
            <Link to="/book" className="btn btn-primary">Book a Discovery Call</Link>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Now
