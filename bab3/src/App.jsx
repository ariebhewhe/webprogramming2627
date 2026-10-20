import './App.css'
import { Route, Routes } from 'react-router-dom';
import TransaksiItem from './component/TransaksiItem.jsx';
import KartuRingkasan from './component/KartuRingkasan.jsx';
import Badge from './component/Badge.jsx';
import WalletSummary from './component/WalletSummary.jsx';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <TransaksiItem />
            <KartuRingkasan />
            <Badge tipe="Pemasukan">+ Rp 50.000</Badge>
            <WalletSummary />
          </>
        }
      />
      <Route path="/transaksi-item" element={<TransaksiItem />} />
      <Route path="/kartu-ringkasan" element={<KartuRingkasan />} />
      <Route
        path="/badge"
        element={<Badge tipe="Pemasukan">+ Rp 50.000</Badge>}
      />
      <Route path="/wallet-summary" element={<WalletSummary />} />
    </Routes>
  )
}

export default App

//done