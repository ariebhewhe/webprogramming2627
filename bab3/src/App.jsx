import './App.css'
import { Route, Routes } from 'react-router-dom'
import TransaksiItem from './component/TransaksiItem'
import KartuRingkasan from './component/KartuRingkasan'
import Badge from './component/Badge'
import WalletSummary from './component/WalletSummary'
import CardStatusDemo from './component/CardStatusDemo'
import AppNavigation from './component/AppNavigation'
import TransactionManager from './component/TransactionManager'
import LayoutGrid from './component/LayoutGrid'
import HeaderBanner from './component/HeaderBanner'
import DaftarTugasFunction from './component/DaftarTugasFunction'
import PostListAxios from './component/PostListAxios'
import DaftarTransaksi from './component/DaftarTransaksi'
import TabelTransaksiDinamis from './component/TransaksiDinamis'
import FormTambahTransaksiPost from './component/FormTambahTransaksiPost'
import FormEditTransaksi from './component/FormEditTransaksi'
import TombolHapusDenganModal from './component/TombolHapusDenganModal'
// import transaksi Item 
// import kartu Ringkasan
// import badge
// WalletSummary


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
        <Route path='/AppNavigation' element={ <AppNavigation/> } />
        <Route path='/TransactionManager' element={ <TransactionManager/> } />
        <Route path='/daftarTugas' element={ <DaftarTugasFunction/> } />
        <Route path='/listAxios' element={ <PostListAxios/> } />
        <Route path='/daftarTransaksi' element={ <DaftarTransaksi/> } />
        <Route path='/tabelTransaksiDinamis' element={ <TabelTransaksiDinamis/> } />
        <Route path='/formTambahTransaksiPost' element={ <FormTambahTransaksiPost/> } />
        <Route path='/formEditTransaksi' element={ <FormEditTransaksi/> } />
        <Route path='/tombolHapusDenganModal' element={ <TombolHapusDenganModal/> } />
      </Routes>
    </>
  )
}
export default App;