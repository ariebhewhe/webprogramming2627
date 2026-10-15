import './assets/style.css';
import { Routes, Route } from 'react-router-dom';

// TODO 1  Import Komponen Layout (Header, SideBar, Footer)
import Header from './components/layout/Header';
import SideBar from './components/layout/SideBar';
import Footer from './components/layout/Footer';

// lakukan commit "selesai TODO 1" dan push 

// TODO 2  komponen Pages (Beranda, Profil, dll)
import Beranda from './pages/Beranda';
import Berita from './pages/Berita';
import LainLain from './pages/LainLain';
import Mahasiswa from './pages/Mahasiswa';
import Pendidikan from './pages/Pendidikan';
import Profil from './pages/Profil';
import Riset from './pages/Riset';
import NotFound from './pages/NotFound';
import Array from "./pages/Array";
// lakukan commit "selesai TODO 2" dan push 

function App() {
  return (
    
    <div className="container">
      {/* TODO 3 Header */}
      <Header />
      <div className="main-wrapper">
        <main className="content-area">
          {/* TODO 6 Routes 
          <Routes>
            <Route path="/" element={<Beranda />} />
          </Routes>
          */}
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/lain-lain" element={<LainLain />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/pendidikan" element={<Pendidikan />} />
            <Route path="/riset" element={<Riset />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/array" element={<Array />} /> 
            <Route path="/mahasiswa" element={<Mahasiswa />} />
          </Routes>
        </main>
         {/* TODO 4 SideBar */}
         <SideBar />
      </div>
      {/* TODO 5 Footer */}
      <Footer />
    </div>
  );
}

export default App;

// TODO 7 lakukan commit dengan nama "selesai TODO 7" dan push 