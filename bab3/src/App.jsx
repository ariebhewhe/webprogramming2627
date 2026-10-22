// import './App.css'
// import TransaksiItem from './component/TransaksiItem';
// import KartuRingkasan from './component/KartuRingkasan';
// import { Badge } from 'react-bootstrap';
// import WalletSummary from './component/WalletSummary';
// import { Routes, Route } from 'react-router-dom';

// // import transaksi Item
// // import kartu Ringkasan
// // import badge
// // WalletSummary

// function App() {
//   return (
//     <>
//       <div className="container">
//         <div className="main-wrapper">
//           <main className="content-area">
//             <Routes>
//               <Route path="transaksiItem" element={<TransaksiItem />} />
//               <Route path="kartuRingkasan" element={<KartuRingkasan />} />
//               <Route path="badge" element={<Badge />} />
//               <Route path="walletSummary" element={<WalletSummary />} />
//             </Routes>
//           </main>
//         </div>
//       </div>

//       {/* buat Routes */}

//       {/* Tempat untuk komponen  */}
//       {/* Route transaksiItem */}
//       {/* Route KartuRingaksan */}
//       {/* Route Badge */}
//       {/* Route WalletSummary */}
//     </>
//   );
// }

// export default App;


import React from 'react';
// Mengimpor CSS global
import './App.css'; 
import { Route, Routes } from 'react-router-dom';
import Badge from './component/Badge';
// Mengimpor komponen-komponen pendukung yang ada di proyekmu
import AppNavigation from './component/AppNavigation';
import HeaderBanner from './component/HeaderBanner';
import KartuRingkasan from './component/KartuRingkasan';
import WalletSummary from './component/WalletSummary';
import CardStatusDemo from './component/CardStatusDemo';
import TransactionManager from './component/TransactionManager';
import FormTambahTransaksi from './component/FormTambahTransaksi';
import LayoutGrid from './component/LayoutGrid';


function App() {
  return (
    <div className="app-container">
      {/* Menu Navigasi Utama */}
      <AppNavigation />
      
      {/* Banner Bagian Atas */}
      <HeaderBanner />
      
      {/* Mengatur tampilan menggunakan Grid agar rapi */}
      <LayoutGrid>
        {/* Ringkasan Akun / Dompet */}
        <WalletSummary />
        <KartuRingkasan />
        
        {/* Fitur Utama: Manajemen dan Tambah Transaksi */}
        <TransactionManager />
        <FormTambahTransaksi />
        
        {/* Komponen Demo atau Tambahan */}
        <CardStatusDemo />
      </LayoutGrid>

      <Routes>
        <Route path='/transaksi' element={ <TransaksiItem />} />
        <Route path='/kartu' element={ <KartuRingkasan />} />
        <Route path='/badge' element={ <Badge />} />
        <Route path='/wallet' element={ <WalletSummary />} />
        <Route path='/LayoutGrid' element={ <LayoutGrid/>  } />
        <Route path='/HeaderBanner' element={ <HeaderBanner/>  } />
        <Route path='/CardStatusDemo' element={ <CardStatusDemo/> } />
        <Route path='/AppNavigation' element={ <AppNavigation/> } />
        <Route path='/TransactionManager' element={ <TransactionManager/> } />
      </Routes>
    </div>
  );
}

export default App;


