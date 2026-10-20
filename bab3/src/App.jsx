import "./App.css";

import TransaksiItem from './component/TransaksiItem' 
import KartuRingkasan from './component/KartuRingkasan'
import { Badge } from 'react-bootstrap'
import WalletSummary from './component/WalletSummary'
// import transaksi Item
// import kartu Ringkasan
// import badge
// WalletSummary

function App() {
  return (
    <>
      {/* buat Routes */}
  
          {/* Tempat untuk komponen  */}
          <TransaksiItem/>
          <KartuRingkasan/>
          <Badge/>
          <WalletSummary/>
          
    
     

      {/* Tempat untuk komponen  */}
      {/* Route transaksiItem */}
      {/* Route KartuRingaksan */}
      {/* Route Badge */}
      {/* Route WalletSummary */}
    </>
  );
}

export default App;
