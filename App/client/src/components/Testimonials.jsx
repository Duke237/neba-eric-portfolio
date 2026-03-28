import React from 'react'

const testimonials = [
  {
    id: 1,
    avatar: '/avatar1.jpg',
    quote:
      'Neba transformed our product journey and improved onboarding clarity in less than two weeks.',
    name: 'Michael T.',
    role: 'Marketing Director',
  },
  {
    id: 2,
    avatar: '/avatar2.jpg',
    quote:
      "Great communication and execution. Every screen felt intentional and easy to hand off to engineering.",
    name: 'Angela R.',
    role: 'Founder',
  },
  {
    id: 3,
    avatar: '/avatar3.jpg',
    quote:
      'The final design system helped us ship faster and keep a polished look across every release.',
    name: 'David L.',
    role: 'Product Manager',
  },
]

export default function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="shell">
        <div className="section-head testimonial-head" data-reveal>
          <p className="eyebrow">Services and Skills</p>
          <h2>Design support from concept to polished delivery</h2>
        </div>
      </div>

      <div className="testimonial-marquee" data-reveal>
        <div className="testimonial-track">
          {[0, 1].map((loop) => (
            <div aria-hidden={loop === 1} className="testimonial-group" key={loop}>
              {testimonials.map((item) => (
                <article className="testimonial-card" key={`${loop}-${item.id}`}>
                  <img
                    alt={`${item.name} avatar`}
                    decoding="async"
                    loading="lazy"
                    src={item.avatar}
                    onError={(event) => {
                      event.currentTarget.src = '/placeholder-avatar.jpg'
                    }}
                  />
                  <p>{item.quote}</p>
                  <h3>{item.name}</h3>
                  <span>{item.role}</span>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
