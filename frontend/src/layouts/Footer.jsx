import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <img src="/labicLogo.webp" alt="LABIC" className="footer__logo-img" />
          </Link>
          <p className="footer__description">
            Laboratório de Inovação e Criatividade — Pesquisa, tecnologia e conhecimento a serviço da sociedade.
          </p>
        </div>

        <div className="footer__links">
          <h4 className="footer__title">Acesso Rápido</h4>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/pesquisa">Pesquisas</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </div>

        <div className="footer__links">
          <h4 className="footer__title">Acesso</h4>
          <ul>
            <li><Link to="/login">Entrar</Link></li>
            <li><Link to="/login">Área do Pesquisador</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} LABIC — Laboratório de Inovação e Criatividade. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}