import { Route, Routes } from 'react-router-dom';
import './App.css';
import KartuRingkasan from './component/KartuRingkasan';
import TransaksiItem from './component/TransaksiItem';
import WalletSummary from './component/WalletSummary';
import Badge from './component/Badge';
import LayoutGrid from './component/LayoutGrid';
import AppNavigation from './component/AppNavigation';
import HeaderBanner from './component/HeaderBanner';
import CardStatusDemo from './component/CardStatusDemo';
import TransactionManager from './component/TransactionManager';

function App() {
  return (
    <>
      <AppNavigation />
      <Routes>
        <Route path='/transaksi' element={ <TransaksiItem />} />
        <Route path='/kartu' element={ <KartuRingkasan />} />
        <Route path='/badge' element={ <Badge />} />
        <Route path='/wallet' element={ <WalletSummary />} />
        <Route path='/LayoutGrid' element={ <LayoutGrid/>  } />
        <Route path='/HeaderBanner' element={ <HeaderBanner/>  } />
        <Route path='/CardStatusDemo' element={ <CardStatusDemo/> } />
        <Route path='/TransactionManager' element={ <TransactionManager/> } />
        <Route path='/AppNavigation' element={ <AppNavigation/> } />
      </Routes>
    </>
  )
}
export default App