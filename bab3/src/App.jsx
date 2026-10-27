// // import './App.css'
// // import TransaksiItem from './component/TransaksiItem';
// // import KartuRingkasan from './component/KartuRingkasan';
// // import { Badge } from 'react-bootstrap';
// // import WalletSummary from './component/WalletSummary';
// // import { Routes, Route } from 'react-router-dom';

// // // import transaksi Item
// // // import kartu Ringkasan
// // // import badge
// // // WalletSummary

// // function App() {
// //   return (
// //     <>
// //       <div className="container">
// //         <div className="main-wrapper">
// //           <main className="content-area">
// //             <Routes>
// //               <Route path="transaksiItem" element={<TransaksiItem />} />
// //               <Route path="kartuRingkasan" element={<KartuRingkasan />} />
// //               <Route path="badge" element={<Badge />} />
// //               <Route path="walletSummary" element={<WalletSummary />} />
// //             </Routes>
// //           </main>
// //         </div>
// //       </div>

// //       {/* buat Routes */}

// //       {/* Tempat untuk komponen  */}
// //       {/* Route transaksiItem */}
// //       {/* Route KartuRingaksan */}
// //       {/* Route Badge */}
// //       {/* Route WalletSummary */}
// //     </>
// //   );
// // }

// // export default App;


// import React from 'react';
// // Mengimpor CSS global
// import './App.css'; 
// import { Route, Routes } from 'react-router-dom';
// import Badge from './component/Badge';
// // Mengimpor komponen-komponen pendukung yang ada di proyekmu
// import AppNavigation from './component/AppNavigation';
// import HeaderBanner from './component/HeaderBanner';
// import KartuRingkasan from './component/KartuRingkasan';
// import WalletSummary from './component/WalletSummary';
// import CardStatusDemo from './component/CardStatusDemo';
// import TransactionManager from './component/TransactionManager';
// import FormTambahTransaksi from './component/FormTambahTransaksi';
// import LayoutGrid from './component/LayoutGrid';
// import TransaksiItem from './component/TransaksiItem';

// // function App() {
// //   return (
// //     <div className="app-container">
// //       {/* Menu Navigasi Utama */}
// //       <AppNavigation />
      
// //       {/* Banner Bagian Atas */}
// //       <HeaderBanner />
      
// //       {/* Mengatur tampilan menggunakan Grid agar rapi */}
// //       <LayoutGrid>
// //         {/* Ringkasan Akun / Dompet */}
// //         <WalletSummary />
// //         <KartuRingkasan />
        
// //         {/* Fitur Utama: Manajemen dan Tambah Transaksi */}
// //         <TransactionManager />
// //         <FormTambahTransaksi />
        
// //         {/* Komponen Demo atau Tambahan */}
// //         <CardStatusDemo />
// //       </LayoutGrid>

// //       <Routes>
// //         <Route path='/transaksi' element={ <TransaksiItem />} />
// //         <Route path='/kartu' element={ <KartuRingkasan />} />
// //         <Route path='/badge' element={ <Badge />} />
// //         <Route path='/wallet' element={ <WalletSummary />} />
// //         <Route path='/LayoutGrid' element={ <LayoutGrid/>  } />
// //         <Route path='/HeaderBanner' element={ <HeaderBanner/>  } />
// //         <Route path='/CardStatusDemo' element={ <CardStatusDemo/> } />
// //         <Route path='/AppNavigation' element={ <AppNavigation/> } />
// //         <Route path='/TransactionManager' element={ <TransactionManager/> } />
// //       </Routes>
// //     </div>
// //   );
// // }

// // Halaman Utama (Home) yang menggabungkan layout dasarmu
// function HomePage() {
//   return (
//     <>
//       {/* Banner Bagian Atas */}
//       <HeaderBanner />
      
//       {/* Mengatur tampilan menggunakan Grid agar rapi */}
//       <LayoutGrid>
//         {/* Ringkasan Akun / Dompet */}
//         <WalletSummary />
//         <KartuRingkasan />
        
//         {/* Fitur Utama: Manajemen dan Tambah Transaksi */}
//         <TransactionManager />
//         <FormTambahTransaksi />
        
//         {/* Komponen Demo atau Tambahan */}
//         <CardStatusDemo />
//       </LayoutGrid>
//     </>
//   );
// }

// function App() {
//   return (
//     <div className="app-container">
//       {/* Menu Navigasi Utama akan selalu muncul di atas halaman mana pun */}
//       <AppNavigation />
      
//       {/* Sistem Navigasi Antar Halaman */}
//       <Routes>
//         {/* Halaman utama menampilkan layout lengkap */}
//         <Route path='/' element={<HomePage />} />
        
//         {/* Halaman transaksi utama */}
//         <Route path='/transaksi' element={<TransaksiItem />} />
        
//         {/* Route penyesuaian link menu Dropdown Komponen */}
//         <Route path='/badge' element={<Badge />} />
//         <Route path='/card-status' element={<CardStatusDemo />} />
//         <Route path='/header-banner' element={<HeaderBanner />} />
//         <Route path='/transaction-manager' element={<TransactionManager />} />
//         <Route path='/kartu-ringkasan' element={<KartuRingkasan />} />
//         <Route path='/layout-grid' element={<LayoutGrid />} />
//         <Route path='/wallet-summary' element={<WalletSummary />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;



