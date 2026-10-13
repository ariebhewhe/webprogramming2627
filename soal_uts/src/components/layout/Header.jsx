import { NavLink } from 'react-router-dom';
import bgGambar from '../../assets/header-bg.png';

function Header() {
  return (
    <header
      className="header-area"
      style={{
        backgroundImage: `url(${bgGambar})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="header-text">
        <h1>ProdiInformatika</h1>
        <p>Universitas Matana.</p>
      </div>
      <nav className="nav-menu">
        <NavLink to="/">Beranda</NavLink>
      </nav>
    </header>
  );
}

export default Header;