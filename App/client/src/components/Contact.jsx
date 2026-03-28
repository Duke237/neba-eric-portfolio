import React from 'react'

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const brief = String(formData.get('brief') || '').trim()

    const subject = encodeURIComponent(`New project inquiry from ${name || 'Portfolio visitor'}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nProject brief:\n${brief}`)
    window.location.href = `mailto:hello@ericuiux.com?subject=${subject}&body=${body}`
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
            <a href="mailto:hello@ericuiux.com">
              <i className="bi bi-envelope"></i>
              hello@ericuiux.com
            </a>
            <a href="tel:+237680000000">
              <i className="bi bi-telephone"></i>
              +237 680 000 000
            </a>
          </div>
        </div>

        <form className="contact-form" data-reveal onSubmit={handleSubmit}>
          <label>
            Full Name
            <input name="name" placeholder="Your full name" required type="text" />
          </label>
          <label>
            Email
            <input name="email" placeholder="you@example.com" required type="email" />
          </label>
          <label>
            Project Brief
            <textarea
              name="brief"
              placeholder="Tell me about your project, goals, and timeline."
              required
              rows="4"
            ></textarea>
          </label>
          <button className="action-btn primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
