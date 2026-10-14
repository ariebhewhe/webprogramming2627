import './assets/style.css';
import { Routes, Route } from 'react-router-dom';

// TODO 1  Import Komponen Layout (Header, SideBar, Footer)

import Header from './components/layout/Header.jsx'
import SideBar from './components/layout/SideBar.jsx'
import Footer from './components/layout/Footer.jsx'

// lakukan commit "selesai TODO 1" dan push

// TODO 2  komponen Pages (Beranda, Profil, dll)

import Beranda from './pages/Beranda.jsx'
import LainLain from './pages/LainLain.jsx'
import Mahasiswa from './pages/Mahasiswa.jsx'
import Pendidikan from './pages/Pendidikan.jsx'
import Profil from './pages/Profil.jsx'
import Riset from './pages/Riset.jsx'
import Berita from './pages/Berita.jsx';
import NotFound from './pages/NotFound.jsx'
import Array from './pages/Array.jsx'

// lakukan commit "selesai TODO 2" dan push 
// TODO 3, 4, 5 terkait tag Header, SideBar, Footer sudah dihapus
// TODO 6 terkait Routes sudah dihapus

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
            <Route path="/riset" element={<Riset />} />
            <Route path="/mahasiswa" element={<Mahasiswa />} />
            <Route path="/lainlain" element={<LainLain />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/array" element={<Array />} />
          </Routes>
        </main>
         <SideBar />
      </div>
      <Footer />
    </div>
  );
}

export default App;

// TODO 7 lakukan commit dengan nama "selesai TODO 7" dan push 