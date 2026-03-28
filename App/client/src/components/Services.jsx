import React from 'react'

const services = [
  {
    icon: 'bi-layout-text-window-reverse',
    title: 'UX Strategy',
    text: 'Flows, wireframes, and journeys aligned to product goals.',
  },
  {
    icon: 'bi-phone',
    title: 'Mobile App UI',
    text: 'Native-feel interfaces optimized for speed and readability.',
  },
  {
    icon: 'bi-display',
    title: 'Web Design',
    text: 'Responsive and scalable websites built for conversion.',
  },
  {
    icon: 'bi-bezier2',
    title: 'Brand and Visuals',
    text: 'Consistent visual language for digital and social touchpoints.',
  },
]

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="shell" data-reveal>
        <div className="section-head">
          <p className="eyebrow">Services and Skills</p>
          <h2>Design support from concept to polished delivery</h2>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">
                <i className={`bi ${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
