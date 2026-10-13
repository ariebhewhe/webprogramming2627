import './assets/style.css';
import { Routes, Route } from 'react-router-dom';

// TODO 1  Import Komponen Layout (Header, SideBar, Footer)
import Header from './components/layout/Header.jsx';
import SideBar from './components/layout/SideBar.jsx';
import Footer from './components/layout/Footer.jsx';

// TODO 2  komponen Pages (Beranda, Profil, dll)
import Beranda from './pages/Beranda.jsx';
import Profil from './pages/Profil.jsx';
import LainLain from './pages/LainLain.jsx';
import Mahasiswa from './pages/Mahasiswa.jsx';
import Pendidikan from './pages/Pendidikan.jsx';
import Riset from './pages/Riset.jsx';

function App() {
  return (
    <div className="container">
      <Header />

      <div className="main-wrapper">
        <main className="content-area">
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/pendidikan" element={<Pendidikan />} />
            <Route path="/mahasiswa" element={<Mahasiswa />} />
            <Route path="/riset" element={<Riset />} />
            <Route path="/lain-lain" element={<LainLain />} />
          </Routes>
        </main>

        <SideBar />
      </div>

      <Footer />
    </div>
  );
}

export default App;