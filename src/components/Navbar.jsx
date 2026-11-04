import { useEffect, useState } from 'react'

const links = [
  { href: '#home', label: '首页' },
  { href: '#about', label: '关于我' },
  { href: '#works', label: '精选作品' },
  { href: '#advantages', label: '个人优势' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav nav--game ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a className="nav__logo" href="#home">
          <span className="nav__logo-coin" />
          <span className="nav__logo-text">PLAYER<b>ONE</b></span>
        </a>
        <nav className="nav__links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a className="game-btn game-btn--sm" href="#contact">
          联系我
        </a>
      </div>
    </header>
  )
}
