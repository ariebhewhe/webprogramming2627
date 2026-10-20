import './App.css';
import TransaksiItem from './component/TransaksiItem';
import KartuRingkasan from './component/KartuRingkasan';
import WalletSummary from './component/WalletSummary';
import Badge from './component/Badge';
// import KartuRingkasan from './component/KartuRingkasan';
// import Badge from './component/Badge';
// import WalletSummary from './component/WalletSummary';

function App() {
  return (
    <>
      <TransaksiItem />
      <KartuRingkasan />
      <WalletSummary />
      <Badge />

    </>
  );
}

export default App;
