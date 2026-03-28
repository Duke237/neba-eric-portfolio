import React from 'react'

const socials = [
  { icon: 'bi-twitter-x', label: 'X', href: '#' },
  { icon: 'bi-linkedin', label: 'LinkedIn', href: '#' },
  { icon: 'bi-behance', label: 'Behance', href: '#' },
  { icon: 'bi-dribbble', label: 'Dribbble', href: '#' },
  { icon: 'bi-facebook', label: 'Facebook', href: '#' },
  { icon: 'bi-instagram', label: 'Instagram', href: '#' },
  { icon: 'bi-pinterest', label: 'Pinterest', href: '#' },
]

export default function Footer({ navGroups, onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="shell footer-panel">
        <div className="footer-branding">
          <img
            alt="Neba Eric logo"
            className="footer-logo"
            decoding="async"
            height="780"
            loading="lazy"
            width="1456"
            src="/logo.png"
            onError={(event) => {
              event.currentTarget.src = '/footer.png'
            }}
          />
        </div>

        <div className="footer-nav-pills">
          {navGroups.map((item) => (
            <button key={item.id} onClick={() => onNavigate(item.id)} type="button">
              {item.label}
            </button>
          ))}
        </div>

        <div className="footer-socials">
          {socials.map((social) => (
            <a aria-label={social.label} href={social.href} key={social.label}>
              <i className={`bi ${social.icon}`}></i>
            </a>
          ))}
        </div>
      </div>

      <div className="footer-meta-bar">
        <div className="shell footer-meta">
          <span>&copy; 2026 ERICUIUX. All Rights Reserved.</span>
          <span>Built for smooth mobile and desktop experiences.</span>
        </div>
      </div>
    </footer>
  )
}
