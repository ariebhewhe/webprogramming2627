import './App.css'


import TransaksiItem from './component/TransaksiItem'
import KartuRingkasan from './component/KartuRingkasan'
import WalletSummary from './component/WalletSummary'
import Badge from './component/Badge'

function App() {
  return (
    <>
      {/* buat Routes */}
  
          {/* Tempat untuk komponen  */}
          {/* Route transaksiItem */}
          <TransaksiItem />
          {/* Route KartuRingaksan */}
          <KartuRingkasan />
          {/* Route Badge */}
          <Badge tipe="Pemasukan">+ Rp 50.000</Badge>
          {/* Route WalletSummary */}
          <WalletSummary />
    
          
    
     

      
    </>
  )
}

export default App
