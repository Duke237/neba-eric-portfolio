import React from 'react'

export default function MoreMenu({ activeSection, navGroups, onClose, onNavigate, open }) {
  return (
    <>
      <div aria-hidden className={`menu-backdrop ${open ? 'is-open' : ''}`} onClick={onClose}></div>
      <aside
        aria-hidden={!open}
        aria-label="More navigation"
        aria-modal="true"
        className={`more-menu ${open ? 'is-open' : ''}`}
        id="more-menu"
        role="dialog"
      >
        <div className="menu-head">
          <div>
            <p className="menu-eyebrow">Quick Navigation</p>
            <h3>Explore Portfolio</h3>
          </div>
          <button aria-label="Close menu" className="icon-btn" onClick={onClose} type="button">
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="menu-links">
          {navGroups.map((item) => (
            <button
              key={item.id}
              className={`menu-link ${activeSection === item.id ? 'is-active' : ''}`}
              onClick={() => onNavigate(item.id)}
              type="button"
            >
              <span>{item.label}</span>
              <i className="bi bi-arrow-up-right"></i>
            </button>
          ))}
        </div>

        <div className="menu-card">
          <p>Need a premium interface for your product?</p>
          <button className="action-btn primary" onClick={() => onNavigate('contact')} type="button">
            Start a Project
          </button>
        </div>
      </aside>
    </>
  )
}
