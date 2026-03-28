import React from 'react'

const skills = [
  { name: 'UX', level: 92 },
  { name: 'Website Design', level: 88 },
  { name: 'App Design', level: 90 },
  { name: 'Graphic Design', level: 86 },
]

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="shell about-layout">
        <div className="about-photo-wrap profile-photo-wrap" data-reveal>
          <img
            alt="About Neba Eric"
            className="profile-photo"
            decoding="async"
            height="2238"
            loading="lazy"
            width="2238"
            src="/about.png"
            onError={(event) => {
              event.currentTarget.src = '/aboutt.png'
            }}
          />
        </div>

        <div className="about-copy" data-reveal>
          <h2>About Me</h2>
          <p>
            I design powerful user-centered digital experiences, applications, websites, and visual
            identities, blending strategy, creativity, and usability to solve problems, engage users,
            and elevate brands globally.
          </p>

          <div className="skill-stack">
            {skills.map((skill) => (
              <div className="skill-row" key={skill.name}>
                <div className="skill-title">{skill.name}</div>
                <div className="skill-track" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={skill.level} aria-label={skill.name}>
                  <div className="skill-fill" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
