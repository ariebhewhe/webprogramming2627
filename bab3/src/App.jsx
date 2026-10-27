import "./App.css";
// import transaksi Item
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react'
// import transaksi Item 
import TransaksiItem from './component/TransaksiItem';
// import kartu Ringkasan
import KartuRingkasan from './component/KartuRingkasan';
// import badge
import Badge from './component/Badge';
// WalletSummary
import WalletSummary from './component/WalletSummary';
import LayoutGrid from './component/LayoutGrid';
import HeaderBanner from './component/HeaderBanner';
import CardStatusDemo from './component/CardStatusDemo';
import AppNavigation from './component/AppNavigation';
import TransactionManager from './component/TransactionManager';


function App() {
  return (
    <>
      {/* buat Routes */}
      <AppNavigation />
      <Routes>
          {/* Tambahkan Route Utama agar halaman tidak putih polos */}
          <Route path='/' element={ <KartuRingkasan />} />

      {/* Tempat untuk komponen  */}
      {/* Route transaksiItem */}
      {/* Route KartuRingaksan */}
      {/* Route Badge */}
      {/* Route WalletSummary */}
          {/* Tempat untuk komponen  */}
          {/* Route transaksiItem */}
          <Route path='/transaksi' element={ <TransaksiItem />} />
          {/* Route KartuRingaksan */}
          <Route path='/kartu' element={ <KartuRingkasan />} />
          {/* Route Badge */}
          <Route path='/badge' element={ <Badge />} />
          {/* Route WalletSummary */}
          <Route path='/wallet' element={ <WalletSummary />} />
          
          <Route path='/LayoutGrid' element={ <LayoutGrid/>  } />
          <Route path='/HeaderBanner' element={ <HeaderBanner/>  } />
          <Route path='/CardStatusDemo' element={ <CardStatusDemo/> } />
          <Route path='/AppNavigation' element={ <AppNavigation/> } />
          <Route path='/TransactionManager' element={ <TransactionManager/> } />
        </Routes>
    </>
  );
}
export default App;