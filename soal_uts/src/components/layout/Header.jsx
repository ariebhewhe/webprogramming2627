import { NavLink } from "react-router-dom";
import bgGambar from "../../assets/header-bg.png";

function Header() {
  return (
    <header
      className="header-area"
      style={{
        backgroundImage: `url(${bgGambar})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="header-text">
        <h1>ProdiInformatika</h1>
        <p>Universitas Matana.</p>
      </div>
      <nav className="nav-menu">
        <NavLink to="/" end>
          Beranda
        </NavLink>
        <NavLink to="/profil">Profil</NavLink>
        <NavLink to="/pendidikan">Pendidikan</NavLink>
        <NavLink to="/mahasiswa">Mahasiswa</NavLink>
        <NavLink to="/riset">Riset</NavLink>
        <NavLink to="/lain-lain">Lain-Lain</NavLink>
        <NavLink to="/berita">Berita</NavLink>
      </nav>
    </header>
  );
}

export default Header;
