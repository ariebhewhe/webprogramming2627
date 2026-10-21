import './App.css'
import './styles/style.css'
import { Route, Routes } from 'react-router-dom'
import TransaksiItem from './component/TransaksiItem'
import KartuRingkasan from './component/KartuRingkasan'
import Badge from './component/Badge'
import WalletSummary from './component/WalletSummary'
import AppNavigation from './component/AppNavigation'
import HeaderBanner from './component/HeaderBanner'
import LayoutGrid from './component/LayoutGrid'
import CardStatusDemo from './component/CardStatusDemo'
import TransactionManager from './component/TransactionManager'


function App() {
  return (
    <>
      <AppNavigation />
      <Routes>
        <Route path='/' element={<div />} />
        <Route path='/transaksi' element={ <TransaksiItem />} />
        <Route path='/kartu' element={ <KartuRingkasan />} />
        <Route path='/badge' element={ <Badge />} />
        <Route path='/wallet' element={ <WalletSummary />} />
        <Route path='/karturingkasan' element={<KartuRingkasan />} />
        <Route path='/walletsummary' element={<WalletSummary />} />
        <Route path='/laporan' element={<CardStatusDemo />} />
        <Route path='/cardstatusdemo' element={<CardStatusDemo />} />
        <Route path='/banner' element={<HeaderBanner />} />
        <Route path='/headerbanner' element={<HeaderBanner />} />
        <Route path='/kelola' element={<TransactionManager />} />
        <Route path='/LayoutGrid' element={ <LayoutGrid/> } />
        <Route path='/layoutgrid' element={<LayoutGrid />} />
        <Route path='/layout' element={<LayoutGrid />} />
        <Route path='/transactionmanager' element={<TransactionManager />} />
      </Routes>
    </>
  )
}

export default App
