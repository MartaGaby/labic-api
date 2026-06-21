import { NavLink } from 'react-router-dom';
import labicLogo from '../assets/images/labicLogo.webp';

export default function Sidebar() {
  const menuItems = [
    { name: 'Dashboard Principal', path: '/dashboard' },
    { name: 'Pesquisadores', path: '/dashboard/pesquisadores' },
    { name: 'Projetos', path: '/dashboard/projetos' },
    { name: 'Artigos', path: '/dashboard/artigos' },
  ];

  return (
    <aside style={styles.sidebar}>
      <div style={styles.logoContainer}>
        <img 
          src={labicLogo} 
          alt="LABIC Logo" 
          style={styles.logoImage} 
        />
      </div>

      <nav style={styles.nav}>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/dashboard'}
            style={({ isActive }) => ({
              ...styles.navLink,
              backgroundColor: isActive ? 'rgb(43, 93, 250)' : 'transparent',
              color: isActive ? '#FFFFFF' : '#9CA3AF',
              fontWeight: isActive ? '600' : '400',
            })}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: '220px',
    height: '100vh',
    backgroundColor: '#111827',
    display: 'flex',
    flexDirection: 'column',
    padding: '32px 12px',
    position: 'fixed',
    left: 0,
    top: 0,
    boxShadow: '2px 0 8px rgba(0,0,0,0.1)',
    zIndex: 100,
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '32px',
  },
  logoImage: {
    maxWidth: '60%',
    height: 'auto',
    objectFit: 'contain',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  navLink: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '13.5px',
    padding: '10px 12px',
    borderRadius: '5px',
    textDecoration: 'none',
    transition: '0.15s ease',
    display: 'block',
  },
};