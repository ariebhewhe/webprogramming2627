import './App.css'

import { Route, Routes } from 'react-router-dom'

import TransaksiItem from './component/TransaksiItem'
import Badge from './component/Badge'
import CardStatusDemo from './component/CardStatusDemo'
import HeaderBanner from './component/HeaderBanner'
import TransactionManager from './component/TransactionManager'
import KartuRingkasan from './component/KartuRingkasan'
import WalletSummary from './component/WalletSummary'
import LayoutGrid from './component/LayoutGrid'
import AppNavigation from './component/AppNavigation'

import DaftarTugas from './component/DaftarTugas'
import PostListFetch from './component/PostListFetch'
import PostListAxios from './component/PostListAxios'

function App() {
  return (
    <>
      <AppNavigation />

      <Routes>
        <Route path='/' element={
          <div>
            <h2>Daftar Tugas</h2>
            <DaftarTugas />
            <h2>PostListFetch</h2>
            <PostListFetch />
            <h2>PostListAxios</h2>
            <PostListAxios />
          </div>
        } />
        <Route path='/transaksi' element={ <TransaksiItem />} />
        <Route path='/kartu' element={ <KartuRingkasan />} />
        <Route path='/badge' element={ <Badge />} />
        <Route path='/wallet' element={ <WalletSummary />} />

        <Route path='/AppNavigation' element={ <AppNavigation/> } />
        <Route path='/CardStatusDemo' element={ <CardStatusDemo/> } />
        <Route path='/HeaderBanner' element={ <HeaderBanner/>  } />
        <Route path='/TransactionManager' element={ <TransactionManager/> } />
        <Route path='/KartuRingkasan' element={ <KartuRingkasan/> } />
        <Route path='/LayoutGrid' element={ <LayoutGrid/>  } />
        <Route path='/WalletSummary' element={ <WalletSummary/> } />
      </Routes>
    </>
  );
}
export default App;