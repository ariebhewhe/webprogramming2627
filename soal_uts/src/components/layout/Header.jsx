// TODO 9
// 1. Import { NavLink } dari 'react-router-dom'
// 2. Import gambar dari folder assets: header-bg.png beri nama bgGambar
// 3. Buat component function dengan nama Header
// 4. Struktur wajib di dalam return:
//    - <header> dengan className="header-area" dan inline style backgroundImage url bgGambar, size cover, position center, repeat no-repeat.
//    - Di dalamnya ada div className="header-text" berisi <h1>ProdiInformatika</h1> dan <p>Universitas Matana.</p>
//    - Di bawah header-text ada <nav> className="nav-menu" berisi <NavLink> menuju ke "/" dengan label "Beranda"
// 5. lakukan push dan commit "selesai TODO 9" dengan todo 9

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