import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import AppNavigation from './component/AppNavigation';
import Badge from './component/Badge';
import CardStatusDemo from './component/CardStatusDemo';
import HeaderBanner from './component/HeaderBanner';
import KartuRingkasan from './component/KartuRingkasan';
import LayoutGrid from './component/LayoutGrid';
import TransactionManager from './component/TransactionManager';
import TransaksiItem from './component/TransaksiItem';
import WalletSummary from './component/WalletSummary';
import PostListAxios from './component/PostListAxios';



function App() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== '/AppNavigation' && (
        <AppNavigation />
      )}
      <Routes>
        <Route path='/' element={ <HeaderBanner/> } />
        <Route path='/transaksi' element={ <TransaksiItem />} />
        <Route path='/kartu' element={ <KartuRingkasan />} />
        <Route path='/badge' element={ <Badge />} />
        <Route path='/wallet' element={ <WalletSummary />} />
        <Route path='/LayoutGrid' element={ <LayoutGrid/>  } />
        <Route path='/HeaderBanner' element={ <HeaderBanner/>  } />
        <Route path='/CardStatusDemo' element={ <CardStatusDemo/> } />
        <Route path='/AppNavigation' element={ <AppNavigation/> } />
        <Route path='/TransactionManager' element={ <TransactionManager/> } />
        <Route path='/postlistaxios' element={ <PostListAxios/> } />
      </Routes>
    </>
  );
}

export default App;
