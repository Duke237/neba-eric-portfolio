import React from 'react'

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="shell hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">Product Designer - UI/UX - Visual Identity</p>
          <h1>Designing digital products that users enjoy and teams can scale.</h1>
          <p className="hero-text">
            I help startups and businesses shape meaningful interfaces, polished websites, and
            mobile-first experiences with strong visual systems.
          </p>
          <div className="hero-actions">
            <a className="action-btn primary" href="#contact">
              Let's Work Together
            </a>
            <a className="action-btn ghost" href="#projects">
              View Projects
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <strong>4+</strong>
              <span>Years Experience</span>
            </div>
            <div>
              <strong>50+</strong>
              <span>Projects Delivered</span>
            </div>
            <div>
              <strong>95%</strong>
              <span>Client Satisfaction</span>
            </div>
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-orb"></div>
          <div className="hero-photo-wrap profile-photo-wrap">
            <img
              className="profile-photo"
              alt="Neba Eric portrait"
              decoding="async"
              fetchpriority="high"
              height="2156"
              width="1992"
              src="/hero.png"
              onError={(event) => {
                event.currentTarget.src = '/placeholder-profile.jpg'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
