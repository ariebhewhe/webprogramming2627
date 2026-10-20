import './App.css'
import TransaksiItem from './component/TransaksiItem'
import KartuRingkasan from './component/KartuRingkasan'
import WalletSummary from './component/WalletSummary'
import { Badge } from 'react-bootstrap'
// coba


function App() {
  return (
    <>
      
      {/* buat Routes */}
  
          {/* Tempat untuk komponen  */}
          <TransaksiItem />
          <KartuRingkasan />
          <Badge />
          <WalletSummary />
          
    
     

      
    </>
  )
}

export default App
