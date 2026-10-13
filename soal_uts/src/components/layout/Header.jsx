// TODO 9
// 1. Import { NavLink } dari 'react-router-dom'
import {navLink} from 'react-router-dom'
// 2. Import gambar dari folder assets: header-bg.png beri nama bgGambar
import headerBG from 'assets/header-bg.png'
// 3. Buat component function dengan nama Header
function Header (){

}
export default Header;
// 4. Struktur wajib di dalam return:
//    - <header> dengan className="header-area" dan inline style backgroundImage url bgGambar, size cover, position center, repeat no-repeat.
//    - Di dalamnya ada div className="header-text" berisi <h1>ProdiInformatika</h1> dan <p>Universitas Matana.</p>
//    - Di bawah header-text ada <nav> className="nav-menu" berisi <NavLink> menuju ke "/" dengan label "Beranda"
// 5. lakukan push dan commit "selesai TODO 9" dengan todo 9