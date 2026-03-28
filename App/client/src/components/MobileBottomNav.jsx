import React from 'react'

const BOTTOM_ITEMS = [
  { id: 'home', icon: 'bi-house-door', label: 'Home' },
  { id: 'about', icon: 'bi-person', label: 'About' },
  { id: 'projects', icon: 'bi-grid', label: 'Projects' },
  { id: 'contact', icon: 'bi-chat-square-text', label: 'Contact' },
]

export default function MobileBottomNav({ activeSection, menuOpen, onMore, onNavigate }) {
  return (
    <nav aria-label="Mobile app navigation" className="mobile-nav">
      {BOTTOM_ITEMS.map((item) => (
        <button
          aria-current={activeSection === item.id ? 'page' : undefined}
          key={item.id}
          className={`mobile-nav-item ${activeSection === item.id ? 'is-active' : ''}`}
          onClick={() => onNavigate(item.id)}
          type="button"
        >
          <i className={`bi ${item.icon}`}></i>
          <span>{item.label}</span>
        </button>
      ))}
      <button className={`mobile-nav-item ${menuOpen ? 'is-active' : ''}`} onClick={onMore} type="button">
        <i className="bi bi-three-dots"></i>
        <span>More</span>
      </button>
    </nav>
  )
}
