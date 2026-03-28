import React from 'react'
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from 'react-icons/fa6'

const socials = [
  { icon: FaXTwitter, label: 'X (Twitter)', href: 'https://x.com/' },
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/' },
  { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { icon: FaBehance, label: 'Behance', href: 'https://www.behance.net/' },
  { icon: FaDribbble, label: 'Dribbble', href: 'https://dribbble.com/' },
  { icon: FaFacebookF, label: 'Facebook', href: 'https://www.facebook.com/' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/' },
  { icon: FaPinterestP, label: 'Pinterest', href: 'https://www.pinterest.com/' },
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
            <a
              aria-label={social.label}
              href={social.href}
              key={social.label}
              rel="noopener noreferrer"
              target="_blank"
            >
              <social.icon />
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
