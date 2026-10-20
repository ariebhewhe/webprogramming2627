import './App.css'

// import transaksi Item
import TransaksiItem from './component/TransaksiItem';
import KartuRingkasan from './component/KartuRingkasan';
import Badge from './component/Badge';
import WalletSummary from './component/WalletSummary';
import LayoutGrid from './component/LayoutGrid';
// import kartu Ringkasan
// import badge
// WalletSummary


function App() {
  return (
    <>
      {/* buat Routes */}
  
          {/* Tempat untuk komponen  */}
          {/* Route transaksiItem */}
          <TransaksiItem />
          <WalletSummary />
          <LayoutGrid />
          {/* Route KartuRingaksan */}
          {/* Route Badge */}
          {/* Route WalletSummary */}
          
    
     

      
    </>
  )
}

export default App
