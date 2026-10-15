// TODO 9
import { NavLink } from 'react-router-dom'
import bgGambar from "../../assets/header-bg.png"
// 2. Import gambar dari folder assets: header-bg.png beri nama bgGambar
// 3. Buat component function dengan nama Header
// 4. Struktur wajib di dalam return:
export default function Header() {
    return (
      <header style={{
            backgroundImage: `url(${bgGambar})`, 
            backgroundSize:'cover', 
            backgroundPosition:'center', 
            backgroundRepeat:'no-repeat' }} className="header-area">
            <div className="header-text">
                <h1>ProdiInformatika</h1>
                <p>Universitas Matana.</p>
            </div>
            <nav className="nav-menu">
                <NavLink to="/">Beranda</NavLink>
                <NavLink to="/profil">Profil</NavLink>
                <NavLink to="/mahasiswa">Mahasiswa</NavLink>
                <NavLink to="/pendidikan">Pendidikan</NavLink>
                <NavLink to="/riset">Riset</NavLink>
                <NavLink to="/lainlain">Lain-Lainnya</NavLink>
                <NavLink to="/array">Array</NavLink>
              </nav>
        </header>
    );
}
//Validasi TODO 18 Bagian array
// 5. lakukan push dan commit "selesai TODO 9" dengan todo 9
//commit ulang TODO 9
// test aja buat video