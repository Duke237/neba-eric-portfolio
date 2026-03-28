import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    setError('')

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const brief = String(formData.get('brief') || '').trim()

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: name,
          from_email: email,
          message: brief,
          to_email: 'shapekenzo@gmail.com',
        },
        'YOUR_PUBLIC_KEY'
      )
      setIsSent(true)
      event.currentTarget.reset()
    } catch (err) {
      setError('Failed to send message. Please try again.')
      console.error('EmailJS error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="contact section" id="contact">
      <div className="shell contact-layout">
        <div className="contact-copy" data-reveal>
          <p className="eyebrow">Contact</p>
          <h2>Ready to create something polished and high-performing?</h2>
          <p>
            Share your project goals and timeline. I will respond with a clear plan and next
            steps.
          </p>
          <div className="contact-quick">
            <a href="mailto:shapekenzo@gmail.com">
              <i className="bi bi-envelope"></i>
              shapekenzo@gmail.com
            </a>
            <a href="tel:+237678220415">
              <i className="bi bi-telephone"></i>
              +237 678 220 415
            </a>
            <a href="tel:+237671688259">
              <i className="bi bi-telephone"></i>
              +237 671 688 259
            </a>
          </div>
        </div>

        <form className="contact-form" data-reveal onSubmit={handleSubmit}>
          {isSent && (
            <div className="form-success" style={{ padding: '1rem', background: 'var(--success)', color: '#fff', borderRadius: 'var(--radius-sm)', marginBottom: '1rem' }}>
              ✅ Message sent successfully! I will get back to you soon.
            </div>
          )}
          {error && (
            <div className="form-error" style={{ padding: '1rem', background: '#dc3545', color: '#fff', borderRadius: 'var(--radius-sm)', marginBottom: '1rem' }}>
              ❌ {error}
            </div>
          )}
          <label>
            Full Name
            <input name="name" placeholder="Your full name" required type="text" disabled={isLoading} />
          </label>
          <label>
            Email
            <input name="email" placeholder="you@example.com" required type="email" disabled={isLoading} />
          </label>
          <label>
            Message
            <textarea
              name="brief"
              placeholder="Tell me about your project, goals, and timeline."
              required
              rows="4"
              disabled={isLoading}
            ></textarea>
          </label>
          <button 
            className="action-btn primary" 
            type="submit" 
            disabled={isLoading}
            style={{ opacity: isLoading ? 0.7 : 1, cursor: isLoading ? 'not-allowed' : 'pointer' }}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
