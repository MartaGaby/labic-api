import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <img src="/labicLogo.webp" alt="LABIC" className="navbar__logo-img" />
        </Link>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--active' : ''}`}
          onClick={toggleMenu}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'} onClick={closeMenu}>
              Início
            </NavLink>
          </li>
          <li>
            <NavLink to="/pesquisa" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'} onClick={closeMenu}>
              Pesquisas
            </NavLink>
          </li>
          <li>
            <NavLink to="/sobre" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'} onClick={closeMenu}>
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink to="/contato" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'} onClick={closeMenu}>
              Contato
            </NavLink>
          </li>
          <li className="navbar__login-mobile">
            <NavLink to="/login" className="navbar__link navbar__link--login" onClick={closeMenu}>
              Entrar
            </NavLink>
          </li>
        </ul>

        <Link to="/login" className="navbar__btn-login">
          Entrar
        </Link>
      </div>
    </nav>
  )
}