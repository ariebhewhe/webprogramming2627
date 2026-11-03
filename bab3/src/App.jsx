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
import DaftarTugas from './component/DaftarTugas';
import DaftarTugasFunction from './component/DaftarTugasFunction';
import FormTambahTransaksi from './component/FormTambahTransaksi';
import PostListFetch from './component/PostListFetch';
import PostListAxios from './component/PostListAxios';

function App() {
  return (
    <>
      <AppNavigation />
      <Routes>
        <Route path='/transaksi' element={ <TransaksiItem />} />
        <Route path='/kartu' element={ <KartuRingkasan />} />
        {/* <Route path='/badge' element={ <Badge />} /> */}
        <Route path='/badge' element={
          <main>
            <Badge tipe="Pemasukan">+ Rp 50.000</Badge>
            <Badge tipe="Pengeluaran">- Rp 50.000</Badge>
          </main>
        } />
        <Route path='/wallet' element={ <WalletSummary />} />
        <Route path='/LayoutGrid' element={ <LayoutGrid/>  } />
        <Route path='/HeaderBanner' element={ <HeaderBanner/>  } />
        <Route path='/CardStatusDemo' element={ <CardStatusDemo/> } />
        <Route path='/TransactionManager' element={ <TransactionManager/> } />
        <Route path='/AppNavigation' element={ <AppNavigation/> } />
        <Route path='/DaftarTugas' element={<DaftarTugas />} />
        <Route path='/DaftarTugasFunction' element={<DaftarTugasFunction />}/>
        <Route path='/FormTambahTransaksi' element={<FormTambahTransaksi />}/>
        <Route path='/PostListFetch' element={<PostListFetch />} />
        <Route path='/PostListAxios' element={<PostListAxios />} />
      </Routes>
    </>
  )
}
export default App