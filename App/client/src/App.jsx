import React, { Suspense, lazy, useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import MobileBottomNav from './components/MobileBottomNav'
import MoreMenu from './components/MoreMenu'

const About = lazy(() => import('./components/About'))
const Projects = lazy(() => import('./components/Projects'))
const Services = lazy(() => import('./components/Services'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

const SECTION_IDS = ['home', 'about', 'projects', 'services', 'testimonials', 'contact']
const NAV_GROUPS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]

function SectionFallback() {
  return <div aria-hidden className="section-fallback"></div>
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        threshold: [0.35, 0.6, 0.85],
        rootMargin: '-20% 0px -40% 0px',
      }
    )

    const observedNodes = new Set()
    const registerSections = () => {
      SECTION_IDS.forEach((id) => {
        const node = document.getElementById(id)
        if (node && !observedNodes.has(node)) {
          sectionObserver.observe(node)
          observedNodes.add(node)
        }
      })
    }

    registerSections()
    const mutationObserver = new MutationObserver(registerSections)
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      mutationObserver.disconnect()
      sectionObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.18,
      }
    )

    const registerRevealTargets = () => {
      const targets = document.querySelectorAll('[data-reveal]')
      targets.forEach((target) => {
        if (!target.hasAttribute('data-reveal-bound')) {
          target.setAttribute('data-reveal-bound', 'true')
          revealObserver.observe(target)
        }
      })
    }

    registerRevealTargets()
    const mutationObserver = new MutationObserver(registerRevealTargets)
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      mutationObserver.disconnect()
      revealObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    let rafId = null

    const updateProgress = () => {
      rafId = null
      const scrollTop = window.scrollY
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
      const value = Math.min(100, Math.max(0, (scrollTop / maxScroll) * 100))
      document.documentElement.style.setProperty('--scroll-progress', `${value}%`)
    }

    const onScroll = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(updateProgress)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId)
      }
    }
  }, [])

  const navigateTo = (id) => {
    const node = document.getElementById(id)
    if (node) {
      node.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMenuOpen(false)
  }

  return (
    <div className="app-shell">
      <a className="skip-link" href="#home">
        Skip to main content
      </a>
      <div aria-hidden className="scroll-progress"></div>

      <Header
        activeSection={activeSection}
        menuOpen={menuOpen}
        navGroups={NAV_GROUPS}
        onMenuToggle={() => setMenuOpen((previous) => !previous)}
        onNavigate={navigateTo}
        onThemeToggle={() => setTheme((previous) => (previous === 'dark' ? 'light' : 'dark'))}
        theme={theme}
      />

      <MoreMenu
        activeSection={activeSection}
        navGroups={NAV_GROUPS}
        onClose={() => setMenuOpen(false)}
        onNavigate={navigateTo}
        open={menuOpen}
      />

      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={<SectionFallback />}>
        <Footer navGroups={NAV_GROUPS} onNavigate={navigateTo} />
      </Suspense>

      <MobileBottomNav
        activeSection={activeSection}
        menuOpen={menuOpen}
        onMore={() => setMenuOpen((previous) => !previous)}
        onNavigate={navigateTo}
      />
    </div>
  )
}
