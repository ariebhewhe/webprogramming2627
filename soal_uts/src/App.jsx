import './assets/style.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import SideBar from './components/layout/SideBar';
import Footer from './components/layout/Footer';
// lakukan commit "selesai TODO 1" dan push 

import Beranda from './pages/Beranda';
import Berita from './pages/Berita';
import Profil from './pages/Profil';
import Pendidikan from './pages/Pendidikan';
import Riset from './pages/Riset';
import Mahasiswa from './pages/Mahasiswa';
import Lainlain from './pages/LainLain';
import NotFound from './pages/NotFound';
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
            <Route path="/pendidikan" element={<Pendidikan />} />
            <Route path="/riset" element={<Riset />} />
            <Route path="/mahasiswa" element={<Mahasiswa />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/lainnya" element={<Lainlain />} />
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