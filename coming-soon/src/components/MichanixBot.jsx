import { useState, useRef, useEffect } from 'react'
import './MichanixBot.css'

// MichaniX context and approach - this would be enhanced with actual AI integration
const MICHANIX_CONTEXT = {
  approach: `MichaniX approaches every engagement with a dual lens: business strategy and technical excellence.

We start by listening deeply to understand the real challenge - not just the symptoms, but the underlying business problem.

Our framework balances:
1. DOING THE RIGHT THINGS (Business Acumen)
   - What's the actual business problem?
   - Who are the stakeholders and what do they need?
   - What's the ROI potential?
   - What's the strategic priority?

2. DOING THINGS RIGHT (Technical Excellence)
   - How do we build this to scale?
   - What's the architecture that will last?
   - How does this integrate with existing systems?
   - What are the maintenance and evolution considerations?

We're honest about fit - if a challenge isn't in our wheelhouse, we'll say so. If AI isn't the answer, we'll tell you. Our goal is your success, not just winning work.`,

  canHelp: [
    'AI strategy and roadmap development',
    'Data & analytics architecture',
    'Enterprise architecture design',
    'GenAI adoption guidance',
    'Building business cases for technology investments',
    'Evaluating AI/ML opportunities',
    'Data governance frameworks',
    'Technology due diligence'
  ],

  notIdealFor: [
    'Pure software development/coding projects',
    'Operational support or managed services',
    'Projects without executive sponsorship',
    'Quick fixes without strategic context'
  ]
}

const INITIAL_MESSAGES = [
  {
    role: 'assistant',
    content: `Hi! I'm here to help you understand how MichaniX approaches challenges.

Tell me about a challenge you're facing with AI, data, or technology strategy, and I'll share how we might think about it.

Or ask me anything about our approach, expertise, or whether we'd be a good fit for your needs.`
  }
]

// Simple response logic - in production, this would call an AI API
function generateResponse(userMessage) {
  const lowerMessage = userMessage.toLowerCase()

  // Check for specific topics
  if (lowerMessage.includes('approach') || lowerMessage.includes('how do you')) {
    return `Great question! Here's how MichaniX approaches engagements:

**1. Listen First**
We start every engagement by deeply understanding your challenge. Not just the technical symptoms, but the business context, stakeholders, and what success looks like.

**2. Dual Lens Analysis**
We evaluate through both lenses:
- **Business**: Is this the right problem to solve? What's the ROI? Who needs to be involved?
- **Technical**: How do we build this to last? What's the architecture? How does it integrate?

**3. Honest Assessment**
We'll tell you if we can help - or if you need something different. If AI isn't the answer, we'll say so.

**4. Integrated Delivery**
We don't just hand over a strategy deck. We stay engaged to ensure the vision survives contact with reality.

Would you like to describe a specific challenge you're facing?`
  }

  if (lowerMessage.includes('help') || lowerMessage.includes('can you') || lowerMessage.includes('do you')) {
    return `**We're well-suited for:**
${MICHANIX_CONTEXT.canHelp.map(item => `• ${item}`).join('\n')}

**We're probably not the best fit for:**
${MICHANIX_CONTEXT.notIdealFor.map(item => `• ${item}`).join('\n')}

What specific challenge are you thinking about? I can give you a sense of how we'd approach it.`
  }

  if (lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence') || lowerMessage.includes('genai') || lowerMessage.includes('chatgpt') || lowerMessage.includes('llm')) {
    return `AI is definitely in our wheelhouse! Here's how we typically approach AI challenges:

**1. Start with the Problem, Not the Technology**
Many organizations jump to "we need AI" without clarity on the problem. We help identify where AI actually adds value vs. where simpler solutions work better.

**2. Assess Readiness**
AI success depends on data, infrastructure, skills, and governance. We evaluate your current state honestly.

**3. Prioritize for Impact**
Not all AI opportunities are equal. We help identify quick wins vs. strategic bets, and build roadmaps that deliver incremental value.

**4. Build for Scale**
POCs are easy; production is hard. We architect with the full lifecycle in mind - deployment, monitoring, maintenance, evolution.

What's the specific AI challenge you're exploring?`
  }

  if (lowerMessage.includes('data') || lowerMessage.includes('analytics') || lowerMessage.includes('dashboard') || lowerMessage.includes('bi')) {
    return `Data & analytics is core to what we do. Here's our typical approach:

**1. Understand the Decisions**
Analytics should enable better decisions. We start by understanding what decisions need data support and who makes them.

**2. Assess Current State**
What data exists? What's the quality? Where are the gaps? What's the technical debt?

**3. Design for Purpose**
We design architectures that serve the actual use cases - not theoretical perfect-world scenarios.

**4. Enable Self-Service**
The goal is to build capabilities that the organization can own and evolve, not create dependency.

What's the data/analytics challenge you're working on?`
  }

  if (lowerMessage.includes('cost') || lowerMessage.includes('price') || lowerMessage.includes('budget') || lowerMessage.includes('expensive')) {
    return `Good question - let's be transparent about engagement models:

**Discovery Call (Free)**
30-minute conversation to understand your challenge and assess fit. No commitment.

**Advisory Engagement**
Typically project-based, scoped after understanding your specific needs. We aim to deliver high value relative to investment.

**Strategic Consulting**
Longer-term engagements for comprehensive strategy development and implementation support.

The best next step is a discovery call - we'll be honest about whether we're the right fit and what level of engagement makes sense for your situation.

Would you like to book a call?`
  }

  // Default response for challenges
  return `Thanks for sharing that context.

Here's how MichaniX would typically approach a challenge like this:

**First Questions We'd Ask:**
• What's the business outcome you're trying to achieve?
• Who are the key stakeholders?
• What have you already tried?
• What constraints are we working within?

**Our Assessment Would Cover:**
• Is this the right problem to solve now? (Business priority)
• What's a realistic path to value? (Implementation strategy)
• How do we build this to last? (Architecture thinking)

**Honest Assessment:**
Based on what you've described, this sounds like it could be in our wheelhouse. The next step would be a discovery call to dig deeper.

Would you like to tell me more about the specific challenges you're facing, or shall I share how to book a call?`
}

function MichanixBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState(INITIAL_MESSAGES)
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userMessage = inputValue.trim()
    setInputValue('')

    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])

    // Simulate typing delay
    setIsTyping(true)
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000))

    // Generate and add response
    const response = generateResponse(userMessage)
    setMessages(prev => [...prev, { role: 'assistant', content: response }])
    setIsTyping(false)
  }

  return (
    <>
      {/* Chat Button */}
      <button
        className={`bot-trigger ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat with MichaniX"
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
        <span className="bot-label">How would MichaniX approach it?</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="bot-window">
          <div className="bot-header">
            <div className="bot-header-info">
              <div className="bot-avatar">M</div>
              <div>
                <h4>MichaniX Assistant</h4>
                <span>Ask about our approach</span>
              </div>
            </div>
            <button className="bot-close" onClick={() => setIsOpen(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          <div className="bot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`bot-message ${msg.role}`}>
                {msg.role === 'assistant' && <div className="message-avatar">M</div>}
                <div className="message-content">
                  {msg.content.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="bot-message assistant">
                <div className="message-avatar">M</div>
                <div className="message-content typing">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="bot-input" onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Describe your challenge..."
              disabled={isTyping}
            />
            <button type="submit" disabled={isTyping || !inputValue.trim()}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  )
}

export default MichanixBot
