import { Link } from 'react-router-dom'
import './Frameworks.css'

function Frameworks() {
  return (
    <div className="frameworks-page">
      <div className="page-header">
        <div className="container">
          <h1>The MichaniX Framework</h1>
          <p className="page-intro">
            Finding the balance between doing the right things and doing things right.
          </p>
        </div>
      </div>

      <div className="frameworks-content">
        <div className="container">
          {/* Core Philosophy */}
          <section className="framework-intro">
            <div className="balance-visual">
              <div className="balance-item left">
                <h3>Doing the Right Things</h3>
                <p>Business Strategy</p>
              </div>
              <div className="balance-center">
                <div className="balance-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 12l2 2 4-4"/>
                  </svg>
                </div>
              </div>
              <div className="balance-item right">
                <h3>Doing Things Right</h3>
                <p>Technical Excellence</p>
              </div>
            </div>
            <p className="intro-text">
              In the age of AI, the gap between "possible" and "valuable" has never been wider.
              You can spin up a proof of concept in hours. But without the right focus,
              you might solve problems nobody has—or build solutions that crumble at scale.
            </p>
          </section>

          {/* The Problem */}
          <section className="framework-section">
            <h2>The Challenge</h2>
            <div className="challenge-grid">
              <div className="challenge-card">
                <div className="challenge-icon bad">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="15" y1="9" x2="9" y2="15"/>
                    <line x1="9" y1="9" x2="15" y2="15"/>
                  </svg>
                </div>
                <h3>Speed Without Direction</h3>
                <p>
                  AI tools let you build fast. But building the wrong thing fast
                  just gets you to failure quicker. Many POCs never see production
                  because they solved a problem nobody prioritized.
                </p>
              </div>
              <div className="challenge-card">
                <div className="challenge-icon bad">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="15" y1="9" x2="9" y2="15"/>
                    <line x1="9" y1="9" x2="15" y2="15"/>
                  </svg>
                </div>
                <h3>Vision Without Foundation</h3>
                <p>
                  Great ideas need great architecture. Solutions that work in demo
                  often fail in production. Without technical rigor, your innovations
                  become technical debt.
                </p>
              </div>
            </div>
          </section>

          {/* The Approach */}
          <section className="framework-section">
            <h2>Our Approach</h2>
            <div className="approach-grid">
              <div className="approach-card">
                <div className="approach-number">01</div>
                <h3>Business Acumen</h3>
                <p className="approach-subtitle">Focus on the right things</p>
                <ul>
                  <li>Understand the real business problem, not just the technical challenge</li>
                  <li>Evaluate opportunities through strategic and financial lenses</li>
                  <li>Prioritize initiatives that move the needle</li>
                  <li>Build business cases that speak to stakeholders</li>
                </ul>
              </div>
              <div className="approach-card">
                <div className="approach-number">02</div>
                <h3>Architecture Thinking</h3>
                <p className="approach-subtitle">Do things right</p>
                <ul>
                  <li>Design systems that scale beyond the proof of concept</li>
                  <li>Build with purpose—components that work together</li>
                  <li>Consider the full lifecycle: build, deploy, maintain, evolve</li>
                  <li>Create sustainable solutions, not quick fixes</li>
                </ul>
              </div>
              <div className="approach-card full-width">
                <div className="approach-number">03</div>
                <h3>Integrated Delivery</h3>
                <p className="approach-subtitle">Where strategy meets execution</p>
                <p>
                  The magic happens when business insight and technical excellence work together.
                  We don't hand off a strategy deck and walk away. We stay engaged through
                  implementation, ensuring the vision survives contact with reality.
                </p>
              </div>
            </div>
          </section>

          {/* AI Context */}
          <section className="framework-section ai-context">
            <h2>In the Age of AI</h2>
            <div className="ai-insight">
              <blockquote>
                "Anyone can now build a chatbot in an afternoon. The question isn't
                <em> can you build it</em>—it's <em>should you build it</em>, and
                <em> will it last</em>?"
              </blockquote>
            </div>
            <div className="ai-points">
              <div className="ai-point">
                <h4>The POC Trap</h4>
                <p>
                  AI tools have made proof-of-concepts trivially easy. But 80% of AI
                  projects fail to make it to production. The bottleneck isn't technology—it's
                  strategy and architecture.
                </p>
              </div>
              <div className="ai-point">
                <h4>The MichaniX Difference</h4>
                <p>
                  We bring MBA-level business thinking and enterprise architecture
                  experience to every engagement. We help you pick the right battles
                  <em> and</em> win them sustainably.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="framework-cta">
            <h3>Ready to apply this thinking to your challenges?</h3>
            <p>Let's discuss how MichaniX can help you navigate AI and data strategy.</p>
            <Link to="/book" className="btn btn-primary">Book a Discovery Call</Link>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Frameworks
