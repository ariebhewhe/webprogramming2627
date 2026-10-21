// Mengimpor CSS global
import './App.css';

import { Route, Routes } from 'react-router-dom';

// Mengimpor komponen-komponen pendukung yang ada di proyekmu
import AppNavigation from './component/AppNavigation';
import Badge from './component/Badge';
import CardStatusDemo from './component/CardStatusDemo';
import HeaderBanner from './component/HeaderBanner';
import KartuRingkasan from './component/KartuRingkasan';
import LayoutGrid from './component/LayoutGrid';
import TransactionManager from './component/TransactionManager';
import TransaksiItem from './component/TransaksiItem';
import WalletSummary from './component/WalletSummary';

function App() {
  return (
    <>
      <AppNavigation />
      <main>
        <Routes>
          <Route path="/" element={null} />
          <Route path="/transaksi" element={<TransaksiItem />} />
          <Route
            path="/badge"
            element={<Badge tipe="Pemasukan">Pemasukan</Badge>}
          />
          <Route path="/card-status-demo" element={<CardStatusDemo />} />
          <Route path="/header-banner" element={<HeaderBanner />} />
          <Route
            path="/transaction-manager"
            element={<TransactionManager />}
          />
          <Route path="/kartu" element={<KartuRingkasan />} />
          <Route path="/layout-grid" element={<LayoutGrid />} />
          <Route path="/wallet" element={<WalletSummary />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
