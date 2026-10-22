// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Impor CSS Bootstrap
import './App.css';
import { Route, Routes } from 'react-router-dom';
import TransaksiItem from './component/TransaksiItem';
import KartuRingkasan from './component/KartuRingkasan';
import Badge from './component/Badge';
import WalletSummary from './component/WalletSummary';

export default function App() {
  return (
    <Routes>
      <Route path="/transaksi" element={<TransaksiItem />} />
      <Route path="/kartu" element={<KartuRingkasan />} />
      <Route path="/badge" element={<Badge />} />
      <Route path="/wallet" element={<WalletSummary />} />
    </Routes>
  );
}