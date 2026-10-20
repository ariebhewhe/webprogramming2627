import "./App.css";
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import TransaksiItem from './component/TransaksiItem'
import KartuRingkasan from './component/KartuRingkasan'
import Badge from './component/Badge'
import WalletSummary from './component/WalletSummary'

// import transaksi Item
// import kartu Ringkasan
function App() {
  return (
    <>
      {/* buat Routes */}

      {/* Tempat untuk komponen  */}
      {/* Route transaksiItem */}
      {/* Route KartuRingaksan */}
      {/* Route Badge */}
      {/* Route WalletSummary */}
      <Routes>
        <Route path='/transaksi' element={ <TransaksiItem />} />
        <Route path='/kartu' element={ <KartuRingkasan />} />
        <Route path='/badge' element={ <Badge />} />
        <Route path='/wallet' element={ <WalletSummary />} />
      </Routes>
    </>
  );
}

export default App;