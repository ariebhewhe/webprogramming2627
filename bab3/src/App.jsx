
import './App.css'
import TransaksiItem from './component/TransaksiItem'
import KartuRingkasan from './component/KartuRingkasan'
import WalletSummary from './component/WalletSummary'
<<<<<<< HEAD
import Badge from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
      
      <Routes>
        <Route path='/transaksi' element={ <TransaksiItem />} />
        <Route path='/kartu' element={ <KartuRingkasan />} />
        <Route path='/badge' element={ <Badge />} />
        <Route path='/wallet' element={ <WalletSummary />} />
      </Routes>      
    </>
  )
}

export default App
=======
import { Badge } from 'react-bootstrap'
// coba
>>>>>>> bb26fa10833293c1bfbd6a868b9d4f3adeb22071
