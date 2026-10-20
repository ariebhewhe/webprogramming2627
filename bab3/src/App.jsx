import './App.css'

import TransaksiItem from './component/TransaksiItem' 
import KartuRingkasan from './component/KartuRingkasan'
import { Badge } from 'react-bootstrap'
import WalletSummary from './component/WalletSummary'


function App() {
  return (
    <>
      {/* buat Routes */}
  
          {/* Tempat untuk komponen  */}
          <TransaksiItem/>
          <KartuRingkasan/>
          <Badge/>
          <WalletSummary/>
          
    
     

      
    </>
  )
}

export default App
