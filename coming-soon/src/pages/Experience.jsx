import { Link } from 'react-router-dom'
import './Experience.css'

// Experience data - can be used for both web display and PDF generation
export const experienceData = {
  name: "Thomas Michem",
  title: "AI Strategy & Data Analytics Consultant",
  tagline: "Learn It Forward",
  contact: {
    email: "thomas.michem@michanix.be",
    linkedin: "linkedin.com/in/thomas-michem-2792656",
    website: "michanix.be"
  },
  summary: "Strategic consultant specializing in AI, data & analytics, and enterprise architecture. MBA-backed business acumen combined with hands-on technical expertise. Helping organizations navigate the intersection of technology possibilities and business realities.",
  experience: [
    {
      title: "AI Strategy Lead",
      company: "Lighthouse",
      period: "2023 - Present",
      location: "Belgium",
      description: "Leading AI strategy practice, helping organizations evaluate and adopt AI technologies with focus on business value delivery.",
      highlights: [
        "Developed AI adoption frameworks for enterprise clients",
        "Led strategic assessments for GenAI initiatives",
        "Built AI governance and ethics guidelines",
        "Advised C-suite on AI investment priorities"
      ]
    },
    {
      title: "Data & Analytics Consultant",
      company: "MichaniX",
      period: "2020 - Present",
      location: "Belgium",
      description: "Independent consulting in data strategy, analytics architecture, and business intelligence implementation.",
      highlights: [
        "Designed data architectures for mid-market companies",
        "Implemented BI solutions and analytics platforms",
        "Provided strategic data roadmap development",
        "Delivered hands-on technical implementation"
      ]
    },
    {
      title: "Senior Data Engineer",
      company: "Previous Role",
      period: "2018 - 2023",
      location: "Belgium",
      description: "Built and scaled data infrastructure and analytics capabilities for enterprise organizations.",
      highlights: [
        "Led data platform modernization initiatives",
        "Designed ETL/ELT pipelines at scale",
        "Implemented data governance frameworks",
        "Mentored junior engineers and analysts"
      ]
    }
  ],
  education: [
    {
      degree: "MBA",
      school: "Vlerick Business School",
      period: "2024 - Present",
      description: "Focus on strategy, finance, and business transformation"
    },
    {
      degree: "Master's in Computer Science",
      school: "University",
      period: "Completed",
      description: "Foundation in software engineering and data systems"
    }
  ],
  skills: {
    strategy: ["AI Strategy", "Data Strategy", "Business Case Development", "Stakeholder Management", "Change Management"],
    technical: ["Python", "SQL", "Cloud Platforms (AWS/Azure/GCP)", "Data Architecture", "BI Tools", "Machine Learning"],
    frameworks: ["Enterprise Architecture", "Agile/Scrum", "TOGAF", "Data Governance"]
  }
}

function Experience() {
  const handleDownloadPDF = async () => {
    // For now, we'll generate a simple print-friendly version
    // In production, this would call a Python backend with WeasyPrint or similar
    window.print()
  }

  return (
    <div className="experience-page">
      <div className="page-header">
        <div className="container">
          <h1>Experience</h1>
          <p className="page-intro">
            A track record of bridging business strategy with technical excellence.
          </p>
          <button onClick={handleDownloadPDF} className="btn btn-secondary download-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download CV (PDF)
          </button>
        </div>
      </div>

      <div className="experience-content">
        <div className="container">
          {/* Profile Summary */}
          <section className="cv-section profile-section">
            <div className="profile-header">
              <div className="profile-info">
                <h2>{experienceData.name}</h2>
                <p className="profile-title">{experienceData.title}</p>
                <p className="profile-tagline">{experienceData.tagline}</p>
              </div>
              <div className="profile-contact">
                <a href={`mailto:${experienceData.contact.email}`}>{experienceData.contact.email}</a>
                <a href={`https://${experienceData.contact.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href={`https://${experienceData.contact.website}`}>{experienceData.contact.website}</a>
              </div>
            </div>
            <p className="profile-summary">{experienceData.summary}</p>
          </section>

          {/* Experience */}
          <section className="cv-section">
            <h3 className="section-title">Professional Experience</h3>
            <div className="timeline">
              {experienceData.experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <div>
                        <h4>{exp.title}</h4>
                        <p className="company">{exp.company}</p>
                      </div>
                      <div className="timeline-meta">
                        <span className="period">{exp.period}</span>
                        <span className="location">{exp.location}</span>
                      </div>
                    </div>
                    <p className="description">{exp.description}</p>
                    <ul className="highlights">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="cv-section">
            <h3 className="section-title">Education</h3>
            <div className="education-grid">
              {experienceData.education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h4>{edu.degree}</h4>
                  <p className="school">{edu.school}</p>
                  <p className="period">{edu.period}</p>
                  <p className="description">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="cv-section">
            <h3 className="section-title">Skills & Expertise</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Strategy & Business</h4>
                <div className="skill-tags">
                  {experienceData.skills.strategy.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h4>Technical</h4>
                <div className="skill-tags">
                  {experienceData.skills.technical.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h4>Frameworks & Methods</h4>
                <div className="skill-tags">
                  {experienceData.skills.frameworks.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="experience-cta">
            <h3>Let's discuss how this experience can help your organization</h3>
            <Link to="/book" className="btn btn-primary">Book a Discovery Call</Link>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Experience
