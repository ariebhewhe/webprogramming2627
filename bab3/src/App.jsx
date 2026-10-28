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
import PostListAxios from './component/PostListAxios'
import PostListFetch from './component/PostListFetch'


function App() {
  return (
    <>
      <AppNavigation />
      <Routes>
        <Route path='/transaksi' element={ <TransaksiItem />} />
        <Route path='/kartu' element={ <KartuRingkasan />} />
        <Route path='/badge' element={
          <main>
            <Badge tipe="Pemasukan">+ Rp 50.000</Badge>
            <Badge tipe="Pengeluaran">- Rp 20.000</Badge>
            <Badge tipe="Pemasukan">+ Rp 150.000</Badge>
            <Badge tipe="Pengeluaran">- Rp 35.000</Badge>
          </main>
        } />
        <Route path='/wallet' element={ <WalletSummary />} />
        <Route path='/layoutgrid' element={ <LayoutGrid/>  } />
        <Route path='/headerbanner' element={ <HeaderBanner/>  } />
        <Route path='/cardstatusdemo' element={ <CardStatusDemo/> } />
        <Route path='/appnavigation' element={ <AppNavigation/> } />
        <Route path='/transactionmanager' element={ <TransactionManager/> } />
        <Route path='/karturingkasan' element={ <KartuRingkasan/> } />
        <Route path='/walletsummary' element={ <WalletSummary/> } />
        <Route path='/axios' element={ <PostListAxios /> } />
        <Route path='/fetch' element={ <PostListFetch /> } />
      </Routes>
    </>
  )
}
export default App;

// import './App.css'
// import { Route, Routes } from 'react-router-dom'
// import TransaksiItem from './component/TransaksiItem'
// import KartuRingkasan from './component/KartuRingkasan'
// import Badge from './component/Badge'
// import WalletSummary from './component/WalletSummary'
// import CardStatusDemo from './component/CardStatusDemo'
// import AppNavigation from './component/AppNavigation'
// import TransactionManager from './component/TransactionManager'



// function App() {
//   return (
//     <>
//       <AppNavigation />
//       <Routes>
//         <Route path='/transaksi' element={ <TransaksiItem />} />
//         <Route path='/kartu' element={ <KartuRingkasan />} />
//         <Route path='/badge' element={ <Badge />} />
//         <Route path='/wallet' element={ <WalletSummary />} />
//         <Route path='/LayoutGrid' element={ <LayoutGrid/>  } />
//         <Route path='/HeaderBanner' element={ <HeaderBanner/>  } />
//         <Route path='/CardStatusDemo' element={ <CardStatusDemo/> } />
//         <Route path='/AppNavigation' element={ <AppNavigation/> } />
//         <Route path='/TransactionManager' element={ <TransactionManager/> } />
//       </Routes>
//     </>
//   )
// }
// export default App;