import React, { useState } from 'react'; // <-- Menambahkan useState di sini
import './App.css'; 
import { Route, Routes, NavLink } from 'react-router-dom';

// Mengimpor komponen dasar dari React Bootstrap
import { Navbar, Nav, Container } from 'react-bootstrap'; 

// Mengimpor seluruh komponen pendukung dari folder component
import HeaderBanner from './component/HeaderBanner';
import KartuRingkasan from './component/KartuRingkasan';
import WalletSummary from './component/WalletSummary';
import CardStatusDemo from './component/CardStatusDemo';
import TransactionManager from './component/TransactionManager';
import FormTambahTransaksi from './component/FormTambahTransaksi';
import LayoutGrid from './component/LayoutGrid';
import TransaksiItem from './component/TransaksiItem';
import Badge from './component/Badge';
import DaftarTugasFunction from './component/DaftarTugasFunction';
import PostListAxios from './component/PostListAxios';

function LocalNavigation() {
  // State untuk menyimpan status apakah dropdown sedang terbuka (true) atau tertutup (false)
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk membalikkan status buka/tutup saat tombol diklik
  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  // Fungsi untuk otomatis menutup dropdown saat salah satu menu di dalamnya diklik
  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <Navbar bg='dark' variant='dark' expand='lg' className='mb-4'> 
      <Container> 
        <Navbar.Brand as={NavLink} to='/' onClick={closeDropdown}>Catatan Keuangan</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
        <Navbar.Collapse id="basic-navbar-nav"> 
          
          <Nav className="me-auto"> 
            <Nav.Link as={NavLink} to="/" onClick={closeDropdown}>Home</Nav.Link> 
            <Nav.Link as={NavLink} to="/transaksi" onClick={closeDropdown}>Transaksi</Nav.Link>
            
            {/* DROPDOWN DENGAN KONTROL STATE REACT */}
            <div className={`nav-item dropdown ${isOpen ? 'show' : ''}`}>
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="navbarDropdown" 
                role="button" 
                onClick={toggleDropdown} // Mengatur klik untuk buka/tutup
                style={{ color: 'rgba(255,255,255,0.85)', cursor: 'pointer' }}
              >
                Dropdown
              </a>
              
              {/* Menu hanya akan mendapat class 'show' jika state isOpen bernilai true */}
              <ul 
                className={`dropdown-menu ${isOpen ? 'show' : ''}`} 
                aria-labelledby="navbarDropdown" 
                style={{ position: 'absolute', zIndex: 1000 }}
              >
                <li><NavLink className="dropdown-item" to="/badge" onClick={closeDropdown}>Badge</NavLink></li>
                <li><NavLink className="dropdown-item" to="/card-status" onClick={closeDropdown}>CardStatusDemo</NavLink></li>
                <li><NavLink className="dropdown-item" to="/header-banner" onClick={closeDropdown}>HeaderBanner</NavLink></li>
                <li><NavLink className="dropdown-item" to="/transaction-manager" onClick={closeDropdown}>TransactionManager</NavLink></li>
                <li><hr className="dropdown-divider" /></li>
                <li><NavLink className="dropdown-item" to="/kartu-ringkasan" onClick={closeDropdown}>KartuRingkasan</NavLink></li>
                <li><NavLink className="dropdown-item" to="/layout-grid" onClick={closeDropdown}>LayoutGrid</NavLink></li>
                <li><NavLink className="dropdown-item" to="/wallet-summary" onClick={closeDropdown}>WalletSummary</NavLink></li>
                <li><hr className="dropdown-divider" /></li>
                <li><NavLink className="dropdown-item" to="/daftar-tugas-function" onClick={closeDropdown}>DaftarTugasFunction</NavLink></li>
                <li><NavLink className="dropdown-item" to="/post-list-axios" onClick={closeDropdown}>PostListAxios</NavLink></li>
              </ul>
            </div>

          </Nav> 
        </Navbar.Collapse> 
      </Container> 
    </Navbar> 
  );
}

function App() {
  return (
    <div className="app-container">
      <LocalNavigation />
      
      <Routes>
        <Route path='/transaksi' element={<TransaksiItem />} />
        <Route path='/badge' element={<Badge />} />
        <Route path='/card-status' element={<CardStatusDemo />} />
        <Route path='/header-banner' element={<HeaderBanner />} />
        <Route path='/transaction-manager' element={<TransactionManager />} />
        <Route path='/kartu-ringkasan' element={<KartuRingkasan />} />
        <Route path='/layout-grid' element={<LayoutGrid />} />
        <Route path='/wallet-summary' element={<WalletSummary />} />
        <Route path='/daftar-tugas-function' element={<DaftarTugasFunction />} />
        <Route path='/post-list-axios' element={<PostListAxios />} />
      </Routes>
    </div>
  );
}

export default App;
