// TODO 9
import { NavLink } from 'react-router-dom'
import bgGambar from '../../assets/header-bg.png'

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
        <h1>Prodi Informatika</h1>
        <p>Universitas Matana.</p>
      </div>
      <nav className="nav-menu">
        <NavLink to="/">BERANDA</NavLink>
        <NavLink to="/profil">PROFIL</NavLink>
        <NavLink to="/pendidikan">PENDIDIKAN</NavLink>
        <NavLink to="/riset">RISET</NavLink>
        <NavLink to="/mahasiswa">MAHASISWA</NavLink>
        <NavLink to="/lainlain">LAIN-LAIN</NavLink>
      </nav>
    </header>
  )
}

export default Header