import React from 'react'

export default function Header({
  activeSection,
  menuOpen,
  navGroups,
  onMenuToggle,
  onNavigate,
  onThemeToggle,
  theme,
}) {
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <button className="brand" onClick={() => onNavigate('home')} type="button">
          <img
            src="/logo.png"
            alt="Neba Eric logo"
            className="brand-logo"
            height="780"
            width="1456"
            onError={(event) => {
              event.currentTarget.style.display = 'none'
            }}
          />
        </button>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navGroups.map((item) => (
            <button
              aria-current={activeSection === item.id ? 'page' : undefined}
              key={item.id}
              className={`nav-link ${activeSection === item.id ? 'is-active' : ''}`}
              onClick={() => onNavigate(item.id)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button className="action-btn subtle" onClick={() => onNavigate('contact')} type="button">
            Book a Call
          </button>
          <button className="icon-btn" aria-label="Toggle theme" onClick={onThemeToggle} type="button">
            <i className={`bi ${theme === 'dark' ? 'bi-sun-fill' : 'bi-moon-stars-fill'}`}></i>
          </button>
          <button
            aria-controls="more-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className={`burger ${menuOpen ? 'is-open' : ''}`}
            onClick={onMenuToggle}
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
