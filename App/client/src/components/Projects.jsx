import React, { memo } from 'react'

const projects = [
  {
    id: 1,
    type: 'Landing Page Design',
    title: 'Crestlancing Collaboration Landing Page',
    summary:
      'A conversion-focused landing page that clarifies value early and guides visitors into a frictionless contact flow.',
    image: '/projects/web-landing.jpg',
  },
  {
    id: 2,
    type: 'Mobile App Design',
    title: 'Nori Delivery Mobile Experience',
    summary:
      'A high-contrast food delivery interface built for quick ordering, clear navigation, and confident checkout decisions.',
    image: '/projects/food-webapp.jpg',
  },
  {
    id: 3,
    type: 'Dashboard Design',
    title: 'TaskFlow Productivity Dashboard',
    summary:
      'A structured task dashboard that simplifies planning, status tracking, and team visibility across daily workflows.',
    image: '/projects/task-dashboard.jpg',
  },
  {
    id: 4,
    type: 'UI/UX Case Study',
    title: 'Case Study Strategy Showcase',
    summary:
      'A narrative-driven case study experience that highlights process, outcomes, and decision-making for stronger trust.',
    image: '/projects/case-study.jpg',
  },
  {
    id: 5,
    type: 'Branding / Visual Identity',
    title: 'EchoBeat Visual Identity Direction',
    summary:
      'A cohesive brand and interface style blending typography, motion cues, and color systems to strengthen product recall.',
    image: '/projects/music-streaming.jpg',
  },
  {
    id: 6,
    type: 'Web Application',
    title: 'Pulse Music Product Interface',
    summary:
      'A scalable web-app UI kit designed to improve content discovery, playback control, and cross-screen consistency.',
    image: '/projects/music-kit.jpg',
  },
]

const ProjectCard = memo(function ProjectCard({ project }) {
  const [imgSrc, setImgSrc] = React.useState(project.image)

  const handleError = () => {
    setImgSrc('/placeholder-profile.jpg')
  }

  return (
    <article className="project-card">
      <img
        alt={project.title}
        className="project-media"
        decoding="async"
        fetchpriority="low"
        loading="lazy"
        src={imgSrc}
        onError={handleError}
      />
      <div className="project-copy">
        <span>{project.type}</span>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
      </div>
    </article>
  )
})

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="shell">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Selected Work</p>
          <h2>Projects designed for impact, clarity, and measurable user outcomes</h2>
        </div>

        <div className="project-grid" data-reveal>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
