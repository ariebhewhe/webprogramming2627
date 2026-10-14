import './assets/style.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header.jsx';
import SideBar from './components/layout/SideBar.jsx';
import Footer from './components/layout/Footer.jsx';
import Beranda from './pages/Beranda.jsx';
import Profil from './pages/Profil.jsx';
import Mahasiswa from './pages/Mahasiswa.jsx';
import LainLain from './pages/LainLain.jsx';
import Pendidikan from './pages/Pendidikan.jsx';
import Riset from './pages/Riset.jsx';
import Berita from './pages/Berita.jsx';
import NotFound from './pages/NotFound.jsx'; 
// TODO 1  Import Komponen Layout (Header, SideBar, Footer)
// lakukan commit "selesai TODO 1" dan push 

// TODO 2  komponen Pages (Beranda, Profil, dll)
// lakukan commit "selesai TODO 2" dan push 

function App() {
  return (
    
    <div className="container">
      <Header />
      <div className="main-wrapper">
        <main className="content-area">
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/mahasiswa" element={<Mahasiswa />} />
            <Route path="/lain-lain" element={<LainLain />} />
            <Route path="/pendidikan" element={<Pendidikan />} />
            <Route path="/riset" element={<Riset />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="*" element={<NotFound />} />
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
// Commit ulang TODO 7
// test commit
// test commit 6