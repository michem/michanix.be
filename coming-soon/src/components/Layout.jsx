import { Link, useLocation } from 'react-router-dom'
import MichanixBot from './MichanixBot'
import './Layout.css'

function Layout({ children }) {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <div className="layout">
      <MichanixBot />
      <nav className="main-nav">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <img src="/images/michanix-logo.png" alt="MichaniX" />
          </Link>
          <div className="nav-links">
            <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
            <Link to="/now" className={isActive('/now') ? 'active' : ''}>Now</Link>
            <Link to="/frameworks" className={isActive('/frameworks') ? 'active' : ''}>Frameworks</Link>
            <Link to="/experience" className={isActive('/experience') ? 'active' : ''}>Experience</Link>
            <Link to="/book" className="nav-cta">Book a Call</Link>
          </div>
          <button className="mobile-menu-btn" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      <main className="main-content">
        {children}
      </main>
      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <img src="/images/michanix-logo.png" alt="MichaniX" />
            <p>Learn It Forward</p>
          </div>
          <div className="footer-links">
            <Link to="/now">Now</Link>
            <Link to="/frameworks">Frameworks</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/book">Book a Call</Link>
          </div>
          <div className="footer-social">
            <a href="https://linkedin.com/in/thomas-michem-2792656/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/michemt" target="_blank" rel="noopener noreferrer">X</a>
            <a href="https://github.com/michem" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} MichaniX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
