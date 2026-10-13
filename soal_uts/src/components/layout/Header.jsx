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
        <NavLink to="./pages/Beranda">BERANDA</NavLink>
        <NavLink to="./pages/Profil">PROFIL</NavLink>
        <NavLink to="./pages/Pendidikan">PENDIDIKAN</NavLink>
        <NavLink to="./pages/Riset">RISET</NavLink>
        <NavLink to="./pages/Mahasiswa">MAHASISWA</NavLink>
        <NavLink to="./pages/LainLain">LAIN-LAIN</NavLink>
      </nav>
    </header>
  )
}

export default Header